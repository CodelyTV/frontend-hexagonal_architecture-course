import { Course } from "../../modules/courses/domain/Course";
import styles from "./CourseCard.module.scss";

export function CourseCard({ course }: { course: Course }) {
	return (
		<div className={styles.courseCard}>
			<img src={course.imageUrlValue()} alt="" />
			<h3 className={styles.courseCard__title}>{course.titleValue()}</h3>
		</div>
	);
}
