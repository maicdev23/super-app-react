import { createContext, useContext, useState } from "react";
import { getPostsRequest, removePostRequest } from "../services/post";

export const PostContext = createContext()

export const usePost = () => {
    const context = useContext(PostContext)

    if (!context) throw new Error('usePost muest be used within an PostProvider')

    return context
}

export const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const response = await getPostsRequest()
            setPosts(response.data)
        } catch (error) {
            alert('error.response.data.msg')
        }
    }

    const removePost = async (id) => {
        try {
            const response = await removePostRequest(id)
            alert(response.data.msg)
            setPosts(posts.filter((post) => post.id !== id))
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <PostContext.Provider value={{
            getPosts, posts, removePost
        }}>
            {children}
        </PostContext.Provider>
    )
}