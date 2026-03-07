<thinking>
This is a crucial form for requesting employee identity badges, and it's essential to ensure that all information is accurate and complete. Before proceeding, please review the fields carefully to avoid duplication and ensure that you're not requesting multiple badges for the same employee. 
</thinking>

# identity_badge_request_form - Help Guide
## Purpose
The "Identity Badge Request Form" is used to request an employee identity badge. It captures essential information for badge issuance and management.

## How To Complete This Form
1. Fill in the first name and last name fields accurately and completely.
2. Enter the employee's ID number.
3. Select the department and shift for the employee.
4. Choose the badge type required (Standard, Senior, or Manager).
5. Enter the start and end dates for the badge usage.
6. Provide a clear reason for requesting a badge.
7. If applicable, select "Manager Confirmation" as required.
8. Sign the Employee Request and Employee Supervisor signature fields.
9. Have your manager sign to confirm the request.
10. Enter the badge number and status.
11. Add any relevant notes if necessary.

## Field-by-Field Explanation
* **First and Last Name (id: 1)** (`text`, `required`, ): Enter the full name of the employee requesting the badge.
* **Employee Id (id: 2)** (`text`, `required`, ): Enter the employee's unique ID number.
* **Department (id: 3)** (`select_one`, `required`, ): Select the department the employee belongs to (Accounting, Engineering, Marketing, or Sales).
* **Shift (id: 4)** (`select_one`, `required`, ): Select the shift the employee works (Day Shift, Night Shift, or Rotating Shift).
* **Badge Type (id: 5)** (`select_one`, `required`, ): Choose the badge type required (Standard, Senior, or Manager).
* **Start Date (id: 6)** (`date`, `required`, ): Enter the date the employee needs to start using the badge.
* **End Date (id: 7)** (`date`, `required`, ): Enter the date the employee no longer needs to use the badge.
* **Reason for Request (id: 8)** (`text`, `required`, ): Provide a clear and concise explanation for the badge request.
* **Manager Confirmation (id: 9)** (`select_one`, `optional`, ): Select "Approve" if you're confirming the request.
* **Employee Request (id: 10)** (`text`, `required`, ): Sign the request with your employee signature.
* **Employee Supervisor Signature (id: 11)** (`text`, `required`, ): Sign the request with your supervisor's signature.
* **Manager Signature (id: 12)** (`text`, `required`, ): Sign the request with your manager's signature.
* **Manager Supervisor Signature (id: 13)** (`text`, `required`, ): Sign the request with the department manager's signature.
* **Badge Number (id: 16)** (`text`, `required`, ): Enter the badge number for the issued badge.
* **Badge Status (id: 17)** (`text`, `required`, ): Update the badge status for tracking purposes.
* **Notes (id: 18)** (`note`, `optional`, ): Add any additional information or comments related to the request if necessary.

Remember, it's essential to fill this form accurately and completely to ensure that your badge request is processed efficiently and correctly.
