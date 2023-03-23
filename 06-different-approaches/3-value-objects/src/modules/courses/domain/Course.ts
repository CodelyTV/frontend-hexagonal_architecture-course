import { CourseId, CourseIdNotValidError, isCourseIdValid } from "./CourseId";
import {
	CourseImageUrl,
	CourseImageUrlNotValidError,
	isCourseImageUrlValid,
} from "./CourseImageUrl";
import { CourseTitle, CourseTitleNotValidError, isCourseTitleValid } from "./CourseTitle";

export interface Course {
	id: CourseId;
	title: CourseTitle;
	imageUrl: CourseImageUrl;
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
