import { Course } from "./Course";
import { CourseId } from "./CourseId";

export interface CourseRepository {
	save(course: Course): Promise<void>;

	get(id: CourseId): Promise<Course | null>;

	getAll(): Promise<Course[]>;
}
