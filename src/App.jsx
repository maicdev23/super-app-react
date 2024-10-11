import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PostProvider } from "./context/PostContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/post/Posts";
import PostForm from "./pages/post/Form";
import Navbar from "./components/Navbar";
import NotFound from "./pages/main/NotFound";
import ProtectedRoute from "./pages/main/ProtectedRoute";
import HomeReactQuery from "./pages/react-query/Home";

export default function App() {

    return (
        <AuthProvider>
            <PostProvider>
                <BrowserRouter>
                    <Navbar />
                    <br /><br /><div className="container contenedor">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route element={<ProtectedRoute />}>
                                <Route path="/posts" element={<Post />} />
                                <Route path="/post/:id" element={<PostForm />} />
                                <Route path="/save-post" element={<PostForm />} />
                            </Route>
                            <Route path="/react-query" element={<HomeReactQuery />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </PostProvider>
        </AuthProvider>
    );
}