import React, { useState } from "react";

const DashboardFilters = ({ onFilterChange }) => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const cities = ["All", "Delhi", "Mumbai", "Kolkata", "Bangalore", "Chennai"];
  const categories = ["All", "Fast Food", "Fine Dining", "Cafes", "Desserts"];

  const handleFilterChange = () => {
    onFilterChange({ city: selectedCity, category: selectedCategory, searchQuery });
  };

  return (
    <div className="filter-container">
      <h2 className="filter-heading">Filters</h2>

      <div className="filter-group">
        <label>Select City</label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Select Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Search</label>
        <input
          type="text"
          placeholder="Search keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <button onClick={handleFilterChange} className="apply-filters">
        Apply Filters
      </button>
    </div>
  );
};

export default DashboardFilters;
