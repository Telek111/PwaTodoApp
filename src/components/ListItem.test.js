import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

describe('ListItem', () => {
  it('renders without crashing', () => {
    const component = shallow(<ListItem />);
    expect(component).toMatchSnapshot();
  });

});
