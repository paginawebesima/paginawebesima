import { useQuery } from "react-query";
import { getUser } from "../api/api";

export const useAuth = () => {
    const {data, isError, isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        retry: false,
        refetchOnWindowFocus: false
    })

    return { data, isError, isLoading }
}