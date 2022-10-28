import { useQuery } from "react-query"
import { fetchAllComments } from "../api/services";

export const useComments = (params) => {
    return useQuery(["allComments", params], () => fetchAllComments(params), {refetchOnWindowFocus: false});
}