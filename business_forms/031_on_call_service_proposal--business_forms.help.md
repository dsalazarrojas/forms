# on_call_service_proposal - Help Guide
## Purpose
The on_call_service_proposal form is used to create a service proposal for an on-call service visit to a client's premises.

## How To Complete This Form
To complete the form:

1.  Review the client's details, which includes their name, phone number, and email. Ensure accuracy and up-to-date information is provided.
2.  Choose the correct service type from the available options. This will help identify the nature of the visit and the required resources.
3.  Select all applicable maintenance types for the visit. This is essential for preparing necessary tools and equipment.
4.  Enter the date and start time of the visit. Ensure the date is in the correct format and the start time is accurate.
5.  Specify the end time of the visit. Ensure it is realistic and takes into account any potential additional time required.
6.  Enter the visit location. This is the client's address or a specific site.
7.  Add any relevant notes for the visit. This can be a list of specific tasks or issues to be addressed.
8.  Provide the client's phone number and email for communication.

## Field-by-Field Explanation

*  **Client Details** (`client_details`, text, required: false): Enter the client's name, phone number, and email address.
*  **Service Type** (`service_type`, select_one, required: false): Choose the type of service required from the provided options.
*  **Maintenance Type** (`maintenance_type`, select_multiple, required: false): Select all applicable maintenance types for the visit.
*  **Date of Visit** (`date_of_visit`, date, required: false): Enter the date of the visit in the correct format.
*  **Start Time** (`start_time`, time, required: false): Specify the start time of the visit. Please ensure it is realistic and takes into account any additional time required.
*  **End Time** (`end_time`, time, required: false): Specify the end time of the visit. Please ensure it is realistic and takes into account any additional time required.
*  **Location** (`location`, text, required: false): Enter the visit location, which can be the client's address or a specific site.
*  **Notes** (`notes`, note, required: false): Add any relevant notes for the visit. This can include a list of specific tasks or issues to be addressed.
*  **Client Phone** (`client_phone`, text, required: false): Enter the client's phone number for communication.
*  **Client Email** (`client_email`, email, required: false): Enter the client's email address for communication.
