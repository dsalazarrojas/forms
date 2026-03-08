<thinking>
We need to create a user-facing help guide for the "Shift Handover Validation Form" to ensure that users understand its purpose and how to complete it. This form is likely used for validating shifts handed over between staff members, and it's essential to break down each field's purpose and requirements clearly for the end-users to fill it out correctly. We should consider that this form may be used by staff members who are not familiar with the system or the specific requirements for shift handovers.
</thinking>

# Shift Handover Validation Form - Help Guide
## Purpose
This form is used to validate shifts handed over between staff members. It aims to ensure that all necessary information is collected correctly to maintain accurate records and prevent errors.

## How To Complete This Form
To fill out this form, follow these steps:
1. Enter the start and end times of your shift.
2. Confirm if you have signed in and out of your shift correctly.
3. Confirm if the shift has been handed over correctly to the next staff member.
4. Enter any additional notes about your shift.

## Field-by-Field Explanation
* **Shift Start Time** (`shift_start_time`, time, required: false): Enter the time you started your shift.
* **Staff Signed In Time** (`staff_signed_in_time`, date, required: false): Enter the time you signed in for your shift.
* **Staff Member 1** (`staff_member_1`, select_multiple, required: false): Select if this staff member was present during your shift.
* **Staff Member 1 Signed In** (`staff_member_1_signed_in`, date, required: false): Enter the time staff member 1 signed in for their shift.
* **Staff Member 2** (`staff_member_2`, select_multiple, required: false): Select if this staff member was present during your shift.
* **Staff Member 2 Signed In** (`staff_member_2_signed_in`, date, required: false): Enter the time staff member 2 signed in for their shift.
* **Shift End Time** (`shift_end_time`, time, required: false): Enter the time you ended your shift.
* **Staff Member 1 Shift End** (`staff_member_1_shift_end`, select_multiple, required: false): Select if you have ended your shift.
* **Notes** (`notes`, note, required: false): Enter any additional notes about your shift.
* **Staff Member 1 Notes** (`staff_member_1_notes`, note, required: false): Enter any additional notes for staff member 1.
* **Staff Signed In Time Delta** (`staff_signed_in_time_delta`, number, required: false): Enter the time delta for signing in for your shift.
* **Signed In Reason** (`staff_signed_in_reason`, select_one, required: false): Select the reason for signing in for your shift.
* **Handover Type** (`handover_type`, select_one, required: false): Select the type of handover that occurred.
