import { API_KEY } from "./constants";
import { useFetch } from "./queryService";
import { IFetchArticleApiResult } from "./types";

export const useFetchMostViewedArticles = () => useFetch<IFetchArticleApiResult>(
    '1.json',
    { 'api-key': API_KEY },
    undefined,
    { staleTime: Infinity }
);