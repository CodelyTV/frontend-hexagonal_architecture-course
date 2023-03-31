import { Location } from "./Location";

export interface LocationRepository {
	getAll: () => Promise<Location[]>;
}
