import { useTodos } from "../../hooks/useTodos";
import { Box, CircularProgress, Container } from "@mui/material";

const Todos = ({ params }) => {
  const { status, data, error } = useTodos(params);

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
            {data?.map((todo) => (
              <li key={todo.id}>
                <h4>{todo.title}</h4>
                <p>
                  Completed:
                  <span
                    style={
                      todo.completed
                        ? { color: "green", fontWeight: "bold" }
                        : { color: "red", fontWeight: "bold" }
                    }
                  >
                    {todo.completed ? " YES" : " NO"}
                  </span>
                </p>
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

export default Todos;
