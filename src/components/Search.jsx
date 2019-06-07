import React from 'react'

const Search = ({onlyGreased,greasedFilterChangeHandler, updateSortBy}) => {
  return <div>
      <label htmlFor="greasedFilter">Show only greased</label>
      <input type="checkbox" 
				value={onlyGreased} 
				onChange={greasedFilterChangeHandler} 
				name="greasedFilter"
				/>
			<label>Sort by: </label>
			<select onChange={(e) => updateSortBy(e.target.value)}>
				<option value="none">none</option>
				<option value="name">name</option>
				<option value="weight">weight</option>
			</select>
    </div>
}

export default Search