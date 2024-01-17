export function PostCard ({post}) {

    return <>
        <h6 className="card-header py-3 text-center">{post.name}</h6>
        <div className="card-body">
            <img src={ post.image } alt="" className="card-img"/>
        </div>
    </>
}