import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CreateCourseForm } from "../../../src/sections/courses/create/CreateCourseForm";
import { CoursesContextProvider } from "../../../src/sections/courses/shared/CoursesContext";

describe("CreateCourseForm component", () => {
	it("displays success message when data is correct", async () => {
		render(
			<CoursesContextProvider>
				<CreateCourseForm />
			</CoursesContextProvider>
		);

		const titleInput = screen.getByLabelText(/title/i);
		userEvent.type(titleInput, "Awesome Hexagonal Architecture");

		const imageUrlInput = screen.getByLabelText(/image/i);
		userEvent.type(imageUrlInput, "http://placekitten.com/500/400");

		const submitButton = screen.getByText(/create course/i);

		userEvent.click(submitButton);

		const successMessage = await screen.findByRole("heading", { name: /Course created/i });

		expect(successMessage).toBeInTheDocument();
	});

	it("displays error message if title is too short", async () => {
		render(
			<CoursesContextProvider>
				<CreateCourseForm />
			</CoursesContextProvider>
		);

		const titleInput = screen.getByLabelText(/title/i);
		userEvent.type(titleInput, "Aw");

		const errorMessage = await screen.findByText("Title must be between 5 and 100 characters");

		expect(errorMessage).toBeInTheDocument();
	});

	it("displays error message if title is too long", async () => {
		render(
			<CoursesContextProvider>
				<CreateCourseForm />
			</CoursesContextProvider>
		);

		const titleInput = screen.getByLabelText(/title/i);
		userEvent.type(
			titleInput,
			"Amet ex labore dolor amet deserunt. Tempor minim excepteur tempor dolor aute consectetur dolore. Velit Lorem nisi est cillum cupidatat sint cupidatat nostrud adipisicing eu sunt labore adipisicing minim. Sint est veniam irure fugiat ea est consectetur enim ut ipsum nostrud do duis esse. Mollit esse id tempor do deserunt eu ea nulla deserunt ut laboris qui ea."
		);

		const errorMessage = await screen.findByText("Title must be between 5 and 100 characters");

		expect(errorMessage).toBeInTheDocument();
	});

	it("displays error message if image url is not a valid url", async () => {
		render(
			<CoursesContextProvider>
				<CreateCourseForm />
			</CoursesContextProvider>
		);

		const imageUrlInput = screen.getByLabelText(/image/i);
		userEvent.type(imageUrlInput, "not a valid url");

		const errorMessage = await screen.findByText("Image url is not valid");

		expect(errorMessage).toBeInTheDocument();
	});
});
