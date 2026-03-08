<thinking>...</thinking>

# information_technology_master_data_request_form - Help Guide
## Purpose
This form is used to collect information about master data requests from the IT department. It is designed to gather essential details about the type of data requested, priority, and other relevant information to ensure efficient handling and processing of the request.

## How To Complete This Form
To complete this form, follow these steps:

* Fill out all required fields, if any.
* Select the correct data type from the "data_type" field.
* Choose the priority level for your request (Low, Medium, or High).
* Indicate the business impact of your request (Low, Medium, or High).
* Select whether you have an IT contact person ('Yes' or 'No').
* Select whether you have a business contact person ('Yes' or 'No').
* Select whether the request is related to a specific department ('Yes' or 'No').
* If necessary, enter the date for the request.

## Field-by-Field Explanation
* **Master Data Request** (`master_data_request`, note, required: false):
	+ This field is a free-text area for you to describe your master data request in detail.
* **IT Requester** (`it_requester`, text, required: false):
	+ Enter the name or identifier of the person requesting the IT service.
* **Data Type** (`data_type`, select_one, required: false):
	+ Choose the type of data you are requesting (Type A, Type B, or Type C).
* **Description** (`description`, text, required: false):
	+ Provide a brief description of the data you are requesting.
* **Priority** (`priority`, select_one, required: false):
	+ Select the priority level for your request (Low, Medium, or High).
* **Business Impact** (`business_impact`, select_multiple, required: false):
	+ Indicate the business impact of your request (Low, Medium, or High).
* **IT Contact Person** (`it_contact_person`, select_one, required: false):
	+ If you have an IT contact person, select 'Yes'.
* **Business Contact Person** (`business_contact_person`, select_one, required: false):
	+ If you have a business contact person, select 'Yes'.
* **Department** (`department`, select_one, required: false):
	+ If the request is related to a specific department, select 'Yes'.
* **Date** (`date`, date, required: false):
	+ If necessary, enter the date for the request.
