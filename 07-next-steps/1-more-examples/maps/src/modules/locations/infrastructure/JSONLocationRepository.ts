import { LocationRepository } from "../domain/LocationRepository";
import locationsJSON from "./locations.json";

interface ApiLocation {
	coords: {
		lat: number;
		lng: number;
	};
	name: string;
}

export function createJSONLocationRepository(): LocationRepository {
	return {
		getAll,
	};
}

async function getAll() {
	const locations = locationsJSON.map((location: ApiLocation) => ({
		latitude: location.coords.lat,
		longitude: location.coords.lng,
		name: location.name,
	}));

	return Promise.resolve(locations);
}
