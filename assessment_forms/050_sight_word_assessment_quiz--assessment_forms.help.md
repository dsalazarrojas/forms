# Sight Word Assessment Quiz - Help Guide
## Purpose
The Sight Word Assessment Quiz is a tool used to monitor and track student progress in reading sight words. It helps educators or administrators evaluate student performance and identify areas that may need improvement.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in your student's name in the "Student Name" field.
2. Enter your student's grade level in the "Grade" field.
3. Select the student's reading level (Elementary, Intermediate, or High School) from the "Reading Level" dropdown list.
4. Select the sight words the student read correctly or incorrectly from the "Sight Words Read Correctly" and "Sight Words Read Incorrectly" drop-down lists.
5. Enter the time spent on the quiz in the "Time Spent" field.
6. Enter the date of submission in the "Date" field.
7. Enter the time of submission in the "Time" field.
8. Enter your name and email address in the "Submitted By" and "Email" fields.
9. You can optionally leave additional comments in the "Comments" fields.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required): Enter your student's name as it should appear in the database.
* **Grade** (`grade`, number, required): Enter your student's grade level (e.g., 2nd grade).
* **Reading Level** (`reading_level`, select_one, required): Select the student's reading level from the dropdown list (Elementary, Intermediate, High School).
* **Sight Words Read Correctly** (`sight_words_read_correctly`, number, required): Enter the number of sight words the student read correctly.
* **Sight Words Read Incorrectly** (`sight_words_read_incorrectly`, number, required): Enter the number of sight words the student read incorrectly.
* **Time Spent** (`time_spent`, number, required): Enter the time spent on the quiz in minutes.
* **Date** (`date`, date, required): Enter the date of submission.
* **Time** (`time`, time, required): Enter the time of submission.
* **Email** (`email`, email, required): Enter your email address.
* **Comments** (`comments`, note, optional): You can optionally leave comments about the student's performance.
* **Phone** (`phone`, text, optional): You can optionally enter your phone number.
* **Comments (Report)** (`comments_report`, note, optional): You can optionally leave comments about the student's performance on the report.
* **Submitted By** (`submitted_by`, text, required): Enter your name.
* **Submitted Time** (`submitted_time`, time, required): Enter the time of submission.
* **Submitted On** (`submitted_on_report`, date, required): Enter the date of submission on the report.
* **Comments Other** (`comments_other`, note, optional): You can optionally leave comments about other matters.
