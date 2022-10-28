import { useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";


const Posts = ({ params, props }) => {
  const [showFormAdd, setShowFormAdd] = useState(false);
  const {
    status: getPostStatus,
    data: getPostData,
    error: getPostError,
  } = usePosts(params);

  return (
    <>
      {getPostStatus === "error" && <p>Error: {getPostError}</p>}
      <button
        type="button"
        onClick={() => setShowFormAdd(!showFormAdd)}
        style={{ marginLeft: "24px" }}
      >
        Add Post
      </button>
      <br />
      {showFormAdd ? <AddPost /> : ""}
      {getPostStatus === "loading" ? (
        
      ) : (
        <ul>
          {getPostData?.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </ul>
      )}
    </>
  );
};

export default Posts;
