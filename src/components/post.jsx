import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./common/spinner";

const Post = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((json) => {
        fetch("https://jsonplaceholder.typicode.com/users/" + json.userId)
          .then((response) => response.json())
          .then((user) => {
            json.user = user;
            console.log(json);
            setPost(json);
          });
      });

    fetch("https://jsonplaceholder.typicode.com/comments?postId=" + id)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setComments(json);
      });
  }, []);

  return (
    <>
      <h1>Post</h1>
      {post ? (
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            {userPost(post)}
            {postComments(comments)}
          </div>
          <div className="col-2"></div>
        </div>
      ) : (
        <Spinner />
      )}
      ;
    </>
  );
};

export default Post;
function postComments(comments) {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Comments</h4>
      </div>
      <ul className="list-group list-group-flush">
        {comments.map((comment) => (
          <li key={comment.id} className="list-group-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle mb-3 me-3"
              style={{ width: 30 }}
              alt="Avatar"
            />
            <strong className="bold">{comment.name}</strong>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function userPost(post) {
  return (
    <>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        className="rounded-circle mb-3 me-3"
        style={{ width: 50 }}
        alt="Avatar"
      />
      <span>{post.user.name}</span>
      <div className="card mb-3">
        <img
          src="https://picsum.photos/200/100"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    </>
  );
}
