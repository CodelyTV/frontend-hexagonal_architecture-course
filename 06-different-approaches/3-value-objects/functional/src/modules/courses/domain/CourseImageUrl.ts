export type CourseImageUrl = string;

export function isCourseImageUrlValid(imageUrl: string): boolean {
	const regexExp = /^(?:https?:\/\/)?(?:[\w]+\.)(?:\.?[\w]{2,})(\/[\w]*)*(\.[\w]+)*/;

	return regexExp.test(imageUrl);
}

export function CourseImageUrlNotValidError(imageUrl: string): Error {
	return new Error(`Image url ${imageUrl} is not valid`);
}
