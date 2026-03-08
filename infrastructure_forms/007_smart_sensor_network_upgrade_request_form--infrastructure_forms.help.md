# smart_sensor_network_upgrade_request_form - Help Guide
## Purpose
The "smart_sensor_network_upgrade_request_form" is a form used to request an upgrade to the smart sensor network. You can submit this form to request a new upgrade or edit an existing one.

## How To Complete This Form

* To complete this form, please follow these steps:
	+ Fill in the "What upgrade scope" field with a brief description of the upgrade.
	+ If you have a justification for the upgrade, please provide it in the "justification" field.
	+ Enter the start and end dates of the upgrade period in the "Start date" and "End date" fields respectively.
	+ If you have a preferred date for the upgrade, you can enter it in the "Preferred date" field.
	+ If you have any additional information about the upgrade, you can add it in the "Notes" field.

## Field-by-Field Explanation

* **What upgrade scope** (`scope`, text, required): A brief description of the upgrade you are requesting.
* **justification** (`justification`, text, required): A reason for the upgrade, if any.
* **Start date** (`start_date`, date, required): The start date of the upgrade period.
* **End date** (`end_date`, date, required): The end date of the upgrade period.
* **Preferred date** (`preferred_date`, date, optional): A preferred date for the upgrade.
* **Sensor count** (`sensor_count`, number, required): The number of sensors involved in the upgrade.
* **Notes** (`notes`, note, optional): Additional information about the upgrade.
* **Email** (`email`, email, optional): Your contact email address.
* **Phone** (`phone`, text, optional): Your phone number.
* **Assigned team** (`assigned_team`, select_one, optional): The team responsible for the upgrade, choose one of the following options: IT, facilities, engineering.
* **Team lead** (`team_lead`, select_one, optional): The team lead responsible for the upgrade, choose one of the following options: IT, facilities, engineering.
* **Status** (`status`, select_multiple, optional): The status of the upgrade, choose one or more of the following options: open, in progress, closed.
