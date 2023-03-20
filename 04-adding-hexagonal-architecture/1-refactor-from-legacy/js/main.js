import "../css/sakura.css";
import "../css/custom.css";

import $ from "jquery";
import { v4 as uuidv4 } from "uuid";

function isTitleValid(value) {
  var isValid = value.length > 5 && value.length <= 100;

  return isValid;
}

function isImageUrlValid(value) {
  var regexExp = /^(?:https?:\/\/)?(?:[\w]+\.)(?:\.?[\w]{2,})(\/[\w]*)*(\.[\w]+)*/;
  var isValid = regexExp.test(value);

  return isValid;
}

function getAllCoursesFromLocalStorage() {
  var courses = localStorage.getItem("courses");

  if (courses === null) {
    return new Map();
  }

  var map = new Map(JSON.parse(courses));

  return map;
}

function displayCourses() {
  var courses = getAllCoursesFromLocalStorage();
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
    var value = ev.target.value;
    var isValid = isTitleValid(value);

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
    var value = ev.target.value;
    var isValid = isImageUrlValid(value);

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

    var title = ev.target.elements.title.value;
    var imageUrl = ev.target.elements.imageUrl.value;

    console.log(title);
    if (!isTitleValid(title)) {
      throw new Error("Title is not valid");
    }

    if (!isImageUrlValid(imageUrl)) {
      throw new Error("Image URL is not valid");
    }

    var courses = getAllCoursesFromLocalStorage();
    var id = uuidv4();

    courses.set(id, {
      id,
      title,
      imageUrl,
    });

    localStorage.setItem(
      "courses",
      JSON.stringify(Array.from(courses.entries()))
    );

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
