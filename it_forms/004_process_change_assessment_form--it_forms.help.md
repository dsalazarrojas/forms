# Process Change Assessment Form - Help Guide
## Purpose
This form is used to assess proposed changes to business processes.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter a brief description of the proposed change in the `Proposed Change Description` field.
2.  Select the `Impact on Services` and `Impact on Users` fields to indicate the level of impact the proposed change will have on services and users, respectively.
3.  Enter a brief description of why the proposed change is necessary in the `Proposed Change Rationale` field.
4.  Enter the proposed change's impact on services, users, and IT in the `Proposed Change Impact on Services`, `Proposed Change Impact on Users`, and `Proposed Change Impact on IT` fields, respectively.
5.  Select the `Change Owner`, `Change Manager`, and `Change Sponsor` fields to identify the individuals responsible for the change.
6.  Enter the `Change Request Date` and `Submission Date` fields to track the change request and submission dates, respectively.
7.  Select the `Change Request Status`, `Change Request Type`, `Process Request Status`, and `Process Request Type` fields to track the status and type of change request.
8.  Enter the `Process Owner`, `Process Manager`, and `Process Sponsor` fields to identify the individuals responsible for the process.
9.  Enter the `Process Request Date` field to track the process request date.
10.  Select the `Process Request Frequency` field to indicate how frequently the process is requested.
11.  Enter any additional `Notes` regarding the change.
12.  Enter the `Submitted by` field to indicate who submitted the change.

## Field-by-Field Explanation

* **Process Change (1)** (`process_change_form`, text, Optional): A brief description of the proposed change.
* **Proposed Change Description (2)** (`proposed_change_description`, text, Optional): A brief description of the proposed change.
* **Impact on Services (3)** (`impact_on_services`, select_one, Optional): The level of impact the proposed change will have on services.
	+ Options: High, Medium, Low
* **Impact on Users (4)** (`impact_on_users`, select_one, Optional): The level of impact the proposed change will have on users.
	+ Options: High, Medium, Low
* **Impact on IT (5)** (`impact_on_it`, select_one, Optional): The level of impact the proposed change will have on IT.
	+ Options: High, Medium, Low
* **Proposed Change Rationale (6)** (`proposed_change_rationale`, text, Optional): A brief description of why the proposed change is necessary.
* **Proposed Change Impact on Services (7)** (`proposed_change_impact_on_services`, text, Optional): The proposed change's impact on services.
* **Proposed Change Impact on Users (8)** (`proposed_change_impact_on_users`, text, Optional): The proposed change's impact on users.
* **Proposed Change Impact on IT (9)** (`proposed_change_impact_on_it`, text, Optional): The proposed change's impact on IT.
* **Change Owner (10)** (`change_owner`, select_multiple, Optional): The individual(s) responsible for the change.
	+ Options: John, Other
* **Change Manager (11)** (`change_manager`, select_multiple, Optional): The individual(s) responsible for managing the change.
	+ Options: John, Other
* **Change Sponsor (12)** (`change_sponsor`, select_multiple, Optional): The individual(s) sponsoring the change.
	+ Options: John, Other
* **Change Request Date (13)** (`change_request_date`, date, Optional): The date the change request was made.
* **Change Request Status (14)** (`change_request_status`, select_one, Optional): The current status of the change request.
	+ Options: Approved, Pending, Denied
* **Change Request Type (15)** (`change_request_type`, select_one, Optional): The type of change request.
	+ Options: Major, Minor
* **Change Request Frequency (16)** (`change_request_frequency`, select_one, Optional): The frequency of the change request.
	+ Options: High, Medium, Low
* **Process Owner (17)** (`process_owner`, select_one, Optional): The individual responsible for the process.
	+ Options: John, Jane, Mary
* **Process Manager (18)** (`process_manager`, select_one, Optional): The individual responsible for managing the process.
	+ Options: John, Jane, Mary
* **Process Sponsor (19)** (`process_sponsor`, select_one, Optional): The individual sponsoring the process.
	+ Options: John, Jane, Mary
* **Process Request Date (20)** (`process_request_date`, date, Optional): The date the process request was made.
* **Process Request Status (21)** (`process_request_status`, select_one, Optional): The current status of the process request.
	+ Options: Open, Closed
* **Process Request Frequency (22)** (`process_request_frequency`, select_one, Optional): The frequency of the process request.
	+ Options: High, Medium, Low
* **Notes (23)** (`notes`, note, Optional): Additional notes regarding the change.
* **Submission Date (24)** (`submission_date`, date, Optional): The date the change was submitted.
* **Submitted by (25)** (`submitted_by`, text, Optional): The individual who submitted the change.
