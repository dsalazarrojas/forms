<thinking>

The purpose of this form is to gather information about firearm reports. It is likely used for law enforcement or administrative purposes to document and track firearm-related incidents or missing firearms. The form is titled "<string>".

The form has multiple sections and fields for collecting details about the firearm, its location, and incident information. Each field has a label and a specific field type for collecting the required information.

</thinking>

# <string> - Help Guide
## Purpose
The <string> form is used to collect information about firearm reports.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in the title of the form, which will likely be the title of the report.
* Go through the pages of the form, which are:
	+ Page 1: Report
	+ Page 2: Incident details
* Fill in the required information on each page, using the corresponding field types:
	+ Date
	+ Firearm details
	+ Firearm type
	+ Firearm status
	+ Firearm location
	+ Owner details (name, address, phone)
	+ Incident location
	+ Incident date/time
	+ Incident details
	+ Submitter information (name, phone, address)
	+ Report status
	+ Notes

## Field-by-Field Explanation
### Page 1: Report
* **Report** (`report_form`, `text`, required): This is the title of the report.
* **Date** (`incident_date`, `date`, required): Enter the date of the incident.
* **Firearm Details** (`firearm_details`, `text`, required): Describe the firearm in detail.
* **Firearm Type** (`firearm_type`, `select_one`, required): Select the type of firearm.
* **Firearm Status** (`firearm_status`, `select_one`, required): Select the status of the firearm.
* **Firearm Location** (`firearm_location`, `select_multiple`, required): Select the location of the firearm.

### Page 2: Incident details
* **Incident Location** (`incident_location`, `text`, required): Describe the location of the incident.
* **Incident Date/Time** (`incident_date_time`, `date`, required): Enter the date and time of the incident.
* **Incident Details** (`incident_details`, `text`, required): Describe the details of the incident.
* **Submitter Information** (`submitter_name`, `text`, required): Enter the name of the submitter.
* **Submitter Phone** (`submitter_phone`, `text`, required): Enter the phone number of the submitter.
* **Submitter Address** (`submitter_address`, `text`, required): Enter the address of the submitter.
* **Report Status** (`report_status`, `select_one`, required): Select the status of the report.
* **Notes** (`notes`, `text`, required): Add any additional notes about the report.
* **Firearm Recovery Status** (`report_status`, `select_one`, required): Select the status of the firearm recovery (open, 0-10% complete, ...).
