import { useMutation } from "react-query";
import { removePost } from "../../../api/services";
import { useState } from "react";
import UpdatePost from "../UpdatePost/UpdatePost";

const Post = ({ post }) => {
  const [showFormUpdate, setShowFormUpdate] = useState(false);

  const {
    mutate: removePostId,
    status: removeStatus,
    error: removeError,
  } = useMutation((id) => removePost(id));

  return (
    <>
      {removeStatus === "loading" && <p>Removing...</p>}
      {removeStatus === "success" && <p>Removed. </p>}
      {removeStatus === "error" && <p>Error: {removeError} </p>}
      {
        <li key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <button onClick={() => removePostId(post.id)}>Delete</button>
          <button onClick={() => setShowFormUpdate(!showFormUpdate)}>Update</button>
          {showFormUpdate && <UpdatePost id={post.id} />}
          <br />
        </li>
      }
    </>
  );
};

export default Post;
