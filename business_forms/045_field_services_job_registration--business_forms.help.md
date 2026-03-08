# field-services-job-registration - Help Guide
## Purpose
The field-services-job-registration form is designed for registering job requests for field services. It gathers information about the client, the service required, and the status of the job.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the client information section with the relevant details about the client.
2. Enter the service information, including any relevant notes or descriptions.
3. Select the service date from the calendar picker.
4. Decide if the job was requested by the client or not.
5. If it was requested by the client, select 'Yes' from the dropdown menu.
6. Select the status of the service from the dropdown menu.
7. Add any additional notes about the job.

## Field-by-Field Explanation
* **Client Info**: (`client_info`, text, required: false) Enter the client's name and any other relevant information about the client.
* **Service Info**: (`service_info`, text, required: false) Enter a brief description of the service required.
* **Service Details**: (`service_details`, text, required: false) Enter any additional details about the service, such as location or time of service.
* **Service Date**: (`service_date`, date, required: false) Select the date of the service from the calendar picker.
* **Requested By**: (`requested_by`, select_one, required: false) Decide if the job was requested by the client. If yes, select 'Yes'.
* **Service Status**: (`service_status`, select_multiple, required: false) Select the status of the service from the available options.
* **Notes**: (`notes`, note, required: false) Enter any additional notes or comments about the job.
* **Assigned Representative**: (`assigned_representative`, select_one, required: false) Decide if the job was assigned to a representative. If yes, select 'Yes'.
* **Requested By Date**: (`requested_by_date`, date, required: false) Select the date the job was requested by the client. If not requested by the client, ignore this field.
* **Requested By**: (`requested_by`, select_one, required: false) Decide if the job was requested by the client. If yes, select 'Yes'. (Note: This field is similar to "Assigned Representative" and may be redundant.)
