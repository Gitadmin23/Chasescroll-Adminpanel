import { fetchSecureData, fetchUnsecureData } from "@/helpers/services/api";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

interface UseFetchDataOptions {
    endpoint: string;
    name?: string;
    params?: Record<string, unknown>;
    id?: string | number;
    queryKey?: (string | number | undefined)[];
    enable?: boolean;
}

export const useFetchData = <T>({
    endpoint,
    name,
    params,
    id,
    queryKey = [],
    enable = true,
}: UseFetchDataOptions): UseQueryResult<T> => {
    return useQuery<T>({
        queryKey: [name, endpoint, id, params, ...queryKey],
        queryFn: () => fetchSecureData<T>(endpoint, params),
        enabled: enable,
    });
};

export const useUnsecureFetchData = <T>(
    endpoint: string,
    name: string
): UseQueryResult<T> => {
    return useQuery<T>({
        queryKey: [name, endpoint],
        queryFn: () => fetchUnsecureData<T>(endpoint),
    });
};
