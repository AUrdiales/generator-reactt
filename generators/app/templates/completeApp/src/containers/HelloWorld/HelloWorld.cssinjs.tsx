import React, { Component, ReactElement } from 'react';

import styles from './HelloWorld.styles';
import { IHelloWorldProps } from './IHelloWorldProps';
import { IHelloWorldState } from './IHelloWorldState';

export class HelloWorld extends Component<IHelloWorldProps, IHelloWorldState> {

	readonly state = {
		isClicked: false,
	};

	onClick = (): void => {
		this.setState((prevState: IHelloWorldState) => ({
			isClicked: !prevState.isClicked,
		}));
	}

	render(): ReactElement<HelloWorld> {
		const { isClickable } = this.props;
		return (
			<div
				className={`${styles.helloWorldBackground}${this.state.isClicked ? styles.clicked : styles.noClicked}`}
			>
				<p
					className={styles.helloWorld}
					onClick={isClickable && this.onClick}
				>
					{
						isClickable ?
							'Hello World You can click me!'
							:
							'Hello World You cannot click me!'
					}
				</p>
			</div>
		);
	}
}
