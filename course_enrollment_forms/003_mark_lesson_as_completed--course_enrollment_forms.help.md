<thinking>
This help guide is for the "Mark Lesson As Completed" form, which is used to mark a lesson as completed by a trainer or student. Before completing this form, please make sure you have the necessary permissions and that you are filling it out for the right lesson. To ensure accuracy, double-check that you are marking the correct lesson and that you have sufficient information to complete the form.

</thinking>

# Mark Lesson As Completed - Help Guide
## Purpose
The "Mark Lesson As Completed" form is used to mark a lesson as completed by a trainer or student. This form is typically used to update the lesson status in the system.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the correct status for the lesson: "Yes" or "No".
2. Enter the ID of the course related to the lesson.
3. Select the trainer who delivered the lesson.
4. Enter the date of the lesson.
5. Enter the duration of the lesson.
6. Enter any comments about the lesson.
7. Provide any student feedback about the lesson.

## Field-by-Field Explanation
* **Mark Lesson As Completed** (`mark_lesson_as_completed`, select_multiple, required): Select whether the lesson is marked as completed or not. You can choose "Yes" or "No".
* **Course** (`course_id`, number, required): Enter the ID of the course related to the lesson.
* **Trainer** (`trainer_id`, select_one, required): Select the trainer who delivered the lesson.
* **Lesson Date** (`lesson_date`, date, required): Enter the date of the lesson in the format `YYYY-MM-DD`.
* **Lesson Time** (`lesson_time`, time, required): Enter the time of the lesson in the format `HH:MM`.
* **Lesson Duration** (`lesson_duration`, number, required): Enter the duration of the lesson.
* **Comments** (`comments`, text, optional): Enter any comments about the lesson.
* **Student Feedback** (`student_feedback`, text, optional): Enter any feedback from the student about the lesson.
