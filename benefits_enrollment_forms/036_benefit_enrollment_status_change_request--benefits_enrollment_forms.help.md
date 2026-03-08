# Benefit Enrollment Status Change Request - Help Guide
## Purpose

This form is used to request a change in an employee's benefit enrollment status. This form captures information needed for a change in enrollment status, including the type of change, requested status, and effective date of the change.

## How To Complete This Form

1. Ensure you have all necessary supporting documentation before starting the form.
2. Fill in the employee's information, including their name, ID, and email address.
3. Select the current enrollment status and current plans enrolled in.
4. Choose the type of change request being made and the requested status.
5. Enter the effective date of the change.
6. If applicable, select the type of life event and date of the life event.
7. Attach any supporting documentation required for the change request.
8. Acknowledge that this is a status change request.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter the employee's name.
* **Employee ID** (`employee_id`, text, required): Enter the employee's ID number.
* **Email Address** (`email`, email, required): Enter the employee's email address.
* **Phone Number** (`phone`, text, optional): Enter the employee's phone number.
* **Department** (`department`, text, required): Enter the employee's department.
* **Date of Employment** (`employment_date`, date, optional): Enter the date the employee was employed.
* **Current Enrollment Status** (`current_status`, select_one, required): Select the current enrollment status: Enrolled, Partially Enrolled, Not Enrolled, Waiting Period, or Suspended.
* **Current Plans Enrolled In** (`current_plans`, text, optional): Enter the plans the employee is currently enrolled in.
* **Current Enrollment Date** (`enrollment_date`, date, optional): Enter the date the employee's current enrollment status was effective.
* **Type of Change Request** (`request_type`, select_one, required): Choose the type of change request: Add Enrollment, Remove Enrollment, Modify Enrollment, Switch Plans, Reinstate Coverage, or Other.
* **Requested Enrollment Status** (`requested_status`, select_one, required): Select the requested enrollment status: Fully Enrolled, Partially Enrolled, Waive Coverage, Activate Coverage, or Other.
* **Requested Effective Date** (`effective_date`, date, required): Enter the date the requested status change should take effect.
* **Reason for Change** (`reason_for_change`, select_one, required): Choose the reason for the change: Life Event, Open Enrollment, Cost Reduction, Coverage Improvement, Plan Termination, or Other.
* **Type of Life Event** (`life_event`, select_one, optional): If applicable, select the type of life event: Marriage, Divorce, Birth, Adoption, Death in Family, Loss of Coverage, Relocation, or Other.
* **Date of Life Event** (`life_event_date`, date, optional): If applicable, enter the date of the life event.
* **Supporting Documents Attached** (`supporting_documents`, text, optional): Attach any supporting documentation required for the change request.
* **I Acknowledge This Is a Status Change Request** (`acknowledge_terms`, select_one, required): Select I Agree or I Do Not Agree.
* **Date of Submission** (`submission_date`, date, required): Enter the date the form was submitted.
