import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
 const navigate = useNavigate();

 const goBack = () => {
  // 이전 페이지로 이동
  navigate(-1);
 };

 const goFront = () => {
  // 앞 페이지로 이동
  navigate(+1);
 };

 const goHome = () => {
  // 홈 페이지로 이동
  navigate("/");
 };

 const goMyPage = () => {
  // 마이 페이지로 이동
  navigate("mypage");
 };

 const goLogin = () => {
  //로그인 페이지로 이동
  navigate("login");
 };

 return (
  <div className="page">
   <header
    style={{
     padding: "10px",
     fontSize: "24px",
     margin: "0 auto",
     display: "flex",
     justifyContent: "center",
    }}
   >
    <button onClick={goBack} style={{ ...buttonStyle1, marginRight: "20px" }}>
     뒤로가기
    </button>

    <button onClick={goFront} style={{ ...buttonStyle1, marginRight: "20px" }}>
     앞으로가기
    </button>

    <button onClick={goHome} style={{ ...buttonStyle1, marginRight: "20px" }}>
     홈으로
    </button>

    <button onClick={goLogin} style={{ ...buttonStyle1, float: "left" }}>
     로그인
    </button>
   </header>

   <main>
    <Outlet />
   </main>
  </div>
 );
};

export default Layout;

//스타일 설정

const buttonStyle1 = {
 width: "100px",
 height: "35px",
 fontSize: "16px",
 fontWeight: "bold",
 backgroundColor: "rgb(0, 119, 255)",
 color: "white",
 borderTopLeftRadius: "10px",
 borderTopRightRadius: "10px",
 borderBottomLeftRadius: "10px",
 borderBottomRightRadius: "10px",
 border: "none",
};
