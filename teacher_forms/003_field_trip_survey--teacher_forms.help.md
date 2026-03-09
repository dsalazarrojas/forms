# Field Trip Survey - Help Guide

## Purpose
This form is designed to gather feedback and ratings from students after a field trip. It helps the school administration and teachers understand what worked well and what can be improved for future field trips.

## How To Complete This Form
To complete this form, simply follow these steps:

* Please fill out the "Field Trip Details" section with information about the field trip you attended.
* Select the correct date of the field trip in the "Trip Date" field.
* Enter the trip duration or time in the "Trip Time" field.
* If you are a student, please fill out your name, class, and grade level in the "Student Name", "Student Class", and "Student Grade" fields.
* If you are a teacher, please fill out your name in the "Teacher Name" field.
* In the "Teacher Comments" field, please provide any additional comments from the teacher.
* In the "Student Comments" field, please select all that apply from the options provided.
* Provide your rating for the field trip in the "Trip Rating" field.
* Select your favorite part of the trip in the "Favorite Part" field.
* Answer the question "Did You Learn Something New?" by selecting all that apply from the options provided.
* Answer the question "Would You Go Again?" by selecting one option.
* Finally, in the "What Can We Improve Next Time?" field, please provide any suggestions or comments for future field trips.

## Field-by-Field Explanation

* **Field Trip Details** (`field_trip_details`, `note`, required: false): Please provide a brief description of the field trip you attended.
* **Trip Date** (`trip_date`, `date`, required: false): Enter the date of the field trip.
* **Trip Time** (`trip_time`, `time`, required: false): Enter the duration or time of the field trip.
* **Student Name** (`student_name`, `text`, required: false): If you are a student, please enter your name.
* **Student Class** (`student_class`, `select_one`, required: false): Select your class from the options provided.
* **Student Grade** (`student_grade`, `number`, required: false): Select your grade level.
* **Teacher Name** (`teacher_name`, `text`, required: false): If you are a teacher, please enter your name.
* **Teacher Comments** (`teacher_comments`, `text`, required: false): Please provide any comments from the teacher.
* **Student Comments** (`student_comments`, `select_multiple`, required: false): Select all that apply from the options provided.
* **Trip Rating** (`trip_rating`, `number`, required: false): Provide your rating for the field trip.
* **Favorite Part** (`favorite_part`, `select_one`, required: false): Select your favorite part of the trip.
* **Did You Learn Something New?** (`did_you_learn`, `select_multiple`, required: false): Select all that apply from the options provided.
* **Would You Go Again?** (`would_go_again`, `select_one`, required: false): Select one option.
* **What Can We Improve Next Time?** (`trip_improvement`, `text`, required: false): Please provide any suggestions or comments for future field trips.
* **What Can We Improve On?** (`teacher_improvement`, `select_multiple`, required: false): Select all that apply from the options provided.
