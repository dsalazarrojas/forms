# prophets pracy general_work_order_information_draft_1_test - Help Guide
## Purpose
The purpose of this form is to collect information about a work order or job details. This form is a draft version of a work order form, and its main goal is to gather essential data about the job, such as equipment usage, work duration, and job status.
## How To Complete This Form
1. Begin by providing your personal details, including:
	* **First Name**: Enter your first name.
	* **Last Name**: Enter your last name.
	* **Email**: Enter your email address, which will be validated as a correct email format.
	* **Phone**: Enter your phone number.
2. Specify your job details:
	* **Job Title**: Enter a brief description of the job or position.
	* **Job Number**: Enter a unique identifier for the job.
	* **Department**: Enter the department or team responsible for the job.
3. Choose the equipment used for the job:
	* **Equipment**: Select the type of equipment used for the job from the options provided.
4. Set the job duration:
	* **Job Start Date**: Enter the start date of the job in mm/dd/yyyy format.
	* **Job Start Time**: Enter the start time of the job in hh:mm AM/PM format (optional).
	* **Job End Date**: Enter the end date of the job in mm/dd/yyyy format.
	* **Job End Time**: Enter the end time of the job in hh:mm AM/PM format (optional).
5. Segment information:
	* **Segment**: Select multiple segments related to the job from the options provided.
6. Additional information:
	* **Segment 1**: Enter any additional information related to segment 1.
	* **Segment 2**: Enter any additional information related to segment 2.
	* **Segment 3**: Enter any additional information related to segment 3.
7. Finally, add any **Note** about the job.

## Field-by-Field Explanation
* **First Name** (1, text, required/optional): Enter your first name.
* **Last Name** (2, text, required/optional): Enter your last name.
* **Email** (3, email, required/true): Enter a valid email address.
* **Phone** (4, text, required/true): Enter your phone number.
* **Job Title** (5, text, required/true): Enter a brief description of the job or position.
* **Job Number** (6, text, required/true): Enter a unique identifier for the job.
* **Department** (7, text, required/true): Enter the department or team responsible for the job.
* **Equipment** (8, select_one, required/true): Select the type of equipment used for the job from the options provided.
* **Job Start Date** (9, date, required/true): Enter the start date of the job in mm/dd/yyyy format.
* **Job Start Time** (10, time, required/false): Enter the start time of the job in hh:mm AM/PM format (optional).
* **Job End Date** (11, date, required/true): Enter the end date of the job in mm/dd/yyyy format.
* **Job End Time** (12, time, required/false): Enter the end time of the job in hh:mm AM/PM format (optional).
* **Segment** (13, select_multiple, required/true): Select multiple segments related to the job from the options provided.
* **Segment 1** (14, text, required/false): Enter any additional information related to segment 1.
* **Segment 2** (15, text, required/false): Enter any additional information related to segment 2.
* **Segment 3** (16, text, required/false): Enter any additional information related to segment 3.
* **Note** (17, note, required/false): Add any note about the job.

Note: The form has been structured according to the provided YAML schema, ensuring that each field has a clear and concise explanation to guide the user through the completion process.
