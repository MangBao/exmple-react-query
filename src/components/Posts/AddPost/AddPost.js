import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { addPost } from "../../../api/services";

const AddPost = () => {
  const {
    mutate: addPostData,
    status: addStatus,
    error: addError,
  } = useMutation((data) => addPost(data));

  const { register: inputAddPost, handleSubmit: submitAddPost } = useForm();

  const onSubmitAdd = (data) => addPostData(data);

  return (
    <>
      {addStatus === "loading" && <p>Adding...</p>}
      {addStatus === "error" && <p>Error: {addError}</p>}
      {addStatus === "success" && <p>Added. </p>}
      {
        <form
          onSubmit={submitAddPost(onSubmitAdd)}
          style={{ paddingLeft: "24px" }}
        >
          <input
            type="text"
            name="userID"
            placeholder="UserID"
            {...inputAddPost("userID", { required: true })}
          />
          <br />
          <input
            type="text"
            name="title"
            placeholder="Title"
            {...inputAddPost("title", { required: true })}
          />
          <br />
          <textarea
            type="text"
            name="body"
            placeholder="Body"
            {...inputAddPost("body", { required: true })}
          ></textarea>
          <br />
          <input type="submit" value={"Submit"} />
        </form>
      }
    </>
  );
};

export default AddPost;
