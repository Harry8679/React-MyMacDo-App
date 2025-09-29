import { Box, Card, Fade, Typography } from '@mui/material';
import Logo from "../components/Logo";
import { useStyles } from '../styles';
import { CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import clsx from "clsx";

const Choose = () => {
    const styles = useStyles();
    <Fade in={true}>
        <Box className={[styles.root, styles.navy]}>
            <Box className={[styles.main, styles.center]}>
                <Logo large></Logo>
                <Typography variant='h3' component='h3' className={styles.center} gutterBottom>Where will you be eating today ?</Typography>
                <Box className={styles.cards}>
                    <Card className={[styles.card, styles.space]}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Eat in" image="/images/eatin.png" className={styles.media} />
                            <CardContent>
                                <Typography gutterBottom variant="h4" color="textPrimary" component="p">
                                    Eat In
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className={clsx(styles.card, styles.space)}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Eat in" image="/images/takeout.png" className={styles.media} />
                            <CardContent>
                                <Typography gutterBottom variant="h4" color="textPrimary" component="p">
                                    Take out
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Box>
        </Box>
    </Fade>
}

export default Choose;