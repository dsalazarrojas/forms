<thinking> 
To create a comprehensive help guide for the "manufacturing_long_term_sick_leave_request" form, we need to understand its purpose and ensure that end users know how to complete it correctly. This form is used for manufacturing employees to request a long-term sick leave, which is crucial for them to take care of their health without impacting their work. However, we need to check if the form is relevant and not duplicated. We should ensure that the form's purpose and requirements are clear to prevent any confusion or misinterpretation.</thinking>

# manufacturing_long_term_sick_leave_request - Help Guide
## Purpose
The manufacturing long-term sick leave request form is used for employees in the manufacturing department to formally request a leave of absence due to health reasons. This form ensures that employees can take care of their well-being without affecting their work commitments.

## How To Complete This Form
1.  Fill out the form carefully and honestly, providing all necessary information.
2.  Ensure you have discussed and received approval from your plant manager before submitting this form.
3.  Attach any supporting documentation as required (e.g., doctor's note, medical certificate).
4.  Submit the form to the HR department for processing.

## Field-by-Field Explanation
*   **Employee** (`employee`, text, optional): Enter your name as it appears on your employee ID card.
*   **start_date** (`leave_start_date`, date, optional): Enter the date you would like to begin your leave.
*   **end_date** (`leave_end_date`, date, optional): Enter the date you would like your leave to end.
*   **reason** (`reason`, text, optional): Provide a brief explanation for your leave request (e.g., medical condition, treatment, or recovery).
*   **plant_manager_approval** (`plant_manager_approval`, select_multiple, optional): Select 'Yes' to indicate that you have discussed and received approval from your plant manager before submitting this form.
*   **manager_approval** (`manager_approval`, select_multiple, optional): Select 'Yes' to indicate that you have received approval from your direct manager before submitting this form.
*   **HR Review Status** (`hr_review_status`, select_one, optional): This field will display the current status of your leave request (e.g., Approved, Rejected, or Pending).
*   **return_date** (`employee_return_date`, date, optional): Enter the date you expect to return to work after your leave.
*   **notes** (`employee_notes`, text, optional): Add any additional comments or notes about your leave request.
*   **employee_signature** (`employee_signature`, text, optional): Provide your signature to confirm that the information provided is accurate and true.
*   **manager_signature** (`manager_signature`, text, optional): Your direct manager's signature confirming that they have reviewed and approved your leave request.
*   **plant_manager_notes** (`plant_manager_notes`, text, optional): Enter any additional comments or notes from the plant manager regarding your leave request.
*   **plant_manager_signature** (`plant_manager_signature`, text, optional): Provide the plant manager's signature confirming their review and approval of your leave request.
