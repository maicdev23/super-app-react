import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addPerson } from "../services/react-query"

const FormPerson = () => {
    const queryClient = useQueryClient()

    const addData = useMutation({
        mutationFn: addPerson,
        onSuccess: (data) => {
            console.log("Person added successfully")
            queryClient.invalidateQueries('person')
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const person = Object.fromEntries(formData)
        addData.mutate({ ...person, age: Number(person.age) })
    }

    return <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="fullname">Fullname</label>
            <input type="text" className="form-control" name="fullname" />
        </div>
        <div className="mb-3">
            <label htmlFor="age">Age</label>
            <input type="text" className="form-control" name="age" />
        </div>
        <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" name="address" />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
    </form>
}

export default FormPerson