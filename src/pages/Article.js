import { useParams } from "react-router-dom";

const Article = () => {
 const { id } = useParams();
 return (
  <div className="page">
   <h2>게시글 {id}</h2>
  </div>
 );
};
export default Article;
