import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isolatedScroll from 'isolated-scroll';

const unbindHandlersKey = '__unbind_handlers__';

export default class IsolatedScroll extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  constructor() {
    super();

    this.storeComponentReference = this.storeComponentReference.bind(this);
  }

  componentDidMount() {
    this[unbindHandlersKey] = isolatedScroll(this.component);
  }

  componentWillUnmount() {
    this[unbindHandlersKey]();
  }

  storeComponentReference(component) {
    if (component !== null) {
      this.component = component;
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div ref={this.storeComponentReference} {...this.props}>
        { children }
      </div>
    );
  }

}
