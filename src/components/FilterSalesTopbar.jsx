import { useState } from 'react';
import Button from './Button';

const FilterSalesTopbar = () => {
  const [duration, setDuration] = useState('This Week');
  const [location, setLocation] = useState('All Locations');
  const [operator, setOperator] = useState('All Operators');

  const [durationOpen, setDurationOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [operatorOpen, setOperatorOpen] = useState(false);

  const durations = ['This Week', 'Last Week', 'Last Month'];
  const locations = ['All Locations', 'Location 1', 'Location 2'];
  const operators = ['All Operators', 'Operator 1', 'Operator 2'];

  const toggleDurationDropdown = () => setDurationOpen(!durationOpen);
  const toggleLocationDropdown = () => setLocationOpen(!locationOpen);
  const toggleOperatorDropdown = () => setOperatorOpen(!operatorOpen);

  const handleDurationSelect = (d) => {
    setDuration(d);
    setDurationOpen(false); // Close the dropdown after selection
  };

  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setLocationOpen(false); // Close the dropdown after selection
  };

  const handleOperatorSelect = (op) => {
    setOperator(op);
    setOperatorOpen(false); // Close the dropdown after selection
  };

  return (
    <div className='pl-4 pr-4 pt-2 pb-2 mb-2 flex justify-between items-center bg-gray-100'>
      <div className='flex'>
        {/* Duration Dropdown */}
        <div className='relative mr-20'>
          <button
            className='px-3 py-1 rounded bg-white text-black'
            onClick={toggleDurationDropdown}
          >
            {duration}
          </button>
          {durationOpen && (
            <ul className='absolute left-0 mt-1 w-full bg-white border rounded shadow-md'>
              {durations.map((d, index) => (
                <li
                  key={index}
                  className='px-3 py-1 hover:bg-blue-500 hover:text-white cursor-pointer'
                  onClick={() => handleDurationSelect(d)}
                >
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Location Dropdown */}
        <div className='relative mr-20'>
          <button
            className='px-3 py-1 rounded bg-white text-black'
            onClick={toggleLocationDropdown}
          >
            {location}
          </button>
          {locationOpen && (
            <ul className='absolute left-0 mt-1 w-full bg-white border rounded shadow-md'>
              {locations.map((loc, index) => (
                <li
                  key={index}
                  className='px-3 py-1 hover:bg-blue-500 hover:text-white cursor-pointer'
                  onClick={() => handleLocationSelect(loc)}
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Operator Dropdown */}
        <div className='relative mr-20'>
          <button
            className='px-3 py-1 rounded bg-white text-black'
            onClick={toggleOperatorDropdown}
          >
            {operator}
          </button>
          {operatorOpen && (
            <ul className='absolute left-0 mt-1 w-full bg-white border rounded shadow-md'>
              {operators.map((op, index) => (
                <li
                  key={index}
                  className='px-3 py-1 hover:bg-blue-500 hover:text-white cursor-pointer'
                  onClick={() => handleOperatorSelect(op)}
                >
                  {op}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className='flex space-x-4'>
        <div className='flex space-x-4'>
          <Button>Preview Report</Button>
          <Button bgColor='bg-btnSecColor'>Download Report</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSalesTopbar;
