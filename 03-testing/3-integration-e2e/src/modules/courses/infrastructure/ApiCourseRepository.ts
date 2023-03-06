import { Course } from "../domain/Course";
import { CourseRepository } from "../domain/CourseRepository";

const BASE_URL = process.env.API_BASE_URL ?? "http://localhost:8000";

export function createApiCourseRepository(): CourseRepository {
	return {
		save,
		get,
		getAll,
	};
}

async function save(course: Course) {
	await fetch(`${BASE_URL}/api/courses/create`, {
		method: "POST",
		body: JSON.stringify({
			id: course.id,
			name: course.title,
			imageUrl: course.imageUrl,
		}),
	});
}

async function get(id: string) {
	const course = await fetch(`${BASE_URL}/api/courses/${id}`).then(
		(response) => response.json() as Promise<Course>
	);

	return course;
}

async function getAll() {
	const courses = await fetch(`${BASE_URL}/api/courses`).then(
		(response) => response.json() as Promise<Course[]>
	);

	return courses;
}
