import "./App.css";
import SideBar from "./components/SideBar";


import "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";

import { Outlet } from "react-router-dom";

function App() {
  var options = {
    WMS: [
      {
        name: "Stock Movement",
        url: "http://localhost:3000/WMS/stock_movement",
      },
      { name: "Pick ticket", url: "http://localhost:3000/WMS/pick_ticket" },
      { name: "Receipt", url: "http://localhost:3000/WMS/receipt" },
    ],
    PM: [
      { name: "PM 1", url: "" },
      { name: "PM 1", url: "" },
      { name: "PM 1", url: "" },
    ],
    EDI: [
      { name: "EDI 1", url: "" },
      { name: "EDI 1", url: "" },
      { name: "EDI 1", url: "" },
    ],
  };

  var header_options = Object.keys(options);
  console.log(header_options);
  return (
    <div className="App">
      <header className="flex items-center justify-between bg-gray-300 p-4 m-2 rounded-lg">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-300 w-16 h-16 flex items-center justify-center m-1">
            <span>Logo</span>
          </div>
          <div className="text-4xl font-bold">Company Name</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-300 p-2 text-center">
            <div className="m-1">Login user name</div>
            <div className="m-1">Date</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} />
            <i class="fa-solid fa-gear"></i>
            <p>Settings</p>
          </div>
        </div>
      </header>
      <header>
        <div className="bg-gray-300 p-4 flex space-x-4 rounded-lg m-2 h-14">
          {header_options.map((x) => (
            <button className="headerr ">{x}</button>
          ))}
        </div>
      </header>

      <main className="flex flex-1 h-[100vh] ">
        <aside className="bg-gray-200 border-r-gray-800  p-4 w-1/4 rounded-lg m-2">
          <SideBar links={options.WMS} />
        </aside>

        <section className="Hero flex-1 p-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default App;
