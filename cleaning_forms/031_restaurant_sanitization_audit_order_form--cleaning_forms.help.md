# Restaurant Sanitization Audit Order Form - Help Guide
## Purpose
The Restaurant Sanitization Audit Order Form is a tool used by restaurants to record and report the results of their sanitization audits.

## How To Complete This Form

1. To complete this form, start by selecting the "Restaurant Sanitization Audit" field. This field is used to record the type of audit that was performed.
2. Next, select the "Audit Order" field to record the order in which the audit was performed.
3. In the "Notes" field, provide any additional information or observations made during the audit.
4. If applicable, enter the date and time of the audit in the "Date" and "Time" fields.
5. If you have a contact email address for the person or team responsible for the audit, enter it in the "Email" field.
6. Finally, if you have a phone number for the same contact, enter it in the "Phone" fields.

## Field-by-Field Explanation

* **Restaurant Sanitization Audit** (`restaurant_sanitization_audit`, text, required): This field is used to record the type of audit that was performed.
* **Audit Order** (`audit_order`, text, required): This field is used to record the order in which the audit was performed.
* **Sanitization Audit** (`sanitization_audit`, text, required): This field is actually the same as the "Restaurant Sanitization Audit" field, it is redundant and should not be filled. Please ignore this field.
* **Notes** (`notes`, text, optional): This field is used to provide any additional information or observations made during the audit.
* **Date** (`date`, date, optional): This field is used to record the date of the audit. Use the date format MM/DD/YYYY.
* **Time** (`time`, time, optional): This field is used to record the time of the audit. Use the 24-hour clock format HH:MM.
* **Email** (`email`, email, optional): This field is used to enter the contact email address of the person or team responsible for the audit.
* **Phone** (`phone`, text, optional): This field is used to enter the contact phone number of the person or team responsible for the audit.
