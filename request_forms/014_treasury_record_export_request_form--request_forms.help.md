<thinking>
We will first need to check if the user is eligible to fill this form. The form will be available only to users who have been granted permission to submit Treasury Record Export Request. We will also need to ensure that the user is not already processing a Treasury Record Export Request and that the request is not already in review. To avoid duplication, we will check if the user's email address and request ID (if provided) already exist in the database.

Assuming these checks are in place, we will then provide a user-facing help guide to assist users in completing the form efficiently and accurately.

</thinking>

# Treasury Record Export Request Form - Help Guide
## Purpose
The Treasury Record Export Request Form is a request form designed to allow authorized users to request the export of Treasury records in a specific format. This form helps in streamlining the export process, ensuring that users can access their required data in a timely and organized manner.

## How To Complete This Form
To complete this form, follow these steps:

1.  Ensure you meet the eligibility criteria to fill this form.
2.  Select the type of Treasury record you want to export.
3.  Choose the start and end dates for the export period.
4.  Optionally, select any records for review or upload a file.
5.  Review your selections and click on the "Submit" button to submit your request.

## Field-by-Field Explanation

*   **Purpose** (`title`, required):
    This is the title of the form, and it is also a required field. Please provide a brief description of why you are requesting the export of Treasury records.
*   **Record Type** (`record_type`, required):
    Select the type of Treasury record you want to export. Please choose from the options provided (Option 1, Option 2, Option 3).
*   **Date Range Start** (`date_range_start`, required):
    Enter the start date of the export period. This date will be used as the start date for the export.
*   **Date Range End** (`date_range_end`, required):
    Enter the end date of the export period. This date will be used as the end date for the export.
*   **Submit** (`submit`, not required):
    Review your selections before submitting your request. If you are satisfied with your choices, click on this button to submit your request.
*   **Review** (`review`, not required):
    Select any records that you want to review before exporting them. Please choose from the options provided (Option 4, Option 5).
*   **File Uploaded** (`file_uploaded`, not required):
    If you have a file that you want to attach with your request, enter its name here.
*   **File Name** (`file_name`, not required):
    If you have attached a file with your request, enter its name here.
