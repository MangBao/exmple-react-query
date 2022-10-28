import { useQuery } from "react-query"
import { fetchAllTodos  } from "../api/services";

export const useTodos = (params) => {
    return useQuery(["allTodos ", params], () => fetchAllTodos (params), {refetchOnWindowFocus: false});
}