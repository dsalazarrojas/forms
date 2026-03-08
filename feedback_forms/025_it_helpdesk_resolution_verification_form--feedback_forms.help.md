# it_helpdesk_resolution_verification_form - Help Guide

## Purpose
The it_helpdesk_resolution_verification_form is a form used to verify the resolution of an issue reported to the helpdesk. It allows users to provide feedback on whether the issue was successfully resolved or not, and to record the date and time the resolution was made.

## How To Complete This Form

To complete this form, follow these steps:

1. Provide your feedback on the resolution of the issue by selecting one of the options in the **resolution_type** field.
2. If the issue was resolved, enter the date and time of the resolution in the **resolution_date** field.
3. If the issue was resolved, enter the time the resolution was made in the **resolution_time** field.
4. Provide any additional comments or feedback on the resolution in the **resolution_note** field.
5. If you have any further comments or feedback on the issue, you can provide them in the **feedback** field.

## Field-by-Field Explanation

* **user_feedback** (`user_feedback`, text, optional): Provide a brief summary of your feedback on the resolution of the issue.
* **resolution_type** (`resolution_type`, select_one, required): Select one of the options to indicate whether the issue was successfully resolved or not. Options:
	+ Successful resolution
	+ Unsuccesful resolution
	+ Not resolved
* **resolution_date** (`resolution_date`, date, optional): Enter the date of the resolution.
* **resolution_time** (`resolution_time`, time, optional): Enter the time of the resolution.
* **resolution_note** (`resolution_note`, note, optional): Provide any additional comments on the resolution.
* **feedback** (`feedback`, note, optional): Provide any further comments or feedback on the issue.

## Tips
* Make sure to provide detailed and accurate feedback on the resolution.
* If the issue was not resolved, please select the "Not resolved" option in the **resolution_type** field.
