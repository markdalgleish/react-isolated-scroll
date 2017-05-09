import IsolatedScroll from './index'
import renderer from 'react-test-renderer';
import React from 'react'

jest.mock('isolated-scroll')

describe('IsolatedScroll', () => {
  const mockedIsolatedScroll = require('isolated-scroll')
  beforeEach(() => {
    mockedIsolatedScroll.mockReset()
  })
  it('should be a React Component', () => {
    expect(IsolatedScroll).toBeInstanceOf(Function)
  })
  it('should mount isolatedScroll binding', () => {
    renderer.create(<IsolatedScroll />)
    expect(mockedIsolatedScroll).toHaveBeenCalledTimes(1)
  })
  it('should unmount isolatedScroll binding', () => {
    const mockedUnbindHandlersKey = jest.fn()
    mockedIsolatedScroll.mockImplementation(() => mockedUnbindHandlersKey)
    const instance = renderer.create(<IsolatedScroll />)
    instance.unmount()
    expect(mockedUnbindHandlersKey).toHaveBeenCalledTimes(1)
  })
  it('should render', () => {
    const tree = renderer.create(
      <IsolatedScroll />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('should pass through children', () => {
    const tree = renderer.create(
      <IsolatedScroll>exampleChildTextNode</IsolatedScroll>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('should pass through attributes', () => {
    const tree = renderer.create(
      <IsolatedScroll data-example-attribute="exampleValue" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })

})
