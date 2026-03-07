<thinking>
To create a user-facing help guide for the "CDC COVID 19 Vaccination Program Provider Agreement" form, I will follow the provided YAML structure and create a clear and concise guide that explains the form's purpose, how to complete it, and what each field means.

</thinking>

# CDC COVID 19 Vaccination Program Provider Agreement - Help Guide
## Purpose
The CDC COVID 19 Vaccination Program Provider Agreement is a form that healthcare providers must complete to participate in the CDC's COVID-19 vaccination program. This form ensures that providers comply with the CDC's requirements and regulations for vaccine storage, handling, and reporting.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your provider information:
	* Fill in your provider name as per your full legal name or organization name.
	* Select your provider type from the given options.
2. Enter your facility information:
	* Enter your facility name.
	* Enter your complete street address.
	* Enter your city location.
	* Select your state or territory from the given options.
	* Enter your five-digit ZIP code.
3. Enter your contact information:
	* Enter the name of your primary contact person.
	* Enter their email address for program communications.
	* Enter their direct phone number.
4. Confirm your vaccine storage and handling capabilities:
	* Select all storage options that apply to your facility.
5. Confirm your staff training and vaccination capacity:
	* Enter the number of staff members trained in vaccine handling.
	* Enter your estimated weekly vaccination capacity in doses.
6. Agree to terms and conditions:
	* Select "I Agree" to confirm your agreement to comply with the CDC's requirements.
7. Commit to data reporting:
	* Select "Yes, I Commit" to agree to report vaccination data to the CDC.
8. Date and sign your agreement:
	* Enter the date of your agreement.
	* Enter your full name as the authorized signature.

## Field-by-Field Explanation

- **Provider Name** (`provider_name`, text, required): Enter your full legal name or organization name.
- **Provider Type** (`provider_type`, select_one, required): Select your provider type from the given options.
- **NPI Number** (`npi_number`, text, required): Enter your National Provider Identifier number.
- **DEA Registration Number** (`dea_number`, text, required): Enter your Drug Enforcement Administration registration number.
- **Facility Name** (`facility_name`, text, required): Enter your facility name.
- **Facility Address** (`facility_address`, text, required): Enter your complete street address.
- **City** (`facility_city`, text, required): Enter your city location.
- **State** (`facility_state`, select_one, required): Select your state or territory from the given options.
- **ZIP Code** (`facility_zip`, text, required): Enter your five-digit ZIP code.
- **Primary Contact Person** (`contact_person`, text, required): Enter the name of your primary contact person.
- **Contact Email** (`contact_email`, email, required): Enter your contact email address for program communications.
- **Contact Phone** (`contact_phone`, text, required): Enter your direct phone number for program communications.
- **Vaccine Storage Capability** (`storage_capability`, select_multiple, required): Select all storage options that apply to your facility.
- **Staff Trained in Vaccine Handling** (`staff_trained`, number, required): Enter the number of staff members trained in vaccine handling.
- **Weekly Vaccination Capacity** (`vaccination_capacity`, number, required): Enter your estimated weekly vaccination capacity in doses.
- **Agreement to Terms** (`agreement_terms`, select_one, required): Select "I Agree" to confirm your agreement to comply with the CDC's requirements.
- **Commitment to Data Reporting** (`reporting_commitment`, select_one, required): Select "Yes, I Commit" to agree to report vaccination data to the CDC.
- **Signature Date** (`signature_date`, date, required): Enter the date of your agreement.
- **Authorized Signature** (`authorized_signature`, text, required): Enter your full name as the authorized signature.
