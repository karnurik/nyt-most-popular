import React, { useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { IArticleProps } from "./Article.properties";
import { PLACEHOLDER_IMAGE_URL } from "../../constants";
// import { TypographyStyled } from "./Articles.style";
import Typography from "@mui/material/Typography";

const Article = (props: IArticleProps) => {
    const { article } = props;

    const imageUrl = useMemo(() => {
        const firstMedia = article?.media?.[0];
        return firstMedia?.["media-metadata"]?.[1]?.url;
    }, [article]);

    return (
        <Card sx={{ width: 350, m: 2 }} data-testid='article-card'>
            <CardMedia
                component="img"
                height="140"
                src={imageUrl ?? PLACEHOLDER_IMAGE_URL}
                alt="article image"
            />
            <CardContent sx={{minHeight: '3rem'}}>
                {/* <TypographyStyled color="text.secondary">
                    {article?.abstract}
                </TypographyStyled> */}
                <Typography color="text.secondary">
                    {article?.abstract.length <= 75 ? article?.abstract: (article?.abstract.slice(0, 72) + "...")}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Article;