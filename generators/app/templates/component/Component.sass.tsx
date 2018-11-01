import React from 'react';

import './<%= name %>.scss';
import { I<%= name %>Props } from './I<%= name %>Props';

export function <%= name %>(props: I<%= name %>Props): ReactElement<I<%= name %>Props> {
	return(
	<div>
		<p><%= name %></p>
	</div>
	);
}
