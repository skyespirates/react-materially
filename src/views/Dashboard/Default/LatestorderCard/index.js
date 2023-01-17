import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardHeader, Divider, Grid, CardContent, CardActions, Chip, IconButton, Typography, Button } from '@material-ui/core';

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { gridSpacing } from '../../../../store/constant';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        minWidth: 350,
    },
    imgproduct: {
        width: '20px',
        height: 'auto',
    },
});

function createData(customer, cid, product, quantity, date, status, statuscolor) {
    return { customer, cid, product, quantity, date, status, statuscolor };
}

const rows = [
    createData('John Deo', '#81412314', 'Moto G5', '10', '17-2-2017', 'Pending', 'secondary'),
    createData('Jenny William', '#68457898', 'iPhone 8', '16', '20-2-2017', 'Paid', 'primary'),
    createData('Lori Moore', '#45457898', 'Redmi 4', '20', '17-2-2017', 'Success', 'secondary'),
    createData('Austin Pena', '#62446232', 'Jio', '15', '25-4-2017', 'Failed', 'primary'),
];

export default function LatestorderCard() {
    const classes = useStyles();
    let count = 0;
    const handleClick = () => {
        count++;
        console.log(`Clicked ${count} times`);
    };
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title={
                            <Typography component="div" className="card-header">
                                Newest Order
                            </Typography>
                        }
                    />
                    <Divider />
                    <CardContent className="p-0">
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Customer</TableCell>
                                        <TableCell>Order Id</TableCell>
                                        <TableCell>Product</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{row.customer}</TableCell>
                                            <TableCell>{row.cid}</TableCell>
                                            <TableCell>{row.product}</TableCell>
                                            <TableCell>{row.quantity}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>
                                                <Chip color={row.statuscolor} label={row.status} size="small" />
                                            </TableCell>
                                            <TableCell>
                                                <Link to="/widget/statistic">
                                                    <IconButton color="primary">
                                                        <EditOutlinedIcon />
                                                    </IconButton>
                                                </Link>
                                                <Link to="/widget/data">
                                                    <IconButton color="inherit">
                                                        <DeleteOutlineOutlinedIcon />
                                                    </IconButton>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                    <CardActions className="f-right">
                        <Button variant="text" size="small" color="primary">
                            View all Orders
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}
