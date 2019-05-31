import { css } from 'emotion';

let helloWorldBackground = css({
	textAlign: 'center',
	width: '50%',
	position: 'relative',
	top: '120px',
	left: '25%',
	height: '250px',
});
helloWorldBackground += ' hello-world-background ';

let clicked = css({
	backgroundColor: 'rgb(0, 132, 255)',
});

clicked += ' clicked ';

let noClicked = css({
	backgroundColor: 'rgb(160, 19, 54)',
});

noClicked += ' no-clicked ';

let helloWorld = css({
	color: 'white',
	fontSize: '24px',
	padding: '100px',
	cursor: 'pointer',
});

helloWorld += ' hello-world ';

export default {
	helloWorldBackground,
	clicked,
	noClicked,
	helloWorld,
};
