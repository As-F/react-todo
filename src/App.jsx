import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("saisyo");
  const [num, setNum] = useState(0);
  const [showFlag, setShowFlag] = useState(true);
  const onClickSwichShowFlag = () => {
    setShowFlag(!showFlag);
  };
  const onClickCount = () => {
    setNum(num + 1);
    // コンポネント内で動的に変わる値はuseStateを用いる.かっこは初期値。
  };

  // 下記のようにスタイルを指定して引用して使うもできる
  // const contentAnswerStyle = {
  //   color: "blue",
  //   fontSize:"18px"
  // }
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="元気です!"></ColorfulMessage> */}
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCount}>カウントボタン</button>
      <p>{num}</p>
      <button onClick={onClickSwichShowFlag}>on/Off</button>
      {showFlag && <p>(^^♪</p>}
    </>
  );
};
export default App;
