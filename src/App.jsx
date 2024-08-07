import BarChart from "./components/Bar";
import PieChart from "./components/Pie";
import { LineGraph } from "./components/Line";

const App = () => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="bg-white px-6 py-8 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3 h-[400px]">
          <h1 className="text-xl font-bold mb-4">Line Chart Example</h1>
          <div className="w-full h-full">
            <LineGraph />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3 h-[400px]">
          <h1 className="text-xl font-bold mb-4">Bar Chart Example</h1>
          <div className="w-full h-full">
            <BarChart />
          </div>
        </div>

        <div className="bg-white p-6 mt-4 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3 h-[400px]">
          <h1 className="text-xl font-bold mb-4">Pie Chart Example</h1>
          <div className="w-full h-full">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
