<thinking>
The purpose of this form is to collect information related to HVAC (heating, ventilation, and air conditioning) job quotes. The form allows users to provide details about the quote type, job type, job date, start and finish times, job location, contact information, payment terms, job notes, quote due date, quote amount, estimate, payment schedule, contact phone, job address, equipment list, equipment serial number, job address (if different from the main address), contact title, and job status reason.
To ensure that the form is being used correctly, it is recommended that the user reviews the options provided for each field to ensure they are selecting the most accurate information. This form may not be suitable for all types of HVAC jobs, but it should be suitable for most common scenarios.
</thinking>

# hvac_quote_builder - Help Guide
## Purpose
The HVAC Quote Builder form is a tool for collecting information related to HVAC jobs, including quote type, job type, and other relevant details.
## How To Complete This Form
To complete this form, follow these steps:

1. Select the quote type.
2. Choose the job type.
3. Enter the job date.
4. Provide the start and finish times for the job.
5. Enter the job location.
6. Provide contact information, including name, email, and phone number.
7. Set the quote due date.
8. Enter the quote amount.
9. Enter the estimate and payment schedule.
10. Add any additional job notes.
11. Enter the equipment list and serial number (if applicable).
12. Enter any additional job address information (if different from the main address).
13. Enter the contact title.
14. Set the job status and status reason (if necessary).

## Field-by-Field Explanation

- **Quote Type** (`quote_type`, select_multiple, required: false): 
  This field is used to select the type of quote being generated. This information is used to help categorize and filter quotes.

- **Job Type** (`job_type`, select_one, required: false): 
  This field is used to select the type of job being quoted. This information helps to identify the specific services being provided.

- **Job Date** (`job_date`, date, required: false): 
  This field is used to enter the date of the job. Enter the date in the format `YYYY-MM-DD`.

- **Start Time** (`job_start_time`, time, required: false): 
  This field is used to enter the start time of the job.

- **Finish Time** (`job_finish_time`, time, required: false): 
  This field is used to enter the finish time of the job.

- **Job Location** (`job_location`, text, required: false): 
  This field is used to enter the physical location of the job.

- **Contact Name** (`contact_name`, text, required: false): 
  This field is used to enter the name of the contact person.

- **Contact Email** (`contact_email`, email, required: false): 
  This field is used to enter the email address of the contact person.

- **Quote Date** (`quote_date`, date, required: false): 
  This field is used to enter the date the quote is due.

- **Quote Status** (`quote_status`, select_one, required: false): 
  This field is used to select the status of the quote. This can be used to track and manage quotes.

- **Job Status** (`job_status`, select_one, required: false): 
  This field is used to select the status of the job. This can be used to track and manage jobs.

- **Payment Terms** (`payment_terms`, text, required: false): 
  This field is used to enter any payment terms or conditions.

- **Job Notes** (`job_notes`, note, required: false): 
  This field is used to add any additional notes or comments about the job.

- **Quote Due Date** (`quote_due_date`, date, required: false): 
  This field is used to enter the date the quote is due.

- **Quote Amount** (`quote_amount`, number, required: false): 
  This field is used to enter the amount of the quote.

- **Estimate** (`job_estimate`, text, required: false): 
  This field is used to enter an estimate or estimate range.

- **Payment Schedule** (`payment_schedule`, text, required: false): 
  This field is used to enter any payment schedule or terms.

- **Contact Phone** (`contact_phone`, text, required: false): 
  This field is used to enter the phone number of the contact person.

- **Job Address** (`job_address`, text, required: false): 
  This field is used to enter the physical address of the job location.

- **Equipment List** (`equipment_list`, text, required: false): 
  This field is used to enter any equipment being used or required for the job.

- **Equipment Serial Number** (`equipment_serial`, text, required: false): 
  This field is used to enter the serial number of any equipment being used or required for the job.

- **Job Location (2)** (`job_address2`, text, required: false): 
  This field is used to enter any additional job address information (if different from the main address).

- **Contact Title** (`contact_title`, text, required: false): 
  This field is used to enter the title of the contact person.

- **Job Status Reason** (`job_status_reason`, text, required: false): 
  This field is used to enter any reason for the job status.

## Tips
* Always review the quote type and job type to ensure you are entering the correct information.
* Ensure that the contact information is accurate and up-to-date.
* Enter the quote due date carefully, as it is used to track and manage quotes.
* Enter any payment terms or conditions clearly and concisely.
* Use the job status and status reason fields to track and manage job status changes.
