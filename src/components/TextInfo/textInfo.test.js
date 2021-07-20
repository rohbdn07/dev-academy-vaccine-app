import React from 'react';
import {shallow} from 'enzyme';
import TextInfo from './TextInfo';


describe('textInfo component', () => {
    it('should contain className', () => {
        const wrapper = shallow(<TextInfo />);
        expect(wrapper.find('.textInfo')).toHaveLength(1)
    })

   
})