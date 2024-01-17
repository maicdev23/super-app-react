import { useEffect, useState } from "react"
import { PostCard } from "../components/PostCard";

export default function Home () {

    const [data, setData] = useState([])
    
    useEffect(() => {
        const loadPots = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/v1/movies')
                const datos = await response.json(); setData(datos)
            } catch (error) {
                alert(`Conexion no establecida con el server`)
            }
        }; loadPots()
    })

    return <>
        <br/><br/><div className="container py-4">
            <h1 className="text-center">Hola Mundo desde React & Vite</h1><hr />
            <div className="row">
                { data.map((dato) => {
                    return  <div className="col-md-3">
                        <div className="card p-4 shadow" key={dato.id}>
                            <PostCard post={dato} />
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}