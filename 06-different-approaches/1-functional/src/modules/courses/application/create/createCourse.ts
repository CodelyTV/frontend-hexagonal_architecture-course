import { Course, ensureCourseIsValid } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export function createCourse(courseRepository: CourseRepository) {
	return async function (course: Course): Promise<void> {
		ensureCourseIsValid(course);

		await courseRepository.save(course);
	};
}
