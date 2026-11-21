import { CourseTitle } from "../../../../src/modules/courses/domain/CourseTitle";

describe("CourseTitle", () => {
	it("accepts a title up to the max length", () => {
		const title = "a".repeat(CourseTitle.MAX_COURSE_LENGTH);

		expect(new CourseTitle(title).value).toBe(title);
	});

	it("throws when the title is longer than the max length", () => {
		const title = "a".repeat(CourseTitle.MAX_COURSE_LENGTH + 1);

		expect(() => new CourseTitle(title)).toThrow(CourseTitle.invalidMessage(title));
	});
});
