import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import defaultImage from '../assets/no-image.jpg'; // Import default image

const DataTable = ({ data, columns, rowsPerPageOptions }) => {

  
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ field: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    // Initialize row data with isChecked state
    setRowData(data.map(row => ({ ...row, isChecked: false })));
  }, [data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset current page when searching
  };

  const handleSort = (field) => {
    let direction = 'asc';
    if (sortConfig.field === field && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ field, direction });
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAllChecked(checked);
    // Update the isChecked state of all rows
    const updatedRowData = rowData.map(row => ({ ...row, isChecked: checked }));
    setRowData(updatedRowData);
  };

  const handleRowCheckboxChange = (rowIndex) => {
    const updatedRowData = [...rowData];
    updatedRowData[rowIndex].isChecked = !updatedRowData[rowIndex].isChecked;
    setRowData(updatedRowData);
  };

  const filteredData = rowData.filter((row) =>
    columns.some((column) =>
      row[column.field].toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.field) {
      const fieldA = a[sortConfig.field];
      const fieldB = b[sortConfig.field];
      if (fieldA < fieldB) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (fieldA > fieldB) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Input for search */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 my-4 border border-gray-400 rounded-md"
      />
      {/* Table */}
      <table className='w-full bg-gray-300 py-4'>
        {/* Table header */}
        <thead className='bg-white border text-left'>
          <tr className='bg-slate-300'>
            {/* Checkbox column in thead */}
            <th className='border border-gray-400 p-2 w-[40px] text-center'>
              <input className='w-4 h-4 p-4' type="checkbox" onChange={handleSelectAll} checked={selectAllChecked} />
            </th>
            {/* Thumbnail image column */}
            <th className='border border-gray-400 p-2 w-[65px] text-center'></th>
            {/* Dynamic columns */}
            {columns.map((column) => (
              <th
                className={`border border-gray-400 p-2 text-base font-normal cursor-pointer ${column.field === 'name' ? 'w-40' : ''}`}
                key={column.field}
                onClick={() => handleSort(column.field)}
              >
                {column.header}
                {sortConfig.field === column.field && (
                  <span className='w-20 h-20 text-[10px]'>{sortConfig.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {/* Map through rows */}
          {currentRows.map((row, rowIndex) => (
            <tr className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} key={rowIndex}>
              {/* Checkbox column in tbody */}
              <td className='border border-gray-400 p-2 w-[40px] text-center'>
                <input className='w-4 h-4 p-4' type="checkbox" checked={row.isChecked} onChange={() => handleRowCheckboxChange(indexOfFirstRow + rowIndex)} />
              </td>
              {/* Thumbnail image column */}
              <td className='border border-gray-400 p-2 w-[65px] text-center'>
                <img src={row.thumbnail || defaultImage} alt="Thumbnail" style={{ width: '50px', height: '50px' }} />
              </td>
              {/* Dynamic columns */}
              {columns.map((column) => (
                <td className={`border border-gray-400 p-2 ${column.field === 'view' || column.field === 'edit' || column.field === 'delete' ? 'w-10' : ''}`} key={`${rowIndex}_${column.field}`}>
                  {column.field === 'view' && (
                    <button className="flex items-center text-xs text-blue-500 bg-blue-100 px-2 py-1 rounded" >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      {row[column.field]}
                    </button>
                  )}
                  {column.field === 'edit' && (
                    <button className="flex items-center text-xs text-green-500 bg-green-100 px-2 py-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                      {row[column.field]}
                    </button>
                  )}
                  {column.field === 'delete' && (
                    <div>
                      <button className="flex items-center text-xs text-red-500 bg-red-100 px-2 py-1 rounded">
                        {/* Delete icon SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-1">
                          {/* SVG path */}
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                        {row[column.field]}
                      </button>
                      
                   
                    </div>
                  )}
                  {column.field !== 'view' && column.field !== 'edit' && column.field !== 'delete' && row[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="pagination flex justify-center mt-4">
        {/* First page button */}
        <button className='bg-gray-100 border border-gray-200 px-4 py-1 mx-1' onClick={() => paginate(1)} disabled={currentPage === 1}>First</button>
        {/* Previous page button */}
        <button className='bg-gray-100 border border-gray-200 px-4 py-1 mx-1' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        {/* Page buttons */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            className={`px-3 py-1 mx-1  ${currentPage === index + 1 ? 'bg-slate-800 text-white' : 'bg-gray-200 border border-gray-300 text-black'}`}
            key={index}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        {/* Next page button */}
        <button className='bg-gray-100 border border-gray-200 px-4 py-1 mx-1' onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        {/* Last page button */}
        <button className='bg-gray-100 border border-gray-200 px-4 py-1 mx-1' onClick={() => paginate(totalPages)} disabled={currentPage === totalPages}>Last</button>
      </div>
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
    })
  ).isRequired,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
};

DataTable.defaultProps = {
  rowsPerPageOptions: [5, 10, 20],
};


export default DataTable;
