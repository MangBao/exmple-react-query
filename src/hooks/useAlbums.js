import { useQuery } from "react-query"
import { fetchAllAlbums } from "../api/services";

export const useAlbums = (params) => {
    return useQuery(["allAlbums", params], () => fetchAllAlbums(params), {refetchOnWindowFocus: false});
}