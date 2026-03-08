# Volunteer Fire Department Run Log - Help Guide
## Purpose
The Volunte Fire Department Run Log form is used to document and report on response efforts of the volunteer fire department. It's a record-keeping tool to track call numbers, response times, locations, and other important details for each call-out.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields with the relevant information about the call-out.
2. Enter the call number and date and time of the response.
3. Select the response type and status from the provided options.
4. Choose the response code (if applicable).
5. Enter the units deployed and their corresponding IDs.

## Field-by-Field Explanation

* **Call Number** (`call_number`, text, optional): Enter the unique call number assigned to this incident.
* **Date** (`date`, date, optional): Enter the date of the response.
* **Time** (`time`, time, optional): Enter the time of the response.
* **Response Date** (`response_date`, date, optional): Enter the date the response was made.
* **Location** (`location`, text, optional): Enter the location where the response took place.
* **Response Type** (`response_type`, select_one, optional):
	+ Select the type of response made, such as Aerial, Ground, Water, or Wildland.
* **Response Status** (`response_status`, select_one, optional):
	+ Select the status of the response, such as Active, Cancelled, Deferred, or Resolved.
* **Response Code** (`response_code`, text, optional): Enter any additional response code information.
* **Units Deployed** (`units_deployed`, number, optional): Enter the number of units deployed to respond.
* **Unit IDs** (`unit_ids`, text, optional): Enter the IDs of the units that responded.

## Tips

* Make sure to accurately enter the call number to ensure that all response information is associated with the correct call.
* Select the correct response type and status to ensure that the response data is properly recorded.
* If no units were deployed, you can enter 0 for the Units Deployed field.
* You can enter any additional information in the Response Code field if necessary.
