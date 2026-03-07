<thinking>
The Subcontractor Warranty Form is used for capturing information about a subcontracted job, including the subcontractor's contact details, job description, and payment terms. This form is likely used by project managers or administrators to gather essential data about subcontracted work, ensuring that all necessary details are recorded and easily accessible.

When filling out this form, please ensure you provide accurate and complete information to avoid any potential issues with payment or warranty claims. Ensure that you have permission from the relevant parties before submitting the form.

Note that some fields may have specific requirements or constraints. For example, the `subcontractor_email` field is a required field for email, which typically follows the format "example@email.com". The `job_status` fields are select_one fields, meaning you can only choose one of the provided options (Completed, In Progress, Not Started).
</thinking>

# Subcontractor Warranty Form - Help Guide
## Purpose

The Subcontractor Warranty Form is used for capturing information about subcontracted jobs, including the subcontractor's contact details, job description, and payment terms.

## How To Complete This Form

- **Subcontractor Warranty Form**: Enter a description of the work that will be subcontracted, this field is optional and not required.
- Fill in all required fields, marked with an asterisk (\*).
- Ensure that all dates entered are in the correct format.

## Field-by-Field Explanation

*   **Subcontractor Name** (\*): Enter the name of the person or company that will be doing the work.
    *   Type: `text`
    *   Required: true
*   **Subcontractor Address** (\*): Enter the address of the person or company that will be doing the work.
    *   Type: `text`
    *   Required: true
*   **Start Date**: Enter the start date of the job.
    *   Type: `date`
    *   Required: false
*   **End Date**: Enter the end date of the job.
    *   Type: `date`
    *   Required: false
*   **Subcontractor Phone Number**: Enter the phone number of the person or company that will be doing the work.
    *   Type: `text`
    *   Required: true
*   **Subcontractor Email**: Enter the email address of the person or company that will be doing the work.
    *   Type: `email`
    *   Required: true
*   **Contractor Name**: Enter the name of the person or company that contracted the work.
    *   Type: `text`
    *   Required: true
*   **Contractor Address**: Enter the address of the person or company that contracted the work.
    *   Type: `text`
    *   Required: true
*   **Job Description**: Enter a description of the job that was subcontracted.
    *   Type: `text`
    *   Required: true
*   **Subcontractor Warranty Type**: Select the type of warranty that applies to the job.
    *   Type: `select_one`
    *   Required: true
    *   Options: `Warranty` or `Service`
*   **Job Value**: Enter the value of the job.
    *   Type: `number`
    *   Required: true
*   **Payment Terms**: Enter the terms of payment for the job.
    *   Type: `text`
    *   Required: true
*   **Payment Terms 2**: Enter any additional payment terms.
    *   Type: `text`
    *   Required: false
*   **Warranty Terms**: Enter any warranty terms.
    *   Type: `text`
    *   Required: true
*   **Job Status**: Select the status of the job.
    *   Type: `select_one`
    *   Required: true
    *   Options: `Completed`, `In Progress`, `Not Started`
*   **Notes**: Add any additional notes about the job.
    *   Type: `text`
    *   Required: false
*   **Notes 2**: Add any additional notes about the job.
    *   Type: `text`
    *   Required: false
*   **Job Value 2**: Enter the value of the job, if applicable.
    *   Type: `number`
    *   Required: false
*   **Payment Terms 3**: Enter any additional payment terms.
    *   Type: `text`
    *   Required: false
*   **Payment Terms 4**: Enter any additional payment terms.
    *   Type: `text`
    *   Required: false
*   **Warranty Terms 2**: Enter any warranty terms.
    *   Type: `text`
    *   Required: false
*   **Job Status 2**: Select the status of the job.
    *   Type: `select_one`
    *   Required: false
    *   Options: `Completed`, `In Progress`, `Not Started`
*   **Subcontractor Name 2**: Enter the name of the person or company that will be doing the work, if different from the original subcontractor.
    *   Type: `text`
    *   Required: false
*   **Subcontractor Phone Number 2**: Enter the phone number of the person or company that will be doing the work, if different from the original subcontractor.
    *   Type: `text`
    *   Required: false
