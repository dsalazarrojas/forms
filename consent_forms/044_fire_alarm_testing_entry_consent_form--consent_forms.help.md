# Fire Alarm Testing Entry Consent Form - Help Guide
## Purpose
The Fire Alarm Testing Entry Consent Form is used to gather essential information from tenants for fire alarm testing purposes. This information is required for scheduling and coordinating testing with the assigned personnel. Please provide accurate and up-to-date information to ensure a smooth testing process.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Enter the tenant's name in the "Tenant name" field.
3. Enter the contact phone number of the person responsible for the tenant in the "Contact Phone" field.
4. Select the testing date from the calendar in the "Testing Date" field.
5. Choose the testing time from the options in the "Testing Time" field.
6. Select the preferred testing time from the options in the "Testing Time Preferred" field (if applicable).
7. Enter the tenant's email address in the "Contact Email" field.
8. Add any additional testing notes in the "Testing Notes" field.
9. If the contact is assigned to someone, select "Yes" in the "Assigned Contact" field. If not, select "No".
10. Enter the tenant's physical address in the "Address" field.

## Field-by-Field Explanation
* **Tenant name** (`tenant_name`, text, required/optional: false): Enter the name of the tenant for whom the testing is being performed.
* **Contact Phone** (`contact_phone`, text, required/optional: true): Enter the phone number of the person responsible for the tenant.
* **Testing Date** (`testing_date`, date, required/optional: true): Select the date of the fire alarm testing.
* **Testing Time** (`testing_time`, time, required/optional: true): Choose the testing time for the fire alarm system.
* **Testing Time Preferred** (`testing_time_preferred`, select_multiple, required/optional: false): Select the preferred testing time from the available options (if applicable).
* **Contact Email** (`contact_email`, email, required/optional: false): Enter the email address of the person responsible for the tenant.
* **Testing Notes** (`testing_notes`, note, required/optional: false): Add any additional notes about the testing.
* **Assigned Contact** (`assigned_contact`, select_one, required/optional: false): Select "Yes" if the contact is assigned to someone; "No" otherwise.
* **Address** (`tenant_address`, text, required/optional: false): Enter the tenant's physical address.
