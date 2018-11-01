import React, { ReactElement } from 'react';

import './<%= name %>.scss';
import { I<%= name %>Props } from './I<%= name %>Props';

export class <%= name %> extends React.Component < I<%= name %>Props > {

	render(): ReactElement<I<%= name %>Props >  {
		return (
			<div>
				<p><%= name %></p>
			</div >
		);
	}
}
