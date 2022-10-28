import { useTodos } from "../../hooks/useTodos";

const Todos = ({ params }) => {
  const { status, data, error } = useTodos(params);

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Error: {error}</p>}
      {
        <ul>
          {data?.map((todo) => (
            <li key={todo.id}>
              <h4>{todo.title}</h4>
              <p>
                Completed:
                <span style={todo.completed ? {color: 'green', fontWeight: 'bold'} : {color: 'red', fontWeight: 'bold'}}>
                  {todo.completed ? " YES" : " NO"}
                </span>
              </p>
              <button>Delete</button>

              <br />
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Todos;
