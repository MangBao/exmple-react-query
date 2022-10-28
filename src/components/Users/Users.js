import { useUsers } from "../../hooks/useUsers";

const Users = ({ params }) => {
  const { status, data, error } = useUsers(params);

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Error: {error}</p>}
      {
        <ul>
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
    </>
  );
};

export default Users;
