# Smart Supply Data Accuracy Report Form - Help Guide
## Purpose
This form is designed for procurement teams to report any data issues they encounter during the supply chain process. The goal is to ensure that the data accuracy is maintained and any discrepancies are addressed promptly.

## How To Complete This Form
To complete this form, follow these steps:
1.  Select the relevant supply chain data to report.
2.  Describe any data issues encountered during the period.
3.  Choose the correction or action required for the reported data issue.
4.  Submit your report and provide your contact information for follow-up.

## Field-by-Field Explanation
* **supply_chain** (`supply_chain`, `number`, required: false): Select the supply chain data you are reporting on. This field should match the current supply chain data being processed.
* **inventory** (`inventory`, `number`, required: false): Select the inventory data related to the reported issue.
* **procurement_teams** (`procurement_teams`, `select_multiple`, required: false): Select all applicable procurement teams affected by the reported data issue. This could include the team that reported the issue or other teams that may be impacted.
* **data_issues** (`data_issues`, `text`, required: false): Describe any data issues encountered during the period. Please provide specific details about what happened, where, and when.
* **review_correction** (`review_correction`, `select_one`, required: false): Choose the correction or action required for the reported data issue. Options include:
	+ Option a: Correct data entry.
	+ Option b: Data entry review.
	+ Option c: Data validation check.
	+ Option d: Data correction by third-party source.
	+ Option e: Other (please specify).
* **submit** (`submit`, `text`, required: false): Enter your name or contact information for follow-up purposes.
* **email** (`email`, `email`, required: false): Enter your email address for follow-up communication.
* **phone** (`phone`, `text`, required: false): Enter your phone number for follow-up communication.
* **date** (`date`, `date`, required: false): Enter the date the data issue was encountered.
* **time** (`time`, `time`, required: false): Enter the time the data issue was encountered.
* **note** (`note`, `note`, required: false): Enter any additional notes about the data issue or correction.
