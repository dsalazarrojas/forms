<thinking>
This form is used to check in the coach's status with their student's progress and overall health. 
To check for duplication and ensure accuracy, the form requires the user to select whether the student has a yes/no status for coach and progress, and provide their overall health progress in text. 
The fields can be completed by a coach who has a clear view of the student's progress and health. 
However, it is recommended that the user only complete one weekly check-in per student. 
</thinking>
# gtf_weekly_check_in - Help Guide
## Purpose
The gtf_weekly_check_in form is used to check in the coach's status with their student's progress and overall health.

## How To Complete This Form
To complete this form, follow these steps:

1. Select whether the student has a "Yes" or "No" status for their coach and progress.
2. Select whether the student's progress is "Yes" or "No".
3. Provide a brief description of the student's overall health progress in the text field.

## Field-by-Field Explanation

* **Coach** (`coach`, select_one, required): Select "Yes" if the student's coach is present, "No" otherwise.
* **Progress** (`progress`, select_one, required): Select "Yes" if the student is making progress, "No" otherwise.
* **Overall Health Progress** (`health_progress`, text, optional): Provide a brief description of the student's overall health progress.

## Tips
* Only complete one weekly check-in per student.
* Make sure to select the correct status for each field based on the student's actual progress and condition.
