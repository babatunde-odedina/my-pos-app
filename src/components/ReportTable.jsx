const ReportTable = ({ headers, data }) => {
  return (
    <div className='px-4 py-2'>
      <table className='w-full border border-gray-300'>
        <thead>
          <tr className='bg-gray-200 text-textColor'>
            {headers.map((header, index) => (
              <th key={index} className='border border-gray-300 py-2 px-4'>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='text-textColor'>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex} className='border border-gray-300 py-2 px-4'>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
