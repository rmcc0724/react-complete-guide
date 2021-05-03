import React from 'react'
import './ExpensesFilter.css';

///Listen to Onchange event
///The picked year is forwarded to the expenses component
///Store it in a state

  const ExpensesFilter = (props) => {

      // const [selectedYear, setYear] = useState('');

      const yearChangeHandler = (event) => {

      //   setYear(event.target.value);
        
      // const yearData = {
      //   year: selectedYear
      // }
      props.onYearChange(event.target.value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;