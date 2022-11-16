import { useComments } from "../../hooks/useComments";
import { Box, CircularProgress, Container } from "@mui/material";

const Comments = ({ params }) => {
  const { status, data, error } = useComments(params);

  return (
    <>
      <Container>
        {status === "loading" && (
          <Box sx={{ height: "100%", paddingLeft: "18px", paddingTop: "16px" }}>
            <CircularProgress />
          </Box>
        )}
        {status === "error" && <p>Error: {error}</p>}
        {
          <ul style={{ listStyle: "none" }}>
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
      </Container>
    </>
  );
};

export default Comments;
