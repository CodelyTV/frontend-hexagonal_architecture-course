import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CreateCourseForm } from "../../../src/sections/courses/create/CreateCourseForm";
import { CoursesContextProvider } from "../../../src/sections/courses/shared/CoursesContext";
import { saveCourse } from "../../../src/sections/courses/shared/coursesService";

jest.mock("../../../src/sections/courses/shared/coursesService");
const saveCourseMock = saveCourse as jest.Mock<Promise<void>>;

describe("CreateCourseForm component", () => {
	it("displays success message when data is correct", async () => {
		saveCourseMock.mockResolvedValueOnce();
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
		expect(saveCourseMock).toHaveBeenCalled();
		expect(successMessage).toBeInTheDocument();
	});
});
