# Stevedore Service Referral Form - Help Guide
## Purpose
This form is used for submitting new service referrals that match Stevedore's service offering criteria.

## How To Complete This Form
- Fill in all required fields with accurate information.
- Ensure that the stevedore_service_name field is unique and does not already exist in our database.
- Check the stevedore_agreed_terms checkbox to confirm that you have read and agree to our terms of service.

## Field-by-Field Explanation
- **stevedore_service_referral_form** (`stevedore_service_referral_form`, text, optional): A brief description of the service you are referring.
- **stevedore_service_name** (`stevedore_service_name`, text, optional): A unique name for the new service.
- **stevedore_service_type** (`stevedore_service_type`, select, optional):
	+ Select 'Yes' if the service is a new type not listed on our platform.
	+ Select 'No' if the service is an existing type already listed on our platform.
- **stevedore_service_description** (`stevedore_service_description`, text, optional): A detailed description of the service.
- **stevedore_service_location** (`stevedore_service_location`, text, optional): The location where the service can be found or accessed.
- **stevedore_contact_person** (`stevedore_contact_person`, text, optional): The person to contact for more information about the service.
- **stevedore_contact_info** (`stevedore_contact_info`, text, optional): Additional contact information for the service.
- **stevedore_agreed_terms** (`stevedore_agreed_terms`, select, optional):
	+ Select 'Yes' to confirm that you have read and agree to our terms of service.
	+ Select 'No' to indicate that you have not read or agree to our terms of service.
