import { Course } from "./Course";

export async function saveCourse(course: Course): Promise<void> {
	const courses = getAllFromLocalStorage();

	courses.set(course.id, course);
	localStorage.setItem("courses", JSON.stringify(Array.from(courses.entries())));

	await Promise.resolve();
}

export async function getCourse(id: string): Promise<Course | null> {
	const courses = getAllFromLocalStorage();
	const course = courses.get(id);

	if (!course) {
		return Promise.resolve(null);
	}

	return Promise.resolve(course);
}

export async function getAllCourses(): Promise<Course[]> {
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
