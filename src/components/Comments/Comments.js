import { useComments } from "../../hooks/useComments";

const Comments = ({ params }) => {
  const { status, data, error } = useComments(params);

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Error: {error}</p>}
      {
        <ul>
          {data?.map((cmt) => (
            <li key={cmt.id}>
              <h4>{cmt.name}</h4>
              <p>{cmt.body}</p>
              <button>Delete</button>

              <br />
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Comments;
