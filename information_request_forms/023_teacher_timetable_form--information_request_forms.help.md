<thinking>
This is a form for collecting information from teachers about their teaching schedule. The form is designed to gather details about the classes being taught, including the teacher's ID, class name, start and end times, and total class duration. 

To avoid duplication, the system will check if a form with the same class number and start date has been submitted before. If a duplicate form is detected, the system will display a message indicating that the form cannot be submitted. 

Please ensure that you are submitting a new class schedule that has not been previously submitted.

</thinking>

# Teacher Timetable Form - Help Guide
## Purpose
This form is used to collect information from teachers about their teaching schedule, including class details and teaching hours.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the teacher's ID in the `teacher_id` field.
2. Enter the teacher's name in the `teacher_name` field.
3. Select the class ID in the `class_id` field.
4. Enter the class name in the `class_name` field.
5. Select the start time of the class in the `start_time` field.
6. Select the end time of the class in the `end_time` field.
7. Choose the day(s) of the week for this class in the `day` field (multiple options can be selected).
8. Select the subject(s) for this class in the `subject` field.
9. Enter the class duration in minutes in the `total_class_duration` field.
10. Enter the room number for this class in the `room_number` field.
11. Enter any additional comments about this class in the `teacher_comment` field.
12. Select the class number for this class in the `class_number` field.
13. Enter the school year for this class in the `school_year` field.
14. Select the class group for this class in the `class_group` field.
15. Enter the class size in the `class_size` field.
16. Enter the start date of the class in the `start_date` field.
17. Enter the end date of the class in the `end_date` field.
18. Select the start time of the class in the `start_time` field.
19. Select the end time of the class in the `end_time` field.
20. Enter the total class duration in the `total_class_duration` field.

## Field-by-Field Explanation

* **teacher_id** (`teacher_id`, text, required: false): Enter the teacher's ID.
* **teacher_name** (`teacher_name`, text, required: false): Enter the teacher's name.
* **class_id** (`class_id`, number, required: false): Select the class ID.
* **class_name** (`class_name`, text, required: false): Enter the class name.
* **start_time** (`start_time`, date, required: false): Select the start time of the class.
* **end_time** (`end_time`, time, required: false): Select the end time of the class.
* **day** (`day`, select_multiple, required: true): Choose the day(s) of the week for this class.
* **subject** (`subject`, text, required: false): Select the subject(s) for this class.
* **class_time** (`class_time`, time, required: false): Enter the class time.
* **room_number** (`room_number`, text, required: false): Enter the room number for this class.
* **timetable_data** (`timetable_data`, note, required: false): Enter any additional information about this class.
* **teacher_comment** (`teacher_comment`, text, required: false): Enter any comments about this class.
* **class_number** (`class_number`, text, required: false): Enter the class number.
* **school_year** (`school_year`, text, required: false): Enter the school year.
* **class_group** (`class_group`, select_one, required: true): Select the class group.
* **class_size** (`class_size`, number, required: false): Enter the class size.
* **start_date** (`start_date`, date, required: false): Enter the start date of the class.
* **end_date** (`end_date`, date, required: false): Enter the end date of the class.
* **start_time** (`start_time`, time, required: false): Select the start time of the class.
* **end_time** (`end_time`, time, required: true): Select the end time of the class.
* **total_class_duration** (`total_class_duration`, number, required: true): Enter the total class duration.
