import { Course } from "../domain/Course";
import { CourseRepository } from "../domain/CourseRepository";

export function createLocalStorageCourseRepository(): CourseRepository {
	return {
		save,
		get,
		getAll,
	};
}

async function save(course: Course) {
	const courses = getAllFromLocalStorage();

	courses.set(course.id, course);
	localStorage.setItem("courses", JSON.stringify(Array.from(courses.entries())));

	await Promise.resolve();
}

async function get(id: string) {
	const courses = getAllFromLocalStorage();
	const course = courses.get(id);

	if (!course) {
		return Promise.resolve(null);
	}

	return Promise.resolve(course);
}

async function getAll() {
	const courses = getAllFromLocalStorage();

	return Promise.resolve(Array.from(courses.values()));
}

function getAllFromLocalStorage(): Map<string, Course> {
	const courses = localStorage.getItem("courses");

	if (courses === null) {
		return new Map();
	}

	const map = new Map(JSON.parse(courses) as Iterable<[string, Course]>);

	return map;
}
