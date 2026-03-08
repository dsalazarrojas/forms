# PEO Employee Document Access Request - Help Guide
## Purpose
This form is designed to capture requests from PEO employees for access to specific documents. It allows employees to indicate whether they need access to certain documents, and the supporting information required for the request, such as the request date, access type, department, and manager approval. The form is used to streamline document access requests and ensure that all relevant information is gathered for processing.

## How To Complete This Form
To complete this form, follow these steps:

1. Select whether you need access to certain documents by choosing 'Yes' or 'No' from the options provided.
2. Enter your Employee ID in the provided field.
3. Enter the date you requested access to the documents.
4. Choose the type of access you are requesting.
5. Enter your department (optional).
6. Indicate if your manager has approved your request.
7. Enter your manager's name (if your manager has approved your request).
8. Select your status as an employee (Active or Inactive).
9. Indicate the status of your document request (Active or Inactive).
10. Enter the name of the user who created this request.
11. Enter the date this request was created.
12. Enter the name of the user who last updated this request.
13. Enter the date this request was last updated.
14. Enter the name of the user who submitted this request.
15. Enter the date this request was submitted.
16. Indicate who this request was submitted to (Yes or No).

## Field-by-Field Explanation

* **Employee Document Access Request Form** (`employee_document_access_requests_snippet`, Select Multiple, Required): This field allows you to select the type of document you need access to.
* **Employee ID** (`employee_id`, Number, Required): Enter your Employee ID number to identify yourself as a PEO employee.
* **Document Request Date** (`document_request_date`, Date, Required): Enter the date you requested access to the document.
* **Access Request Type** (`access_request_type`, Select Multiple, Required): Choose the type of access you are requesting (e.g., "Yes" or "No").
* **Department** (`department`, Text, Optional): Enter your department name (optional).
* **Manager Approval** (`manager_approval`, Select One, Required): Indicate if your manager has approved your request.
* **Manager Name** (`manager_name`, Text, Required if Manager Approval is Yes): Enter your manager's name if they have approved your request.
* **Employee Status** (`employee_status`, Select Multiple, Required): Select your status as an employee (Active or Inactive).
* **Document Request Status** (`document_request_status`, Select Multiple, Required): Indicate the status of your document request (Active or Inactive).
* **Created By** (`created_by`, Text, Required): Enter the name of the user who created this request.
* **Created On** (`created_on`, Date, Required): Enter the date this request was created.
* **Updated By** (`updated_by`, Text, Required): Enter the name of the user who last updated this request.
* **Updated On** (`updated_on`, Date, Required): Enter the date this request was last updated.
* **Submitted By** (`submitted_by`, Text, Required): Enter the name of the user who submitted this request.
* **Submitted On** (`submitted_on`, Date, Required): Enter the date this request was submitted.
* **Submitted To** (`submitted_to`, Select One, Required): Indicate if this request was submitted to someone (Yes or No).
