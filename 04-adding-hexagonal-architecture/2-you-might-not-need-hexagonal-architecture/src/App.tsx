import { CreateCourseForm } from "./sections/courses/create/CreateCourseForm";
import { CoursesList } from "./sections/courses/list/CoursesList";
import { CoursesContextProvider } from "./sections/courses/shared/CoursesContext";

export function App() {
	return (
		<CoursesContextProvider>
			<div className="App">
				<h1>🍍 Codely</h1>
				<CoursesList />
				<CreateCourseForm />
			</div>
		</CoursesContextProvider>
	);
}
