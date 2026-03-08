# special-education-needs-assessment-form - Help Guide
## Purpose
This form is used to assess a student's special education needs. It helps gather information about the student's grade level, subjects of interest, and potential special education services required. The collected data will be used to create a suitable educational assistance plan for the student.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First Name, Last Name, and School Name on pages 1-3.
2. Select the student's grade level from the options on page 4.
3. Choose the subjects the student is interested in on page 5.
4. Choose the parent or educator who is completing the form on page 6.
5. Select the special education services needed on page 7.
6. Choose the type of educational assistance plan required on page 8.
7. Add any additional comments about the student on page 9.
8. Fill in the student's contact information on page 10.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, **optional**): Enter the student's first name.
* **Last Name** (`last_name`, text, **optional**): Enter the student's last name.
* **Student District** (`student_district`, text, **optional**): Enter the student's school district.
* **School Name** (`school_name`, text, **optional**): Enter the student's school name.
* **Student Grade** (`student_grade`, select_one, **optional**): Select the student's grade level from the options.
	+ 1: Grade 1
	+ 2: Grade 2
	+ 3: Grade 3
	+ 4: Grade 4
	+ 5: Grade 5
	+ 6: Grade 6
	+ 7: Grade 7
	+ 8: Grade 8
* **Student Subjects of Interest** (`student_subjects_of_interest`, select_multiple, **optional**): Choose the subjects the student is interested in.
	+ English
	+ Math
	+ Language Arts
	+ Science
	+ Social Sciences
* **Parent or Educator** (`parent_or_educator`, select_one, **optional**): Choose who is completing the form.
	+ Parent
	+ Educator
* **Date Created** (`date_created`, date, **optional**): This field is automatically populated and will not be edited by the user.
* **Time Created** (`time_created`, time, **optional**): This field is automatically populated and will not be edited by the user.
* **Special Education Services Needed** (`special_education_services_needs`, select_multiple, **optional**): Choose the special education services required.
	+ Speech and Language Disorder
	+ Reading/Learning Disability
	+ Emotional and Behavioral Disability
	+ Physical Disability
	+ Other
* **Educational Assistance Plan** (`educational_assistance_plan`, select_multiple, **optional**): Choose the type of educational assistance plan required.
	+ IEP with a Plan
	+ Section 504 Plan
	+ Other
* **Additional Comments** (`additional_comments`, note, **optional**): Add any additional comments about the student.
* **Student Contact Info** (`student_contact`, text, **optional**): Fill in the student's contact information.
