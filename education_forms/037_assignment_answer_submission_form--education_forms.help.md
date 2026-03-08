# Assignment Answer Submission Form - Help Guide
## Purpose

The Assignment Answer Submission Form is a tool used to collect student responses to assignments and provide instructors with a comprehensive overview of student performance. This form aims to ensure that students submit their work in a clear and accurate manner, while also providing instructors with the necessary information to assess and provide feedback on student assignments.

## How To Complete This Form

1.  Begin by ensuring you have the necessary resources and information to complete the form accurately.
2.  Fill in your student name, school ID number, and grade level in the corresponding fields.
3.  Enter your school email address in the 'School Email' field.
4.  Select the correct subject and assignment name from the dropdown menus.
5.  Provide the correct assignment date and due date in the 'Assignment Date' and 'Due Date' fields, respectively.
6.  Choose the correct submission format from the 'Answer Format' dropdown menu.
7.  If applicable, attach your submission file in the 'Attach Answer File' field.
8.  If you are submitting text, type your answers in the 'Type Answers Here' field.
9.  Answer any questions or provide information as requested in the 'Question 1 Answer', 'Question 2 Answer', and 'Question 3 Answer' fields.
10.  Count the total number of questions answered and enter it in the 'Total Questions Answered' field.
11.  Enter the time spent in minutes in the 'Time Spent in Minutes' field, if applicable.
12.  Select the resources used to complete the assignment from the 'Resources Used' dropdown menu.
13.  Provide the perceived difficulty level of the assignment from the 'Perceived Difficulty Level' dropdown menu.
14.  Declare whether you need help understanding the assignment from the 'Do You Need Help Understanding' dropdown menu.
15.  If you need help, provide the topics that require clarification in the 'Topics Needing Help' field.
16.  Confirm that this is your own work by selecting 'Yes I Confirm' from the 'I Confirm This Is My Own Work' dropdown menu.
17.  Finally, sign your name in the 'Student Signature' field.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required): Your full legal name.
* **Student ID Number** (`student_id`, text, required): Your school-issued ID number.
* **Grade Level** (`grade_level`, select_one, required): Select your current grade level.
* **School Email** (`email`, email, required): Your school-issued email address.
* **Subject** (`subject`, select_one, required): Select the subject of the assignment.
* **Assignment Name** (`assignment_name`, text, required): The title of the assignment.
* **Assignment Type** (`assignment_type`, select_one, required): Select the type of the assignment.
* **Assignment Date** (`assignment_date`, date, required): The date the assignment was assigned.
* **Due Date** (`due_date`, date, required): The due date for the assignment.
* **Submission Date** (`submission_date`, date, required): The date you submit the assignment.
* **Answer Format** (`answer_format`, select_one, required): Select the format of your submission.
* **Attach Answer File** (`file_attachment`, text, required): Attach your submission file if applicable.
* **Type Answers Here** (`answer_text`, text, optional): Type your answers in this field if your submission format is text.
* **Question 1 Answer** (`question_1_answer`, text, optional): Answer the first question.
* **Question 2 Answer** (`question_2_answer`, text, optional): Answer the second question.
* **Question 3 Answer** (`question_3_answer`, text, optional): Answer the third question.
* **Total Questions Answered** (`total_questions_answered`, number, required): Count the total number of questions answered.
* **Time Spent in Minutes** (`time_spent_minutes`, number, optional): Enter the time spent in minutes.
* **Resources Used** (`resources_used`, select_multiple, required): Select the resources you used to complete the assignment.
* **Perceived Difficulty Level** (`difficulty_level`, select_one, required): Select the difficulty level of the assignment.
* **Do You Need Help Understanding** (`help_needed`, select_one, required): Declare whether you need help understanding the assignment.
* **Topics Needing Help** (`help_topics`, text, optional): Provide the topics that require clarification.
* **I Confirm This Is My Own Work** (`academic_honesty`, select_one, required): Declare that this is your own work.
* **Student Signature** (`student_signature`, text, required): Sign your name.
