# Device Status Report Form - Help Guide
## Purpose
The Device Status Report Form is a tool used to collect information about the status of devices within the organization.

## How To Complete This Form
To complete the form, follow these steps:

1. Enter the **User Information** on the first page. This field is not required, but it helps identify who completed the report.
2. Select the current **Device Status** of the device. This field is not required, but it helps track the device's operational status.
3. Choose any **Conditions** affecting the device. Select all that apply from the list: Critical, Good, or Needs Maintenance.
4. If applicable, indicate the **Maintenance Needs** of the device. Select all that apply from the list: Critical, High, Medium, or Low.
5. Enter any **Comments** or notes about the device status.
6. Set the **Date Completed** when the report is finished. This helps track when the report was submitted.

## Field-by-Field Explanation
* **User Information** (`user`, `text`, not required):
	+ Enter your name or identifier to associate this report with you.
* **Device Status** (`device_status`, `select_one`, not required):
	+ Select whether the device is currently Offline or Online.
* **Condition** (`condition`, `select_multiple`, not required):
	+ Select all conditions that apply to the device from the list: Critical, Good, or Needs Maintenance.
* **Maintenance Needs** (`maintenance_needs`, `select_multiple`, not required):
	+ Select all maintenance needs that apply to the device from the list: Critical, High, Medium, or Low.
* **Comments** (`comments`, `text`, not required):
	+ Enter any additional notes or comments about the device status.
* **Date Completed** (`date_completed`, `date`, not required):
	+ Enter the date the report was completed.
* **Maintenance Needs** (`maintenance_needs`, `select_multiple`, not required):
    (same as the one above)
* **Device Status** (`device_status`, `select_one`, not required):
    (same as the one above)
* **Condition** (`condition`, `select_multiple`, not required):
    (same as the one above) 

Note: There are two duplicate fields: "Maintenance Needs" and "Condition". It is best practice to remove or merge the duplicate fields, as they are likely meant to be the same thing. Please correct this in the actual form implementation.
