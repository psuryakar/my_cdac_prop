import React, { useState } from 'react';
import './categoryList.css'

function CategoryList() {
  const [filters, setFilters] = useState({
    area: { min: '', max: '' },
    possessionStatus: '',
    subPropertyType: '',
    saleType: '',
    // Add more filter options as needed
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleApplyFilters = () => {
    // Send the filters to the PropertyList component to fetch filtered properties
    console.log('Applied filters:', filters);
  };

  return (
    <div className="category-list">
      

      <div className="horizontal-filters">
        {/* Area */}
        <div className="form-group">
          <label>Covered Area (sqft)</label>
          <div className="input-group">
            <input type="text" className="form-control" name="minArea" placeholder="Min" value={filters.area.min} onChange={handleFilterChange} />
            <span className="input-group-text">-</span>
            <input type="text" className="form-control" name="maxArea" placeholder="Max" value={filters.area.max} onChange={handleFilterChange} />
          </div>
        </div>

        {/* Possession Status */}
        <div className="form-group">
          <label>Possession Status</label>
          <select className="form-control" name="possessionStatus" value={filters.possessionStatus} onChange={handleFilterChange}>
            <option value="">Select</option>
            <option value="Ready To Move">Ready To Move</option>
            <option value="Under Construction">Under Construction</option>
          </select>
        </div>

        {/* Sub Property Type */}
        <div className="form-group">
          <label>Sub Property Type</label>
          <select className="form-control" name="subPropertyType" value={filters.subPropertyType} onChange={handleFilterChange}>
            <option value="">Select</option>
            <option value="Multistorey Apartment">Multistorey Apartment</option>
            <option value="Builder Floor Apartment">Builder Floor Apartment</option>
            {/* Add more options */}
          </select>
        </div>

        {/* Sale Type */}
        <div className="form-group">
          <label>Sale Type</label>
          <select className="form-control" name="saleType" value={filters.saleType} onChange={handleFilterChange}>
            <option value="">Select</option>
            <option value="New">New</option>
            <option value="Resale">Resale</option>
          </select>
        </div>
      

      <div className="form-group">
          <label></label>
          <button className="btn btn-primary" onClick={handleApplyFilters}>Apply Filters</button>
      </div>
    </div>

      {/* Apply Filters Button
      <button className="btn btn-primary" onClick={handleApplyFilters}>Apply Filters</button> */}
    </div>
  );
}

export default CategoryList;
