import React from 'react';
import {shallow} from 'enzyme';
import HomePage from './HomePage';



describe('HomePage', () => {
    it('should contain classname', ()=> {
        const wrapper = shallow(< HomePage/>);
        expect(wrapper.find('.homepage_wrapper')).toHaveLength(1);
    })

    it('should contain Antique components', ()=> {
        const wrapper = shallow(< HomePage/>);
        expect(wrapper.find('AntiquaResult')).toHaveLength(1);
    })

    it('should contain SolarBuddhicaResult components', ()=> {
        const wrapper = shallow(< HomePage/>);
        expect(wrapper.find('SolarBuddhicaResult')).toHaveLength(1);
    })

    it('should contain ZerpfyResult components', ()=> {
        const wrapper = shallow(< HomePage/>);
        expect(wrapper.find('ZerpfyResult')).toHaveLength(1);
    })

    it('should contain VaccinationResult components', ()=> {
        const wrapper = shallow(< HomePage/>);
        expect(wrapper.find('VaccinationResult')).toHaveLength(1);
    })

    it('should contain DateSelection components', ()=> {
        const wrapper = shallow(< HomePage/>);
        expect(wrapper.find('DateSelection')).toHaveLength(1);
    })


   
})