# medical_equipment_check_out_form - Help Guide
## Purpose
This form is used to record the checkout of medical equipment, including details about the equipment type, description, user name, check out date, due date, checked out by, returned date, returned by, remarks, equipment status, equipment location, loan duration, loan amount, loan date, return date, returned by, medical equipment number, loan/return, comments, equipment type 2, equipment status 2, remarks 2, loan/return 2, medical equipment number 2, comments 2. The form helps in maintaining accurate and up-to-date records of equipment usage, loan durations, and return status.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Select the relevant equipment type and description from the options provided.
2. Enter the user's name who is checking out the equipment.
3. Choose the check out date for the equipment.
4. Select the due date for the equipment to be returned.
5. Choose the user who will be checking out the equipment.
6. Enter the date the equipment was returned.
7. Enter the name of the user who returned the equipment.
8. Add any remarks regarding the equipment usage or return.
9. Select the status of the equipment after usage.
10. Enter the location of the equipment.
11. Enter the loan duration of the equipment.
12. Enter the loan amount of the equipment.
13. Enter the date the equipment was loaned.
14. Enter the date the equipment will be returned.
15. Enter the name of the user who returned the equipment.
16. Enter the medical equipment number.
17. Select the loan/return status of the equipment.
18. Add any comments regarding the equipment usage or return.
19. Select the equipment type for the duplicate equipment.
20. Select the status of the duplicate equipment after usage.
21. Add any remarks regarding the duplicate equipment usage or return.
22. Enter the loan/return status of the duplicate equipment.
23. Enter the medical equipment number for the duplicate equipment.
24. Add any comments regarding the duplicate equipment usage or return.

## Field-by-Field Explanation

* **Equipment Type** (`equipment_type`, text, required): Enter the type of medical equipment being checked out.
* **Equipment Description** (`equipment_description`, text, required): Enter a brief description of the medical equipment being checked out.
* **User Name** (`user_name`, text, required): Enter the name of the user checking out the equipment.
* **Check Out Date** (`checkout_date`, date, required): Enter the date the equipment is being checked out.
* **Due Date** (`due_date`, date, required): Enter the date the equipment is due to be returned.
* **Checked Out By** (`checked_out_by`, select_one, required): Select the user who is checking out the equipment.
* **Returned Date** (`returned_date`, date, required): Enter the date the equipment was returned.
* **Returned By** (`returned_by`, text, required): Enter the name of the user who returned the equipment.
* **Remarks** (`remarks`, note, required): Add any remarks regarding the equipment usage or return.
* **Equipment Status** (`equipment_status`, select_one, required): Select the status of the equipment after usage.
* **Equipment Location** (`equipment_location`, text, required): Enter the location of the equipment.
* **Loan Duration** (`loan_duration`, number, required): Enter the duration of the loan.
* **Loan Amount** (`loan_amount`, number, required): Enter the loan amount.
* **Loan Date** (`loan_date`, date, required): Enter the date the equipment was loaned.
* **Return Date** (`return_date`, date, required): Enter the date the equipment will be returned.
* **Returned By** (`returned_by`, text, required): Enter the name of the user who returned the equipment.
* **Medical Equipment Number** (`medical_equipment_number`, text, required): Enter the medical equipment number.
* **Loan/Return** (`loanor_return`, text, required): Select the loan/return status of the equipment.
* **Comments** (`comments`, note, required): Add any comments regarding the equipment usage or return.
* **Equipment Type 2** (`equipment_type_2`, text, required): Select the type of medical equipment for the duplicate equipment.
* **Equipment Status 2** (`equipment_status_2`, select_one, required): Select the status of the duplicate equipment after usage.
* **Remarks 2** (`remarks_2`, note, required): Add any remarks regarding the duplicate equipment usage or return.
* **Loan/Return 2** (`loanor_return_2`, text, required): Select the loan/return status of the duplicate equipment.
* **Medical Equipment Number 2** (`medical_equipment_number_2`, text, required): Enter the medical equipment number for the duplicate equipment.
* **Comments 2** (`comments_2`, note, required): Add any comments regarding the duplicate equipment usage or return.
