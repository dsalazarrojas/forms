<thinking>

To determine whether a course addition request form is necessary and ensure it doesn't get duplicated. This form is intended for course requesters to ask for permission to add a course to the catalog, providing detailed information such as course titles, descriptions, restricted codes, status, and more. It's essential to understand how to correctly fill out the form to ensure the request is accurate and processed correctly.</thinking>

# course_add_permission_request_form - Help Guide
## Purpose
The course addition request form is used by course requesters to ask for permission to add a course to the catalog. This form is necessary to gather relevant information about the course, ensuring that the course can be properly evaluated and approved before being added.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out all required fields, marked as such.
2. Make sure to provide detailed and accurate information about the course.
3. Double-check your answers before submitting the form.

## Field-by-Field Explanation

* **Course Title** (`course_title`, text, required/optional): Enter the title of the course you want to add.
* **Course Name** (`course_name`, text, required): Enter the name of the course you want to add.
* **Department** (`department`, select_one, required/optional): Choose the department that the course belongs to.
* **Departmental Requester** (`departmental_requester`, select_multiple, required/optional): Choose the department(s) that requested the course.
* **Course Description** (`course_description`, text, required/optional): Enter a brief description of the course.
* **Restricted Course Title** (`restricted_course_title`, text, required/optional): Enter any relevant restricted title information for the course.
* **Restricted Course Code** (`restricted_course_code`, text, required): Enter the restricted course code for the course.
* **Course Status** (`course_status`, select_one, required): Choose the status of the course, either Active or Inactive.
* **Reason for Request** (`reason_for_request`, text, required/optional): Enter the reason for requesting to add the course.
* **Date Request Made** (`date_request_made`, date, required): Enter the date the request was made.
* **Requestor** (`requestor`, email, required): Enter the email of the requestor.
* **Email** (`email`, email, required): Enter the email of the requestor.
* **Phone** (`phone`, text, required/optional): Enter the phone number of the requestor.
* **Additional Comments** (`additional_comments`, text, required/optional): Enter any additional comments about the course.
* **Attachments** (`attachments`, note, required/optional): Attach any relevant documents or files.
* **Course Addition Type** (`course_addition_type`, select_multiple, required/optional): Choose the type of course addition.
* **Course Addition Status** (`course_addition_status`, select_one, required): Choose the status of the course addition, either Active or Inactive.
* **Course Requestor** (`course_requestor`, select_one, required): Choose whether the requestor is the course requester.
* **Course Department** (`course_department`, select_one, required): Choose the department of the course.
* **Course Requestor Department** (`course_requestor_department`, select_one, required): Choose whether the department requests the course.
* **Reason for Request 2** (`reason_for_request_2`, text, required/optional): Enter the reason for requesting to add the course.
* **Course Requestor ID** (`course_requestor_id`, text, required/optional): Enter the requestor's ID.
* **Course Requestor Name** (`course_requestor_name`, text, required/optional): Enter the requestor's name.
* **Course Requestor Contact** (`course_requestor_contact`, text, required/optional): Enter the requestor's contact information.
