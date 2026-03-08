<thinking>
The "exam_date_voting_form" is a form used to record the status of an exam. The form includes fields for exam date, time, location, duration, note, and status. The fields are divided into different tabs or pages, making it easy for users to fill out the form in a sequential and organized manner. This form is primarily used to collect information about exams, and the fields are designed to be as straightforward as possible. However, it's essential to understand that some fields might be optional, but they are still crucial for providing a complete and accurate record of the exam. The form is designed for both exam administrators and students to use. It's recommended to double-check the form for completeness and accuracy before submitting it. This form does not duplicate the functionality of other forms, and its purpose is unique and specific to exam management.
</thinking>

# exam_date_voting_form - Help Guide
## Purpose
The "exam_date_voting_form" is a form used to record the status of an exam. It helps to track the exam's schedule, location, and progress.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the exam_form_info page with any relevant notes about the exam.
2. Select the examination date from the calendar.
3. Select the examination time from the available options.
4. Choose the examination location from the list of available options.
5. Select the examination duration from the list of available options.
6. Fill out the note field with any additional comments or information about the exam.
7. Indicate whether the exam was submitted by someone or not.
8. Select the submitted date and time.
9. Choose whether the exam was submitted or not.
10. Select whether the exam was submitted by the user or not.

## Field-by-Field Explanation
### exam_form_info
* **exam_form_info** (`exam_form_info`, `note`, optional): This field is for any additional information about the exam that the user wants to record.

### select_examination_date
* **select_examination_date** (`exam_date`, `date`, optional): Select the date of the exam from the calendar.

### select_examination_time
* **select_examination_time** (`exam_time`, `time`, optional): Select the time of the exam from the list of available options.

### select_examination_location
* **select_examination_location** (`exam_location`, `select_one`, optional): Choose the location of the exam from the list of available options.

### select_examination_duration
* **select_examination_duration** (`exam_duration`, `select_one`, optional): Select the duration of the exam from the list of available options.

### note
* **note** (`exam_note`, `note`, optional): This field is for any additional comments or information about the exam.

### submitted_by
* **submitted_by** (`exam_form_submitted_by`, `text`, optional): Indicate whether the exam was submitted by someone or not.

### select_submitted_date
* **select_submitted_date** (`submit_date`, `date`, optional): Select the date when the exam was submitted.

### select_submitted_time
* **select_submitted_time** (`submit_time`, `time`, optional): Select the time when the exam was submitted.

### select_exam_status
* **select_exam_status** (`exam_status`, `select_one`, optional): Choose the status of the exam from the list of available options.

### select_exam_start_date
* **select_exam_start_date** (`exam_start_date`, `date`, optional): Select the date when the exam started.

### select_submitter
* **select_submitter** (`submitter`, `select_one`, optional): Indicate whether the exam was submitted by the user or not.

### select_submitter_email
* **select_submitter_email** (`submitter_email`, `email`, optional): Enter the email of the person who submitted the exam.

### select_submitter_phone
* **select_submitter_phone** (`submitter_phone`, `text`, optional): Enter the phone number of the person who submitted the exam.

### submitter_note
* **note** (`submitter_note`, `note`, optional): This field is for any additional comments or information about the person who submitted the exam.

### select_submitter_submitted_by
* **select_submitter_submitted_by** (`submitter_submitted_by`, `select_one`, optional): Indicate whether the exam was submitted by the user or not.

### select_submitter_submitted_at
* **select_submitter_submitted_at** (`submitter_submitted_at`, `time`, optional): Select the time when the exam was submitted.

### select_submitter_submitted_date
* **select_submitter_submitted_date** (`submitter_submitted_date`, `date`, optional): Select the date when the exam was submitted.

### select_exam_submitted_date
* **select_exam_submitted_date** (`exam_submitted_date`, `date`, optional): Select the date when the exam was submitted.

### select_exam_submitted_by
* **select_exam_submitted_by** (`exam_submitted_by`, `select_one`, optional): Indicate whether the exam was submitted by the user or not.

### select_exam_submitted_at
* **select_exam_submitted_at** (`exam_submitted_at`, `select_one`, optional): Indicate whether the exam was submitted at a certain time.

### select_exam_submitted_by_user
* **select_exam_submitted_by_user** (`exam_submitted_by_user`, `select_one`, optional): Indicate whether the exam was submitted by the user or not.

## Tips
Make sure to fill out all the required fields and provide as much information as possible to ensure accurate records of the exam. Review the form carefully before submission to avoid missing any essential details.
