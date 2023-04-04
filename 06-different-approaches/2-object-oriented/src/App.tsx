import { LocalStorageCourseRepository } from "./modules/courses/infrastructure/LocalStorageCourseRepository";
import { CoursesContextProvider } from "./sections/courses/CoursesContext";
import { CoursesList } from "./sections/courses/CoursesList";
import { CreateCourseForm } from "./sections/courses/CreateCourseForm";

export function App() {
	const repository = new LocalStorageCourseRepository();

	return (
		<CoursesContextProvider repository={repository}>
			<div className="App">
				<h1>🍍 Codely</h1>
				<CoursesList />
				<CreateCourseForm />
			</div>
		</CoursesContextProvider>
	);
}
