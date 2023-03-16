import './SearchResults.css';

export const SearchResults = ({ results, setSelectedArtwork }) => {
	const handleSelectImage = (imageDetails) => {
		setSelectedArtwork(imageDetails);
	};

	return (
		<div>
			<p className="results__text">Results:</p>
			<ul className="results__list">
				{results.length === 0 ? (
					<p className="results__text">No results found</p>
				) : (
					results.map((result) => (
						<li key={result.id}>
							<button
								className="results__button"
								onClick={() =>
									handleSelectImage({
										imageId: result.image_id,
										imageDescription: result.title,
										imageAltText: result.thumbnail.alt_text,
									})
								}
							>
								{result.title} - {result.artist_title}
							</button>
						</li>
					))
				)}
			</ul>
		</div>
	);
};
