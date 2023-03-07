import { Application, Request, Response } from "express";

import CoursesData from "../../data/courses.json";

export const loadApiEndpoints = (app: Application): void => {
	app.get("/api/courses", (req: Request, res: Response) => {
		return res.status(200).json(CoursesData.data);
	});
	app.get("/api/courses/:id", (req: Request, res: Response) => {
		const id = req.params.id
		const course = CoursesData.data.find(course => course.id === id)
		if (!course) {
			return res.status(200).json(null);
		}
		return res.status(200).json(course);
	});
	app.post("/api/courses/create", (req: Request, res: Response) => {
		return res.status(200).json({});
	});
};
