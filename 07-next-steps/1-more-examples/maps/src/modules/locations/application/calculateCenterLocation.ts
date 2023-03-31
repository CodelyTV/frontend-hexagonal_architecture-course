import { Location } from "../domain/Location";

export function calculateCenterLocation(locations: Location[]): {
	latitude: number;
	longitude: number;
} {
	if (locations.length === 0) {
		throw new Error("Cannot calculate center of empty array.");
	}

	const { latitudeSum, longitudeSum } = locations.reduce(
		(acc, { latitude, longitude }) => {
			return {
				latitudeSum: acc.latitudeSum + latitude,
				longitudeSum: acc.longitudeSum + longitude,
			};
		},
		{ latitudeSum: 0, longitudeSum: 0 }
	);

	const latitudeAverage = latitudeSum / locations.length;
	const longitudeAverage = longitudeSum / locations.length;

	return { latitude: latitudeAverage, longitude: longitudeAverage };
}
