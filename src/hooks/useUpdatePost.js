import { useQuery } from "react-query"
import { fetchPost  } from "../api/services";

export const useUpdatePost = (id) => {
    return useQuery(["aPost", id], () => fetchPost (id), {refetchOnWindowFocus: false});
}