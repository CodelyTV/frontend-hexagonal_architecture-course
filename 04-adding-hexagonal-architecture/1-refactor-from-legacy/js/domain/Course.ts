import { CourseIdNotValidError, isCourseIdValid } from "./CourseId";
import { CourseImageUrlNotValidError, isCourseImageUrlValid } from "./CourseImageUrl";
import { CourseTitleNotValidError, isCourseTitleValid } from "./CourseTitle";

export interface Course {
	id: string;
	title: string;
	imageUrl: string;
}

export function ensureCourseIsValid({ id, title, imageUrl }: Course): void {
	if (!isCourseIdValid(id)) {
		throw CourseIdNotValidError(id);
	}
	if (!isCourseTitleValid(title)) {
		throw CourseTitleNotValidError(title);
	}
	if (!isCourseImageUrlValid(imageUrl)) {
		throw CourseImageUrlNotValidError(imageUrl);
	}
}
