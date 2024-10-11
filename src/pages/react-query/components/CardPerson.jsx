import { useMutation, useQuery } from "@tanstack/react-query"
import { deletePerson, getPersons } from "../services/react-query"

const CardPerson = () => {

    const { isLoading, data: person, isError, error } = useQuery({
        queryKey: ['person'],
        queryFn: getPersons
    })

    const deleteMutation = useMutation({
        mutationFn: deletePerson,
        onSuccess: () => {
            alert("Person deleted successfully")
        }
    })

    if (isLoading) return <div>Loading...</div>

    else if (isError) return <div>{error.message}</div>

    return person.map((item) => (
        <div key={item.id} className="py-2">
            <h2>{item.fullname}</h2>
            <div className="d-flex justify-content-between align-items-center">
                <p>{item.age} / {item.address}</p>
                <button
                    className="btn btn-danger"
                    onClick={()=> deleteMutation.mutate(item.id) }
                >
                    Eliminar
                </button>
            </div>
            <hr />
        </div>
    ))

}

export default CardPerson