import { Primitives } from "@codelytv/primitives-type";

import { ImageUrl } from "../../shared/domain/ImageUrl";
import { CourseId } from "./CourseId";
import { CourseTitle } from "./CourseTitle";

export class Course {
	private constructor(
		readonly id: CourseId,
		readonly title: CourseTitle,
		readonly imageUrl: ImageUrl
	) {}

	public static create({ id, title, imageUrl }: Primitives<Course>): Course {
		return new Course(new CourseId(id), new CourseTitle(title), new ImageUrl(imageUrl));
	}

	idValue(): string {
		return this.id.value;
	}

	titleValue(): string {
		return this.title.value;
	}

	imageUrlValue(): string {
		return this.imageUrl.value;
	}

	toPrimitives(): Primitives<Course> {
		return {
			id: this.id.value,
			title: this.title.value,
			imageUrl: this.imageUrl.value,
		};
	}
}
