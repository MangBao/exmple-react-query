import { useQuery } from "react-query"
import { fetchAllPosts } from "../api/services";

export const usePosts = (params) => {
    return useQuery(["allPosts", params], () => fetchAllPosts(params), {cacheTime: Infinity});
}