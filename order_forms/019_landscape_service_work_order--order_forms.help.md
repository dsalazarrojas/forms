<Thinking>
Is this form meant to capture information related to landscape work orders, specifically service requests and associated details? Perhaps it's designed to gather essential data for scheduling and communication purposes. I'll assume it's for scheduling landscape services like lawn maintenance or gardening jobs. 

Is this form being used to create multiple instances of service requests or appointments? If so, it would be helpful to know if there's any specific criteria for determining when to create a new service request versus updating an existing one.

Let's assume this form is for a single service request, and the goal is to collect relevant information for the landscape service provider.

</Thinking>

# landscape_service_work_order - Help Guide
## Purpose
This form is used to create a new service request for landscape services. You can use it to enter details about the service you need, contact information, and schedule the appointment.

## How To Complete This Form
1. Fill out the required fields (if any) in the form.
2. Click on the "Next" button to proceed to the next page.
3. Review and update your information as needed on each page.
4. Submit the form once you've completed all the pages.

## Field-by-Field Explanation

* **Service Request** (`service_request`, text, required): Provide a brief description of the service you need.
* **Contact Details** (`contact_details`, select_multiple, optional): Select the contact person(s) you'd like to be notified. You can choose one or more contacts from the list.
	+ Options: John Doe, Jane Doe, Jim Doe
* **Appointment Date** (`appointment_date`, date, optional): Choose the date for the scheduled appointment. 
* **Schedule Appointment** (`schedule_appointment`, select_one, optional): Select when you'd like to have the appointment scheduled:
	+ Today
	+ Tomorrow
	+ Next 7 Days
* **Work Order Description** (`work_order_description`, note, optional): Add any additional notes about the service request.
* **Contact Method** (`contact_method`, select_one, optional): Choose how you'd like to be contacted:
	+ Phone
	+ Email
	+ Text
* **Service Request Details** (`service_request_details`, text, optional): Provide any additional information about the service request.
* **Schedule Status** (`schedule_status`, select_multiple, optional): Indicate the status of the scheduled appointment:
	+ Scheduled
	+ Not Scheduled
	+ Rescheduled
* **Contact Number** (`contact_number`, text, optional): Enter your contact number for the landscaper.

## Tips
- Make sure to enter accurate contact information to ensure you receive updates about your appointment.
- If you have any questions or concerns, contact the landscaper directly.
- Review the form carefully before submission to ensure all fields are completed correctly.
