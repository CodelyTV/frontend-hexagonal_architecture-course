import { useEffect, useRef } from "react";

import { Location } from "../../modules/locations/domain/Location";

interface Coordinates {
	lat: number;
	lng: number;
}

export function Map({ locations, center }: { locations: Location[]; center: Coordinates }) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!ref.current) {
			throw new Error("map unavailable");
		}
		const map: google.maps.Map = new google.maps.Map(ref.current, {
			center,
			zoom: 11,
		});

		(google.maps.importLibrary("marker") as Promise<google.maps.MarkerLibrary>)
			.then(({ Marker }) => {
				locations.forEach((location) => {
					new Marker({
						map,
						position: {
							lat: location.latitude,
							lng: location.longitude,
						},
						title: location.name,
					});
				});
			})
			.catch(() => {
				throw new Error("Unable to load markers");
			});
	}, []);

	return <div ref={ref} style={{ width: "100%", height: "30rem" }}></div>;
}
