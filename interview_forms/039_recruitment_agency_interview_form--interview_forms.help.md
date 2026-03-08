<thinking>
The Recruitment Agency Interview Form is used by recruitment agencies to record and store information about candidates who have gone through an interview process. This form is designed to capture relevant details about the candidate, including their name, contact information, availability, and feedback from the interview process. By filling out this form, the agency can keep track of multiple candidates and their respective statuses, making it easier to manage the recruitment process and identify suitable candidates for available positions. 
</thinking>

# Recruitment Agency Interview Form - Help Guide
## Purpose
The Recruitment Agency Interview Form is a tool used by recruitment agencies to document and track the progress of candidates through the interview process.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the candidate's name in the "First Name" field.
2. Enter the candidate's last name in the "Last Name" field.
3. Enter the candidate's email address in the "Email" field.
4. Enter the candidate's phone number in the "Phone" field.
5. Attach the candidate's resume in the "Resume" field (if applicable).
6. Select the date the candidate is available to start work in the "Date Available" field.
7. Enter the time the interview was scheduled for in the "Interview Time" field.
8. Select the duration of the interview in the "Interview Duration" field.
9. Enter any additional notes about the interview in the "Interview Notes" field.
10. Select the candidate's status as "Qualified" or "Not Qualified" in the "Candidate Status" field.
11. If the candidate is not qualified, enter a reason for their status in the "Reason Not Qualified" field.
12. Indicate whether or not the candidate was interviewed by multiple interviewers in the "Interviewers" field.
13. Select the location of the interview in the "Location" field.
14. Select if the candidate is for a job title that matches the options provided in the "Job Title" field.
15. If the candidate is not for a listed job title, enter the job title in the "Other Job Title" field.

## Field-by-Field Explanation

### First Name
**First Name** (`candidate_name`, text, **required:** false): Enter the candidate's first name.

### Last Name
**Last Name** (`last_name`, text, **required:** false): Enter the candidate's last name.

### Email
**Email** (`email`, email, **required:** false): Enter the candidate's email address.

### Phone
**Phone** (`phone`, text, **required:** false): Enter the candidate's phone number.

### Resume
**Resume** (`resume`, note, **required:** false): Attach the candidate's resume (if applicable).

### Date Available
**Date Available** (`date_available`, date, **required:** false): Select the date the candidate is available to start work.

### Interview Time
**Interview Time** (`interview_time`, time, **required:** false): Enter the time the interview was scheduled for.

### Interview Duration
**Interview Duration** (`interview_duration`, number, **required:** false): Select the duration of the interview.

### Interview Notes
**Interview Notes** (`interview_notes`, note, **required:** false): Enter any additional notes about the interview.

### Candidate Status
**Candidate Status** (`candidate_status`, select_one, **required:** true): Select the candidate's status as "Qualified" or "Not Qualified".

### Reason Not Qualified
**Reason Not Qualified** (`reason_not_qualified`, text, **required:** false): If the candidate is not qualified, enter a reason for their status.

### Interviewers
**Interviewers** (`interviewers`, select_multiple, **required:** false): Indicate whether or not the candidate was interviewed by multiple interviewers.

### Location
**Location** (`location`, select_one, **required:** false): Select the location of the interview.

### Job Title
**Job Title** (`job_title`, select_one, **required:** false): Select if the candidate is for a job title that matches the options provided.

### Other Job Title
**Other Job Title** (`job_title_other`, text, **required:** false): If the candidate is not for a listed job title, enter the job title.
