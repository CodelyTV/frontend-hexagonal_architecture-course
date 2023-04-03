import { Course } from "./Course";

export interface CourseRepository {
	save: (course: Course) => void | Promise<void>;
	get: (id: string) => Course | null | Promise<Course | null>;
	getAll: () => Course[] | Promise<Course[]>;
}
