import React, { useState, useEffect } from 'react';
import '../css/Table.css'; // Import CSS file from the css folder
import '../utils/tablefilter.js';


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
      <div className='w-full flex justify-end'>
        <button id="reset-button" className='flex justify-center text-xs h-10 items-center my-1 mx-1  w-[120px] bg-[#003D6A] text-white p-2' onClick={handleResetFilters}>Reset</button>
      </div>
      <div className="table-wrapper w-full">
        <table id="emp-table ">
          {/* Table header */}


          <div>
            <thead className='flex w-full justify-start'>
              <th className='w-[84px] '>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                No.
                </span>
              </th>

              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                Main Color
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                Size
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                X
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                T
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                D
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                D1
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                D2
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                H
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                H1
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                H2
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                H3
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                H4
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                A
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                A1
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                B
                </span>
              </th>
              <th className='w-[80px]'>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                <span className='h-[40px] flex items-center justify-center'>
                CAD
                </span>
              </th>
              <th className='w-[80px]'>
                <span>
                <select className="table-filter" onchange="filter_rows()">
                  <option value="all" />
                </select>
                </span>
                <span className='h-[40px] flex items-center justify-center'>
                CART
                </span>
              </th>
            </thead>
          </div>
          {/* Table body */}
          <div className='w-full'>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td className='w-[80px]'><a href='/productsingle'>{item.orderNo}</a></td>
                  <td className='w-[80px]'>{item.mainColor}</td>
                  <td className='w-[80px]'>{item.size}</td>
                  <td className='w-[80px]'>{item.x}</td>
                  <td className='w-[80px]'>{item.t}</td>
                  <td className='w-[80px]'>{item.d}</td>
                  <td className='w-[80px]'>{item.d1}</td>
                  <td className='w-[80px]'>{item.d2}</td>
                  <td className='w-[80px]'>{item.x}</td>
                  <td className='w-[80px]'>{item.t}</td>
                  <td className='w-[80px]'>{item.d}</td>
                  <td className='w-[80px]'>{item.d1}</td>
                  <td className='w-[80px]'>{item.d2}</td>
                  <td className='w-[80px]'>{item.d}</td>
                  <td className='w-[80px]'>{item.d1}</td>
                  <td className='w-[80px]'>{item.d2}</td>
                  <td className='w-[80px]'> 
                    <span className='h-[40px] flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
</svg>

                    </span>
                  </td>
                  <td className='w-[80px]'> 
                    <span className='h-[40px] flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </table>
      </div>
    </div>
  );
};

export default Table;
