import { cerbosService } from "../service/index.js";

import { Courses } from "../db/data.js";

const getAllCourses = async (req, res) => {
  try {
    const principal = req.user;

    // authorization check for each course
    const authorizedCourses = await Promise.all(
      Courses.map(async (course) => {
        const isAuthorized = await cerbosService.isAuthorized(
          principal,
          course,
          "view",
        );
        return isAuthorized ? course : null;
      }),
    );

    res.status(200).json({
      courses: authorizedCourses.filter(Boolean),
      message: "Courses fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
};

export { getAllCourses };
