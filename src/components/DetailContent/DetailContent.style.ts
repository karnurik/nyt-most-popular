
import { styled } from 'styled-components';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

export const Label = styled(Typography)`
    font-weight: bold;
`;

export const DetailContainer = styled(Paper)`
    display: flex;
    flex-direction: column;
    margin: 5rem;
    padding: 5rem;
    align-items: center;
    justify-content: center;
`;