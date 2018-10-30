import React, { SFC, ReactElement } from 'react';
import { render } from 'react-dom';

import { HelloWorld } from './containers/HelloWorld/HelloWorld';

const root: HTMLElement = document.getElementById('root');

const App: SFC<{}> = (): ReactElement<{}> => (
	<>
		<HelloWorld isClickable={true} />
	</>
);

render(<App />, root);
