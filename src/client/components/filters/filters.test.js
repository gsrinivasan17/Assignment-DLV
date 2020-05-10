import React from 'react';
import { shallow } from 'enzyme';
import Filters from './filters';

describe('<Filters />', () => {
  test('renders', () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper).toMatchSnapshot();
  });
});
