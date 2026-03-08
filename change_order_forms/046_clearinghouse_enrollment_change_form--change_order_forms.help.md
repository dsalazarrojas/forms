# Clearinghouse Enrollment Change Form - Help Guide
## Purpose
This form is used to submit a change request for a client's enrollment. The form is used to update the client's enrollment details and confirm the accuracy of the information provided.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the date of the change request in the "Date of Change Request" field.
2. Select the type of change being requested from the "Type of Change Requested" dropdown menu.
3. Provide the member's full name in the "Member Full Name" field.
4. Enter the member's ID number in the "Member ID Number" field.
5. Enter the member's date of birth in the "Date of Birth" field.
6. Enter the member's email address in the "Email Address" field.
7. Enter the member's phone number in the "Phone Number" field.
8. Provide the current plan name in the "Current Plan Name" field.
9. Enter the effective date of the current plan in the "Current Plan Effective Date" field.
10. Select the current coverage type from the "Current Coverage Type" dropdown menu.
11. Enter the new plan name if the change is to a new plan in the "New Plan Name" field.
12. Enter the effective date of the new plan in the "New Plan Effective Date" field.
13. Select the new coverage type from the "New Coverage Type" dropdown menu.
14. Provide the reason for the change in the "Reason for Enrollment Change" field.
15. Select the qualifying event that triggered the change from the "Qualifying Event" dropdown menu (if applicable).
16. Enter the name of the provider or employer in the "Provider or Employer Name" field.
17. Enter the provider or employer ID in the "Provider/Employer ID" field (if applicable).
18. Enter the contact person's name at the provider or employer in the "Provider Contact Person" field (if applicable).
19. Enter the contact email of the provider or employer in the "Provider Contact Email" field (if applicable).
20. Select the urgency of the change from the "Urgency of Change" dropdown menu.
21. Confirm that the information provided is accurate in the "I confirm the information above is accurate" field.
22. Authorize the change in the "I authorize this enrollment change" field.

## Field-by-Field Explanation
* **Date of Change Request** (`change_date`, date, required): Enter the date this change is being requested.
* **Type of Change Requested** (`change_type`, select_one, required): Select the type of change being requested (e.g., New Enrollment, Enrollment Modification, etc.).
* **Member Full Name** (`member_name`, text, required): Enter the full legal name of the member.
* **Member ID Number** (`member_id`, text, required): Enter the Clearinghouse member ID number.
* **Date of Birth** (`date_of_birth`, date, required): Enter the member's date of birth.
* **Email Address** (`member_email`, email, required): Enter the member's contact email address.
* **Phone Number** (`member_phone`, text, required): Enter the member's phone number.
* **Current Plan Name** (`current_plan`, text, required): Enter the name of the current enrollment plan.
* **Current Plan Effective Date** (`current_plan_effective_date`, date, required): Enter the effective date of the current plan.
* **Current Coverage Type** (`current_coverage_type`, select_one, required): Select the current coverage type (e.g., Individual, Family, Group, etc.).
* **New Plan Name** (`new_plan`, text, optional): If changing plans, enter the name of the new plan.
* **New Plan Effective Date** (`new_plan_effective_date`, date, optional): If changing plans, enter the effective date of the new plan.
* **New Coverage Type** (`new_coverage_type`, select_one, optional): If changing plans, select the new coverage type.
* **Reason for Enrollment Change** (`change_reason`, text, required): Enter the reason for the enrollment change.
* **Qualifying Event** (`qualifying_event`, select_one, optional): Select the life event that triggered the change (if applicable).
* **Provider or Employer Name** (`provider_name`, text, required): Enter the name of the provider or employer.
* **Provider/Employer ID** (`provider_id`, text, optional): Enter the internal provider ID (if applicable).
* **Provider Contact Person** (`provider_contact_name`, text, optional): Enter the name of the contact person at the provider or employer (if applicable).
* **Provider Contact Email** (`provider_contact_email`, email, optional): Enter the contact email of the provider or employer (if applicable).
* **Urgency of Change** (`urgency_level`, select_one, required): Select the urgency of the change (e.g., Immediate, Within 30 Days, etc.).
* **I confirm the information above is accurate** (`confirm_accuracy`, select_one, required): Confirm that the information provided is accurate.
* **I authorize this enrollment change** (`authorize_change`, select_one, required): Authorize the enrollment change.

## Tips
* Make sure to fill out all required fields accurately and completely.
* If changing plans, ensure that the new plan name and effective date are correctly entered.
* Double-check the urgency of the change to ensure it aligns with the situation.
* Confirm that the information provided is accurate to avoid errors.
* Authorize the change to ensure it is approved.
