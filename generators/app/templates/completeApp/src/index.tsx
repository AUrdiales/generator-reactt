import React, { ReactElement } from "react";
import { render } from "react-dom";

import { HelloWorld } from "./components/HelloWorld/HelloWorld";

const root: HTMLElement = document.getElementById("root");

function App(): ReactElement<any> {
  return (
    <>
      <HelloWorld isClickable={true} />
    </>
  );
}

render(<App />, root);
