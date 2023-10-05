import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
 const navigate = useNavigate();

 const handleButtonClick = () => {
  navigate(`/Test2?=a`);
 };

 // "재미로 보는 피부나이 테스트!" 텍스트 스타일을 정의
 const titleStyle = {
  color: "black", // 폰트 색상을 검정색으로 설정
  textAlign: "center", // 가운데 정렬 추가
  fontSize: "24px", // Adjust the font size as desired
  fontWeight: "bold", // Make the text bold
 };

 // 스타일을 정의하여 버튼의 폰트 크기를 조절
 const buttonStyle = {
  fontSize: "16px", // Adjust the button font size as desired
 };

 // 하단 버튼을 감싸는 div의 스타일
 const bottomButtonContainerStyle = {
  display: "flex",
  justifyContent: "center", // 가로 중앙 정렬
  position: "absolute",
  bottom: "10px", // 하단 여백 조절
  width: "100%",
 };

 return (
  <div className="page">
   <header className="App-header">
    <p>
     <span style={titleStyle}>
      <p>피부 관리를위해</p>
      <p>1주일에 1시간 이상 투자한다</p>
     </span>
    </p>
   </header>
   <div style={bottomButtonContainerStyle}>
    {/* 버튼을 하나의 div로 감싸기 */}
    <button
     className="bottomButton"
     style={buttonStyle} // Apply the button style
     onClick={handleButtonClick} // Use the handleButtonClick function
    >
     그렇다
    </button>
    <button
     className="bottomButton"
     style={buttonStyle} // Apply the button style
     onClick={handleButtonClick} // Use the handleButtonClick function
    >
     아니다
    </button>
   </div>
   {/* App1 컴포넌트를 렌더링하면서 필요한 props 전달 */}
  </div>
 );
}

export default App;
