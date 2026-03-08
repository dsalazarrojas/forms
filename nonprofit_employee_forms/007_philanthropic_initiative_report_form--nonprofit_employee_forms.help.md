# philanthropic_initiative_report_form - Help Guide
## Purpose
The philanthropic initiative report form is a tool used to collect and record information about non-profit initiatives.

## How To Complete This Form
1. Select the non-profit category that best describes your initiative.
2. Enter the name of your non-profit organization.
3. Enter the start and end dates of your initiative in the correct format (YYYY-MM-DD).
4. Provide a brief description of the purpose of your initiative.
5. Select the objectives of your initiative from the given options.
6. Enter the budgeted and actual funds for your initiative.
7. List the project outcomes you have achieved.
8. Enter the address of your non-profit organization.
9. Enter the name and contact information of the person submitting the report.
10. Enter the email and phone number of your non-profit organization.
11. Enter the zip code of your non-profit organization.
12. Select the person who submitted the report from the given options.
13. Select the review and approval status of your report from the given options.
14. Enter any comments or feedback about your initiative.

## Field-by-Field Explanation

* **Nonprofit Category** (`nonprofit_category`, select_one, required): Select the category that best describes your non-profit organization.
* **Nonprofit Name** (`nonprofit_name`, text, required): Enter the name of your non-profit organization.
* **Initiative Start Date** (`initiative_start_date`, date, required): Enter the start date of your initiative in the correct format (YYYY-MM-DD).
* **Initiative End Date** (`initiative_end_date`, date, required): Enter the end date of your initiative in the correct format (YYYY-MM-DD).
* **Goal Description** (`goal_description`, text, required): Briefly describe the purpose of your initiative.
* **Initiative Objectives** (`initiative_objectives`, select_multiple, required): Select the objectives of your initiative from the given options.
* **Budgeted Funds** (`budgeted_funds`, number, required): Enter the budgeted funds for your initiative.
* **Actual Funds** (`actual_funds`, number, required): Enter the actual funds for your initiative.
* **Project Outcomes** (`project_outcomes`, select_multiple, required): List the project outcomes you have achieved.
* **Nonprofit Address** (`nonprofit_address`, text, required): Enter the address of your non-profit organization.
* **Nonprofit Contact Person** (`nonprofit_contact_person`, text, required): Enter the name and contact information of the person submitting the report.
* **Email** (`email`, email, required): Enter the email of your non-profit organization.
* **Phone** (`phone`, text, required): Enter the phone number of your non-profit organization.
* **Zip Code** (`zip_code`, text, required): Enter the zip code of your non-profit organization.
* **Submitted By** (`submitted_by`, select_one, required): Select the person who submitted the report from the given options.
* **Submitted Date** (`submitted_date`, date, required): Enter the date you submitted the report in the correct format (YYYY-MM-DD).
* **Submitted Time** (`submitted_time`, time, required): Enter the time you submitted the report in the correct format (HH:MM:SS).
* **Review Status** (`review_status`, select_one, required): Select the review and approval status of your report from the given options.
* **Review Notes** (`review_notes`, text, required): Enter any comments or feedback about your initiative.
* **Approved By** (`approved_by`, select_one, required): Select the person who approved your report from the given options.
* **Approved Date** (`approved_date`, date, required): Enter the date your report was approved in the correct format (YYYY-MM-DD).
* **Approved Time** (`approved_time`, time, required): Enter the time your report was approved in the correct format (HH:MM:SS).
* **Submitted Time Diff** (`submitted_time_diff`, time, required): Calculate the difference between the submitted and approved time.
* **Approved Time Diff** (`approved_time_diff`, time, required): Calculate the difference between the approved and actual start time.
* **Comments** (`comments`, text, required): Enter any comments or feedback about your initiative.
