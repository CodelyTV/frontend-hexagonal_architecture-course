import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { CourseCreator } from "../../modules/courses/application/create/CourseCreator";
import { AllCoursesGetter } from "../../modules/courses/application/get-all/AllCoursesGetter";
import { Course } from "../../modules/courses/domain/Course";
import { CourseRepository } from "../../modules/courses/domain/CourseRepository";

export interface ContextState {
	courses: Course[];
	createCourse: (course: { title: string; imageUrl: string }) => Promise<void>;
}

export const CoursesContext = React.createContext({} as ContextState);

export const CoursesContextProvider = ({
	children,
	repository,
}: React.PropsWithChildren<{ repository: CourseRepository }>) => {
	const allCoursesGetter = new AllCoursesGetter(repository);
	const [courses, setCourses] = useState<Course[]>([]);

	async function createCourse({ title, imageUrl }: { title: string; imageUrl: string }) {
		const courseCreator = new CourseCreator(repository);
		const uuid = (uuidv4 as () => string)(); // TODO: check uuid types

		await courseCreator.create(uuid, title, imageUrl);
		getCourses();
	}

	function getCourses() {
		allCoursesGetter.get().then((courses) => {
			setCourses(courses);
		});
	}

	useEffect(() => {
		getCourses();
	}, []);

	return (
		<CoursesContext.Provider value={{ courses, createCourse }}>{children}</CoursesContext.Provider>
	);
};

export const useCoursesContext = () => useContext(CoursesContext);
