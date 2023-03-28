import "../css/sakura.css";
import "../css/custom.css";

import $ from "jquery";
import { v4 as uuidv4 } from "uuid";
import { createLocalStorageCourseRepository } from "./infrastructure/LocalStorageCourseRepository";
import { getAllCourses } from "./application/get-all/getAllCourses";
import { createCourse } from "./application/create/createCourse";
import { isCourseTitleValid } from "./domain/CourseTitle";
import { isCourseImageUrlValid } from "./domain/CourseImageUrl";

const repository = createLocalStorageCourseRepository();

async function displayCourses() {
  var courses = await getAllCourses(repository);
  $("#coursesList").empty();
  courses.forEach(function (course) {
    $("#coursesList").append(`<div class="courseCard">
      <img src=${course.imageUrl} alt="" />
      <h3 class="courseCard__title">${course.title}</h3>
    </div>`);
  });
}

$(function () {
  displayCourses();

  $("#title").on("blur", function (ev) {
    var errorMessage = $("#titleError");
    var value = (ev.target as HTMLInputElement).value;
    var isValid = isCourseTitleValid(value);

    if (!isValid) {
      errorMessage.show();
    }
  });

  $("#title").on("change", function () {
    var errorMessage = $("#titleError");

    errorMessage.hide();
  });

  $("#imageUrl").on("blur", function (ev) {
    var errorMessage = $("#imageUrlError");
    var value = (ev.target as HTMLInputElement).value;
    var isValid = isCourseImageUrlValid(value);

    if (!isValid) {
      errorMessage.show();
    }
  });

  $("#imageUrl").on("change", function () {
    var errorMessage = $("#imageUrlError");
    errorMessage.hide();
  });

  $("#createCourseForm").on("submit", function (ev) {
    ev.preventDefault();

    var title = (ev.target as any).elements.title.value;
    var imageUrl = (ev.target as any).elements.imageUrl.value;

    const course = {
      id: uuidv4(),
      title,
      imageUrl,
    }

    createCourse(repository, course)

    $("#createCourseForm").hide();
    $("#createCourseSuccess").show();
    displayCourses();
  });

  $("#resetFormButton").on("click", function () {
    $("#title").val("");
    $("#imageUrl").val("");
    $("#createCourseForm").show();
    $("#createCourseSuccess").hide();
  });
});
