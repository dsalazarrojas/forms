# Clock In Out Change Request Form - Help Guide
## Purpose
This form is used to request changes to time clock records, such as clock-in or clock-out time corrections. This form should be used when an employee needs to adjust their clock-in or clock-out time due to any of the reasons listed below. Please note that submitting a change request does not guarantee approval, and your supervisor may request additional information or clarification before processing the request.

## How To Complete This Form

*   To begin, fill out your name and employee ID in the respective fields.
*   Select your department from the provided list. If your department is not listed, select "Other" and provide the correct department in the "Reason for Change Request" field.
*   Enter the date you wish to request the change for.
*   Choose the type of change requested from the list provided.
*   If the change is related to a specific incident, enter the date and time of the incident.
*   Fill out the scheduled start and end times of your shift, as well as the actual clock-in and clock-out times.
*   If applicable, enter the current recorded clock-in and clock-out times.
*   Provide a reason for the change request, explaining why you are requesting the change.
*   Explain the situation in the provided text field.
*   If you have performed any work during the discrepancy, describe it in the provided text field.
*   If applicable, provide the name and contact information of any witness to the incident.
*   Answer "Have You Submitted Similar Requests Before" to indicate if this is a repeat request within the last 6 months.
*   Indicate if your supervisor's approval is required for the change request.
*   Choose the urgency of the request from the provided list.
*   Sign and date the form, then submit it for processing.

## Field-by-Field Explanation

*   **Employee Name** (`employee_name`, text, required): Enter your full name as it appears on your employee ID.
*   **Employee ID** (`employee_id`, text, required): Enter your employee ID number.
*   **Department** (`department`, select_one, required): Select your department from the list provided. If your department is not listed, select "Other" and provide the correct department in the "Reason for Change Request" field.
*   **Supervisor Name** (`supervisor_name`, text, required): Enter your supervisor's name.
*   **Request Date** (`request_date`, date, required): Enter the date you wish to request the change for.
*   **Type of Change Requested** (`change_type`, select_one, required): Choose the type of change requested from the list provided.
*   **Date of Incident** (`date_of_incident`, date): If the change is related to a specific incident, enter the date and time of the incident.
*   **Scheduled Start Time** (`scheduled_start`, time): Fill out the scheduled start time of your shift.
*   **Scheduled End Time** (`scheduled_end`, time): Fill out the scheduled end time of your shift.
*   **Actual or Correct Clock-In Time** (`actual_clock_in`, time): Enter the actual clock-in time.
*   **Actual or Correct Clock-Out Time** (`actual_clock_out`, time): Enter the actual clock-out time.
*   **Currently Recorded Clock-In** (`current_recorded_in`, time): If applicable, enter the current recorded clock-in time.
*   **Currently Recorded Clock-Out** (`current_recorded_out`, time): If applicable, enter the current recorded clock-out time.
*   **Reason for Change Request** (`reason_for_change`, select_one, required): Choose a reason for the change request from the list provided.
*   **Please Explain the Situation** (`reason_details`, text, required): Explain the reason for the change request.
*   **Describe Work Performed During Discrepancy** (`work_performed`, text, required): Describe any work performed during the discrepancy.
*   **Witness Name** (`witness_name`, text): If applicable, enter the name of any witness.
*   **Witness Contact** (`witness_contact`, text): If applicable, enter the contact information of any witness.
*   **Have You Submitted Similar Requests Before** (`previous_requests`, select_one, required): Answer "Yes Once" if this is the first request, "Yes Multiple Times" if you have submitted similar requests before, or "False" if this is not a repeat request within the last 6 months.
*   **Is Supervisor Approval Required** (`approval_needed`, select_one, required): Indicate if your supervisor's approval is required for the change request.
*   **Request Urgency** (`urgency`, select_one, required): Choose the urgency of the request from the provided list.
*   **Employee Signature** (`employee_signature`, text, required): Sign and date the form with your full name.
*   **Date** (`signature_date`, date, required): Date the form with the date.
*   **Supervisor Approval** (`supervisor_approval`, select_one): If approved, select "Approved", if denied, select "Denied", or if pending review, select "Pending Review".
*   **Supervisor Signature** (`supervisor_signature`, text): If applicable, enter your supervisor's signature with their full name.
*   **HR Use Only - Processed By** (`hr_use_only`, text): If applicable, enter the HR representative who processed the request.
*   **HR Processed Date** (`hr_processed_date`, date): Date the request was processed by HR.

## Tips

*   Always review the form carefully before submitting it to ensure accuracy and completeness.
*   Be prepared to provide additional information or clarification if requested by your supervisor.
*   If you have any questions or concerns, reach out to your HR representative for assistance.
