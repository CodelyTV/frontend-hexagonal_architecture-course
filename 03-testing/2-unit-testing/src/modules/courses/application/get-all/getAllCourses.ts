import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export function getAllCourses(courseRepository: CourseRepository): Course[] {
	return courseRepository.getAll();
}
