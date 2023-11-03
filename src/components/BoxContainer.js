import React from "react";
import { Component } from "react";
import "./BoxContainer.css";
import Box from "./Box";
import { rgbValue, generateColors } from "./helper";

class BoxContainer extends Component {
  static defaultProps = { num: 18 };
  constructor(props) {
    super(props);
    this.state = {
      colors: generateColor(this.props.num),
    };
    this.changeColors = this.changeColors.bind(this);
  }

  chnageColor(c) {
    let newColor;
    do {
      newColor = ` rgba(
            ${rgbvalue()},
            ${rgbvalue()},
            ${rgbvalue()}
        )`;
    } while (newColor === c);

    this.setState((st) => ({
      colors: st.colors.map((color) => {
        if (color !== c) return color;
        return newColor;
      }),
    }));
  }
  render() {
    return (
      <div className="BoxContainer">
        {this.state.colors.map((color) => (
          <Box color={color} changeColor={this.changeColor} />
        ))}
      </div>
    );
  }
}

export default BoxContainer;
