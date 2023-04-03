import { Course, ensureCourseIsValid } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export async function createCourse(
	courseRepository: CourseRepository,
	course: Course
): Promise<void> {
	ensureCourseIsValid(course);

	await courseRepository.save(course);
}
