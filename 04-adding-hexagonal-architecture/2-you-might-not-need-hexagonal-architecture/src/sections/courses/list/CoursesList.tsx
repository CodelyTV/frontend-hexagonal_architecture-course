import { useCoursesContext } from "../shared/CoursesContext";
import { CourseCard } from "./CourseCard";
import styles from "./CoursesList.module.scss";

export function CoursesList() {
	const { courses } = useCoursesContext();

	return (
		<section>
			<h2>Current courses</h2>
			<div className={styles.list}>
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</section>
	);
}
