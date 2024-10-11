import { useEffect } from "react"
import { Link } from "react-router-dom"

import { usePost } from "../../context/PostContext"
import PostCard from "../../components/PostCard"

export default function Posts() {

    const { getPosts, posts, removePost } = usePost()

    useEffect(() => { getPosts() }, [])

    const handleRemovePost = (id) => {
        const shouldDelete = window.confirm('Are you sure you want to remove this post?')

        if (shouldDelete) removePost(id)
    }

    return <>
        {
            posts.length === 0 && (
                <div className="text-center">
                    <div className="col-md-5 card mx-auto p-4 shadow">
                        <h5>NO HAY POST AUN</h5> <hr />
                    </div>
                </div>
            )
        }
        <div className="row">
            {posts.map((dato) => {
                return <div className="col-md-3" key={dato.id} /*style={{height: '70vh', overflow: 'auto'}}*/ >
                    <div className="card p-4 shadow">
                        <PostCard post={dato} />
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-secondary"
                                onClick={() => handleRemovePost(dato.id)}
                            >⛔</button>
                            <Link to={`/post/${dato.id}`} className="btn btn-primary">🎯</Link>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </>
}