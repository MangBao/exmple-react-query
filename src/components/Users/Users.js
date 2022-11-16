import { useUsers } from "../../hooks/useUsers";
import { Box, CircularProgress, Container } from "@mui/material";

const Users = ({ params }) => {
  const { status, data, error } = useUsers(params);

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
            {data?.map((user) => (
              <li key={user.id}>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
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

export default Users;
