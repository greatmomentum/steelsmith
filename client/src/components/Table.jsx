import React, { useState, useEffect } from 'react';
import '../css/Table.css'; // Import CSS file from the css folder


const Table = () => {
  const [filterValues, setFilterValues] = useState({}); // State to store filter values
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Simulate fetching table data from an API or database
    const fetchData = async () => {
      // Example of dummy data
      const data = [
        { orderNo: 'K0123.0031', mainColor: 'Black satin finish', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0032', mainColor: 'Pure orange RAL 2004', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0031', mainColor: 'Black satin finish', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0032', mainColor: 'Pure orange RAL 2004', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0031', mainColor: 'Black satin finish', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0032', mainColor: 'Pure orange RAL 2004', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0031', mainColor: 'Black satin finish', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0032', mainColor: 'Pure orange RAL 2004', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0031', mainColor: 'Black satin finish', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0032', mainColor: 'Pure orange RAL 2004', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0031', mainColor: 'Black satin finish', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0032', mainColor: 'Pure orange RAL 2004', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0031', mainColor: 'Black satin finish', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0032', mainColor: 'Pure orange RAL 2004', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0031', mainColor: 'Black satin finish', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        { orderNo: 'K0123.0032', mainColor: 'Pure orange RAL 2004', size: 0, x: 'M3', t: 9, d: 10, d1: 13, d2: 14 },
        // Add more dummy data as needed
      ];
      setTableData(data);
    };

    fetchData();
  }, []); // Run once on component mount

  const getUniqueValuesFromColumn = () => {
    // Your logic for getting unique values from columns
    // You may need to modify this to work with React's DOM structure
  };

  const filterRows = () => {
    // Your logic for filtering rows based on filterValues
    // You may need to modify this to work with React's DOM structure and state management
  };

  const handleFilterChange = (colIndex, event) => {
    const { value } = event.target;
    setFilterValues(prevValues => ({
      ...prevValues,
      [colIndex]: value,
    }));
    filterRows(); // Call filtering logic when filter value changes
  };

  const handleResetFilters = () => {
    setFilterValues({});
    resetTable(); // Call logic to reset table rows
  };

  const resetTable = () => {
    // Your logic to reset table rows
    // You may need to modify this to work with React's DOM structure
  };

  return (
    <div className="outer-wrapper">
      <div className="table-wrapper">
        <table id="emp-table">
          {/* Table header */}
          <thead>
            <tr>
              <th>Order No.</th>
              <th>Main Color</th>
              <th>Size</th>
              <th>X</th>
              <th>T</th>
              <th>D</th>
              <th>D1</th>
              <th>D2</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.orderNo}</td>
                <td>{item.mainColor}</td>
                <td>{item.size}</td>
                <td>{item.x}</td>
                <td>{item.t}</td>
                <td>{item.d}</td>
                <td>{item.d1}</td>
                <td>{item.d2}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Reset button */}
        <button id="reset-button" onClick={handleResetFilters}>Reset</button>
      </div>
    </div>
  );
};

export default Table;
