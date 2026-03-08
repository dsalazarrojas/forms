# Medical Equipment Check Out Form - Help Guide

## Purpose
The Medical Equipment Check Out Form is used by medical staff to request a loan of medical equipment.

## How To Complete This Form
Before completing this form, please review the form carefully to ensure that all required fields are filled out accurately. The form is divided into several sections, each of which has its own purpose and requirements.

## Field-by-Field Explanation

* **Loan Request Date** (`loan_request_date`, date, optional): Select the date the loan was requested. This date should be the date on which the loan request was made, not the date on which the equipment is actually loaned out.
* **Loan Type** (`loan_type`, select_one, optional): Select the type of loan. This could be Equipment Loan, Service Loan, or Other. Please choose the option that best describes the type of loan being requested.
* **Equipment Name** (`equipment_name`, text, optional): Enter the name of the equipment being loaned out. This should be a clear and concise name of the equipment being requested.
* **Equipment Type** (`equipment_type`, select_one, optional): Select the type of equipment. This could be Medical Equipment or Non-Medical Equipment. Please choose the option that best describes the type of equipment being loaned out.
* **Equipment Description** (`equipment_description`, text, optional): Enter a brief description of the equipment being loaned out. This field is not mandatory, but providing a description can help with future reference and tracking.
* **Loan Duration** (`loan_duration`, number, optional): Enter the duration of the loan in hours. This should be the number of hours the equipment is expected to be loaned out for.
* **Return Date** (`return_date`, date, optional): Select the date the equipment should be returned. This date should be the date on which the equipment is due back in the inventory.
* **Borrower Information** (`borrower_info`, text, optional): Enter the name of the person borrowing the equipment. This could be a staff member or a patient.
* **Equipment Status** (`equipment_status`, select_multiple, optional): Check the status of the equipment. This could be Available, In use, Damaged, or Missing. Please select all that apply.
* **Reason for Loan** (`reason_for_loan`, text, optional): Enter the reason for the loan. This could be for a procedure, treatment, or other reason.

## Tips
* Always ensure that the equipment is thoroughly inspected before loaning it out.
* Clearly indicate the loan duration and return date to avoid confusion.
* Update the equipment status accurately to reflect its current state.
* If the loan is cancelled or returned early, update the form accordingly.
* Review the form carefully before submitting it to ensure accuracy and completeness.
