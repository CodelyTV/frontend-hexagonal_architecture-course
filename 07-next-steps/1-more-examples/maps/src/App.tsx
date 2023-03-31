import { createJSONLocationRepository } from "./modules/locations/infrastructure/JSONLocationRepository";
import { Locations } from "./sections/locations/Locations";

export function App() {
	const repository = createJSONLocationRepository();

	return (
		<div className="App">
			<Locations repository={repository} />
		</div>
	);
}
