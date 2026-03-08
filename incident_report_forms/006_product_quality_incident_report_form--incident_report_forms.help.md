<thinking>
The form purpose is to collect information about incidents that have occurred related to the product, such as errors, bugs, or other issues. This form helps the product team to quickly gather details about the incidents and prioritize the issues for resolution. The form is intended to be completed by users who have encountered an incident while using the product. The purpose of the form is to provide a structured and organized way to report incidents and ensure that the correct information is captured for analysis and resolution.

The form will likely be filled out by users who are reporting an issue with the product, and it will likely be used by the product team to determine the next steps to take for resolving the issue. To ensure the form is used correctly, it's essential to understand what each field is for and how to fill it out. This guide will walk through each field and provide an explanation of what it's for and how to complete it.</thinking>

# Product Quality Incident Report Form - Help Guide

## Purpose
The Product Quality Incident Report Form is a tool used to collect information about incidents that occur while using the product. This form helps the product team to quickly gather details about the incidents and prioritize the issues for resolution.

## How To Complete This Form

To complete this form, follow these steps:

1. Answer the "Type" field by selecting the type of incident that occurred. This will help the product team understand the nature of the issue.
2. In the "Description of Incident" field, provide a brief description of what happened. This should be as clear and concise as possible.
3. Identify the affected product by selecting the correct option from the "Affected Product" field.
4. If the incident occurred with a specific product version, select the correct version from the "Affected Product Version" field.
5. If a specific product component was affected, select the correct component from the "Affected Component" field.
6. Indicate the priority of the incident by selecting the correct option from the "Priority" field.
7. If reporting by, provide your email address in the "Report by" field.
8. If reporting by phone, provide your phone number in the "Report by Phone" field.

## Field-by-Field Explanation

### Report Incident

* **Report Incident** (`report_incident`, `text`, required): Describe the incident that occurred. This field should be filled out as the title of your report.

### Type

* **Type** (`incident_type`, `select_one`, required): Indicate the type of incident that occurred. Choose from "Yes" or "No" based on the incident type.

### Description of Incident

* **Description of Incident** (`description_of_incident`, `text`, required): Briefly describe what happened. This field should be filled out with a clear and concise summary of the incident.

### Affected Product

* **Affected Product** (`affected_product`, `select_one`, required): Identify the product that was affected by the incident. Choose from "Yes" or "No" based on the product's involvement in the incident.

### Affected Product Version

* **Affected Product Version** (`affected_product_version`, `select_one`, required): If the incident occurred with a specific product version, select that version.

### Affected Component

* **Affected Component** (`affected_component`, `select_one`, required): If a specific product component was affected, select that component.

### Priority

* **Priority** (`priority`, `select_one`, required): Indicate the priority of the incident. Choose from "Yes" or "No" based on the incident's severity.

### Report by

* **Report by** (`report_by`, `text`, required): Provide your name or username if you are reporting the incident.

### Report by Email

* **Report by Email** (`report_by_email`, `text`, required): If reporting by email, provide your email address.

### Report by Phone

* **Report by Phone** (`report_by_phone`, `text`, required): If reporting by phone, provide your phone number.

Tips:

* Be as clear and concise as possible when filling out the form.
* Use the correct format for your email address and phone number.
* If unsure about any of the fields, reach out to the product team for guidance.
