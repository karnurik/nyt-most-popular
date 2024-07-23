import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import DetailContent from '../DetailContent';
import { useFetchMostViewedArticles } from '../../api/article';

const ArticleDetail = () => {
    const { id = '0' } = useParams<{ id?: string }>();
    const { data: articlesData } = useFetchMostViewedArticles();

    const articleData = useMemo(() => articlesData?.results?.find((a) => a.id === Number(id)), [articlesData, id])

    return (<DetailContent article={articleData} />);
};

export default ArticleDetail;