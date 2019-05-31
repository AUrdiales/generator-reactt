import React, { ReactElement, useState } from 'react';

<%if (styles === 'css') { %>
import './HelloWorld.css';
<% } %>
<%if (styles === 'sass') { %>
import './HelloWorld.scss';
<% } %>
<%if (styles === 'css-in-js') { %>
import styles from './HelloWorld.styles';
<% } %>
import { IHelloWorldProps } from './IHelloWorldProps';

export function HelloWorld({ isClickable }: IHelloWorldProps): ReactElement<IHelloWorldProps> {
    const [isClicked, setClicked] = useState<boolean>(false);
    const onClick = () => {
        setClicked(!isClicked);
    };
    return (
        <%if (styles === 'css' || styles === 'sass') { %>
            <div className={isClicked ? 'hello-world-background clicked' : 'hello-world-background no-clicked'}>
            <% } else { %>
            <div
				className={`${styles.helloWorldBackground}${isClicked ? styles.clicked : styles.noClicked}`}
			>
        <% } %>
            <p className={<%if (styles === 'css' || styles === 'sass') { %>'hello-world' <% } else { %>styles.helloWorld <% } %>} onClick={isClickable && onClick}>
                {isClickable ? 'Hello World You can click me!' : 'Hello World You cannot click me!'}
            </p>
        </div>
    );
}
