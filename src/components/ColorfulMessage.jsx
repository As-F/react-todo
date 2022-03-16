import React from "react";

const ColorfulMessage = (props) => {
  console.log("カラフル最初");
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    // ↓省略できる
    color: color,
    fontSize: "18px"
  };
  return (
    // <p style={contentStyle}>{props.children}</p>
    <p style={contentStyle}>{children}</p>

    // ↑タグで囲った中身を使うときはprops.children
  );
};

export default ColorfulMessage;
