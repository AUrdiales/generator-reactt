import React, { Component } from 'react';

import './HelloWorld.css';
import { IHelloWorldProps } from './IHelloWorldProps';
import { IHelloWorldState } from './IHelloWorldState';

export class HelloWorld extends Component<IHelloWorldProps, IHelloWorldState> {

	public state = {
		isClicked: false,
	};

	private onClick = () => {
		this.setState((prevState: IHelloWorldState) => ({
			isClicked: !prevState.isClicked,
		}));
	}

	public render() {
		const { isClickable } = this.props;
		return (
			<div className={this.state.isClicked ? 'hello-world-background clicked' : 'hello-world-background no-clicked'}>
				{
					isClickable
						?
						<p
							className={"hello-world"}
							onClick={this.onClick}
						>
							Hello World You can click me!
						</p>
						:
						<p
							className={"hello-world"}
						>
							Hello World You cannot click me!
						</p>
				}
			</div>
		);
	}
}
