import { Course } from "./Course";

export interface CourseRepository {
	save: (course: Course) => void;
}
