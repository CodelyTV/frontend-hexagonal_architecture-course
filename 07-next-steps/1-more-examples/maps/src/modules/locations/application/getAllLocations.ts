import { Location } from "../domain/Location";
import { LocationRepository } from "../domain/LocationRepository";

export async function getAllCourses(locationRepository: LocationRepository): Promise<Location[]> {
	return locationRepository.getAll();
}
