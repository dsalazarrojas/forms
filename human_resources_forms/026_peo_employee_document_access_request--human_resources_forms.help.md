<thinking>
To ensure consistency and accuracy, we'll review the form purpose and fields before creating the user-facing help guide.

The form is for PEO (Personnel and Executive Officer) Employee Document Access Request. The purpose of this form is to collect information for the requested employee documents, which can be ID cards, benefits cards, or other specific documents as specified. It's used to track and manage the access to these documents by employees in different departments and locations. The fields in this form are designed to collect employee and document details, access and approval information, and other relevant data.

To avoid duplication and ensure the user understands the form's purpose and requirements, we'll check for any potential issues with the provided YAML. All fields seem to be properly defined, and there's no indication of any conflicts or errors. This form appears to be well-structured and ready for users to complete.

</thinking>

# PEO Employee Document Access Request - Help Guide
## Purpose
The PEO Employee Document Access Request form is used to collect and manage information for employee documents, such as ID cards, benefits cards, and other specific documents. This form helps track and verify the access to these documents by employees in different departments and locations.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the employee's name in the `Employee Name` field.
2. Select the employee's role (Manager, Team Lead, or Employee) in the `employee_role` field.
3. Choose the type of document being requested (ID Card, Benefits Card, or Other) in the `Document Type` field.
4. Select the approval status (Approved, Rejected, or Pending) in the `Approval Status` field.
5. If the request is rejected, provide a reason for rejection in the `reason for rejection` field.
6. Enter the document date (if applicable) in the `Document Date` field.
7. Enter the document expiration date (if applicable) in the `Document Expiration` field.
8. Select the department and location where the document will be accessed in the `Department` and `Location` fields, respectively.
9. Enter any additional comments or notes in the `Comments` and `Comments By` fields.
10. Select the employee who created and updated the document in the `Created By` and `Updated By` fields, respectively.
11. Enter the date and time the document was created and updated in the `Created At` and `Updated At` fields, respectively.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, optional): Enter the name of the employee requesting access to the document.
* **Employee Role** (`employee_role`, select_one, required): Choose the role of the employee (Manager, Team Lead, or Employee).
* **Document Type** (`document_type`, select_one, required): Select the type of document being requested (ID Card, Benefits Card, or Other).
* **Request Date** (`request_date`, date, optional): Enter the date when the document was requested.
* **Approval Status** (`approval_status`, select_one, required): Select the current approval status of the document (Approved, Rejected, or Pending).
* **Reason for Rejection** (`reason_for_rejection`, text, optional): Enter a reason for rejecting the document (if applicable).
* **Comments** (`comments`, text, optional): Enter any additional comments or notes regarding the document.
* **Assigned To** (`assigned_to`, select_one, optional): Select the person or department responsible for managing the document.
* **Approved By** (`approved_by`, select_one, optional): Select the person or department that approved the document.
* **Document Date** (`document_date`, date, optional): Enter the date the document was created or updated.
* **Document Expiration** (`document_expiration`, date, optional): Enter the date when the document will expire.
* **Request Number** (`request_number`, number, optional): Enter a unique request number for the document.
* **Employee Document Number** (`employee_document_number`, text, optional): Enter a unique employee document number.
* **Document ID** (`document_id`, text, optional): Enter a unique document ID number.
* **Comments By** (`comments_by`, text, optional): Enter comments from the person who created the document.
* **Comments To** (`comments_to`, text, optional): Enter comments to be given to others.
* **Department** (`department`, select_one, required): Select the department where the document will be accessed.
* **Location** (`location`, text, optional): Enter the location where the document will be accessed.
* **Document Location** (`document_location`, text, optional): Enter the location where the document is stored.
* **Notes** (`notes`, text, optional): Enter any additional notes or comments regarding the document.
* **Created By** (`created_by`, select_one, optional): Select the person who created the document.
* **Updated By** (`updated_by`, select_one, optional): Select the person who updated the document.
* **Created At** (`created_at`, date, optional): Enter the date and time the document was created.
* **Updated At** (`updated_at`, date, optional): Enter the date and time the document was last updated.
