<thinking>
This form is likely used for tracking and updating course progress, titles, and statuses. It may be used by instructors or administrators to monitor student or course completion, including active, inactive, dropped, awaiting approval, or completed statuses. 
</thinking>

# <string> - Help Guide
## Purpose
This form is designed to track and update course progress, including course titles, completion dates, grades, and statuses. It's intended for use by instructors or administrators to monitor the status of courses.

## How To Complete This Form
To complete this form, follow these steps:
1. Review the course title and description to ensure accuracy.
2. Enter the course completion date, if applicable.
3. Fill in the grade, if applicable.
4. Select the current status of the course (Active, Inactive, Awaiting Approval, Completed, or Dropped).
5. Select whether the course status has been updated (Yes or No).
6. Add any comments regarding the course.

## Field-by-Field Explanation

* **Course Progress** (`course_progress`, `text`, optional): Enter a brief description of the course progress, such as current enrollment or completion rate.
* **Course Title** (`course_title`, `text`, optional): Enter the title of the course, e.g., "Introduction to Programming."
* **Course Description** (`course_description`, `text`, optional): Enter a brief description of the course, e.g., "An introductory course in programming fundamentals."
* **Grade** (`grade`, `number`, optional): Enter the grade or credit value associated with the course, e.g., "3" for a 3-credit course.
* **Course Completion Date** (`course_completion_date`, `date`, optional): Enter the date the course was completed, if applicable.
* **Status** (`course_status`, `select_one`, optional): Select the current status of the course (Active, Inactive, Awaiting Approval, Completed, or Dropped).
* **Updated** (`course_status_updated_at`, `time`, optional): This field is not used for user input.
* **Comments** (`course_comments`, `text`, optional): Enter any comments or notes regarding the course.
* **Updated By** (`course_status_updated_by`, `select_one`, optional): Select whether the course status was updated (Yes or No).
* **ID** (`course_completion_form_id`, `text`, optional): This field is not used for user input.
* **Status - Awaiting Approval** (`course_status_awaiting_approval`, `select_one`, optional): Select the status of the course if it's awaiting approval (Active or Inactive).
* **Status - Completed** (`course_status_completed`, `select_one`, optional): Select the status of the course if it's completed (Active or Inactive).
* **Status - Dropped** (`course_status_dropped`, `select_one`, optional): Select the status of the course if it's dropped (Active or Inactive).
