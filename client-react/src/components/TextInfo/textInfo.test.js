import React from 'react';
import {shallow} from 'enzyme';
import TextInfo from './TextInfo';


describe('textInfo component', () => {
    it('should contain className', () => {
        const wrapper = shallow(<TextInfo />);
        expect(wrapper.find('.textInfo')).toHaveLength(1)
    })
    it('should contain vaccineName passed as a props', () => {
        const wrapper = shallow(<TextInfo />);
        expect(wrapper.find('VaccineName')).toBeTruthy()
    })
    it('should contain kysArray passed as a props', () => {
        const wrapper = shallow(<TextInfo />);
        expect(wrapper.find('kysArray')).toBeTruthy()
    })
})