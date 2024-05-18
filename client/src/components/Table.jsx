import React, { useState, useEffect } from 'react';
import '../css/Table.css'; // Import CSS file from the css folder

const Table = () => {
  const [filterValues, setFilterValues] = useState({});
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [uniqueValues, setUniqueValues] = useState({});

  useEffect(() => {
    // Simulate fetching table data from an API or database
    const fetchData = async () => {
      const data = [
        { orderNo: 'K0123.0031', mainColor: 'Black satin finish', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14, CAD: 'Info 1 - 1', Order: 'Info 2 - 1' },
        { orderNo: 'K0123.0032', mainColor: 'Pure orange RAL 2004', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14, CAD: 'Info 1 - 2', Order: 'Info 2 - 2' },
        // Add more dummy data as needed
      ];
      setTableData(data);
      setFilteredData(data); // Initialize filteredData with full table data

      // Calculate unique values for filters
      const uniqueVals = {};
      data.forEach(row => {
        Object.keys(row).forEach(col => {
          if (!uniqueVals[col]) uniqueVals[col] = [];
          if (!uniqueVals[col].includes(row[col])) uniqueVals[col].push(row[col]);
        });
      });
      setUniqueValues(uniqueVals);
      filterRows(data, filterValues); // Call filterRows with initial data
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterRows(tableData, filterValues);
  }, [filterValues, tableData]);

  const filterRows = (data, filters) => {
    if (Object.keys(filters).length === 0) {
      setFilteredData(data); // Show all data if no filters are applied
    } else {
      let filtered = data;
      Object.keys(filters).forEach(col => {
        if (filters[col] && filters[col] !== "all") {
          filtered = filtered.filter(item => item[col] === filters[col]);
        }
      });
      setFilteredData(filtered);
    }
  };

  const handleFilterChange = (col, event) => {
    const { value } = event.target;
    setFilterValues(prevValues => ({
      ...prevValues,
      [col]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilterValues({});
    setFilteredData(tableData); // Reset to full table data
  };

  return (
    <div className="outer-wrapper">
      <div className='w-full flex justify-end'>
        <button id="reset-button" className='flex justify-center text-xs h-10 items-center my-1 mx-1 w-[120px] bg-[#003D6A] text-white p-2' onClick={handleResetFilters}>Reset</button>
      </div>
      <div className="table-wrapper w-full">
        <table id="emp-table">
          {/* Table header */}
          <thead>
            <tr>
              {Object.keys(tableData[0] || {}).map((col, index) => (
                <th key={index} className='w-auto' col-index={index + 1}>
                  {col !== 'CAD' && col !== 'Order' && (
                    <select className="table-filter text-gray-800" value={filterValues[col] || "all"} onChange={(e) => handleFilterChange(col, e)}>
                      <option value="all ">All</option>
                      {(uniqueValues[col] || []).map((value, i) => (
                        <option key={i} value={value}>{value}</option>
                      ))}
                    </select>
                  )}
                  <span className='h-[40px] flex items-center justify-center'>{col === 'CAD' ? 'CAD' : col === 'Order' ? 'Order' : col}</span>
                </th>
              ))}
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                {Object.keys(item).map((col, i) => (
                  <td key={i} className='w-[80px] text-center'>
                    {col === 'orderNo' ? (
                      <a href="/productsingle">{item[col]}</a>
                    ) : col === 'CAD' ? (
                      <span className='flex justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                      </span>
                    ) : col === 'Order' ? (
                      <span className='flex justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                      </span>
                    ) : (
                      item[col]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
