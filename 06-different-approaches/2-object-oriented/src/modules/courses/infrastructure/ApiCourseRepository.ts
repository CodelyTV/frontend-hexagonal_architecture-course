import { Primitives } from "@codelytv/primitives-type";

import { Course } from "../domain/Course";
import { CourseId } from "../domain/CourseId";
import { CourseRepository } from "../domain/CourseRepository";

export class ApiCourseRepository implements CourseRepository {
	async save(course: Course): Promise<void> {
		const coursePrimitives = course.toPrimitives();

		await fetch("https://awesome-codely-courses.com/api/courses/create", {
			method: "POST",
			body: JSON.stringify({
				id: coursePrimitives.id,
				name: coursePrimitives.title,
				imageUrl: coursePrimitives.imageUrl,
			}),
		});
	}

	async get(id: CourseId): Promise<Course | null> {
		const course = await fetch(`https://awesome-codely-courses.com/api/courses/${id.value}`).then(
			(response) => response.json() as Promise<Primitives<Course>>
		);

		return Course.create(course);
	}

	async getAll(): Promise<Course[]> {
		const courses = await fetch("https://awesome-codely-courses.com/api/courses").then(
			(response) => response.json() as Promise<Primitives<Course>[]>
		);

		return courses.map((course) => Course.create(course));
	}
}
