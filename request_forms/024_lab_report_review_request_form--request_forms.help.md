<thinking>
The purpose of this form is to enable users to request a review of a lab report, which is a critical component of the scientific process. By submitting this form, users can initiate a review process that ensures lab reports are thoroughly evaluated and approved before being published or used in decision-making. This form is typically used by submitters (the individuals or teams that conduct lab experiments and generate reports) to request a review from a designated reviewer.

Before proceeding, we must verify that this form will not be completed by the submitter who originally created the lab report, and that it will not be submitted for review if the report is already being reviewed. If these conditions are met, we can proceed to guide the end-user through the form completion process.

## Lab Report Review Request Form - Help Guide

## Purpose
The Lab Report Review Request Form is used to request a review of a lab report, ensuring thorough evaluation and approval before publication or use in decision-making.

## How To Complete This Form

To complete this form, please follow these steps:

1. Ensure that you have already submitted the lab report and have not already begun a review request.
2. Fill out the following fields:
  - **Request ID**: Enter the unique ID of your lab report.
  - **Review Requested**: Confirm whether you would like the review to be done (Yes/No).
  - **Reviewer's Email**: Enter the email address of the reviewer you have chosen to review your report.
  - **Lab Report**: Briefly describe the lab report you would like reviewed.
  - **File Upload**: If applicable, attach any supporting files or documents related to the lab report.
  - **Review Date**: Select the date on which you would like the review to take place.
  - **Review Time**: Select the time of day you would like the review to take place.
  - **Review Status**: Indicate the current status of your review request.
  - **Notes**: Add any additional comments or information to facilitate the review process.
  - **Reviewer Comments**: Provide any feedback or comments for the reviewer.
  - **Submitter**: Enter your name and department/affiliation.
  - **Lab Report Type**: Indicate whether the lab report is of type "Lab Report" or "Other".

## Field-by-Field Explanation

- **Request ID**: A unique identifier for your lab report, used to track your request.
  - (id: 2, type: number)
- **Review Requested**: Confirm whether you would like the review process to begin.
  - (id: 3, type: select_one, options: Yes/No)
- **Reviewer's Email**: The email address of the designated reviewer.
  - (id: 4, type: email)
- **Lab Report**: A brief description of the lab report you would like reviewed.
  - (id: 5, type: text)
- **File Upload**: Any supporting files or documents related to the lab report.
  - (id: 6, type: text)
- **Review Date**: The date on which you would like the review to take place.
  - (id: 7, type: date)
- **Review Time**: The time of day for the review.
  - (id: 8, type: time)
- **Review Status**: The current status of your review request.
  - (id: 9, type: select_one, options: Review in Progress, Reviewed, Rejected)
- **Notes**: Additional comments or information to facilitate the review process.
  - (id: 10, type: note)
- **Reviewer Comments**: Feedback or comments for the reviewer.
  - (id: 11, type: text)
- **Submitter**: Your name and department/affiliation.
  - (id: 12, type: text)
- **Lab Report Type**: Indicate the type of lab report (Lab Report/Other).
  - (id: 15, type: select_one, options: Lab Report/Other)

## Tips
Please ensure that you fill out all required fields accurately, and that the reviewer is aware of the review request.
