import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { Course } from "../../../../src/modules/courses/domain/Course";

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
};
