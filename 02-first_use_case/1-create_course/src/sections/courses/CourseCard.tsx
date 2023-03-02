import styles from "./CourseCard.module.scss";

export function CourseCard({
	course,
}: {
	course: { id: string; title: string; imageUrl: string };
}) {
	return (
		<div className={styles.courseCard}>
			<img src={course.imageUrl} alt="" />
			<h3 className={styles.courseCard__title}>{course.title}</h3>
		</div>
	);
}
