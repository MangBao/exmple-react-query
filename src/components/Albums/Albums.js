import { useAlbums } from "../../hooks/useAlbums";

const Albums = ({ params }) => {
  const { status, data, error } = useAlbums(params);

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Error: {error}</p>}
      {
        <ul>
          {data?.map((abl) => (
            <li key={abl.id}>
              <p>{abl.title}</p>
              <button>Delete</button>

              <br />
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Albums;
