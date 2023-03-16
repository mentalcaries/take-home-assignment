import './ImageDetailsPage.css';

export const ImageDetailsPage = ({ setSelectedArtwork, selectedArtwork }) => {
	const { imageId, imageDescription, imageAltText } = selectedArtwork;
	const handleBackButton = () => {
		setSelectedArtwork('');
	};

	const imageSrc = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;

	return (
		<div className="details">
			<button className="details__button" onClick={handleBackButton}>
				Back
			</button>
			<figure className="details__figure">
				<img alt={imageAltText} className="details__image" src={imageSrc} />
				<figcaption>{imageDescription}</figcaption>
			</figure>
			<p className="details__title"></p>
		</div>
	);
};
