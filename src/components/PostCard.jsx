const PostCard = ({ post }) => {

    return <div>
        <h5 className="card-header py-3 text-center">{post.name}</h5>
        <div className="card-body">
            <img src={post.cdn_file} alt="" className="card-img" />
        </div>
    </div>
}

export default PostCard;