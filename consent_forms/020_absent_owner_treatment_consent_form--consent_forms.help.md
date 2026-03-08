# Absent Owner Treatment Consent Form - Help Guide

## Purpose
The Absent Owner Treatment Consent Form is a document that allows pet owners to provide consent for their pet's treatment and care in the absence of the owner. This form helps ensure that the veterinary team has the necessary information to provide proper care and treatment for the pet.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the pet owner information section, including the owner's full name, phone number, and email address.
2. Provide the pet's information, including its name, species, breed, approximate age, and approximate weight.
3. List any known allergies or medical conditions the pet has.
4. Explain the reason for the visit or treatment needed.
5. Consent to a physical examination, diagnostic tests, treatment and medication, sedation or anesthesia if required, and emergency care.
6. Set a maximum spending limit for treatment without additional authorization.
7. Sign and date the form.

## Field-by-Field Explanation

* **Pet owner full name** (`owner_full_name`, `text`, **required**): This is the pet owner's full name as it should be spelled correctly and accurately.
* **Phone number where you can be reached** (`owner_phone`, `text`, **required**): This is the phone number where the veterinary team can contact you in case of emergencies or need for additional information.
* **Email address** (`owner_email`, `email`, **required**): This is the email address where the veterinary team can contact you in case of emergencies or need for additional information.
* **Emergency contact name** (`emergency_contact_name`, `text`, **required**): This is the name of the person who can make decisions if you cannot be reached.
* **Emergency contact phone number** (`emergency_contact_phone`, `text`, **required**): This is the phone number of the person who can make decisions if you cannot be reached.
* **Pet name** (`pet_name`, `text`, **required**): This is the name of the pet as it should be spelled correctly and accurately.
* **Species** (`species`, `select_one`, **required**): This is the species of the pet (e.g., dog, cat, bird, etc.).
* **Breed** (`breed`, `text`, **required**): This is the breed of the pet.
* **Approximate age of pet** (`pet_age`, `text`, **required**): This is an approximate age of the pet.
* **Approximate weight of pet** (`pet_weight`, `number`, **optional**): This is an approximate weight of the pet in pounds or kilograms.
* **Known allergies or medical conditions** (`known_allergies`, `text`, **optional**): This is a list of any known allergies or medical conditions the pet has.
* **Reason for visit or treatment needed** (`reason_for_visit`, `text`, **required**): This is the reason for the visit or treatment needed.
* **I consent to a physical examination of my pet** (`consent_to_exam`, `select_one`, **required**): This is a yes/no choice for the physical examination of the pet.
* **I consent to diagnostic tests (bloodwork, X-rays, ultrasound) if deemed necessary by the veterinarian** (`consent_to_diagnostics`, `select_one`, **required**): This is a yes/no choice for diagnostic tests if deemed necessary by the veterinarian.
* **I consent to treatment and medication as recommended by the veterinarian** (`consent_to_treatment`, `select_one`, **required**): This is a yes/no choice for treatment and medication as recommended by the veterinarian.
* **I consent to sedation or anesthesia if required** (`consent_to_anesthesia`, `select_one`, **required**): This is a yes/no choice for sedation or anesthesia if required.
* **Maximum spending limit for treatment without additional authorization** (`spending_limit`, `number`, **required**): This is the maximum amount you are willing to spend on treatment without additional authorization.
* **In the event of a life-threatening emergency, I authorize the veterinarian to perform necessary life-saving treatment** (`consent_to_emergency_care`, `select_one`, **required**): This is a yes/no choice for emergency care.
* **Date of consent** (`consent_date`, `date`, **required**): This is the date of consent for the treatment.
* **Additional instructions or notes for the veterinary team** (`additional_instructions`, `text`, **optional**): This is any additional information or notes for the veterinary team.
