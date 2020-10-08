import React from "react";
import AwesomeImage from "./components/AwesomeImage";
import widthGaryScale from "./components/widthGaryScale";
// import HoverOpacity from "./components/HoverOpacity";
import withHoverOpacity from "./components/wifthHoverOpacity";
import "./styles.css";

const HoverOpacityIamge = withHoverOpacity(AwesomeImage, 0.8);
const GrayScaleImage = widthGaryScale(AwesomeImage, 100);
export default function App() {
  return (
    <div className="App">
      <GrayScaleImage src="https://picsum.photos/200/300" />
      <HoverOpacityIamge src="https://picsum.photos/200/300" />
    </div>
  );
}
