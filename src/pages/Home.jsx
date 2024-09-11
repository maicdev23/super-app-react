import { useEffect, useState } from "react"
import { PostCard } from "../components/PostCard";

export default function Home() {

    const [data, setData] = useState([])
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPots = async () => {
            try {
                const response = await fetch('https://dev-api-rest.onrender.com/api/posts')
                const datos = await response.json();
                setData(datos); setLoading(false)
            } catch (error) {
                alert(`Conexion no establecida con el server`)
            }
        }; loadPots()
    }, [])

    return <>
        <br /><br /><div className="container py-4">
            <h4 className="text-center">HOLA MUNDO DESDE REACT & VITE</h4><hr />
            <br /><div className="col-md-4 card mx-auto p-4">
                <p>You clicked {count} times</p>
                <button
                    className="btn btn-primary"
                    onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div><br /><hr />
            <div className="row py-4">
                {loading ? (
                    <div className="text-center">...</div>
                ) : (
                    data.map((dato) => (
                        <div className="col-md-3" key={dato.id}>
                            <div className="card p-4 shadow">
                                <PostCard post={dato} />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    </>
}