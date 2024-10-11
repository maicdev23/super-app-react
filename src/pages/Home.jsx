import { useEffect, useState } from "react"
import PostCard from "../components/PostCard";

export default function Home() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true)

    const handleToggle = () => { setShow(!show) }

    useEffect(() => {
        const loadPots = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API}/posts`)
                const datos = await response.json();
                setData(datos); setLoading(false)
            } catch (error) {
                alert(`Conexion no establecida con el server`)
            }
        }; loadPots()
    }, [])

    return <>
        <h4 className="text-center">HOLA MUNDO DESDE REACT & VITE</h4><hr />
        <br /><div className="col-md-4 card mx-auto p-4">
            <p>You clicked {count} times</p>
            <button
                className="btn btn-primary"
                onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div><br /><hr />
        <div className="text-center">
            {loading ? (
                <div className="text-center">...</div>
            ) : (
                <div className="row">
                    <div>
                        <button className="btn btn-primary" onClick={handleToggle}>
                            Mostrar/Ocurtar
                        </button><hr />
                    </div>
                    {show === true &&
                        <>
                            {data.map((dato) => (
                                <div className="col-md-3" key={dato.id}>
                                    <div className="card p-4 shadow">
                                        <PostCard post={dato} />
                                    </div>
                                </div>
                            ))}
                        </>
                    }
                </div>
            )}
        </div>
    </>
}