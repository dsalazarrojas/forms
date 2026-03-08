# Teacher Recruitment Form - Help Guide
## Purpose
The Teacher Recruitment Form is a tool used by educational institutions to collect information from teachers applying for a position. This form helps the institution to gather necessary details about the applicant's qualifications, experience, and preferences.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Provide your email address in the "Email" field, following the standard email format (e.g., `example@example.com`).
4. Input your phone number in the "Phone Number" field, without any non-numeric characters.
5. Enter your date of birth in the "Date of Birth" field in the standard date format (e.g., `YYYY-MM-DD`).
6. Select your years of experience in the "Years of Experience" field.
7. Choose your job title from the dropdown list in the "Job Title" field. This could be Professor, Teacher, or Tutor.
8. Select all the teaching levels you are qualified for in the "Teaching Level" field. This could be High School, College, or University.
9. In the "Subjects Taught" field, provide a list of subjects you have taught or are familiar with.
10. Write a brief "About" yourself, explaining your background and experience.
11. In the "Uploaded Documents" field, select all relevant documents you have uploaded, such as CV, Resume, or Transcript.
12. Choose your preferred location for the job from the dropdown list in the "Preferred Location" field. This could be Online or Onsite.
13. Input your expected salary in the "Salary Expected" field.
14. Select the notice period you would like to be given before your contract is terminated in the "Notice Period" field.
15. Finally, in the "Notice Unit" field, input the unit of your expected notice period (e.g., days, weeks, or months).

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required: false): Enter your first name.
* **Last Name** (`last_name`, `text`, required: false): Enter your last name.
* **Email** (`email`, `email`, required: false): Enter your email address in the standard format (e.g., `example@example.com`).
* **Phone Number** (`phone_number`, `text`, required: false): Input your phone number without any non-numeric characters.
* **Date of Birth** (`date_of_birth`, `date`, required: false): Enter your date of birth in the standard date format (e.g., `YYYY-MM-DD`).
* **Years of Experience** (`years_of_experience`, `number`, required: false): Select your years of experience.
* **Job Title** (`job_title`, `select_one`, required: false): Choose your job title from the dropdown list (Professor, Teacher, Tutor).
* **Teaching Level** (`teaching_level`, `select_multiple`, required: true): Select all the teaching levels you are qualified for (High School, College, University).
* **Subjects Taught** (`subjects_taught`, `text`, required: false): Provide a list of subjects you have taught or are familiar with.
* **About** (`about`, `note`, required: false): Write a brief description about yourself, explaining your background and experience.
* **Uploaded Documents** (`uploaded_documents`, `select_multiple`, required: true): Select all relevant documents you have uploaded (CV, Resume, Transcript).
* **Preferred Location** (`preferred_location`, `select_one`, required: true): Choose your preferred location for the job (Online, Onsite).
* **Salary Expected** (`salary_expected`, `number`, required: false): Input your expected salary.
* **Notice Period** (`notice_period`, `time`, required: false): Select the notice period you would like to be given before your contract is terminated.
* **Notice Unit** (`notice_unit`, `text`, required: false): Input the unit of your expected notice period (e.g., days, weeks, or months).
