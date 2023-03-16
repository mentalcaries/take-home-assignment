import './App.css';
import { useState } from 'react';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { SearchResults } from './SearchResults';
import { ImageDetailsPage } from './ImageDetailsPage';

export const App = () => {
	const [results, setResults] = useState([]);
	const [selectedArtwork, setSelectedArtwork] = useState('');

	const onSearchSubmit = (query) => {
		searchArtworks(query).then((json) => {
			setResults(json);
		});
	};

	console.log(results);
	console.log(selectedArtwork);
	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{!selectedArtwork ? (
				<>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<SearchResults
						results={results}
						setSelectedArtwork={setSelectedArtwork}
					/>
				</>
			) : (
				<ImageDetailsPage
					selectedArtwork={selectedArtwork}
					setSelectedArtwork={setSelectedArtwork}
				/>
			)}

			<Footer />
		</div>
	);
};
