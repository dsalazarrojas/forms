# Emergency Evacuation Authorization Form - Help Guide
## Purpose
The Emergency Evacuation Authorization Form is used to collect contact information and authorization from employees to be evacuated from the facility in case of an emergency.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your name and contact information.
2. Select your department and job title.
3. Choose your emergency contact information.
4. Select your authorization level.
5. Confirm if you are authorized to be evacuated.
6. Add any additional notes or comments.
7. Date and time of completion.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, Text, Required: False): Please enter your name as it should be displayed in emergency situations.
* **Contact Number** (`contact_number`, Text, Required: False): Enter your contact information, such as a phone number or email, to be reached in case of an emergency.
* **Email** (`email`, Email, Required: False): Provide your email address to be contacted in emergency situations.
* **Department** (`department`, Text, Required: False): Specify your department to help locate you in the facility.
* **Job Title** (`job_title`, Text, Required: False): Enter your job title to help identify you in emergency situations.
* **Emergency Contact Number** (`emergency_contact_number`, Text, Required: False): Enter the contact information of your emergency contact person.
* **Emergency Contact Name** (`emergency_contact_name`, Text, Required: False): Enter the name of your emergency contact person.
* **Authorization Level** (`authorization_level`, Select One, Required: False):
	+ Emergency Response Team (ERT): Choose this option if you are a member of the ERT team.
	+ Emergency Response Team (ERT) - Alternate: Choose this option if you are an alternate member of the ERT team.
	+ Emergency Response Team (ERT) - Alternate 2: Choose this option if you are an alternate member of the ERT team.
	+ Emergency Response Team (ERT) - Lead: Choose this option if you are the lead of the ERT team.
	+ Facility Management Team (FMT): Choose this option if you are a member of the FMT team.
	+ Facility Management Team (FMT) - Alternate: Choose this option if you are an alternate member of the FMT team.
	+ Facility Management Team (FMT) - Alternate 2: Choose this option if you are an alternate member of the FMT team.
	+ Facility Management Team (FMT) - Lead: Choose this option if you are the lead of the FMT team.
	+ Other: Choose this option if you are not a member of any team.
* **Authorized to Evacuate** (`authorized_to_evacuate`, Select One, Required: False):
	+ True: Choose this option if you are authorized to be evacuated from the facility.
	+ False: Choose this option if you are not authorized to be evacuated from the facility.
* **Notes** (`notes`, Note, Required: False): Add any additional comments or notes about your emergency contact information and authorization.
* **Date** (`date`, Date, Required: False): Enter the date you are completing this form.
* **Time** (`time`, Time, Required: False): Enter the time you are completing this form.
