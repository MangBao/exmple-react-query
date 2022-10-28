import { useQuery } from "react-query"
import { fetchAllUsers } from "../api/services";

export const useUsers = (params) => {
    return useQuery(["allUsers", params], () => fetchAllUsers(params), {refetchOnWindowFocus: false});
}