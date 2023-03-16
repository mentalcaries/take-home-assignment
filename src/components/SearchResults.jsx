import React from 'react';

export const SearchResults = ({ results, setSelectedArtwork }) => {
	const handleSelectImage = (imageId) => {
		setSelectedArtwork(imageId);
	};

	return (
		<div>
			Results:
			<ul className="results__list">
				{results.map((result) => (
					<li key={result.id}>
						<button onClick={() => handleSelectImage(result.image_id)}>
							{result.title} - {result.artist_title}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
