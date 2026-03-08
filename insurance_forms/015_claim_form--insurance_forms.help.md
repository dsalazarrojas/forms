# Claim Form - Help Guide

## Purpose
This form is a comprehensive claim form for policyholders to report incidents or losses that they wish to claim. It is designed to collect detailed information about the incident, including the claimant's identity, the type of claim, and various aspects of the incident.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your claimant's details, including name, date of birth, policy number, email address, phone number, and mailing address.
2. Select the type of claim you are filing.
3. Provide the details of the incident, including date and time, location, description, and estimated damage or medical expenses.
4. Answer questions about injuries, police reports, and witness involvement.
5. Indicate whether you have photos or documentation of the damage.
6. Confirm whether you have filed previous claims with this insurance company.
7. Select your preferred contact method.

## Field-by-Field Explanation

* **Claimant Full Name** (`claimant_name`, text, required): Enter your full name as it appears on your identification.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in MM/DD/YYYY format.
* **Policy Number** (`policy_number`, text, required): Enter your insurance policy number.
* **Type of Claim** (`claim_type`, select_one, required): Select the type of claim you are filing, such as auto insurance, homeowners, renters, health, life, disability, travel, or other.
* **Email Address** (`email_address`, email, required): Enter your email address for claim updates and correspondence.
* **Phone Number** (`phone_number`, text, required): Enter your contact phone number.
* **Mailing Address** (`mailing_address`, text, required): Enter your street address, city, state, and ZIP.
* **Date of Incident or Loss** (`incident_date`, date, required): Enter the date when the incident occurred.
* **Time of Incident** (`incident_time`, time, optional): Enter the approximate time of the incident.
* **Location of Incident** (`incident_location`, text, required): Enter where the incident occurred.
* **Description of Incident** (`incident_description`, text, required): Describe the incident in detail.
* **Cause of Loss or Damage** (`cause_of_loss`, select_one, required): Select the cause of the loss or damage, such as accident, fire, theft, weather, or medical emergency.
* **Were There Any Injuries** (`injuries_occurred`, select_one, required): Indicate whether there were any injuries.
* **Describe Injuries** (`injury_details`, text, optional): If yes, provide details about the injuries.
* **Estimated Property Damage Amount** (`property_damage`, number, optional): Enter the estimated property damage amount in dollars.
* **Estimated Medical Expenses** (`medical_expenses`, number, optional): Enter the estimated medical expenses in dollars.
* **Was a Police Report Filed** (`police_report`, select_one, required): Indicate whether a police report was filed.
* **Police Report Number** (`police_report_number`, text, optional): If filed, enter the police report number.
* **Were There Any Witnesses** (`witnesses_present`, select_one, required): Indicate whether there were any witnesses.
* **Witness Contact Information** (`witness_information`, text, optional): If yes, provide names and contact details of the witnesses.
* **Do You Have Photos of the Damage** (`photos_available`, select_one, required): Indicate whether you have photos or documentation of the damage.
* **Have You Filed Previous Claims** (`previous_claims`, select_one, required): Indicate whether you have filed previous claims with this insurance company.
* **Do You Need Additional Coverage Information** (`additional_coverage`, select_one, optional): If yes, select that you need additional coverage information about your policy.
* **Preferred Contact Method** (`preferred_contact_method`, select_one, required): Select your preferred contact method, such as phone call, text message, email, or mail.
* **Additional Comments** (`additional_comments`, text, optional): Enter any additional comments or information about the claim.
