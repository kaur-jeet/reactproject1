import React from 'react'
import './ExpensesFilter.css';
const ExpensesFilter = (props) => {
const DropDownHandler=(event)=>
props.OnFilterChange(event.target.value);
  return (
    <div className='expense-filter'>
      <label className='expense-label'> FILTER OF YEAR</label>
      <select  className='year-select' onChange={DropDownHandler}>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
         <option value='2022'>2022</option> 
         <option value='2023'>2023</option>
         <option value='2024'>2024</option>
         <option value='2025'>2025</option>
      </select>
    </div>
  )
}

export default ExpensesFilter
