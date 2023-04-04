import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { Course } from "../../../../src/modules/courses/domain/Course";
import {
	TITLE_MAX_LENGTH,
	TITLE_MIN_LENGTH,
} from "../../../../src/modules/courses/domain/CourseTitle";

const CourseFactory = Factory.define<Course>(() => ({
	id: faker.datatype.uuid(),
	title: faker.lorem.sentence(),
	imageUrl: faker.image.imageUrl(),
}));

export const CourseMother = {
	create: (params?: Partial<Course>): Course => {
		return CourseFactory.build(params);
	},
	createList: (length = 5): Course[] => {
		return CourseFactory.buildList(length);
	},
	createWithTooShortTitle: (): Course => {
		return CourseFactory.build({
			title: faker.lorem.word(TITLE_MIN_LENGTH - 1),
		});
	},
	createWithTooLongTitle: (): Course => {
		return CourseFactory.build({
			title: faker.lorem.sentence(TITLE_MAX_LENGTH + 1),
		});
	},
	createWithInvalidImageUrl: (): Course => {
		return CourseFactory.build({
			imageUrl: faker.lorem.word(),
		});
	},
};
