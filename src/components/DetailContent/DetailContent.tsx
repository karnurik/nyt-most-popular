import React, { useMemo } from 'react';
import { PLACEHOLDER_IMAGE_URL } from '../../constants';
import { Typography, CardMedia, Box, Chip } from '@mui/material';
import { DetailContainer, Label } from './DetailContent.style';
// import { useNavigate } from 'react-router-dom';
import { IDetailContentProps } from './DetailContent.properties';


const DetailContent = ({ article }: IDetailContentProps) => {
    // const navigate = useNavigate();

    const keywords = useMemo(() => {
        return article?.adx_keywords?.split(';').filter(Boolean) || [];
    }, [article]);

    const imageUrl = useMemo(() => {
        const firstMedia = article?.media?.[0];
        return firstMedia?.['media-metadata']?.[1]?.url || PLACEHOLDER_IMAGE_URL;
    }, [article]);

    // const handleBack = () => {
    //     navigate(-1);
    // };

    if (!article) {
        return (
            <DetailContainer>
                {/* <Button variant="contained" onClick={handleBack} sx={{ mb: '1rem' }}>Back</Button> */}
                <Typography variant="h5" textAlign={'center'}>
                    No Data
                </Typography>
            </DetailContainer>
        );
    }

    return (
        <div>
            
            <DetailContainer elevation={4}>
            {/* <Button variant="contained" onClick={handleBack} sx={{ mb: '1rem' }}>Back</Button> */}
                <Typography variant="h5" gutterBottom>
                    {article.title}
                </Typography>
                <CardMedia
                    component="img"
                    sx={{ m: 5, width: '100%', height: 'auto', objectFit: 'cover' }}
                    src={imageUrl}
                    alt="article image"
                />
                <Typography variant="body2" color="textSecondary">
                    {article.abstract}
                </Typography>
                <Label variant="body2" color="textSecondary">
                    Keywords:
                </Label>
                <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
                    {keywords.map((keyword, index) => (
                        <Chip key={index} label={keyword} sx={{ margin: '0.2rem' }} />
                    ))}
                </Box>
            </DetailContainer>
        </div>
    );
};

export default React.memo(DetailContent);