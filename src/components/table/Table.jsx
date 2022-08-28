import React from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: 'Acer Nitro 5',
      img: 'https://m.media-amazon.com/images/I/71SCp57uORL._AC_SL1500_.jpg',
      customer: 'John Doe',
      date: '1 March',
      amount: 785,
      method: 'Credit Card',
      status: 'Approved',
    },
    {
      id: 2235235,
      product: 'Playstation 5',
      img: 'https://m.media-amazon.com/images/I/51lVhQLZn+L._AC_SL1456_.jpg',
      customer: 'John Wick',
      date: '1 March',
      amount: 900,
      method: 'Online Payment',
      status: 'Pending',
    },
    {
      id: 2345345,
      product: 'Redragon S101',
      img: 'https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SL1500_.jpg',
      customer: 'Abe Kebe',
      date: '1 March',
      amount: 50,
      method: 'Cash',
      status: 'Pending',
    },
    {
      id: 2357741,
      product: 'ASUS ROG Strix',
      img: 'https://m.media-amazon.com/images/I/71RK6+rx-xL._AC_SL1500_.jpg',
      customer: 'Jack Sparrow',
      date: '1 March',
      amount: 2000,
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 2342355,
      product: 'Razor Blade 15',
      img: 'https://m.media-amazon.com/images/I/61-ODJrgv6L._AC_SL1500_.jpg',
      customer: 'Jane Doe',
      date: '1 March',
      amount: 920,
      method: 'Credit Card',
      status: 'Approved',
    },
  ];

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={row.img} alt='' className='image' />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
