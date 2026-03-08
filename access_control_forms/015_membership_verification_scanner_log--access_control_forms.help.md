<thinking>
This form is used to log membership verification scan results. It is intended for internal use and may not be directly visible to end-users. The purpose of the form is to track membership verification scans, which may involve scanning members for their ID, verifying their membership status, and recording any relevant details.
We will assume that the form will be used to store and retrieve data for the organization's membership database. The form will be filled out by authorized personnel, and the data will be used to update the database accordingly.
We will also assume that the data stored in the form will be used for reporting and analytics purposes, such as tracking membership status, verifying membership claims, and identifying trends.
We will not assume that the form will be used for external-facing purposes, such as public-facing membership lookup or public reporting.
</thinking>

# membership_verification_scanner_log - Help Guide
## Purpose
The membership verification scanner log form is used to log membership verification scan results, which are used to update the organization's membership database and track membership status.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the Member ID of the member being scanned.
2. Enter the Scanner ID (if applicable).
3. Enter the Scan Date and Scan Time (if applicable).
4. Enter the Facility ID (if applicable).
5. Enter the Member Name.
6. Select the Scan Result.
7. Enter any additional Notes (if applicable).
8. Enter the Member's Email (if applicable).
9. Enter the Member's Phone Number (if applicable).
10. Enter the Member's Address (if applicable).

## Field-by-Field Explanation
* **Member ID** (`member_id`, number, required): Enter the ID number of the member being scanned.
* **Scanner ID** (`scanner_id`, number, optional): Enter the ID number of the scanner used to scan the member (if applicable).
* **Scan Date** (`scan_date`, date, optional): Enter the date of the scan (if applicable).
* **Scan Time** (`scan_time`, time, optional): Enter the time of the scan (if applicable).
* **Facility ID** (`facility_id`, number, optional): Enter the ID number of the facility where the scan was performed (if applicable).
* **Member Name** (`member_name`, text, required): Enter the name of the member being scanned.
* **Scan Result** (`scan_result`, select one, optional): Select the result of the scan from the dropdown menu (Pass, Fail, Unknown).
* **Notes** (`notes`, note, optional): Enter any additional notes or comments about the scan (if applicable).
* **Email** (`email`, email, optional): Enter the member's email address (if applicable).
* **Phone** (`phone`, text, optional): Enter the member's phone number (if applicable).
* **Address** (`address`, text, optional): Enter the member's address (if applicable).
