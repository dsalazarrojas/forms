<thinking>
We are creating a user-facing help guide for a form used to schedule job interviews. The form is intended to capture relevant information about a candidate and the job they are applying for. We want to ensure that end-users understand the purpose of the form, how to complete it, and what each field means. This will help them fill out the form accurately and effectively.

This guide will be based on the provided YAML fields, which define the form's structure and requirements. We will aim to create a concise and practical guide that explains each field's purpose and any other relevant details.

</thinking>

# <string> - Help Guide
## Purpose
This form is used to schedule job interviews for candidates applying for various job positions. It captures essential information about the candidate and the job they are applying for, which will be used to facilitate the interview process.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the correct job interview form by choosing the desired label.
2.  Fill out the form with the required information, starting with the candidate's name, the date of the job interview, the start time of the interview, the interviewer's name, and finally, the type of job being applied for.
3.  In the job type field, select one of the provided options, as this information is required to proceed with the interview.
4.  Optionally, provide the candidate's name, their skills, the company the job belongs to, the job title, and any other details in the respective fields.
5.  Review and submit the form once you have filled out all the required and optional fields.

## Field-by-Field Explanation
*   **Candidate Name** (`Candidate Name`, `text`, `required`): Enter the candidate's name in this field. This is the name of the person applying for the job.
*   **Job Interview Date** (`Job Interview Date`, `date`, `required`): Select the date of the job interview from the available dates. This is the date when the interview will take place.
*   **Interview Start Time** (`Interview Start Time`, `time`, `required`): Select the start time of the interview. This is when the interview will begin.
*   **Interviewer Name** (`Interviewer Name`, `text`, `required`): Enter the name of the interviewer. This is the person conducting the interview.
*   **Job Type** (`Job Type`, `select_one`, `required`): Choose the type of job the candidate is applying for from the list provided. This information is essential for the interview process.
*   **Company** (`Company`, `text`, `required`): Enter the name of the company the job belongs to. This will be relevant for future reference.
*   **Candidate Skills** (`Candidate Skills`, `select_multiple`, `required`): Select the relevant skills from the list provided. This will help the interviewer understand the candidate's qualifications.
*   **Job Title** (`Job Title`, `text`, `optional`): This field is for additional details about the job title if needed.
*   **Job Summary** (`Job Summary`, `note`, `optional`): If required, provide a brief summary of the job details in this field.
