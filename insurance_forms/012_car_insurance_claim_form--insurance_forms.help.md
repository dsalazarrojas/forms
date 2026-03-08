# Car Insurance Claim Form - Help Guide
## Purpose
The purpose of this form is to collect information from claimants to file a car insurance claim. This form is used to gather details about the incident, vehicle, and claimant's personal information. It is essential to complete the form accurately and thoroughly to ensure a smooth claims process.

## How To Complete This Form
To complete this form, follow these steps:

1.  Review this guide to understand the purpose and requirements of the form.
2.  Gather all necessary information before starting the form.
3.  Fill out the form accurately and thoroughly, paying attention to required fields.
4.  Ensure that you have all the necessary documents and photos before submitting the form.

## Field-by-Field Explanation

* **Claimant Information** (`claimant_information`, `note`, required: false): This section is for your personal and policy details. Please enter your name, address, and policy number.
* **First Name** (`first_name`, text, required: true): Enter your first name.
* **Last Name** (`last_name`, text, required: true): Enter your last name.
* **Date of Birth** (`date_of_birth`, date, required: true): Enter your date of birth.
* **Policy Number** (`policy_number`, text, required: true): Enter your insurance policy number.
* **Claim Number (if known)** (`claim_number`, text, required: false): Enter any existing claim number (if known).
* **Email Address** (`email`, email, required: true): Enter your email address for claim updates.
* **Phone Number** (`phone`, text, required: true): Enter your best contact number.
* **Street Address** (`address`, text, required: true): Enter your mailing address.
* **City** (`city`, text, required: true): Enter your city.
* **State** (`state`, text, required: true): Enter your state.
* **ZIP Code** (`zip_code`, text, required: true): Enter your ZIP code.
* **Incident Information** (`incident_information`, note, required: false): This section is for details about the incident. Please enter any relevant information.
* **Date of Incident** (`incident_date`, date, required: true): Enter the date when the incident occurred.
* **Time of Incident** (`incident_time`, time, required: true): Enter the time when the incident occurred.
* **Location of Incident** (`incident_location`, text, required: true): Enter the full address or description of where the incident occurred.
* **Type of Incident** (`incident_type`, select_one, required: true): Select the type of incident that occurred (Collision with vehicle, Collision with object, Single vehicle accident, Hit and run, Vandalism, Theft, Weather damage, Fire, Glass damage, Other).
* **Incident Description** (`incident_description`, text, required: true): Enter a detailed description of what happened.
* **Vehicle Information** (`vehicle_information`, note, required: false): This section is for details about the insured vehicle.
* **Year** (`vehicle_year`, text, required: true): Enter the year of the vehicle.
* **Vehicle Make** (`vehicle_make`, text, required: true): Enter the manufacturer of the vehicle.
* **Vehicle Model** (`vehicle_model`, text, required: true): Enter the model of the vehicle.
* **Vehicle VIN** (`vehicle_vin`, text, required: true): Enter the Vehicle Identification Number.
* **License Plate** (`license_plate`, text, required: true): Enter the plate number.
* **Current Mileage** (`vehicle_mileage`, number, required: true): Enter the odometer reading.
* **Damage Description** (`damage_description`, text, required: true): Enter a detailed description of the damage to the vehicle.
* **Location of Damage** (`damage_location`, select_multiple, required: true): Select where the damage is located (Front, Rear, Left Side, Right Side, Roof, Hood, Trunk, Windows/Glass, Interior, Undercarriage).
* **Is Vehicle Drivable?** (`vehicle_drivable`, select_one, required: true): Select whether the vehicle can be driven safely (True, No - needs towing, Unsure).
* **Was Another Party Involved?** (`other_party_involved`, select_one, required: true): Select whether another party was involved (True, False).
* **Other Party Name** (`other_party_name`, text, required: false): Enter the full name of the other party.
* **Other Party Contact** (`other_party_contact`, text, required: false): Enter the contact number of the other party.
* **Other Party Insurance** (`other_party_insurance`, text, required: false): Enter the insurance company of the other party.
* **Other Party Policy Number** (`other_party_policy`, text, required: false): Enter the policy number of the other party.
* **Were There Witnesses?** (`witnesses_present`, select_one, required: true): Select whether there were witnesses (True, False).
* **Witness Information** (`witness_information`, text, required: false): Enter the names and contact details of the witnesses.
* **Was Police Involved?** (`police_involvement`, select_one, required: true): Select whether police were involved (Yes - report filed, Yes - no report, False).
* **Police Report Number** (`police_report_number`, text, required: false): Enter the police report number.
* **Were There Injuries?** (`injuries_claimed`, select_one, required: true): Select whether there were injuries (No injuries, Yes - minor, Yes - requiring medical attention, Yes - serious).
* **Medical Treatment Received** (`medical_treatment`, text, required: false): Enter a description of any medical treatment received.
* **Estimated Claim Amount** (`claim_amount`, number, required: false): Enter the estimated damage cost.
* **Have You Submitted Photos?** (`photos_submitted`, select_one, required: true): Select whether you have submitted photos (Yes - with this form, Yes - separately, Will submit later, No photos available).
* **Preferred Repair Shop** (`preferred_repair_shop`, text, required: false): Enter the preferred repair shop.
* **Additional Comments** (`additional_comments`, text, required: false): Enter any other relevant information.
* **Signature Confirmation** (`signature_confirmation`, select_one, required: true): Select whether you certify that the information is true and accurate (I certify this information is true and accurate, I cannot certify).

## Tips
* Ensure that you have all the necessary information before starting the form.
* Double-check the form for accuracy before submitting.
* If you are unsure about any of the questions, refer to this guide for clarification.
* Please complete the form in a well-structured and organized manner. 
* If you have any issues with the form, contact us. 
* Please note that the form is only for car insurance claims. 
* Ensure that the information is accurate and complete. 

Note: This guide is a comprehensive help guide that covers every field in the form. Please ensure that you follow the instructions carefully to ensure a smooth claims process.
