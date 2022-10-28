import { useQuery } from "react-query"
import { fetchAllPhotos } from "../api/services";

export const usePhotos = (params) => {
    return useQuery(["allPhotos", params], () => fetchAllPhotos(params), {refetchOnWindowFocus: false});
}