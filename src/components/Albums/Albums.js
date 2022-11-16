import { useAlbums } from "../../hooks/useAlbums";
import { Box, CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import styles from "./style";

const Albums = ({ params }) => {
  const { status, data, error } = useAlbums(params);

  return (
    <>
      <Container>
        {status === "loading" && (
          <Box sx={styles.box}>
            <CircularProgress />
          </Box>
        )}
        {status === "error" && <p>Error: {error}</p>}
        {
          <ul style={{ listStyle: "none" }}>
            {data?.map((abl) => (
              <li key={abl.id}>
                <p>{abl.title}</p>
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

export default Albums;
