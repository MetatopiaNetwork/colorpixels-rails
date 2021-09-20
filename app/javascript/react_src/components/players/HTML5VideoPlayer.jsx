import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function HTML5VideoPlayer(props) {
	const videoRef = useRef(null);
	const src = props.src;

	useEffect(() => {
		let hls;
		if (videoRef.current) {
			const video = videoRef.current;

			if (video.canPlayType("application/vnd.apple.mpegurl")) {
				// Some browers (safari and ie edge) support HLS natively
				video.src = src;
			} else if (Hls.isSupported()) {
				// This will run in all other modern browsers
				hls = new Hls();
				hls.loadSource(src);
				hls.attachMedia(video);
			} else {
				console.error("This is a legacy browser that doesn't support MSE");
			}
		}

		return () => {
			if (hls) {
				hls.destroy();
			}
		};
	}, [videoRef]);

	return (
		<video
			autoPlay
			controls
			controlslist="noremoteplayback"
			ref={videoRef}
			style={{ width: "100%" }}
		/>
	);
}