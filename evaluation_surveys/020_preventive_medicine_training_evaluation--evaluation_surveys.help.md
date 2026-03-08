<thinking>
This form is designed to evaluate a Preventive Medicine Training. The form is used to collect feedback from participants about their experience in the training course. The purpose of this form is to gather information on the course name, training date, training location, instructor name, instructor role, course attendance, evaluation rating, and evaluation comments. This form is likely used by training administrators or evaluators to assess the quality of the training program.

It's assumed that the form is being filled out by participants of the training course. To ensure that the form is being filled out correctly, please check that the form is not being duplicated or filled out multiple times by the same participant.

This form has multiple pages, but they are not explicitly defined in the YAML schema. Therefore, we will be explaining each field in the provided schema.

</thinking>

# Preventive Medicine Training Evaluation - Help Guide
## Purpose
The Preventive Medicine Training Evaluation form is designed to gather feedback from participants about their experience in the Preventive Medicine Training course.

## How To Complete This Form
To complete this form, follow these steps:

* Enter the name of the course you attended.
* Enter the date you attended the training.
* Enter the location where the training took place.
* Enter the name of the instructor who led the training.
* Select the role of the instructor (Instructor, Trainer, or Lecturer).
* Indicate whether you attended the course fully (Attended), partially (Partially Attended), or missed it (Missed).
* Evaluate the training by selecting a rating between 1-10.
* Provide any additional comments about the training.

## Field-by-Field Explanation
* **Course Name** (`course_name`, text, required: false): Enter the name of the course you attended. This will help us track the specific training programs offered.
* **Training Date** (`training_date`, date, required: false): Enter the date you attended the training. This will help us track when the training took place.
* **Training Time** (`training_time`, time, required: false): Enter the time you attended the training. This will help us track the duration of the training.
* **Training Location** (`training_location`, text, required: false): Enter the location where the training took place. This will help us track where the training was held.
* **Instructor Name** (`instructor_name`, text, required: false): Enter the name of the instructor who led the training. This will help us track who facilitated the training.
* **Instructor Role** (`instructor_role`, select_one, required: false): Select the role of the instructor (Instructor, Trainer, or Lecturer). This will help us track the instructor's level of expertise.
* **Course Attendance** (`course_attendance`, select_multiple, required: false): Indicate whether you attended the course fully (Attended), partially (Partially Attended), or missed it (Missed). This will help us track your level of engagement.
* **Evaluation Rating** (`evaluation_rating`, number, required: false): Evaluate the training by selecting a rating between 1-10. This will help us track your satisfaction with the training.
* **Evaluation Comments** (`evaluation_comments`, text, required: false): Provide any additional comments about the training. This will help us track your feedback and suggestions.
* **Submitted On** (`submitted_on`, date, required: false): Enter the date you submitted this evaluation form. This will help us track when the evaluation was submitted.
