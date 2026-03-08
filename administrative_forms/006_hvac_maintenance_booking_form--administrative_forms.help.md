# hvac_maintenance_booking_form - Help Guide
## Purpose
This form is used for booking maintenance or repairs for heating, ventilation, and air conditioning (HVAC) systems.

## How To Complete This Form
To complete this form, follow the steps below:

1. Select the relevant information for your maintenance or repair needs.
2. Choose the correct schedule (Heating, Cooling, or Both) for your job.
3. Select the preferred technician(s) for your job.
4. Enter your email and phone number for contact information.
5. Provide any additional comments or comments if necessary.
6. Review and submit the form to book your maintenance or repair job.

## Field-by-Field Explanation
- **Client Details**: 
  * `client_details` (`text`, required: false): This field is used to capture any additional information about the client.
  * `email` (`email`, required: true): Enter your email address so we can contact you about your booking.
  * `phone` (`text`, required: true): Enter your phone number so we can contact you about your booking.
  * `comments` (`text`, required: false): Add any additional comments or comments about your booking.
  * `additional_comments` (`text`, required: false): Add any additional comments or comments about your booking.
- **Job Details**: 
  * `schedule` (`select_one`, required: true): Choose the schedule for your maintenance or repair job (Heating, Cooling, or Both).
  * `date` (`date`, required: false): Enter the date for your maintenance or repair job.
  * `time` (`time`, required: false): Enter the time for your maintenance or repair job.
  * `technician` (`select_multiple`, required: true): Select the preferred technician(s) for your job.
  * `notes` (`note`, required: false): Add any additional notes or comments about your job.
- **Submission**:
  * `submit` (`text`, required: false): This field is a submit button to finalize your booking.

## Tips
- Ensure that all required fields are completed accurately and truthfully.
- Be as detailed as possible when providing comments or comments about your booking.
- Choose the correct schedule and technician(s) for your job to ensure timely and efficient completion.
- Review and submit the form carefully before finalizing your booking.
