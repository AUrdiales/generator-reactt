import React from 'react';

import './<%= name %>.css';
import { I<%= name %>Props } from './I<%= name %>Props';

export const <%= name %>: React.SFC <I<%= name %>Props> = (): JSX.Element => (
	<div>
		<p><%= name %></p>
	</div>
);
