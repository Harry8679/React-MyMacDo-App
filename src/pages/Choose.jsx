import { Box, Fade, Typography } from '@mui/material';
import Logo from "../components/Logo";
import { useStyles } from '../styles';

const Choose = () => {
    const styles = useStyles();
    <Fade in={true}>
        <Box className={[styles.root, styles.navy]}>
            <Logo large></Logo>
            <Typography>Where will you be eating today ?</Typography>
        </Box>
    </Fade>
}

export default Choose;