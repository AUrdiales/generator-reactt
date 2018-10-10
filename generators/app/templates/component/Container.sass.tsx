import React from 'react';

import './<%= name %>.scss';
import { I<%= name %>Props } from './I<%= name %>Props';

export class <%= name %> extends React.Component < I<%= name %>Props > {

	public render() {
		return (
			<div>
				<p><%= name %></p>
			</div >
		);
	}
}
