<thinking>

The form is designed to allow users to submit ad-hoc report requests, which are one-off reports created on demand to address specific information needs. This form serves as an interface for submitting these requests to a designated team or department. Ad-hoc reports are used to provide insights or data that may not be readily available through standard reporting channels.

This form aims to gather necessary information to fulfill these requests efficiently. By completing the form, users can ensure their needs are met in a timely and accurate manner. Please review the form carefully to ensure you provide all required and relevant details.

</thinking>

# Ad Hoc Report Request Form - Help Guide
## Purpose
The Ad Hoc Report Request Form is designed to collect information for one-off reports created on demand. This form helps the requesting team or department understand the requirements for the report and ensure they can create it accurately and efficiently.

## How To Complete This Form
To complete the form successfully, follow these steps:

1. Provide a brief overview of the report needed in the "Request overview" field.
2. Enter your name as the requester in the "Requester name" field.
3. Specify the department or team requesting the data in the "Department" field.
4. Explain how the report will be used in the "Report purpose" field.
5. List specific metrics or measures required in the "Metrics required" field.
6. Define the date range needed for the report in the "Date range required" field.
7. Select the priority level for the report in the "Priority level" field.
8. Choose the preferred file format for the report in the "Delivery format" field.
9. List any additional stakeholders who should receive the report in the "Stakeholders to receive report" field (if applicable).
10. If necessary, provide additional instructions or specific aggregation filters or segments in the "Additional instructions" field.

## Field-by-Field Explanation

* **Request overview** (`request_overview`, `note`, required: false): This field is for a brief description of the report needed. Please be as detailed as possible to ensure the report meets your requirements.
* **Requester name** (`requester_name`, `text`, required: true): Enter your name as the person making the request.
* **Department** (`department`, `text`, required: true): Select the department or team requesting the data.
* **Report purpose** (`report_purpose`, `text`, required: true): Explain how the report will be used to help the requesting team or department make informed decisions.
* **Metrics required** (`metrics_required`, `text`, required: true): List specific metrics or measures required for the report. Be as specific as possible.
* **Date range required** (`date_range`, `text`, required: true): Enter the start and end dates needed for the report.
* **Priority level** (`priority_level`, `select_one`, required: true): Choose the urgency level for the report (Low, Medium, High, Critical).
* **Delivery format** (`delivery_format`, `select_one`, required: true): Select the preferred file format for the report (PDF, Excel, CSV, Dashboard link).
* **Stakeholders to receive report** (`stakeholders`, `text`, required: false): If applicable, list email addresses or teams who should receive the report.
* **Additional instructions** (`additional_instructions`, `text`, required: false): If necessary, provide any additional instructions or specific aggregation filters or segments for the report.
