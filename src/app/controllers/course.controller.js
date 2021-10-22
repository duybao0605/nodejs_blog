const Course = require('../models/course.model')
const {mongooseToObject} = require("../../util/mongoose");
class CourseController {
  //[GET]
  show(req, res, next){
    console.log(req.params.slug)
    Course.findOne({ slug : req.params.slug })
      .then(course => {
        res.render('courses/show', {course : mongooseToObject(course)})
      })
      .catch();
  }
}

module.exports = new CourseController();
