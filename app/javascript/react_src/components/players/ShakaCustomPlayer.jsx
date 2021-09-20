import React, { useRef, useEffect } from 'react';
import ShakaPlayer from 'shaka-player-react'

function ShakaCustomPlayer(props) {
	const controllerRef = useRef(null);

	useEffect(() => {
		const {
			/** @type {shaka.Player} */ player,
			/** @type {shaka.ui.Overlay} */ ui,
			/** @type {HTMLVideoElement} */ videoElement
		} = controllerRef.current;

		async function loadAsset() {
			// Load an asset.
			await player.load(props.src);

			// Trigger play.
			videoElement.play();
		}

		loadAsset();
	}, []);

	return <ShakaPlayer ref={controllerRef} />;
}

export default ShakaCustomPlayer