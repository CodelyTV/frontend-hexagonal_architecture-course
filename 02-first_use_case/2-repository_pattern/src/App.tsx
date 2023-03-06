import { CoursesContextProvider } from "./sections/courses/CoursesContext";
import { CoursesList } from "./sections/courses/CoursesList";
import { CreateCourseForm } from "./sections/courses/CreateCourseForm";

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
