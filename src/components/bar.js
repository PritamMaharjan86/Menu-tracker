import React from "react";
import { Progress } from "semantic-ui-react";
import App from "./components/App";

const Bar = () => (
  <Progress progress="value" value={30} total={budget} />
);

export default Bar;
