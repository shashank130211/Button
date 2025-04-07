import React from "react";
import DashboardFilters from "./components/DashboardFilters";
import "./App.css";

function App() {
  const handleFilterChange = (filters) => {
    console.log("Applied Filters:", filters);
  };

  return (
    <div className="App">
      <div className="dashboard-container">
        
        {/* Filter Sidebar */}
        <div className="filter-sidebar">
          <DashboardFilters onFilterChange={handleFilterChange} />
        </div>

        {/* Main Dashboard */}
        <div className="dashboard-content">
          <h1 className="dashboard-heading">Dashboard</h1>
          <div className="iframe-container">
            <iframe 
              className="powerbi-frame" 
              src="https://app.powerbi.com/view?r=eyJrIjoiMmUzYjg2NDgtYzU0MS00ZTNiLThlNDEtZTNlNmRlMDM3YzA4IiwidCI6IjE1M2RhMTU0LTY3NGMtNDViOS1hMWU1LWI0MGZhY2ZlOWU3MiJ9"
              title="Power BI Dashboard"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
