# Restaurant Grease Trap Cleaning Order Form - Help Guide
## Purpose
This form is used to schedule and organize restaurant grease trap cleaning services.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill out your restaurant's name in the "Restaurant Name" field.
2. Enter your email address in the "Email" field.
3. Provide your phone number in the "Phone" field.
4. Select the type of service required from the options provided in the "Service Type" field.
5. Choose the frequency of service from the options provided in the "Frequency" field. This is optional but recommended for scheduling.
6. Enter the date of the next scheduled service in the "Next Service Date" field. This is optional but recommended for planning.
7. Describe the location of the grease trap in the "Grease Trap Description" field. This will help the service team locate the trap.
8. Select the location where the service will take place from the options provided in the "Service Location" field.
9. Optionally, add any comments or special requests in the "Comments" field.

## Field-by-Field Explanation

* **Restaurant Name** (`restaurant_name`, text, required): Enter your restaurant's name for reference and record-keeping purposes.
* **Email** (`email`, email, required): Enter your email address for communication and scheduling updates.
* **Phone** (`phone`, text, required): Provide your phone number for scheduling and service confirmation.
* **Service Type** (`service_type`, select_one, required): Select from options:
	+ Oil and Grease
	+ Food Waste
	+ Sewage
* **Frequency** (`frequency`, select_multiple, optional): Select from options:
	+ Daily
	+ Weekly
	+ Monthly
* **Next Service Date** (`next_service_date`, date, optional): Enter the date of the next scheduled service (not required but recommended).
* **Grease Trap Description** (`grease_trap_description`, text, required): Briefly describe the location and access details of the grease trap.
* **Service Location** (`service_location`, select_one, required): Select from options:
	+ Kitchen
	+ Bathroom
* **Comments** (`comments`, note, optional): Add any comments or special requests for the service team.
