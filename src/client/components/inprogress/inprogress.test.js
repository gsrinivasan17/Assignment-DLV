import React from 'react';
import { shallow } from 'enzyme';
import Inprogress from './inprogress';

describe('<Inprogress />', () => {
  test('renders', () => {
    const wrapper = shallow(<Inprogress />);
    expect(wrapper).toMatchSnapshot();
  });
});
