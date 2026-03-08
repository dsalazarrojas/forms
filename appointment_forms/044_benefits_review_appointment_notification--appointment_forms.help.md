# Benefits Review Appointment Notification - Help Guide
## Purpose
The Benefits Review Appointment Notification form is designed to schedule and notify employees of benefits reviews, ensuring that all necessary details are documented and communicated effectively.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the employee's name in the "Employee Name" field.
2. Enter the employee's ID in the "Employee ID" field.
3. Enter the employee's email address in the "Email Address" field.
4. Enter the employee's phone number in the "Phone Number" field.
5. Select the department the employee is from in the "Department" field (optional).
6. Enter the date of notification in the "Date of Notification" field.
7. Enter the scheduled appointment date in the "Scheduled Appointment Date" field.
8. Enter the scheduled appointment time in the "Scheduled Appointment Time" field.
9. Choose the appointment format in the "Appointment Format" field (e.g., In-Person, Phone Call, Video Conference, Zoom Meeting, or Other).
10. Enter the meeting location or link in the "Meeting Location or Link" field (optional).
11. Enter the HR contact name in the "HR Contact Name" field.
12. Enter the HR contact phone number in the "HR Contact Phone" field (optional).
13. Enter the HR contact email in the "HR Contact Email" field (optional).
14. Select the focus of the benefits review in the "Review Focus" field (e.g., Health Insurance, Dental Insurance, Vision Insurance, etc.).
15. Choose the type of review in the "Type of Review" field (e.g., Annual Review, Open Enrollment, etc.).
16. Confirm if you can attend the appointment in the "Can You Attend This Appointment" field (e.g., True, False, Need to Reschedule).
17. If unable to attend, enter the reason for rescheduling in the "Reason for Rescheduling" field.
18. If rescheduling is necessary, enter preferred alternative times in the "Preferred Alternative Times" field.
19. Select if benefits materials are requested before the meeting in the "Request Benefits Materials Before Meeting" field (e.g., True, False).
20. Enter any questions for the HR benefits team in the "Questions for HR Benefits Team" field (optional).
21. Finally, confirm the date of confirmation in the "Date of Confirmation" field.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter the employee's name to ensure accurate communication and identification.
* **Employee ID** (`employee_id`, text, required): Enter the employee's ID to verify their benefits eligibility.
* **Email Address** (`email_address`, email, required): Enter the employee's email address to ensure secure communication.
* **Phone Number** (`phone_number`, text, required): Enter the employee's phone number to facilitate easy contact.
* **Department** (`department`, text, optional): Enter the employee's department, if applicable.
* **Date of Notification** (`notification_date`, date, required): Enter the date of notification to schedule the appointment.
* **Scheduled Appointment Date** (`scheduled_appointment_date`, date, required): Enter the scheduled appointment date for the benefits review.
* **Scheduled Appointment Time** (`scheduled_time`, time, required): Enter the scheduled appointment time for the benefits review.
* **Appointment Format** (`appointment_format`, select_one, required): Choose the appointment format (e.g., In-Person, Phone Call, Video Conference, Zoom Meeting, or Other).
* **Meeting Location or Link** (`meeting_location`, text, optional): Enter the meeting location or link, if applicable.
* **HR Contact Name** (`hr_contact_name`, text, required): Enter the HR contact name who will conduct the review.
* **HR Contact Phone** (`hr_contact_phone`, text, optional): Enter the HR contact phone number, if applicable.
* **HR Contact Email** (`hr_contact_email`, email, optional): Enter the HR contact email, if applicable.
* **Review Focus** (`review_focus`, select_multiple, required): Select the focus of the benefits review (e.g., Health Insurance, Dental Insurance, Vision Insurance, etc.).
* **Type of Review** (`review_type`, select_one, required): Choose the type of review (e.g., Annual Review, Open Enrollment, etc.).
* **Can You Attend This Appointment** (`able_to_attend`, select_one, required): Confirm if you can attend the appointment (e.g., True, False, Need to Reschedule).
* **Reason for Rescheduling** (`reschedule_reason`, text, optional): If unable to attend, enter the reason for rescheduling.
* **Preferred Alternative Times** (`alternate_times`, text, optional): If rescheduling is necessary, enter preferred alternative times.
* **Request Benefits Materials Before Meeting** (`materials_requested`, select_one, optional): Select if benefits materials are requested before the meeting (e.g., True, False).
* **Questions for HR Benefits Team** (`questions_for_hr`, text, optional): Enter any questions for the HR benefits team.
* **Date of Confirmation** (`confirmation_date`, date, required): Confirm the date of confirmation for the appointment.

Note: The explanations for each field are based on the provided YAML fields and aim to provide clear and concise guidance for end-users.
