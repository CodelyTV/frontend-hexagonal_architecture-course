export interface Course {
	id: string;
	title: string;
	imageUrl: string;
}

export function isCourseIdValid(id: string): boolean {
	const regexExp =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

	return regexExp.test(id);
}

export function isCourseImageUrlValid(imageUrl: string): boolean {
	const regexExp = /^(?:https?:\/\/)?(?:[\w]+\.)(?:\.?[\w]{2,})(\/[\w]*)*(\.[\w]+)*/;

	return regexExp.test(imageUrl);
}

export const TITLE_MIN_LENGTH = 5;
export const TITLE_MAX_LENGTH = 100;

export function isCourseTitleValid(title: string): boolean {
	return title.length >= TITLE_MIN_LENGTH && title.length <= TITLE_MAX_LENGTH;
}

export function ensureCourseIsValid({ id, title, imageUrl }: Course): void {
	if (!isCourseIdValid(id)) {
		throw new Error(`Id ${id} is not valid`);
	}
	if (!isCourseTitleValid(title)) {
		throw new Error(`Title ${title} is not valid`);
	}
	if (!isCourseImageUrlValid(imageUrl)) {
		throw new Error(`Image url ${imageUrl} is not valid`);
	}
}
