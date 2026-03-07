<thinking>As an expert form designer, I need to carefully read the form schema and identify the purpose, required fields, and any potential confusion that might arise from unclear or open-ended labels. This form is for attendees to register for a Care Coordination Technology Showcase event, which likely focuses on healthcare technology. The attendee is asked to provide their contact information, professional role, technology interests, and showcase details such as the event date and number of attendees. There are some fields that require clarification, like "Attendee Dietery Needs Header," which might be a mislabeled or confusing term. I'll make sure to correct it to something more user-friendly.</thinking>

# Care Coordination Technology Showcase Registration Form - Help Guide
## Purpose
The Care Coordination Technology Showcase Registration Form is designed for healthcare professionals to register for an event focused on care coordination and technology. Please use this guide to complete the form accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the attendee information section with your details.
2. Select your professional role and interests in the technology area.
3. Choose the showcase date and time that fits your schedule.
4. Select the technology areas you are interested in exploring.
5. Enter the number of attendees from your organization.
6. If attending in-person, list any dietary restrictions or special needs.
7. Confirm your registration for the selected showcase.

## Field-by-Field Explanation

* **Attendee Full Name** (`attendee_full_name`, text, required): Enter your full name as you would like it to be displayed on the event materials.
* **Organization/Practice Name** (`attendee_organization_name`, text, required): Enter the name of your organization or practice.
* **Professional Role/Title** (`professional_role_title`, select_one, required): Select the role that best describes you from the provided options:
	+ IT/Health Tech Specialist
	+ Care Coordinator/Manager
	+ Clinical Administrator
	+ Nurse Manager
	+ Physician Leader
* **Attendee Email Address** (`attendee_email_address`, email, required): Enter your work email address for registration confirmation and any future communication.
* **Contact Phone Number** (`attendee_phone_number`, text, required): Enter your contact phone number.
* **Showcase Date Selection** (`showcase_date_selection`, select_one, required): Choose the event date that fits your schedule:
	+ April 15, 2026 (Virtual)
	+ April 17, 2026 (In-Person)
	+ April 22, 2026 (Virtual)
* **Technology Interest Areas** (`technology_interest_areas`, select_multiple, required): Select the topics you would like to explore from the provided options:
	+ Remote Patient Monitoring (RPM)
	+ Electronic Health Records (EHR) Integration
	+ Telehealth Platforms
	+ AI and Predictive Analytics
	+ Mobile Patient Engagement
* **Number of Attendees from Organization** (`number_of_attendees_total`, number, required): Enter the total number of attendees from your organization, including yourself.
* **Dietary Restrictions (for in-person sessions)** (`dietary_restrictions_showcase`, text, optional): If you have any dietary restrictions or special needs, please list them here.
* **I Confirm Registration for the Showcase Selected** (`showcase_registration_confirmation`, select_one, required): Confirm your registration by selecting "Registered and Confirmed".
