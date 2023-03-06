import { Course } from "./Course";

export interface CourseRepository {
	save: (course: Course) => void;
	get: (id: string) => Course | null;
	getAll: () => Course[];
}
