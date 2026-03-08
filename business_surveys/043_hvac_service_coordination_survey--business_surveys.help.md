<thinking>...this form is designed to collect information from property owners and service requesters for HVAC (heating, ventilation, and air conditioning) service coordination. It aims to streamline the coordination process between the property owner and the service provider, ensuring timely and efficient service delivery. This form is used to gather essential details such as service urgency, scheduling preferences, and appointment status. It will not be used to collect duplicate or redundant information. If the form is already filled out and submitted for the same property, the user will not be able to submit it again. The information gathered through this form will be used to facilitate the coordination of services and improve communication between parties involved. It is essential to fill out this form accurately to enable the service provider to schedule the service efficiently and communicate with the property owner effectively. If you have filled out this form previously for the same property, please do not submit it again.</thinking>

# hvac-service-coordination-survey - Help Guide
## Purpose
The hvac-service-coordination-survey form is used to collect information from property owners and service requesters for HVAC service coordination. It helps the service provider to schedule the service efficiently and communicate with the property owner effectively.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Fill out the General Info page with your basic contact and property information.
2. Select the Service Requester and Property Owner Info pages to provide more details about yourself and the property.
3. On the Service Date and Time page, select the date and time you are available for the service.
4. Provide a brief description of the service you require on the Service Description page.
5. Indicate the urgency of the service on the Service Urgency page. This will help the service provider to prioritize your request.
6. Choose your preferred scheduling time on the Service Scheduling Preference page.
7. If you have an available time for the service, select it on the Available Time page.
8. Decide if you want to receive an appointment reminder on the Appointment Reminder page.
9. On the Service Appointment Status page, select the status of your service appointment (Scheduled, Pending, or Completed).
10. If you have any additional comments, you can add them on the Additional Comments page.
11. Finally, provide your contact email address on the Contact Email page and the Property Owner Name page.

## Field-by-Field Explanation

* **General Info** (`id: 1`, `type: text`, required: false): This page is where you can enter your basic contact and property information. Please fill out this page with your name, email address, and phone number to help the service provider get in touch with you.
* **Service Requester** (`id: 2`, `type: text`, required: false): Please select who is requesting the service (e.g., yourself or a representative of the property owner).
* **Contact Number** (`id: 3`, `type: text`, required: false): This is an optional field to provide your contact phone number.
* **Property Owner Info** (`id: 4`, `type: text`, required: false): If you are a representative of the property owner, please provide more details about the owner and the property.
* **Service Date and Time** (`id: 5`, `type: date`, required: false): Choose the date and time you are available for the service. Please use the calendar to select a suitable date and time for your service appointment.
* **Service Description** (`id: 6`, `type: text`, required: false): Briefly describe the service you require from the HVAC provider. This will help the service provider understand what needs to be done.
* **Service Urgency** (`id: 7`, `type: select_one`, required: true): Indicate the urgency of the service you require. Select one of the following options: Urgent, High, Medium, or Low.
* **Service Scheduling Preference** (`id: 8`, `type: select_multiple`, required: false): Choose one or more times you are available for the service appointment. Select from the options: Morning, Afternoon, or Evening.
* **Available Time** (`id: 9`, `type: time`, required: false): If you have an available time for the service, select it here. This will help the service provider to schedule the appointment accordingly.
* **Appointment Reminder** (`id: 10`, `type: select_multiple`, required: false): Decide if you want to receive an appointment reminder. Select 'True' or 'False'.
* **Service Appointment Status** (`id: 11`, `type: select_one`, required: true): Indicate the status of your service appointment. Select one of the following options: Scheduled, Pending, or Completed.
* **Additional Comments** (`id: 12`, `type: note`, required: false): If you have any additional comments or requests, you can add them here.
* **Contact Email** (`id: 13`, `type: email`, required: false): Provide your contact email address. This will help the service provider to get in touch with you.
* **Property Owner Name** (`id: 14`, `type: text`, required: false): If you are a representative of the property owner, please provide the owner's name.
