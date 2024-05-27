import "../styles/chart.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: [
      "2015-16",
      "2016-17",
      "2017-18",
      "2018-19",
      "2019-20",
      "2020-21",
      "2021-22",
      "2022-23",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [100, 260, 120, 37, 100, 10, 190, 95],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
      {
        label: "COGS",
        data: [150, 200, 280, 150, 150, 180, 120, 90],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Gross Profit",
        data: [120, 150, 90, 10, 30, 160, 60, 70],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Company Financial Data",
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOut",
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-box">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
