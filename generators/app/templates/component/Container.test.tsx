import React from 'react';
import { shallow } from 'enzyme';
import 'jest';

import { I<%= name %>Props } from '../../src/containers/<%= name %>/I<%= name %>Props';
import { <%= name %> } from '../../src/containers/<%= name %>/<%= name %>';
import { adapter } from '../adapter';

adapter;

describe('<%= name %> tests', () => {

	it('should render the component', () => {

		const wrapper = shallow(<<%= name %> />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('should see the text', () => {

		const wrapper = shallow(<<%= name %> />);
		expect(wrapper.children().text()).toEqual('<%= name %>');
	});
});
