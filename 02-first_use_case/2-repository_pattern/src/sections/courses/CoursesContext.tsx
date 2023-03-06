import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { createCourse } from "../../modules/courses/application/create/createCourse";
import { Course } from "../../modules/courses/domain/Course";
import { CourseRepository } from "../../modules/courses/domain/CourseRepository";

export interface ContextState {
	courses: Course[];
	createCourse: (course: { title: string; imageUrl: string }) => void;
}

export const CoursesContext = React.createContext({} as ContextState);

export const CoursesContextProvider = ({
	children,
	repository,
}: React.PropsWithChildren<{ repository: CourseRepository }>) => {
	const [courses, setCourses] = useState<Course[]>([]);

	function create({ title, imageUrl }: { title: string; imageUrl: string }) {
		const id = (uuidv4 as () => string)(); // TODO: check uuid types

		createCourse(repository, { id, title, imageUrl });
	}

	function getCourses() {
		setCourses([]);
	}

	useEffect(() => {
		getCourses();
	}, []);

	return (
		<CoursesContext.Provider value={{ courses, createCourse: create }}>
			{children}
		</CoursesContext.Provider>
	);
};

export const useCoursesContext = () => useContext(CoursesContext);
