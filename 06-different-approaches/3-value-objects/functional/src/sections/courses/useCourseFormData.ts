import { useState } from "react";

export const useCourseFormData = <T>(
	initialState: T
): {
	formData: T;
	updateForm: (value: Partial<T>) => void;
	resetForm: () => void;
} => {
	const [formData, setFormData] = useState(initialState);

	const updateForm = (value: Partial<typeof initialState>) => {
		setFormData((oldState) => {
			return { ...oldState, ...value };
		});
	};

	const resetForm = () => {
		setFormData(initialState);
	};

	return {
		formData,
		updateForm,
		resetForm,
	};
};
