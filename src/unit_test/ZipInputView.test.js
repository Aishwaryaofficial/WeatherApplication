import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ZipInputView from '../util/component/ZipInputView';

configure({adapter: new Adapter()});
describe('Testing ZipInputView component', () => {
  it('renders as expected', () => {
    const textField = shallow(
      <ZipInputView value='302017' onPress= {jest.fn} />
    );
    expect(textField).toMatchSnapshot();
    textField.setProps({ value: '122003' });
    expect(textField).toMatchSnapshot();


  
  });
});
