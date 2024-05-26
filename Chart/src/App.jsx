import './App.css';
import Sidebar from './Components/Sidebar';

import Chart from './Components/Chart';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import TableComp from './Components/TableComp';
import Footer from './Components/Footer';


function App() {
  return (
    <>
  
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
      <NavBar></NavBar>
        <div className="chart-section">
          <Chart />
          
     
        </div>
        <div className="table-section">
          <TableComp></TableComp>
          </div>
      </div>
     
    </div>
     <div>
     <Footer></Footer>
       </div>
       </>
  );
}

export default App;
