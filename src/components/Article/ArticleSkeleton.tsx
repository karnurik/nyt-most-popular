import React from 'react';
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import CardContent from "@mui/material/CardContent";

const ArticleSkeleton = () => {
    return (
        <Card sx={{ width: 350, m: 2 }}>
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            <CardContent>
                <Skeleton
                    sx={{ height: 10, mb: 1 }}
                    animation="wave"
                />
                <Skeleton
                    sx={{ height: 10, width: '80%' }}
                    animation="wave"
                />
            </CardContent>
        </Card>
    );
};

export default ArticleSkeleton;