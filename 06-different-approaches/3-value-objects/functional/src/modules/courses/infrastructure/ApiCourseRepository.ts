import { Course } from "../domain/Course";
import { CourseRepository } from "../domain/CourseRepository";

export function createApiCourseRepository(): CourseRepository {
	return {
		save,
		get,
		getAll,
	};
}

async function save(course: Course) {
	await fetch("/api/courses/create", {
		method: "POST",
		body: JSON.stringify({
			id: course.id,
			name: course.title,
			imageUrl: course.imageUrl,
		}),
	});
}

async function get(id: string) {
	const course = await fetch(`/api/courses/${id}`).then(
		(response) => response.json() as Promise<Course>
	);

	return course;
}

async function getAll() {
	const courses = await fetch("/api/courses").then(
		(response) => response.json() as Promise<Course[]>
	);

	return courses;
}
