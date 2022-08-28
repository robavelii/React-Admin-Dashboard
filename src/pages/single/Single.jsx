import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img
                src='https://img.freepik.com/free-photo/friendly-polite-good-looking-african-american-girl-glasses-with-curly-hair-striped-office-blouse-pointing-left-with-finger-gun-grinning-with-joy-giving-advice-where-go_176420-23347.jpg?w=996&t=st=1658946300~exp=1658946900~hmac=20c8ab71a94735aeda9e4a1753827c4a8fa06658a317fc14249d3d91689d1108'
                alt=''
                className='itemImg'
              />
              <div className='details'>
                <h1 className='itemTitle'>Jane Doe</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>janedoe@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+251 916-416-707</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Adress:</span>
                  <span className='itemValue'>Ferensay, Addis Ababa</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title='User Spending ( Last 6 Months)' />
          </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
