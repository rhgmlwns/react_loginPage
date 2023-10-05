import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Test from "./pages/Test";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";

const App = () => {
 return (
  <Routes>
   <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/profiles/:username" element={<Profile />} />
   </Route>
   <Route path="/articles" element={<Articles />}>
    <Route path=":id" element={<Article />} />
   </Route>
   <Route path="/login" element={<Login />} />
   <Route path="/test" element={<Test />} />
   <Route path="/test1" element={<Test1 />} />
   <Route path="/test2" element={<Test2 />} />
   <Route path="/test3" element={<Test3 />} />
   <Route path="/MyPage" element={<MyPage />} />
   <Route path="*" element={<NotFound />} />
  </Routes>
 );
};

export default App;
