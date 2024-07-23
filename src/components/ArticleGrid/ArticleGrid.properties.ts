import { IArticle } from "../../api/types";

export interface IArticleGridProps {
    loading: boolean;
    articles: IArticle[];
}