<thinking>
We need to ensure that this form is used correctly and that users do not submit duplicate updates. This form is designed to update a person's address in our system. Users will need to provide their full name, employee ID, and new address details. The new address will replace the existing one in the system. Please fill out the form with your updated information and reason for the change. Ensure you are submitting the form for the correct employee ID. If you are making changes for someone else, please ensure you have their permission before submitting this form.
</thinking>

# Address Update Form - Help Guide
## Purpose
The Address Update Form is used to update a person's address in our system. This form replaces the existing address with the new one provided.

## How To Complete This Form
1. Enter your full name as it appears on your identification.
2. Enter your employee ID as issued by the organization.
3. Fill out the new address details including street address, city, state, zip code, and country.
4. Select the effective date of the address change.
5. Enter your reason for the address change.
6. Select the type of address (e.g., home, work, etc.).
7. Enter your signature to confirm the update.

## Field-by-Field Explanation

* **Full Name** (`employee_full_name`, text, required): Enter your full name as it appears on your identification.
* **Employee ID** (`employee_id`, text, required): Enter your employee identification number.
* **Current Address on File** (`current_address`, text, optional): This field is for reference only and should not be edited.
* **New Address Line 1** (`new_address_line_1`, text, required): Enter the street address, building number, and apartment/unit.
* **New Address Line 2** (`new_address_line_2`, text, optional): Enter the apartment, suite, unit, building, floor, etc.
* **City** (`new_city`, text, required): Enter the city of your new address.
* **State/Province** (`new_state`, text, required): Enter the state or province of your new address.
* **ZIP/Postal Code** (`new_zip_code`, text, required): Enter the postal code of your new address.
* **Country** (`new_country`, text, required): Enter the country of your new address.
* **Effective Date of Change** (`move_effective_date`, date, required): Select the date when this address change should take effect.
* **Phone Number** (`phone_number`, text, optional): Enter your current phone number for contact purposes.
* **Alternative Phone Number** (`alternative_phone`, text, optional): Enter an alternative phone number for contact purposes.
* **Email Address** (`email_address`, email, optional): Enter your current email address for notifications.
* **Reason for Address Change** (`reason_for_change`, select_one, required): Select the reason for the address change from the provided options.
* **Type of Address** (`address_type`, select_one, required): Select the type of address from the provided options.
* **Expected Duration at New Address** (`duration_at_new_address`, select_one, optional): Select how long you expect to reside at this address.
* **Emergency Contact Name** (`emergency_contact_name`, text, optional): Enter the name of your emergency contact person.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, optional): Enter the phone number of your emergency contact person.
* **Relationship to Emergency Contact** (`emergency_contact_relationship`, text, optional): Describe your relationship to the emergency contact person.
* **Duration at Previous Address** (`previous_address_duration`, text, optional): Enter how long you were at your previous address.
* **Date of Update Request** (`update_date`, date, required): Select the date when you are submitting this update.
* **Employee Signature** (`employee_signature`, text, required): Enter your electronic signature to confirm the address update.
