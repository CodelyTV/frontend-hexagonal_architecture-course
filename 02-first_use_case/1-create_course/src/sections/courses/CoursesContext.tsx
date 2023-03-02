import React, { useContext, useEffect, useState } from "react";

export interface ContextState {
	courses: { id: string; title: string; imageUrl: string }[];
	createCourse: (course: { title: string; imageUrl: string }) => void;
}

export const CoursesContext = React.createContext({} as ContextState);

export const CoursesContextProvider = ({ children }: React.PropsWithChildren) => {
	const [courses, setCourses] = useState<{ id: string; title: string; imageUrl: string }[]>([]);

	function create({ title, imageUrl }: { title: string; imageUrl: string }) {}

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
