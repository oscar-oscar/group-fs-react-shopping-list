import './ShoppingListItem.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

function ShoppingListItem({ shoppingItem }) {

    return (
        <Grid item>
            <Card>
                {/*  sx={{inline style goes here}} --or-- className='center" */}
                <CardContent sx={{'text-align': 'center'}}>
                {/* <CardContent className='center'> */}

                    <Typography>
                        {shoppingItem.name}
                    </Typography>

                    <Typography>
                        {shoppingItem.quantity} {shoppingItem.unit}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button>Buy</Button>
                    <Button>Remove</Button>
                </CardActions>
            </Card>
        </Grid>
    )

}

export default ShoppingListItem;