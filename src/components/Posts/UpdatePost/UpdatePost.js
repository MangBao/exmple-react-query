/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { updatePost } from "../../../api/services";
import { useUpdatePost } from "../../../hooks/useUpdatePost";

const UpdatePost = ({ id }) => {

  const {
    data: getPostData
  } = useUpdatePost(id);

  const {
    mutate: updatePostData,
    status: updateStatus,
    error: updateError,
  } = useMutation((data) => updatePost(data));

  const { register: inputUpdatePost, handleSubmit: submitUpdatePost, reset } =
    useForm();

    

  const onSubmitUpdate = (data) => updatePostData(data);
  const defaultValues = {};

  useEffect(() => {
    const fetchUserId = async () => {
      getPostData && (defaultValues.id = getPostData.id);
      getPostData && (defaultValues.userID = getPostData.userId);
      getPostData && (defaultValues.title = getPostData.title);
      getPostData && (defaultValues.body = getPostData.body);
      reset({ ...defaultValues });
    }
    fetchUserId()
  }, [getPostData]);


  return (
    <>
      {updateStatus === "loading" && <p>Updating...</p>}
      {updateStatus === "error" && <p>Error: {updateError}</p>}
      {updateStatus === "success" && <p>Updated. </p>}
      {getPostData &&
        <form
          onSubmit={submitUpdatePost(onSubmitUpdate)}
          style={{ paddingLeft: "24px" }}
        >
          <input
            type="text"
            name="id"
            hidden
            placeholder="id"
            {...inputUpdatePost("id")}
          />
          <input
            type="text"
            name="userID"
            placeholder="UserID"
            {...inputUpdatePost("userID")}
          />
          <br />
          <input
            type="text"
            name="title"
            placeholder="Title"
            {...inputUpdatePost("title", { required: true })}
          />
          <br />
          <textarea
            type="text"
            name="body"
            placeholder="Body"
            {...inputUpdatePost("body", { required: true })}
          ></textarea>
          <br />
          <input type="submit" value={"Submit"} />
        </form>
      }
    </>
  );
};

export default UpdatePost;
