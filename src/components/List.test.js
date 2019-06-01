import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List', () => {
  it('renders without crashing', () => {
    const component = shallow(<List />);
    expect(component).toMatchSnapshot();
  });

});
