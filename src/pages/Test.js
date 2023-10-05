import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Test() {
 const [inputText, setInputText] = useState("");
 const navigate = useNavigate();

 const handleInputChange = (event) => {
  const cleanedInput = event.target.value.replace(/[^0-9]/g, "");
  // 입력값이 100을 초과하지 않도록 제한
  if (cleanedInput > 1000) {
   setInputText("1000");
  } else {
   setInputText(cleanedInput);
  }
 };

 const inputStyle = {
  width: "300px",
  height: "30px",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 auto", // Center the input element
  display: "block", // Ensure the input is displayed as a block element
 };

 const handleConfirmClick = () => {
  if (inputText === "") {
   alert("나이를 입력해주세요!");
  } else {
   alert("나이 입력이 완료됐습니다.");
   navigate(`/test1?a=${inputText}`); // 입력한 나이를 페이지로 넘김
  }
 };

 return (
  <div className="page">
   <div className="App">
    <div className="black-nav"></div>
   </div>

   <header className="App-header" style={{ textAlign: "center" }}>
    <p>
     <span>재미로 보는 피부나이 테스트!</span>
    </p>
    <div>
     <p>
      <input
       type="text"
       placeholder="나이를 입력하세요."
       value={inputText}
       onChange={handleInputChange}
       style={inputStyle}
       max="1000"
      />
     </p>
     <p>
      <button
       className="App-button"
       style={buttonStyle1}
       onClick={handleConfirmClick}
      >
       확인
      </button>
     </p>
    </div>
   </header>
  </div>
 );
}

export default Test;

const buttonStyle1 = {
 width: "300px",
 height: "35px",
 fontSize: "16px",
 fontWeight: "bold",
 backgroundColor: "rgb(0, 119, 255)",
 color: "white",
 borderRadius: "30px",
 marginTop: "15px",
 display: "block",
 margin: "0 auto",
 border: "none", // Remove the border
};
