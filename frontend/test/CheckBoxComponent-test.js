import React from 'react';
import {shallow , configure} from 'enzyme';
import CheckBoxComponent from '../src/CheckBoxComponent';
import Adapter from 'enzyme-adapter-react-16';

 configure({ adapter: new Adapter() });

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckBoxComponent labelOn="On" labelOff="Off" />);
 
  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('Onf');
});