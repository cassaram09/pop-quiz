import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'utils/enzyme';

import Notification from './notification';

describe('Notification', () => {
  it('renders without crashing', () => {
    const notification = shallow(<Notification />);
  
    expect(notification).toMatchSnapshot();
  });

  it('can handle null props', () => {
    const notification = mount(<Notification />);
    
    expect(notification.props().message).toEqual('');
    expect(notification.props().accept).toEqual({});
    expect(notification.props().cancel).toEqual({});
  });

  it('renders a message', () => {
    const notification = shallow(<Notification message={"Reveal answer?"} />);
    const message = notification.find('.notification__message'); 
    
    expect(message.text()).toBe('Reveal answer?');
  });

  it('calls the accept function prop when accepting the notification', () => {
    console.log = jest.fn();

    const notification = shallow(<Notification accept={{ text: 'Accept', fn: () => console.log('accepted!') }} />);

    notification.find('.notification__accept').simulate('click');
    
    expect(console.log.mock.calls[0][0]).toBe('accepted!')
  });

  it('calls the cancel function prop when cancelling the notification', () => {
    console.log = jest.fn();

    const notification = shallow(<Notification cancel={{ text: 'Cancel', fn: () => console.log('cancelled!') }} />);

    notification.find('.notification__cancel').simulate('click');
    
    expect(console.log.mock.calls[0][0]).toBe('cancelled!')
  });

  it('calls the cancel function prop when deleting the notification', () => {
    console.log = jest.fn();

    const notification = shallow(<Notification cancel={{ text: 'Cancel', fn: () => console.log('deleted!') }} />);

    notification.find('.notification__delete').simulate('click');
    
    expect(console.log.mock.calls[0][0]).toBe('deleted!')
  });
});
