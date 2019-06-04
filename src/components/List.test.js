import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List', () => {
  it('renders without crashing', () => {
    const component = shallow(<List />);
    expect(component.exists()).toBe(true);
  });

  it('should component update state onClick', () => {
    const component = shallow(<List />);
    component.find('button.toggle-btn').simulate('click');
    expect(component.state('showForm')).toBe(true);
  });

  it('should change input value', () => {
    const component = shallow(<List />);
    component.find('button.toggle-btn').simulate('click');
    expect(component.find('input.inputForm').props().value).toBe('');
    component.find('input.inputForm').simulate('change', { target: { value: 'test' } });
    expect(component.find('input.inputForm').props().value).toBe('test');
  });

});
