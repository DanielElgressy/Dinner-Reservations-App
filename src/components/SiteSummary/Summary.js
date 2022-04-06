import classes from './Summary.module.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

const Summary = () => {
    return (
        <Card className={classes.summary}>
            <Typography variant='h2'>Delicious Food, Fully Customized</Typography>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs!
            </p>
            <Link to="/reservation">
                <Button variant="contained" >Reserve a Meal</Button>
            </Link>
        </Card>
    );
};

export default Summary;