# Travel Registration Form - Help Guide
## Purpose
The Travel Registration Form is used to collect travel information from travelers, including their identification, contact details, and travel-related specifics.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the traveler's First Name and Last Name in the corresponding text fields.
2. Enter the traveler's Email address in the Email field.
3. Enter the traveler's Phone number in the Phone field, if required.
4. Enter the start and end dates of the travel period in the StartDate and EndDate fields respectively.
5. Enter the start and end times of the travel in the StartTime and EndTime fields, if required.
6. Provide the destination of the travel in the TravelDestination field.
7. Briefly describe the purpose or reason for the travel in the TravelReason field.
8. Select the assigned tool or device for the travel from the options provided in the AssignedTool field.
9. Add any additional notes or comments about the travel in the Note field, if required.

## Field-by-Field Explanation

* **FirstName** (`first_name`, text, optional): Enter the traveler's first name.
* **LastName** (`last_name`, text, required): Enter the traveler's last name.
* **Email** (`email`, email, required): Enter the traveler's email address.
* **Phone** (`phone`, text, optional): Enter the traveler's phone number.
* **StartDate** (`start_date`, date, required): Enter the start date of the travel.
* **EndDate** (`end_date`, date, optional): Enter the end date of the travel.
* **StartTime** (`start_time`, time, optional): Enter the start time of the travel.
* **EndTime** (`end_time`, time, optional): Enter the end time of the travel.
* **TravelDestination** (`travel_destination`, text, optional): Enter the destination of the travel.
* **TravelReason** (`travel_reason`, text, optional): Briefly describe the purpose or reason for the travel.
* **AssignedTool** (`assigned_tool`, select_one, required): Select the assigned tool or device for the travel from the provided options.
* **Note** (`note`, note, optional): Add any additional notes or comments about the travel.

## Tips
* Make sure to complete all required fields, marked with an asterisk (\*).
* Ensure that the email address is entered in the correct format (e.g., `example@domain.com`).
* For date and time fields, use the correct format (e.g., `YYYY-MM-DD` for dates and `HH:MM` for times).
* Choose the correct assigned tool or device for the travel from the provided options.
