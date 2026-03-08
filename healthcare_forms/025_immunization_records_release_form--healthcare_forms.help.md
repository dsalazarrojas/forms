# immunization_records_release_form - Help Guide
## Purpose
The immunization records release form is used to share sensitive medical information about a patient's immunization records with schools, childcare facilities, or other entities that require it. This form ensures that the release of this information is done in a secure and controlled manner.

## How To Complete This Form
1. Please fill in the patient's information, including name, address, and other relevant details.
2. Provide the parent's or legal guardian's consent, indicating that they agree to share the patient's immunization records.
3. Select the healthcare provider(s) who administered the patient's immunization records.
4. Specify the school or facility where the records are to be released.
5. Choose whether to release the immunization records or not.
6. Add any additional notes if necessary.
7. Fill in the submitted by section with the name and title of the person submitting the form.
8. Enter the submitted date.

## Field-by-Field Explanation

- **Patient Information** (`patient_information`, text, required): Fill in the patient's name, address, and other relevant details.
- **Parent Consent** (`parent_consent`, note, required): Check the box to indicate that the parent or legal guardian agrees to share the patient's immunization records.
- **Healthcare Provider Consent** (`healthcare_provider_consent`, select_one, required): Select the healthcare provider who administered the patient's immunization records.
- **Healthcare Providers List** (`healthcare_providers_list`, text, required): List the healthcare provider(s) who administered the patient's immunization records.
- **Immunization Records** (`immunization_records`, number, required): This field is for entering the number of immunization records to be released.
- **Consent Date** (`consent_date`, date, required): Enter the date the parent or legal guardian gave consent.
- **School Enrollment Information** (`school_enrollment_information`, text, required): Enter the school or facility where the immunization records are to be released.
- **School Enrollment** (`school_enrollment`, select_multiple, required): Select which school or facility the records are to be released to.
- **Childcare Facility Enrollment** (`childcare_facility_enrollment`, select_one, required): Select the childcare facility where the records are to be released.
- **Immunization Records Release** (`immunization_records_release`, select_one, required): Choose to release or not release the immunization records.
- **Notes** (`notes`, text, required): Add any additional comments or notes about the form.
- **Submitted By** (`submitted_by`, text, required): Fill in the name and title of the person submitting the form.
- **Submitted Date** (`submitted_date`, date, required): Enter the date the form was submitted.
- **Healthcare Provider** (`healthcare_provider`, text, required): Enter the healthcare provider who administered the patient's immunization records.
- **Facility** (`facility`, text, required): Enter the school or facility where the records are to be released.
- **Address** (`address`, text, required): Enter the address of the school or facility.
- **City** (`city`, text, required): Enter the city of the school or facility.
- **State** (`state`, text, required): Enter the state of the school or facility.
- **Zip** (`zip`, text, required): Enter the zip code of the school or facility.
- **Phone** (`phone`, text, required): Enter the phone number of the school or facility.
- **Email** (`email`, email, required): Enter the email of the school or facility.
- **Patient Relationship** (`patient_relationship`, select_one, required): Select the relationship between the patient and the school or facility.
