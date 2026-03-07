<thinking>
We are designing a Tenant Reference Verification form for landlords, property managers, or building owners to collect feedback from renters or tenants who have stayed in their properties. This form will help us gauge the overall experience and quality of service provided by our tenants.
The primary purpose of this form is to gather information about the tenant's experience with the property, including their opinion on the quality of services, maintenance, and overall satisfaction. This will help us identify areas of improvement and make data-driven decisions to enhance our services. To ensure we don't duplicate efforts, we'll check if a tenant has already completed a similar form.
</thinking>

# Tenant Reference Verification - Help Guide
## Purpose
This form is designed to collect feedback from tenants about their experience with a specific property, including their opinion on the quality of services, maintenance, and overall satisfaction.

## How To Complete This Form
1. Please answer the questions honestly based on your experience.
2. Select the options that best describe your opinion on each field.
3. If you have additional comments or feedback, use the "Additional comments" field.
4. Fill in the fields required for contact information if you want to be contacted back by us.

## Field-by-Field Explanation

* **Is the tenant a good place to live?** (`tenant_reference_verification_form`, select_one, required)
	+ This question asks you to rate your overall experience with the tenant, on a scale from Excellent to Poor.
* **Was communication with the landlord/property manager good?** (`communication`, select_multiple, required)
	+ This question asks you to select all that apply for how good the communication was during your stay.
* **Was the maintenance staff good?** (`maintenance`, select_one, required)
	+ This question asks you to rate the maintenance staff on a scale from Excellent to Poor.
* **Was the property clean?** (`cleanliness`, select_multiple, required)
	+ This question asks you to select all that apply for how clean the property was during your stay.
* **Was the property safe?** (`safety`, select_one, required)
	+ This question asks you to rate the safety of the property on a scale from Excellent to Poor.
* **Were repairs handled in a timely manner?** (`repairs`, select_one, required)
	+ This question asks you to rate how well repairs were handled during your stay on a scale from Excellent to Poor.
* **Were the amenities good?** (`amenities`, select_multiple, required)
	+ This question asks you to select all that apply for how good the amenities were during your stay.
* **Was the neighborhood good?** (`neighborhood`, select_multiple, required)
	+ This question asks you to select all that apply for how good the neighborhood was during your stay.
* **Overall, what was your experience with the tenant?** (`overall_experience`, text, required)
	+ This question asks you to describe your overall experience with the tenant in a few sentences.
* **How long did you lease the unit?** (`lease_length`, number, required)
	+ This question asks you to select the length of your lease in months.
* **What month did you move in?** (`move_in_date`, date, required)
	+ This question asks for the month and year you moved in.
* **What month did you move out?** (`move_out_date`, date, required)
	+ This question asks for the month and year you moved out.
* **Email** (`email`, email, required)
	+ This question asks for your email address so we can contact you back.
* **Phone** (`phone`, text, required)
	+ This question asks for your phone number so we can contact you back.
* **Additional comments** (`additional_comments`, note, required)
	+ This question is for any additional comments or feedback you may have.
* **Landlord Name** (`landlord_name`, text, required)
	+ This question asks for the name of the landlord or property manager.
* **Landlord Email** (`landlord_email`, email, required)
	+ This question asks for the email of the landlord or property manager.
* **Landlord Phone** (`landlord_phone`, text, required)
	+ This question asks for the phone number of the landlord or property manager.
* **Property Manager Name** (`property_manager_name`, text, required)
	+ This question asks for the name of the property manager.
* **Property Manager Email** (`property_manager_email`, email, required)
	+ This question asks for the email of the property manager.
* **Property Manager Phone** (`property_manager_phone`, text, required)
	+ This question asks for the phone number of the property manager.
