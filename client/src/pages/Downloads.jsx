import React, { useState } from 'react';

const Downloads = () => {
  const [activeTab, setActiveTab] = useState('CAD');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const data = [
    { id: 1, col1: 'Washers', col2: 'IGS Download', col3: 'STEP Download', col4: 'CAD Download', col5: '3D PDF' },
    { id: 2, col1: 'VTC-9092-HV-SP', col2: 'IGS Download', col3: 'STEP Download', col4: 'CAD Download', col5: '3D PDF' },
    { id: 3, col1: 'VTC-85150-UB-BS', col2: 'IGS Download', col3: 'STEP Download', col4: 'CAD Download', col5: '3D PDF' },
    { id: 4, col1: 'VTC-85150-UB', col2: 'IGS Download', col3: 'STEP Download', col4: 'CAD Download', col5: '3D PDF' },
    { id: 5, col1: 'VTC-85150-SF-BS', col2: 'IGS Download', col3: 'STEP Download', col4: 'CAD Download', col5: '3D PDF' },
    { id: 6, col1: 'VTC-85150-SF', col2: 'IGS Download', col3: 'STEP Download', col4: 'CAD Download', col5: '3D PDF' },
    { id: 7, col1: 'VTC-85150-SB-BS', col2: 'IGS Download', col3: 'STEP Download', col4: 'CAD Download', col5: '3D PDF' },
    { id: 8, col1: 'VTC-85150-SB', col2: 'IGS Download', col3: 'STEP Download', col4: 'CAD Download', col5: '3D PDF' },
    { id: 9, col1: 'VTC-8296-UB-FM', col2: 'IGS Download', col3: 'STEP Download', col4: 'CAD Download', col5: '3D PDF' },
    { id: 10, col1: 'VTC-7273-UB-FM', col2: 'IGS Download', col3: 'STEP Download', col4: 'CAD Download', col5: '3D PDF' },
  ];

  const data1 = [
    { id: 1, col1: '01. New Steel-Smith Comprehensive Catalogue 2022', col2: 'Download' },
    { id: 2, col1: '02. Vertical Hold Down Action', col2: 'Download' },
    { id: 3, col1: '03. Horizontal Hold Down Action', col2: 'Download' },
    { id: 4, col1: '04. All Black Clamps', col2: 'Download' },
    { id: 5, col1: '05. Roto Moulding', col2: 'Download' },
    { id: 6, col1: '06. Straight Line Action', col2: 'Download' },
    { id: 7, col1: '07. Pull Action Clamps', col2: 'Download' },
    { id: 8, col1: '08. Latch Clamps', col2: 'Download' },
    { id: 9, col1: '09. Squeeze Action & F Clamps', col2: 'Download' },
    { id: 10, col1: '10. Automotive Clamps', col2: 'Download' },
    { id: 11, col1: '11. Additional Locking Mechanism', col2: 'Download' },
    { id: 12, col1: '12. Pneumatic Clamps', col2: 'Download' },
    { id: 13, col1: '13. Swing Clamps', col2: 'Download' },
    { id: 14, col1: '14. Accessories', col2: 'Download' },
    { id: 15, col1: '15. Shimpacks', col2: 'Download' },
    { id: 16, col1: '16. Leveling Pads', col2: 'Download' },
    { id: 17, col1: '17. Clamping Devices', col2: 'Download' },
  ];


  return (
    <div class=" w-full bg-white mt-8  sm:py-8 lg:py-6">

      <div class="mb-14  bg-slate-100 py-6" >
        <span class="flex justify-center text-xl font-bold text-gray-800 lg:text-xl">Downloads</span>

        {/* <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p> */}
      </div>

      <div className='container'>
        {/* 1 */}
        <div className="flex justify-center">
          <button
            className={`py-1 px-4 ${activeTab === 'CAD' ? 'bg-[#003D6A] rounded text-lg w-[300px] h-[40px] text-white' : 'bg-gray-200 w-[300px] rounded mx-1 h-[40px] text-lg text-gray-700'
              }`}
            onClick={() => handleTabClick('CAD')}
          >
            <span className='flex justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
            </svg>
              CAD</span>
          </button>
          <button
            className={`py-1 px-4 ${activeTab === 'Catalogue' ? 'bg-[#003D6A] rounded text-lg w-[300px] h-[40px] text-white' : 'bg-gray-200 w-[300px] rounded text-lg mx-1 h-[40px] text-gray-700'
              }`}
            onClick={() => handleTabClick('Catalogue')}
          > <span className='flex justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
          </svg>
              Catalogue</span>

          </button>
        </div>

        <div className="mt-4 mb-20">
          {activeTab === 'CAD' && (
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-base text-white text-center">ID</th>
                  <th className="px-4 py-2 text-base text-white text-left">Filename</th>
                  <th className="px-4 py-2 text-base text-white">IGS</th>
                  <th className="px-4 py-2 text-base text-white">STEP</th>
                  <th className="px-4 py-2 text-base text-white">CAD</th>
                  <th className="px-4 py-2 text-base text-white">3D PDF</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td className="px-4 py-2 w-16 text-sm text-center text-gray-900">{row.id}</td>
                    <td className="px-4 py-2 w-auto text-base font-medium text-gray-900">{row.col1}</td>
                    <td className="px-4 py-2 w-36 text-sm text-center text-gray-900">{row.col2}</td>
                    <td className="px-4 py-2 w-40 text-sm text-center text-gray-900">{row.col3}</td>
                    <td className="px-4 py-2 w-44 text-sm text-center text-gray-900">{row.col4}</td>
                    <td className="px-4 py-2 w-32 text-sm text-center text-gray-900">{row.col5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'Catalogue' && (
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-base text-white text-center">ID</th>
                  <th className="px-4 py-2 text-base text-white text-left">Name</th>
                  <th className="px-4 py-2 text-base text-white text-left">Downloads</th>
                </tr>
              </thead>
              <tbody>
                {data1.map((row) => (
                  <tr key={row.id}>
                    <td className="px-4 py-2 w-26 text-sm text-center text-gray-900">{row.id}</td>
                    <td className="px-4 py-2 w-auto text-sm text-left text-gray-900">{row.col1}</td>
                    <td className="px-4 py-2 w-36 text-sm text-center text-gray-900">{row.col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
