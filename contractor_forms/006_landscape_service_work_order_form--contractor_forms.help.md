<thinking>

Before designing this user-facing help guide, I'd like to clarify the purpose and requirements of the "Landscape Service Work Order Form". This form appears to be a work order form used for landscape services, and it seems to gather various information related to the job, including customer details, job status, service type, and other relevant fields. The form has multiple pages or sections, each with its own set of fields. 

From the provided YAML, it's clear that this form is required for various stakeholders, such as customers and internal staff, to provide accurate and complete information for efficient landscape service execution. However, I do not see any specific details about the form's lifecycle or usage patterns. I'd like to understand whether this form will be used for internal staff, customers, or external partners. This would help me provide more accurate guidance on how to complete the form effectively.

Assuming that the form is meant for customers or stakeholders who are not tech-savvy, I'll proceed with designing the help guide based on the provided YAML fields.

</thinking>

# Landscape Service Work Order Form - Help Guide
## Purpose
The "Landscape Service Work Order Form" is used to collect information about a job or task related to landscape services. This form is essential for ensuring that all necessary details are captured accurately, enabling efficient execution of the job.

## How To Complete This Form

To complete this form, follow these steps:

1.  Enter your name and contact information in the "Customer Name" field. This is required information and will help us to identify you correctly.
2.  Select the "Job Date" of the task. Please use the date format MM/DD/YY.
3.  Describe the service request in the "Service Request" field. Please provide as much detail as possible so that we can understand the job requirements accurately.
4.  Choose the job status from the list: "Active" or "Inactive". This helps us track the job's progress.
5.  Enter your email address in the "Customer Email" field. This will enable us to contact you effectively.
6.  Enter your phone number in the "Phone Number" field. This will help us contact you in case we need additional information.
7.  Provide your address in the "Customer Address" field. Please ensure this is accurate to help us locate you.
8.  If applicable, select "Yes" if you'd like to assign a specific user to handle this job. If not, select "No".
9.  Select the service type from the list provided in the "Service Type" field.
10. Enter the "Work Order Number" which is a unique reference for this job.
11. Enter the total hours spent on this job in the "Total Hours" field.
12. Enter the job status update in the "Job Status Update" field.
13. Select the "Service Date" of the job.
14. If applicable, enter the start date and completed date for this job.
15. Enter the service time if you'd like to track it separately.
16. Enter the "Service Address" if the job location is different from your provided address.
17. Enter the service cost if you'd like to track it.
18. Finally, select the "Service Status" from the list: "Active" or "Inactive". This helps us track the job's progress.

## Field-by-Field Explanation

* **Customer Name**: Enter your name, as this is the primary reference for our records.
	+ Type: Text
	+ Required: Yes
* **Job Date**: Select the date of the job, in the format MM/DD/YY.
	+ Type: Date
	+ Required: Yes
* **Service Request**: Describe the service request accurately to help us understand the job requirements.
	+ Type: Text
	+ Required: Yes
* **Job Status**: Select the job status from the list: "Active" or "Inactive".
	+ Type: Select One
	+ Required: Yes
* **Customer Email**: Enter your email address so we can contact you effectively.
	+ Type: Email
	+ Required: Yes
* **Phone Number**: Enter your phone number so we can contact you if needed.
	+ Type: Text
	+ Required: Yes
* **Customer Address**: Provide your address for accurate location.
	+ Type: Text
	+ Required: Yes
* **Assigned User**: Select "Yes" if you'd like to assign a specific user to handle this job.
	+ Type: Select Multiple
	+ Required: Yes
* **Created At**: This field is automatically populated and cannot be edited.
	+ Type: Time
	+ Required: No
* **Updated At**: This field is automatically populated and cannot be edited.
	+ Type: Time
	+ Required: No
* **Deleted At**: This field is automatically populated and cannot be edited.
	+ Type: Time
	+ Required: No
* **Service Notes**: Enter any additional notes about this job.
	+ Type: Text
	+ Required: No
* **Service Status**: Select the service status from the list: "Active" or "Inactive".
	+ Type: Select One
	+ Required: Yes
* **Completed**: Enter the completed date if the job is finished.
	+ Type: Date
	+ Required: No
* **Service Type**: Select the service type from the provided list.
	+ Type: Text
	+ Required: Yes
* **Work Order Number**: Enter a unique reference for this job.
	+ Type: Number
	+ Required: Yes
* **Total Hours**: Enter the total hours spent on this job.
	+ Type: Number
	+ Required: Yes
* **Job Status Update**: Enter any updates about the job status.
	+ Type: Text
	+ Required: Yes
* **Service Date**: Select the service date.
	+ Type: Date
	+ Required: Yes
* **Start Date**: Enter the start date of this job.
	+ Type: Date
	+ Required: No
* **Completed Date**: Enter the completed date if the job is finished.
	+ Type: Date
	+ Required: No
* **Service Time**: Enter the service time.
	+ Type: Number
	+ Required: No
* **Service Address**: Enter the service address if the job location is different.
	+ Type: Text
	+ Required: No
* **Service Cost**: Enter the service cost.
	+ Type: Number
	+ Required: No
* **Service Status**: Select the service status from the list: "Active" or "Inactive".
	+ Type: Select One
	+ Required: Yes

## Tips

* Ensure all required fields are filled accurately and completely.
* Use the correct format for dates and times.
* Select valid options from the provided lists.
* If you're unsure about any field, contact us for clarification.
