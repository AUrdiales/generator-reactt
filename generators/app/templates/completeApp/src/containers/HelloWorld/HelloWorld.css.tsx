import React, { Component, ReactElement } from 'react';

import './HelloWorld.css';
import { IHelloWorldProps } from './IHelloWorldProps';
import { IHelloWorldState } from './IHelloWorldState';

export class HelloWorld extends Component<IHelloWorldProps, IHelloWorldState> {

	readonly state = {
		isClicked: false,
	};

	private onClick = (): void => {
		this.setState((prevState: IHelloWorldState) => ({
			isClicked: !prevState.isClicked,
		}));
	}

	public render(): ReactElement<IHelloWorldProps> {
		const { isClickable } = this.props;
		return (
			<div className={this.state.isClicked ? 'hello-world-background clicked' : 'hello-world-background no-clicked'}>
						<p
							className={"hello-world"}
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
