import { useState } from "react";

import { useCoursesContext } from "../shared/CoursesContext";

export const enum FormStatus {
	Loading,
	Success,
	Error,
	Initial,
}

export function useCourseForm(): {
	formStatus: FormStatus;
	submitForm: (formData: { title: string; imageUrl: string }) => void;
	resetFormStatus: () => void;
} {
	const [formStatus, setFormStatus] = useState(FormStatus.Initial);
	const { createCourse } = useCoursesContext();

	function submitForm({ title, imageUrl }: { title: string; imageUrl: string }) {
		setFormStatus(FormStatus.Loading);

		try {
			createCourse({ title, imageUrl })
				.then(() => {
					setFormStatus(FormStatus.Success);
				})
				.catch(() => {
					throw new Error("Error submitting form");
				});
		} catch (e) {
			setFormStatus(FormStatus.Error);
		}
	}

	function resetFormStatus() {
		setFormStatus(FormStatus.Initial);
	}

	return {
		formStatus,
		submitForm,
		resetFormStatus,
	};
}
