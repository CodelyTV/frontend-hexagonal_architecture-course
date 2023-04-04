export class CourseImageUrl {
	public static isValid(value: string): boolean {
		return true;
	}

	public static invalidMessage(value: string): string {
		return `The image url [${value}] is not valid`;
	}
}
