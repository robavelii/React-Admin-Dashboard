export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.img} alt='avatar' />
          {params.row.username}
        </div>
      );
    },
  },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'age', headerName: 'Age', width: 100 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

// temp data
export const userRows = [
  {
    id: 1,
    username: 'Snow',
    img: 'https://randomuser.me/api/portraits/men/16.jpg',
    status: 'active',
    email: '1snow@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'Jamie Lannister',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    email: '2snow@gmail.com',
    status: 'passive',
    age: 42,
  },
  {
    id: 3,
    username: 'Lannister',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    email: '2snow@gmail.com',
    status: 'passive',
    age: 42,
  },
  {
    id: 4,
    username: 'Stark',
    img: 'https://randomuser.me/api/portraits/men/30.jpg',
    email: '4snow@gmail.com',
    status: 'active',
    age: 24,
  },
  {
    id: 5,
    username: 'Targeriyan',
    img: 'https://randomuser.me/api/portraits/men/23.jpg',
    email: '5snow@gmail.com',
    status: 'passive',
    age: 25,
  },
  {
    id: 6,
    username: 'Jamie Lannister',
    img: 'https://randomuser.me/api/portraits/men/24.jpg',
    email: '2snow@gmail.com',
    status: 'passive',
    age: 42,
  },
  {
    id: 7,
    username: 'JArya Stark',
    img: 'https://randomuser.me/api/portraits/men/38.jpg',
    email: '7snow@gmail.com',
    status: 'active',
    age: 20,
  },
  {
    id: 8,
    username: 'Frances',
    img: 'https://randomuser.me/api/portraits/men/25.jpg',
    email: '8snow@gmail.com',
    status: 'passive',
    age: 35,
  },
  {
    id: 9,
    username: 'Roxane',
    img: 'https://randomuser.me/api/portraits/men/20.jpg',
    email: '9snow@gmail.com',
    status: 'pending',
    age: 46,
  },
  {
    id: 10,
    username: 'Roxie',
    img: 'https://randomuser.me/api/portraits/men/4.jpg',
    email: '10snow@gmail.com',
    status: 'acitve',
    age: 52,
  },
];
