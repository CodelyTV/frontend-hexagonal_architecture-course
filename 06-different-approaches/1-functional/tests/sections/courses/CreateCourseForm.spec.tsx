import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createLocalStorageCourseRepository } from "../../../src/modules/courses/infrastructure/LocalStorageCourseRepository";
import { CoursesContextProvider } from "../../../src/sections/courses/CoursesContext";
import { CreateCourseForm } from "../../../src/sections/courses/CreateCourseForm";
import { CourseMother } from "../../modules/courses/domain/CourseMother";

describe("CreateCourseForm component", () => {
	it("displays success message when data is correct", async () => {
		const repository = createLocalStorageCourseRepository();
		const course = CourseMother.create();

		render(
			<CoursesContextProvider repository={repository}>
				<CreateCourseForm />
			</CoursesContextProvider>
		);

		const titleInput = screen.getByLabelText(/title/i);
		userEvent.type(titleInput, course.title);

		const imageUrlInput = screen.getByLabelText(/image/i);
		userEvent.type(imageUrlInput, course.imageUrl);

		const submitButton = screen.getByText(/create course/i);

		userEvent.click(submitButton);

		const successMessage = await screen.findByRole("heading", { name: /Course created/i });

		expect(successMessage).toBeInTheDocument();
	});

	it("displays error message if title is too short", async () => {
		const repository = createLocalStorageCourseRepository();
		const { title: invalidTitle } = CourseMother.createWithTooShortTitle();

		render(
			<CoursesContextProvider repository={repository}>
				<CreateCourseForm />
			</CoursesContextProvider>
		);

		const titleInput = screen.getByLabelText(/title/i);
		userEvent.type(titleInput, invalidTitle);

		const errorMessage = await screen.findByText("Title must be between 5 and 100 characters");

		expect(errorMessage).toBeInTheDocument();
	});

	it("displays error message if title is too long", async () => {
		const repository = createLocalStorageCourseRepository();
		const { title: invalidTitle } = CourseMother.createWithTooLongTitle();

		render(
			<CoursesContextProvider repository={repository}>
				<CreateCourseForm />
			</CoursesContextProvider>
		);

		const titleInput = screen.getByLabelText(/title/i);
		userEvent.type(titleInput, invalidTitle);

		const errorMessage = await screen.findByText("Title must be between 5 and 100 characters");

		expect(errorMessage).toBeInTheDocument();
	});

	it("displays error message if image url is not a valid url", async () => {
		const repository = createLocalStorageCourseRepository();
		const { imageUrl: invalidImageUrl } = CourseMother.createWithInvalidImageUrl();

		render(
			<CoursesContextProvider repository={repository}>
				<CreateCourseForm />
			</CoursesContextProvider>
		);

		const imageUrlInput = screen.getByLabelText(/image/i);
		userEvent.type(imageUrlInput, invalidImageUrl);

		const errorMessage = await screen.findByText("Image url is not valid");

		expect(errorMessage).toBeInTheDocument();
	});
});
