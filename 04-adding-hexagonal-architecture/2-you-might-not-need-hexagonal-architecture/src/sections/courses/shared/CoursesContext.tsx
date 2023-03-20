import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Course, ensureCourseIsValid } from "./Course";
import { getAllCourses, saveCourse } from "./coursesService";

export interface ContextState {
	courses: Course[];
	createCourse: (course: { title: string; imageUrl: string }) => Promise<void>;
}

export const CoursesContext = React.createContext({} as ContextState);

export const CoursesContextProvider = ({ children }: React.PropsWithChildren) => {
	const [courses, setCourses] = useState<Course[]>([]);

	async function create({ title, imageUrl }: { title: string; imageUrl: string }) {
		const id = (uuidv4 as () => string)(); // TODO: check uuid types

		ensureCourseIsValid({ id, title, imageUrl });
		await saveCourse({ id, title, imageUrl });
		await getCourses();
	}

	async function getCourses() {
		const courses = await getAllCourses();
		setCourses(courses);
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
