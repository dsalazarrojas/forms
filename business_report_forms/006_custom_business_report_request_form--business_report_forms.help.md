<thinking>

This form is used to request a custom business report from the organization. It is meant to be filled out by someone who needs information about their business operations, finances, or market activities. This form should not be filled out for general inquiries or routine information requests. It is essential to provide a detailed description of the report request to ensure that the report meets the requester's needs.

</thinking>

# Custom Business Report Request Form - Help Guide
## Purpose
The Custom Business Report Request Form is a tool used to request custom business reports from the organization. This form helps to ensure that all necessary information is gathered before creating the report, which saves time and resources.

## How To Complete This Form
To complete the form, follow these steps:

1. Choose the correct category and subcategory for your report request.
2. Fill out the report title and description to accurately describe what you need from the report.
3. Select the report request type (Financial, Operational, or Marketing).
4. Enter the date you need the report by.
5. Enter the name and title of the report requester.
6. Select the status of the report (Draft, Pending, or Approved).

## Field-by-Field Explanation

* **Custom Report Date** (`custom_report_date`, date, required: false): Enter the date you need the report by. Format: mm/dd/yyyy.
* **Custom Report Title** (`custom_report_title`, text, required: false): Provide a brief title for your report request.
* **Report Request Type** (`report_request_type`, select_multiple, required: false):
	+ Select one or more of the following types: Financial, Operational, Marketing.
* **Custom Report Description** (`custom_report_description`, text, required: true): Describe the report you need. Please provide as much detail as possible to ensure that we create the report you need.
* **Client Name** (`client_name`, text, required: false): Enter the name of the client associated with the report request.
* **Report Requester Name** (`report_requester_name`, text, required: true): Enter your name as the person requesting the report.
* **Requested By** (`report_requested_by`, text, required: false): Enter the name of the person or department responsible for requesting the report.
* **Business Report Form Category** (`business_report_form_category`, select_one, required: true):
	+ Select one of the following categories: Business Report Forms, Business Forms, Reports.
* **Business Report Form Sub Category** (`business_report_form_sub_category`, select_one, required: true):
	+ Select one of the following subcategories: Business, Report.
* **Report Request Notes** (`report_request_notes`, note, required: false): Add any additional information about the report request.
* **Business Report Form Status** (`business_report_form_status`, select_one, required: false):
	+ Select one of the following statuses: Draft, Pending, Approved.
* **Report Request Due Date** (`report_request_due_date`, date, required: false): Enter the date you need the report by. Format: mm/dd/yyyy.

Note: All fields marked as required must be filled out to ensure that the report request is processed correctly.
