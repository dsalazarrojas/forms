> <thinking>...checking if form is correctly implemented and non-duplication is avoided...</thinking>

# Access Badge Check In Form - Help Guide
## Purpose
The Access Badge Check In Form is used to collect information from visitors, including their full name, contact details, and reason for visiting, as well as to check their identity and confirm security procedures.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in the required fields with the visitor's details.
2. Select the primary reason for the visit from the list of options.
3. Enter the check-in time and date.
4. Confirm if a valid government-issued ID has been verified.
5. Enter the access badge number assigned to the visitor.
6. Confirm if the visitor has been briefed on building security policies.
7. Select to acknowledge the safety procedures and emergency exits for the facility.
8. Type your full name to sign as the visitor.

## Field-by-Field Explanation
* **Full Name of Visitor** (`visitor_name`, text, required): Enter the full name as it appears on your photo ID.
* **Organization Represented** (`organization_representing`, text, required): Enter the name of the company or institution you represent.
* **Visitor Email Address** (`visitor_email`, email, required): Enter the email address for check-in confirmation.
* **Visitor Phone Number** (`visitor_phone`, text, required): Enter your primary mobile number.
* **Person to Visit or Host Name** (`person_to_visit`, text, required): Enter the name of the person you are visiting or meeting.
* **Purpose of Visit** (`purpose_of_visit`, select_one, required): Select the primary reason for your visit from the list:
	+ Meeting or Conference
	+ Maintenance or Service
	+ Delivery
	+ Personal Visit
	+ Job Interview
* **Check-in Time** (`check_in_time`, time, required): Enter the check-in time.
* **Check-in Date** (`check_in_date`, date, required): Enter the current date.
* **Has a valid government-issued ID been verified?** (`id_verified`, select_one, required): Confirm if a valid government-issued ID has been verified.
	+ Yes
	+ No
* **Access Badge Number Assigned** (`badge_number_assigned`, text, required): Enter the ID number on the badge.
* **Has the visitor been briefed on building security policies?** (`security_policy_briefing`, select_one, required): Confirm if the visitor has been briefed on building security policies.
	+ Yes
	+ No
* **I acknowledge the safety procedures and emergency exits for this facility** (`hazard_awareness`, select_one, required): Select to acknowledge the safety procedures and emergency exits.
	+ I Acknowledge
	+ Other
* **Visitor Digital Signature** (`visitor_signature`, text, required): Type your full name to sign as the visitor.
