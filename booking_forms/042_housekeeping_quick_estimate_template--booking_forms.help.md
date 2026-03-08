<thinking>...</thinking>

</thinking>

# Housekeeping Quick Estimate Template - Help Guide
## Purpose
The Housekeeping Quick Estimate Template is a form used to gather essential information for housekeeping tasks, allowing for efficient communication and accurate estimates with clients. This form is essential for internal use, ensuring that all necessary details are captured for each client's housekeeping project.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the Housekeeping Quick Estimate Template from the available options.
2. Fill out the form with the required information:
	* Enter the **Housekeeping Quick Estimate** page.
	* Input the **Client Name** (if known).
	* Choose the **Service Area** to be cleaned.
	* Enter the square footage of the area to be cleaned (in square feet).
	* Select the estimated **Time Needed** for the task.
	* Input the required **Date Needed** for the task.
	* Indicate if a **Site Visit** is required.
	* Specify if the client is requesting a quote.

## Field-by-Field Explanation
* **Housekeeping Quick Estimate** (`housekeeping_quick_estimate`, text, required):
	+ Enter a brief description of the housekeeping task, including any special instructions or concerns.
* **Client Name** (`client_name`, text, optional):
	+ Input the name of the client, if known. If unknown, leave this field blank.
* **Service Area** (`service_area`, select_one, required):
	+ Choose the area of the house or site that needs housekeeping service.
* **Square Footage** (`square_feet`, number, required):
	+ Enter the total square footage of the area to be cleaned.
* **Time Needed** (`time_needed`, time, required):
	+ Estimate the number of hours required to complete the housekeeping task.
* **Date Needed** (`date_needed`, date, required):
	+ Input the date when the housekeeping service is required.
* **Site Visit** (`site_visit`, select_one, required):
	+ Indicate if a site visit is necessary for the housekeeping task.
* **Request Quote** (`request_quote`, select_multiple, required):
	+ Specify if the client is requesting a quote or has other requirements.
