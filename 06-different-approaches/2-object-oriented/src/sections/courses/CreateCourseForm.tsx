import React, { useEffect, useState } from "react";

import { CourseImageUrl } from "../../modules/courses/domain/CourseImageUrl";
import { CourseTitle } from "../../modules/courses/domain/CourseTitle";
import { Spinner } from "../shared/Spinner";
import { FormStatus, useCourseForm } from "./useCourseForm";
import { useCourseFormData } from "./useCourseFormData";

const initialState = {
	title: "",
	imageUrl: "",
};

export function CreateCourseForm() {
	const { formData, updateForm, resetForm } = useCourseFormData(initialState);
	const { formStatus, submitForm, resetFormStatus } = useCourseForm();
	const [errors, setErrors] = useState(initialState);

	useEffect(() => {
		const isTitleValid = CourseTitle.isValid(formData.title);
		const isImageUrlValid = CourseImageUrl.isValid(formData.imageUrl);

		setErrors({
			title: isTitleValid ? "" : CourseTitle.invalidMessage(formData.title),
			imageUrl: isImageUrlValid ? "" : CourseImageUrl.invalidMessage(formData.imageUrl),
		});
	}, [formData]);

	const handleSubmit = async (ev: React.FormEvent) => {
		ev.preventDefault();

		await submitForm(formData);
	};

	switch (formStatus) {
		case FormStatus.Loading:
			return <Spinner />;
		case FormStatus.Success:
			return (
				<SuccessNotification
					resetForm={() => {
						resetForm();
						resetFormStatus();
					}}
				/>
			);
		case FormStatus.Error:
			return <ErrorNotification resetForm={resetFormStatus} />;
		case FormStatus.Initial:
			return (
				<section id="order" className="">
					<h2>🧑‍🏫 Create new course</h2>

					<form
						onSubmit={(ev) => {
							handleSubmit(ev);
						}}
					>
						<div>
							<label htmlFor="title">Course title</label>
							<input
								id="title"
								name="title"
								type="text"
								value={formData.title}
								onChange={(ev) => {
									updateForm({ title: ev.target.value });
								}}
							/>
							{/* {formData.postcode && errors.postcode && (
								<div style={{ color: "tomato" }}>{errors.postcode}</div>
							)} */}
						</div>
						<div>
							<label htmlFor="imageUrl">Image URL</label>
							<input
								id="imageUrl"
								name="imageUrl"
								type="text"
								value={formData.imageUrl}
								onChange={(ev) => {
									updateForm({ imageUrl: ev.target.value });
								}}
							/>
							{/* {formData.postcode && errors.postcode && (
								<div style={{ color: "tomato" }}>{errors.postcode}</div>
							)} */}
						</div>

						<button type="submit">Create course</button>
					</form>
				</section>
			);
		default:
			assertUnreachable(formStatus);
	}
}

function SuccessNotification({ resetForm }: { resetForm: () => void }) {
	return (
		<section>
			<h2>🚀 Course created</h2>
			<button onClick={resetForm}>Create a new course</button>
		</section>
	);
}

function ErrorNotification({ resetForm }: { resetForm: () => void }) {
	return (
		<section role="alert" className="error">
			<h2>🌋 You have an error in your form</h2>
			<button onClick={resetForm}>Ok, let me try again</button>
		</section>
	);
}

function assertUnreachable(_x: never): never {
	throw new Error("Didn't expect to get here");
}
