import React from 'react';
import { render } from 'react-dom';

import { HelloWorld } from './components/HelloWorld/HelloWorld';

const root = document.getElementById('root');

const App = () => (
	<div>
		<HelloWorld isClickable={true} />
	</div>
);

render(<App />, root);
