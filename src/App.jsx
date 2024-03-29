import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreatePostPage from "./pages/CreatePostPage.jsx";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="about" element={<CreatePostPage/>} />
          <Route path="posts" element={<PostsPage/>} />
          <Route path="posts/:postId" element={<SinglePostPage/>} />
          <Route path="*" element={<h3>Страница не найдена</h3>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
