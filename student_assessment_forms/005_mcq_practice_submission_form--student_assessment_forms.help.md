# mcq_practice_submission_form - Help Guide

## Purpose

The MCQ practice submission form is designed to collect student assessment data for multiple choice question (MCQ) practice submissions. The form helps to track student progress, submission status, and other relevant details for analysis and evaluation.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the course and section information correctly. The `course_id` and `course_section_id` fields should reflect the correct course and section IDs.
2. Ensure the `student_id` field matches the correct student's ID.
3. Select the correct student who submitted the practice submission from the options in the `submitted_by` field.
4. Enter the correct timestamp for the submission using the `submitted_at` field.
5. Choose the correct timezone for the submission from the options in the `submitted_at_timezone` field.
6. Check and confirm the submission status using the `submitted` field.
7. Optionally, fill out additional course information fields (e.g., `course_name_2` through `course_name_10`) if required for specific purposes.

## Field-by-Field Explanation

* **course_name** (`course_name`, text): Enter the name of the course for which the submission was made.
* **section_name** (`section_name`, text): Enter the name of the section within the course for which the submission was made.
* **question** (`question`, text, *required*): Enter the question that was attempted in the practice submission.
* **answer** (`answer`, text, *required*): Enter the student's answer to the question.
* **submitted_by** (`submitted_by`, select_one): Choose the student who submitted the practice submission from the list of options.
* **submitted_at** (`submitted_at`, date, *required*): Enter the date and time of the submission.
* **submitted_at_timezone** (`submitted_at_timezone`, select_multiple): Choose the timezone of the submission from the list of options.
* **course_id** (`course_id`, number, *required*): Enter the ID of the course for which the submission was made.
* **course_section_id** (`course_section_id`, number, *required*): Enter the ID of the section within the course for which the submission was made.
* **instructor_id** (`instructor_id`, number, *required*): Enter the ID of the instructor for which the submission was made.
* **student_id** (`student_id`, number, *required*): Enter the ID of the student who made the submission.
* **submitted** (`submitted`, select_one): Choose whether the submission was made successfully or not.
* **submitted_at** (`submitted_at`, date, *required*): Enter the date and time of the submission.
* **submit** (`submit`, text): Enter a brief confirmation or note for the submission.

Note: Some fields may have additional information or explanations that should be filled out for specific purposes. Ensure to fill out all required fields and consult with the instructor or relevant authorities if unsure about any field.
