# Status Card Application Form - Help Guide
## Purpose
This form is designed to collect and track the status of applications or status cards submitted by applicants. It helps in maintaining an organized record of applications, their supporting documents, and the current status of each application.

## How To Complete This Form

1. Fill in the required fields to identify the applicant (applicant_info) and provide necessary contact information (contact_details).
2. Upload supporting documents (supporting_documents) as required.
3. Confirm your consent (consent) to proceed with the application.
4. Provide the current status of your application (status) and the date/time of submission (submission_date, submission_time).
5. Identify who submitted the application (submitted_by).
6. Add any comments or notes (submitted_comments, submitted_notes) for your application.
7. Review and confirm the status (review_status) and any comments (review_comments) on your application.
8. Identify who reviewed the application (reviewer_info, reviewer_name).
9. Add any reviewer comments or notes (reviewer_comments, reviewer_notes).
10. Confirm the status of the review (reviewer_status).

## Field-by-Field Explanation

* **application_info (text, required, false)**: This field is meant for any additional information about the application.
* **applicant_info (select_one, true)**: Select one of the following options to provide the applicant's First Name, Last Name, Date of Birth, Email, or Phone.
* **supporting_documents (select_multiple, true)**: Select one or more of the following documents: Passport, ID Card, or Birth Certificate.
* **consent (text, true)**: Confirm your consent to proceed with the application.
* **contact_details (select_one, true)**: Select one of the following contact options: Address, Phone, or Email.
* **status (select_one, true)**: Select one of the following status options: Applied, In progress, or Complete.
* **submission_date (date, true)**: Provide the date of submission.
* **submission_time (time, true)**: Provide the time of submission.
* **submitted_by (select_one, true)**: Select one of the following users: User 1, User 2, or User 3.
* **submitted_date (date, true)**: Provide the date of submission.
* **submitted_time (time, true)**: Provide the time of submission.
* **submitted_status (select_one, true)**: Select one of the following status options: Completed, In progress, or Rejected.
* **review_status (select_one, true)**: Select one of the following status options: Approved, Rejected, or In progress.
* **submitted_comments (text, false)**: Add any comments about the application.
* **review_comments (text, false)**: Add comments about the review process.
* **reviewer_info (select_one, false)**: Select one of the following users: User 1 or User 2.
* **reviewer_name (select_one, false)**: Select one of the following users: User 1 or User 2.
* **reviewer_comments (text, false)**: Add comments about the review process.
* **review_notes (text, false)**: Add any reviewer notes.
* **submitted_by_notes (text, false)**: Add notes about the submitted application.
* **reviewer_notes (text, false)**: Add any reviewer notes.
* **submitted_by_status (select_one, false)**: Select one of the following status options: Completed, In progress.
* **submitted_by_comments (text, false)**: Add comments about the submitted application.
* **reviewer_status (select_one, false)**: Select one of the following status options: Completed, In progress.
* **reviewer_comments (text, false)**: Add comments about the review process.
