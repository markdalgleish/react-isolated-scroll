import React, { Component, PropTypes, cloneElement, Children } from 'react';
import isolatedScroll from 'isolated-scroll';

const unbindHandlersKey = '__unbind_handlers__';

export default class IsolatedScroll extends Component {

  static propTypes = {
    children: PropTypes.node
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

    return cloneElement(Children.only(children), {
      ref: this.storeComponentReference
    });
  }

}
