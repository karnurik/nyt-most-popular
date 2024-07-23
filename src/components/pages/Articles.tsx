import React from 'react';
import ArticleGrid from '../ArticleGrid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useFetchMostViewedArticles } from '../../api/article';

const Articles = () => {
    
    const { isLoading, isFetched, data, error } = useFetchMostViewedArticles();
    const errorMessage = error ? `Error: ${error.message}` :  'Unable to fetch data (check API_KEY)';

    return (
        <Box>
            <Typography variant="h3" gutterBottom textAlign="center">
                NYT Most Popular Articles
            </Typography>
            {isFetched && !data ? <p>{errorMessage}</p> : null}
            <ArticleGrid loading={isLoading} articles={data?.results ?? []} />
        </Box>
    );
};

export default Articles;