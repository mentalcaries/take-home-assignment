import './SearchForm.css';

import { useState } from 'react';

export const SearchForm = ({ onSearchSubmit }) => {
	const [query, setQuery] = useState('');

	function handleInputChange(evt) {
		setQuery(evt.target.value);
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		if (query.length < 2) return;
		onSearchSubmit(query);
		setQuery('');
	}

	return (
		<form className="Form" role="search" onSubmit={handleFormSubmit}>
			<label className="label" htmlFor="search-field">
				Search for some art
			</label>
			<input
				className="input"
				id="search-field"
				inputMode="search"
				name="query"
				required={true}
				type="text"
				value={query}
				onChange={handleInputChange}
			/>
			<button className="button" type="submit">
				Search
			</button>
		</form>
	);
};
