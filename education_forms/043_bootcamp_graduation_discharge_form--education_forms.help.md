# Bootcamp Graduation Discharge Form - Help Guide
## Purpose

This form is used to document a participant's completion of a bootcamp program, including their progress, skills acquired, and overall experience with the program.

## How To Complete This Form

To complete this form, follow these steps:

1.  Start by filling out the required fields, marked with an asterisk (*).
2.  Select the correct options for each field, paying attention to any hints provided.
3.  Double-check your work before submitting the form.

## Field-by-Field Explanation

### Participant Name
* **Participant Name** (`participant_name`, text, required)
	+ Enter the full name of the participant who completed the program.

### Participant ID
* **Participant ID** (`participant_id`, text, optional)
	+ Enter the student or participant number, if applicable.

### Bootcamp Name
* **Bootcamp Program Name** (`bootcamp_name`, text, required)
	+ Enter the name of the program the participant completed.

### Program Start Date
* **Program Start Date** (`program_start_date`, date, required)
	+ Enter the date when the participant started the program.

### Program End Date
* **Graduation Date** (`program_end_date`, date, required)
	+ Enter the date when the participant completed the program.

### Graduation Status
* **Graduation Status** (`graduation_status`, select_one, required)
	+ Select one of the following options:
		- Completed successfully
		- Completed with distinction
		- Completed with honors
		- Completed
		- Did not complete
		- Withdrew

### Final Grade or Score
* **Final Grade or Score** (`final_grade`, number, optional)
	+ Enter the overall performance grade or score.

### Certification Issued
* **Certification Issued** (`certification_issued`, select_one, required)
	+ Select one of the following options:
		- True
		- False
		- Pending

### Certification Type
* **Certification Type** (`certification_type`, select_one, optional)
	+ Select the type of certification issued:
		- Standard certificate
		- Professional certification
		- Advanced certification
		- Industry credential
		- Other

### Employment Outcome
* **Employment Outcome** (`employment_outcome`, select_one, optional)
	+ Select one of the following options:
		- Employed full-time
		- Employed part-time
		- Self-employed
		- Further education
		- Seeking employment
		- Other

### Current Employer
* **Current Employer** (`employer_name`, text, optional)
	+ Enter the name of the current employer, if applicable.

### Key Skills Acquired
* **Key Skills Acquired** (`skills_acquired`, select_multiple, required)
	+ Select the skills the participant acquired during the program:
		- Technical skills
		- Programming languages
		- Project management
		- Leadership
		- Communication
		- Problem solving
		- Team collaboration
		- Industry-specific skills

### Program Feedback
* **Program Feedback** (`program_feedback`, text, optional)
	+ Enter an overall impression of the program.

### Recommend Program
* **Would You Recommend This Program** (`recommend_program`, select_one, required)
	+ Select one of the following options:
		- Highly recommend
		- Recommend
		- Neutral
		- Not recommended

### Discharge Date
* **Discharge Date** (`discharge_date`, date, required)
	+ Enter the date of program completion.

Note: This guide is based on the provided YAML fields, and the explanations are to the best effort of the fields' intended purpose. If there is any confusion or need for further clarification, please refer to the program administrators.
