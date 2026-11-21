import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CoursesContextProvider } from "../../../src/sections/courses/CoursesContext";
import { CreateCourseForm } from "../../../src/sections/courses/CreateCourseForm";

describe("CreateCourseForm component", () => {
	it("displays success message when data is correct", async () => {
		const save = jest.fn();
		render(
			<CoursesContextProvider
				repository={{
					save,
					get: jest.fn(),
					getAll: jest.fn(),
				}}
			>
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
		expect(save).toHaveBeenCalled();
		expect(successMessage).toBeInTheDocument();
	});
});
