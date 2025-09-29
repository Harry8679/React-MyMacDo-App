import { Box, Card, Fade, Typography } from '@mui/material';
import Logo from "../components/Logo";
import { useStyles } from '../styles';

const Choose = () => {
    const styles = useStyles();
    <Fade in={true}>
        <Box className={[styles.root, styles.navy]}>
            <Box className={[styles.main, styles.center]}>
                <Logo large></Logo>
                <Typography variant='h3' component='h3' className={styles.center} gutterBottom>Where will you be eating today ?</Typography>
                <Box className={styles.cards}>
                    <Card className={[styles.card, styles.space]}></Card>
                </Box>
            </Box>
        </Box>
    </Fade>
}

export default Choose;