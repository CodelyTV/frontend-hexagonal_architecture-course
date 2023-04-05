import { CourseCard } from "./CourseCard";
import { useCoursesContext } from "./CoursesContext";
import styles from "./CoursesList.module.scss";

export function CoursesList() {
	const { courses } = useCoursesContext();

	return (
		<section>
			<h2>Current courses</h2>
			<div className={styles.list}>
				{courses.map((course) => (
					<CourseCard key={course.idValue()} course={course} />
				))}
			</div>
		</section>
	);
}
