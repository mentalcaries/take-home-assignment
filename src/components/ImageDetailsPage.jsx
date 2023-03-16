import React from 'react';

export const ImageDetailsPage = ({ setSelectedArtwork, selectedArtwork }) => {
	const handleBackButton = () => {
		setSelectedArtwork('');
	};

	const imageSrc = `https://www.artic.edu/iiif/2/${selectedArtwork}/full/843,/0/default.jpg`;

	return (
		<div>
			<button className="details__button" onClick={handleBackButton}>
				Back
			</button>
			<img alt="" className="details__image" src={imageSrc} />
			<p className="details__title"></p>
		</div>
	);
};
