import { useForm } from "react-hook-form"
import { addPostRequest, getPostRequest, updatePostRequest } from "../../services/post";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function PostForm() {

    const { register, handleSubmit, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        const loadPots = async () => {
            if (params.id) {
                const response = await getPostRequest(params.id)
                setValue('name', response.data.name)
            }
        }; loadPots()
    }, [])

    return <>
        <br /><br /><div className="container py-4">
            <div className="col-md-5 card mx-auto p-4 shadow">
                <h5 className="card-header py-3 text-center">SAVE POST</h5><br />
                <form
                    onSubmit={handleSubmit(async (values) => {
                        if (params.id) {
                            try {
                                const response = await updatePostRequest(params.id, values);
                                alert(response.data.msg); navigate('/posts')
                            } catch (error) {
                                alert(error.response.data.msg)
                            }
                        } else {
                            try {
                                const response = await addPostRequest(values);
                                alert(response.data.msg); navigate('/posts')
                            } catch (error) {
                                alert(error.response.data.msg)
                            }
                        }
                    })}>

                    <div className="mb-4">
                        <input type="text" placeholder="Nombre del post"
                            className="form-control"
                            {...register('name', { required: true })} autoFocus />
                    </div>
                    <div className="mb-4">
                        <input type="file" className="form-control"
                            onChange={(e) => setValue('file', e.target.files[0])} />
                    </div>

                    <div className="text-center">
                        <button className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}