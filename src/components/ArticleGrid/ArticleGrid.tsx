import React from 'react';
import { IArticleGridProps } from './ArticleGrid.properties';
import Grid from '@mui/material/Grid';
import Article from '../Article';
import { range } from '../../helpers';
import ArticleSkeleton from '../Article/ArticleSkeleton';
import { Link } from 'react-router-dom';

const ArticleGrid = ({ loading, articles }: IArticleGridProps) => {
    return (
        <Grid container justifyContent={'center'} wrap="wrap">
            {loading && range(1, 20).map((i) => <ArticleSkeleton key={i} />)}
            {articles?.map((article, idx) => (
                <Link to={`/detail/${article?.id}`} key={idx} style={{ textDecoration: 'none' }}>
                    <Article article={article} />
                </Link>
            ))}
        </Grid>
    );
};

export default React.memo(ArticleGrid);