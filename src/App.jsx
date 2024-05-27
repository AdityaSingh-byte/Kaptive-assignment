import "./App.css";
import Sidebar from "./Components/sidebar";

import Chart from "./Components/Chart";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import TableComp from "./Components/TableComp";
import Footer from "./Components/Footer";
import Setting from "./Components/Setting";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <>
          <div className="d-flex justify-content-end mt-3">
            <Setting />
          </div>
          <div className="chart-section ">
            <Chart />
          </div>
        </>
        <div className="table-section">
          <TableComp />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
