# Document Review Checklist - Help Guide
## Purpose
The Document Review Checklist is a form designed to collect information about documents that require review. This form helps ensure that all necessary details are collected during the review process, aiding in maintaining accurate and up-to-date records.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill out the Document Overview field with a short description of the document.
2.  Select the Document Type (Manual, Report, or Contract) from the available options.
3.  Enter the Review Date (date of review) in the specified format.
4.  Enter the Reviewer's Name (e-mail address).
5.  If applicable, input the Review Period (number of days or weeks between reviews).
6.  Select the Document Status (True or False) based on the document's current status.
7.  Enter the Review Duration (time in hours or minutes).
8.  Provide any additional Reviewer's Notes for the reviewer.
9.  Enter the Document Version Number.
10.  Select the Review Location (Office, Home, or Remote) where the review was performed.
11.  Choose the Review Frequency (Daily, Weekly, or Monthly) for the document.
12.  If desired, enter any Review Comments for the reviewer.

## Field-by-Field Explanation

* **Document Overview** (`document_overview`, `text`, required): A short description of the document to help the reviewer understand the context.
* **Document Type** (`document_type`, `select_one`, required): Select the type of document (Manual, Report, or Contract).
* **Review Date** (`review_date`, `date`, required): Enter the date of the review.
* **Reviewer's Name** (`reviewer_name`, `email`, required): Enter the reviewer's e-mail address.
* **Review Period** (`review_period`, `number`, optional): If applicable, enter the number of days or weeks between reviews.
* **Document Status** (`document_status`, `select_multiple`, required): Select the current status of the document (True or False).
* **Review Duration** (`review_duration`, `time`, required): Enter the duration of the review in hours or minutes.
* **Reviewer's Notes** (`reviewer_notes`, `text`, required): Provide any additional notes for the reviewer.
* **Document Version** (`document_version`, `number`, required): Enter the document version number.
* **Review Location** (`review_location`, `select_one`, required): Select the location where the review was performed (Office, Home, or Remote).
* **Review Frequency** (`review_frequency`, `select_one`, required): Choose the frequency of the document review (Daily, Weekly, or Monthly).
* **Review Comments** (`review_comments`, `text`, optional): Enter any comments for the reviewer.
