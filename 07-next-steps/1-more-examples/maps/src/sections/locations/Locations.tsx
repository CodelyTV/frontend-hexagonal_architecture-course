import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useState } from "react";

import { calculateCenterLocation } from "../../modules/locations/application/calculateCenterLocation";
import { Location } from "../../modules/locations/domain/Location";
import { LocationRepository } from "../../modules/locations/domain/LocationRepository";
import { Map } from "./Map";

export function Locations({ repository }: { repository: LocationRepository }) {
	const [locations, setLocations] = useState<Location[]>([]);
	const apiKey = process.env.GOOGLE_API_KEY ?? "";
	const [center, setCenter] = useState({
		lat: 0,
		lng: 0,
	});

	useEffect(() => {
		repository
			.getAll()
			.then((locations) => {
				const centerLocation = calculateCenterLocation(locations);
				setLocations(locations);
				setCenter({
					lat: centerLocation.latitude,
					lng: centerLocation.longitude,
				});
			})
			.catch(() => {
				throw new Error();
			});
	});

	return (
		<section>
			<h1>🗺️ Available Locations</h1>
			{locations.length && (
				<Wrapper apiKey={apiKey}>
					<Map locations={locations} center={center} />
				</Wrapper>
			)}
		</section>
	);
}
