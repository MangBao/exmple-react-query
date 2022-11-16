import { Box, CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import RowAndColSpacing from "../RowAndColSpacing";
import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";

const Posts = ({ params }) => {
  const [showFormAdd, setShowFormAdd] = useState(false);
  const {
    status: getPostStatus,
    data: getPostData,
    error: getPostError,
  } = usePosts(params);

  return (
    <>
    {}
      <Container>
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
          <Box sx={{ height: "100%", paddingLeft: "18px", paddingTop: "16px" }}>
            <CircularProgress />
          </Box>
        ) : (
          <RowAndColSpacing 
            card = {getPostData?.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
           />
        )}
      </Container>
    </>
  );
};

export default Posts;
