import React from 'react';
import { render } from 'react-dom';

import { HelloWorld } from './components/HelloWorld/HelloWorld';

const root: HTMLElement = document.getElementById('root');

const App: React.SFC<{}> = (): JSX.Element => (
	<div>
		<HelloWorld isClickable={true} />
	</div>
);

render(<App />, root);
