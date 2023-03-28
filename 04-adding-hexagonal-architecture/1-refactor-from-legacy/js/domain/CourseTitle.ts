export const TITLE_MIN_LENGTH = 5;
export const TITLE_MAX_LENGTH = 100;

export function isCourseTitleValid(title: string): boolean {
	return title.length >= TITLE_MIN_LENGTH && title.length <= TITLE_MAX_LENGTH;
}

export function CourseTitleNotValidError(title: string): Error {
	return new Error(`Title ${title} is not valid`);
}
