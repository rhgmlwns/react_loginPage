import React from "react";
import Header from "../components/Header";

function MainPage({ location, history }) {
 console.log(history);
 console.log(location);
 return (
  <>
   <Header />
   <div className="main">메인 페이지</div>
  </>
 );
}

export default MainPage;
