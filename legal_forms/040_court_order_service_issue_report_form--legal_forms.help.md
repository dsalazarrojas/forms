<thinking>
This form is designed to report issues related to court orders, specifically for court service issues. This form is intended for users who need to report issues with court orders, such as delays, errors, or discrepancies. It is recommended that users only complete this form if they have experienced an issue with a court order, rather than if they are simply checking on the status of a case.
The form is designed to be completed by users who have experienced an issue with a court order, and should not be used for general status inquiries. 
This form is intended to gather specific information about the issue, including the case number, date of issue, and details about the issue.
The fields in this form are designed to capture relevant information about the issue, including the case number, date of issue, and details about the issue. 
</thinking>

# Court Order Service Issue Report Form - Help Guide
## Purpose
This form is designed to report issues related to court orders, specifically for court service issues.

## How To Complete This Form
To complete this form, follow these steps:

1. Select whether the case is active or inactive.
2. Enter the case number (or select "Yes" if no case number is available).
3. Enter the case manager's name.
4. Enter the date of issue.
5. Select whether the issue date is a specific date or a range of dates.
6. Enter the location of the issue.
7. Select the issue type (e.g., delay, error, discrepancy).
8. Enter a detailed description of the issue.
9. Enter a brief summary of the issue.
10. Select the status of the resolution.
11. Enter any additional case notes.
12. Enter the resolution date (if applicable).
13. Select whether the resolution date is specific or a range of dates.
14. Enter the resolution details.

## Field-by-Field Explanation

* **Case Number** (`case_number`, select_one, required): Enter the case number for the court order that has the issue. If you do not have a case number, select "Yes".
* **Case Manager Name** (`case_manager_name`, text, not required): Enter the name of the case manager for the court order that has the issue.
* **Date of Issue** (`date_of_issue`, date, not required): Enter the date when the issue occurred.
* **Issue Date Type** (`issue_date_type`, select_one, not required): Select whether the issue date is a specific date or a range of dates.
* **Service ID** (`service_id`, select_multiple, not required): Select the services related to the issue (e.g., "Yes" for delay, "No" for error).
* **Description** (`description`, text, not required): Enter a detailed description of the issue.
* **Location** (`location`, text, not required): Enter the location where the issue occurred.
* **Issue Type** (`issue_type`, select_one, not required): Select the type of issue (e.g., delay, error, discrepancy).
* **Issue Description** (`issue_description`, text, not required): Enter a brief summary of the issue.
* **Issue Date Range** (`issue_date_range`, text, not required): Enter a range of dates when the issue occurred.
* **Issue Date Range Type** (`issue_date_range_type`, select_one, not required): Select whether the issue date range is specific or a range of dates.
* **Issue Date** (`issue_date`, date, not required): Enter the specific date when the issue occurred.
* **Resolution Date** (`resolution_date`, date, not required): Enter the date when the issue was resolved.
* **Status** (`status`, select_one, not required): Select the current status of the resolution (e.g., active, inactive).
* **Case Notes** (`case_notes`, text, not required): Enter any additional case notes.
* **Resolution** (`resolution`, text, not required): Enter the details of the resolution.
* **Resolution Date Type** (`resolution_date_type`, select_one, not required): Select whether the resolution date is specific or a range of dates.
* **Case Manager 2** (`case_manager_name_3`, text, not required): Enter the name of the case manager who is working on the issue.
* **Issue Date 2** (`issue_date_2`, date, not required): Enter the specific date when the issue occurred.

Note: The "required" fields are denoted by `required: true` in the form YAML.
