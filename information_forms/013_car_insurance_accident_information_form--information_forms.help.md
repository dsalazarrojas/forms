# Car Insurance Accident Information Form - Help Guide
## Purpose
This form is designed to collect essential information from policyholders after a vehicle accident. It's a straightforward and structured process to gather the necessary details required for claim processing and assessment.

## How To Complete This Form
- Fill out the form with accurate and truthful information.
- Ensure all required fields are completed before submitting the form.
- Review each section carefully and provide as much detail as possible for each field.

## Field-by-Field Explanation
- **Policyholder Full Name** (`policyholder_full_name`, text, required): Enter your first and last name as they appear on your policy.
- **Insurance Policy Number** (`insurance_policy_number`, text, required): Enter your policy ID number as issued by your insurance provider.
- **Phone Number** (`phone_number`, text, required): Provide your primary contact number for claim status updates.
- **Email Address** (`email_address`, email, required): Enter your email address for claim status updates and any other relevant communications.
- **Date of Accident** (`accident_date`, date, required): Select the date the accident occurred.
- **Time of Accident** (`accident_time`, time, required): Select the time the accident occurred.
- **Accident Location** (`accident_location`, text, required): Enter the street, city, state, and zip code where the accident happened.
- **Description of the Accident** (`accident_description`, text, required): Briefly describe how the accident occurred.
- **Weather Conditions** (`weather_conditions`, select_one, required): Select the weather conditions during the accident.
- **Road Conditions** (`road_conditions`, select_one, required): Describe the road surface at the time of the accident.
- **Was a police report filed?** (`police_report_filed`, select_one, required): Indicate if a police report was filed.
- **Other Party's Full Name** (`other_party_full_name`, text, optional): If applicable, enter the other party's name involved in the accident.
- **Other Party's Phone Number** (`other_party_phone_number`, text, optional): If applicable, enter the other party's phone number.
- **Other Party's Insurance Provider** (`other_party_insurance_provider`, text, optional): If applicable, enter the other party's insurance provider.
- **Other Party's Policy Number** (`other_party_insurance_policy_number`, text, optional): If applicable, enter the other party's policy number.
- **Witness Full Name** (`witness_full_name`, text, optional): If any, enter the witness's full name.
- **Witness Phone Number** (`witness_phone_number`, text, optional): If any, enter the witness's phone number.
- **Was a police report filed?** (`police_report_number`, text, optional): If a police report was filed, enter the number.
- **Any additional comments or requests?** (`additional_accident_comments`, text, optional): Provide any additional comments or requests for the claim.
- **Type your name for accident information confirmation** (`claim_signature_confirmation`, text, required): Type your name as confirmation of the information provided.
