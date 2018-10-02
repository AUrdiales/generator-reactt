import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { IHelloWorldProps } from '../../src/components/HelloWorld/IHelloWorldProps';
import { HelloWorld } from '../../src/components/HelloWorld/HelloWorld';
import { adapter } from '../adapter';

adapter;

describe('Hello World component tests', () => {

	it('should render the component', () => {

		const wrapper = shallow(<HelloWorld />);
		expect(wrapper.exists()).to.be.true;
	});

	it('should click the text', () => {
		const helloWorldProps: IHelloWorldProps = {
			isClickable: true,
		};

		const wrapper = shallow(<HelloWorld {...helloWorldProps} />);
		wrapper.find('.hello-world').simulate('click');
		expect(wrapper.find('.clicked')).to.have.length(1);
	});

	it('should not click the text', () => {
		const helloWorldProps: IHelloWorldProps = {
			isClickable: false,
		};

		const wrapper = shallow(<HelloWorld {...helloWorldProps} />);
		wrapper.find('.hello-world').simulate('click');
		expect(wrapper.find('.no-clicked')).to.have.length(1);
	});

	it('should see the text when is not clicked', () => {
		const helloWorldProps: IHelloWorldProps = {
			isClickable: false,
		};

		const wrapper = shallow(<HelloWorld {...helloWorldProps} />);
		expect(wrapper.children().text()).to.be.equal('Hello World You cannot click me!');
	});

	it('should see the text when is clicked', () => {
		const helloWorldProps: IHelloWorldProps = {
			isClickable: true,
		};

		const wrapper = shallow(<HelloWorld {...helloWorldProps} />);
		wrapper.find('.hello-world').simulate('click');
		expect(wrapper.children().text()).to.be.equal('Hello World You can click me!');
	});
});
