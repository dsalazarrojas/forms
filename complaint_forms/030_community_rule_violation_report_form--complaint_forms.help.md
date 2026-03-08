# Community Rule Violation Report Form - Help Guide
## Purpose

The Community Rule Violation Report Form is a tool for reporting incidents that violate community rules. It's used to gather information about the incident, including the details of the violation, the impact it had, and the desired resolution. This form helps community administrators and law enforcement to investigate and address the issue.

## How To Complete This Form

To complete the form, follow these steps:

1. Provide your contact information as the reporter.
2. Enter your first and last name.
3. Share your email address.
4. Provide your phone number.
5. Indicate if you want to remain anonymous.
6. Describe the violation information, including details about the incident.
7. Select the type of violation that occurred.
8. Provide a detailed description of the incident.
9. Specify the date and time of the incident.
10. Mention the location where the incident occurred.
11. If necessary, provide information about the involved parties.
12. Indicate if you have any physical description or details about the violator.
13. If you have any witnesses, indicate if they were present.
14. If you have any evidence, such as photos or videos, you can add it to the form.
15. Indicate if this is a repeat incident.
16. If this is a repeat incident, describe the previous incident details.
17. Describe how the violation impacted you.
18. Specify the desired resolution for the issue.
19. Choose the urgency level of the incident (emergency, within 24 hours, within 1 week, or when possible).
20. If you've filed a police report, indicate if and provide the report number.
21. Add any additional comments or information.

## Field-by-Field Explanation

* **Reporter Information** (`reporter_info`, `note`, required: false): This is where you'll provide your contact details as the reporter. Your information will be kept confidential, but please provide your email address and phone number so we can contact you for follow-up questions.
* **First Name** (`first_name`, `text`, required: true): Enter your first name as you want it to be displayed in the report.
* **Last Name** (`last_name`, `text`, required: true): Enter your last name as you want it to be displayed in the report.
* **Email Address** (`email`, `email`, required: true): Enter your email address so we can contact you for follow-up questions.
* **Phone Number** (`phone`, `text`, required: true): Enter your phone number so we can contact you for follow-up questions.
* **Do You Want to Remain Anonymous** (`anonymous`, `select_one`, required: true): If you want to remain anonymous, select "True". If not, select "False".
* **Violation Information** (`violation_info`, `note`, required: false): Provide as much detail as possible about the violation. This will help us understand the incident better.
* **Type of Violation** (`violation_type`, `select_one`, required: true): Select the type of violation that occurred from the list. This helps us categorize the incident correctly.
* **Detailed Description** (`violation_description`, `text`, required: true): Describe what happened in as much detail as possible.
* **Date of Incident** (`incident_date`, `date`, required: true): Specify the date the incident occurred.
* **Time of Incident** (`incident_time`, `time`, required: true): Specify the time the incident occurred.
* **Location of Incident** (`incident_location`, `text`, required: true): Mention the location where the incident occurred.
* **Involved Parties Information** (`involved_parties`, `note`, required: false): If there are other parties involved, provide their details.
* **Description of Violator** (`violator_description`, `text`, required: false): If you have a physical description or details about the violator, provide them here.
* **Name of Violator** (`violator_name`, `text`, required: false): If you know the name of the violator, provide it here.
* **Address of Violator** (`violator_address`, `text`, required: false): If you know the address of the violator, provide it here.
* **Were There Witnesses** (`witnesses`, `select_one`, required: true): If there were witnesses, select "True". If not, select "False".
* **Witness Information** (`witness_info`, `text`, required: false): If there were witnesses, provide their names and contact details here.
* **Evidence** (`evidence`, `note`, required: false): If you have any evidence, such as photos or videos, add it to the form.
* **Do You Have Photos** (`photos_available`, `select_one`, required: false): If you have photos, select "True". If not, select "False".
* **Do You Have Video Evidence** (`videos_available`, `select_one`, required: false): If you have video evidence, select "True". If not, select "False".
* **Do You Have Other Documentation** (`documents_available`, `select_one`, required: false): If you have other documentation, such as emails or letters, select "True". If not, select "False".
* **Has This Happened Before** (`previous_incidents`, `select_one`, required: true): If this is a repeat incident, select "True". If not, select "False".
* **Previous Incident Details** (`previous_details`, `text`, required: false): If this is a repeat incident, describe the previous incident details here.
* **How Did This Violation Impact You** (`impact`, `text`, required: true): Describe the effect the violation had on you.
* **What Resolution Do You Seek** (`desired_resolution`, `text`, required: true): Specify the desired outcome or resolution for the issue.
* **Urgency Level** (`urgency`, `select_one`, required: true): Choose the urgency level of the incident (emergency, within 24 hours, within 1 week, or when possible).
* **Have You Filed a Police Report** (`police_report`, `select_one`, required: false): If you've filed a police report, select "True". If not, select "False" or "Not Applicable".
* **Police Report Number** (`police_report_number`, `text`, required: false): If you've filed a police report, provide the report number here.
* **Additional Comments** (`additional_comments`, `text`, required: false): Add any additional comments or information about the incident here.

Note: The form has been designed to make it easy to follow and report incidents. If you're unsure about any field or have any questions, don't hesitate to contact us.
