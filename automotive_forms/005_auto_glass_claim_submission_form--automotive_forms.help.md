# Auto Glass Claim Submission Form - Help Guide
## Purpose
The Auto Glass Claim Submission Form is used to report an incident involving damage to a vehicle's glass component. This form gathers essential information from the claimant to facilitate the submission of a claim to the insurance company.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the Claimant Information section with your personal details.
2. Provide your vehicle information, including year, make, model, and license plate number.
3. Describe the damage, including the location, type, and size of the damage.
4. Choose your preferred repair option and indicate whether you have attached photos of the damage.
5. Confirm your authorization for the submission of this claim.

## Field-by-Field Explanation
* **Claimant Information** (`claimant_info`, `object`, `true`): Please provide your personal details.
* **First Name** (`first_name`, `text`, `true`): Your legal first name.
* **Last Name** (`last_name`, `text`, `true`): Your legal last name.
* **Date of Birth** (`date_of_birth`, `date`, `true`): MM-DD-YYYY.
* **Email Address** (`email`, `email`, `true`): Primary email for claim updates.
* **Phone Number** (`phone`, `text`, `true`): Best contact number.
* **Street Address** (`address`, `text`, `true`): Your mailing address.
* **City** (`city`, `text`, `true`): City of residence.
* **State** (`state`, `select_one`, `true`): Select your state of residence.
* **ZIP Code** (`zip_code`, `text`, `true`): 5-digit ZIP code.
* **Insurance Policy Information** (`policy_info`, `object`, `false`): Provide your insurance details (optional).
* **Insurance Company Name** (`insurance_company`, `text`, `true`): Name of your insurance provider.
* **Policy Number** (`policy_number`, `text`, `true`): Your policy number.
* **Claim Number** (`claim_number`, `text`, `true`): If already assigned (optional).
* **Vehicle Information** (`vehicle_info`, `object`, `false`): Details about the damaged vehicle (optional).
* **Vehicle Year** (`vehicle_year`, `number`, `true`): Year of manufacture.
* **Vehicle Make** (`vehicle_make`, `text`, `true`): Manufacturer.
* **Vehicle Model** (`vehicle_model`, `text`, `true`): Model name.
* **VIN** (`vin`, `text`, `true`): Vehicle Identification Number.
* **License Plate Number** (`license_plate`, `text`, `true`): Current plate number (optional).
* **Damage Information** (`damage_info`, `object`, `false`): Describe the glass damage (optional).
* **Date of Damage** (`damage_date`, `date`, `true`): When did the damage occur.
* **Location of Damage** (`damage_location`, `select_one`, `true`): Where on the vehicle is the damage.
* **Type of Damage** (`damage_type`, `select_one`, `true`): Select the type of damage.
* **Damage Description** (`damage_description`, `text`, `true`): Describe how the damage occurred.
* **Approximate Size of Damage** (`damage_size`, `text`, `true`): In inches (optional).
* **Location of Incident** (`incident_location`, `text`, `false`): Where did the damage happen (optional).
* **Photos of Damage** (`photos_attached`, `select_one`, `true`): Will you be submitting photos.
* **Repair or Replacement Preference** (`repair_preference`, `select_one`, `true`): Do you prefer repair or full replacement.
* **Preferred Repair Shop** (`preferred_shop`, `text`, `false`): Do you have a preferred shop (optional).
* **Authorization and Consent** (`authorization`, `select_one`, `true`): Confirm your authorization for the submission of this claim.
* **Date of Authorization** (`signature_date`, `date`, `true`): Today's date.
