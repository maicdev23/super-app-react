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

export default function App() {

    return (
        <AuthProvider>
            <PostProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route element={<ProtectedRoute />}>
                            <Route path="/posts" element={<Post />} />
                            <Route path="/post/:id" element={<PostForm />} />
                            <Route path="/save-post" element={<PostForm />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </PostProvider>
        </AuthProvider>
    );
}