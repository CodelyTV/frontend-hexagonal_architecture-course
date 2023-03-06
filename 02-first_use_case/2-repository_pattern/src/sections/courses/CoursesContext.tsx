import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { createCourse } from "../../modules/courses/application/create/createCourse";
import { Course } from "../../modules/courses/domain/Course";

export interface ContextState {
	courses: { id: string; title: string; imageUrl: string }[];
	createCourse: (course: { title: string; imageUrl: string }) => void;
}

export const CoursesContext = React.createContext({} as ContextState);

export const CoursesContextProvider = ({ children }: React.PropsWithChildren) => {
	const [courses, setCourses] = useState<Course[]>([]);

	function create({ title, imageUrl }: { title: string; imageUrl: string }) {
		const id = (uuidv4 as () => string)(); // TODO: check uuid types

		createCourse({ id, title, imageUrl });
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
