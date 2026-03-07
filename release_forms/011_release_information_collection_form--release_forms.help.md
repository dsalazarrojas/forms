<thinking>...</thinking>

The "Release Information Collection Form" is designed to collect information about individuals who have passed away. This form is intended to be used for the sole purpose of gathering data for the release process. Please do not use this form for any other purpose. If you're not sure if you should use this form, please check with the internal team before proceeding.

# Release Information Collection Form - Help Guide

## Purpose
The "Release Information Collection Form" is used to gather data about individuals who have passed away. This form is necessary for the release process.

## How To Complete This Form
To complete this form, follow these steps:
1.  Fill out the form with the necessary information about the individual who has passed away. 
2.  Make sure to include the correct date of birth and date of death. 
3.  Indicate whether the individual gave their consent to be released by selecting "Yes" or "No" in the "Consent Given" field. 
4.  Select all applicable consent types in the "Consent Type" field. 
5.  Submit the form once you have completed all the required fields.

## Field-by-Field Explanation
* **User Information** (`user`, `text`, required: false): Enter the individual's name.
* **Organization** (`organization`, `text`, required: false): Enter the name of the organization they were affiliated with.
* **Contact Person** (`contact_person`, `text`, required: false): Enter the contact person's name.
* **Email** (`email`, `email`, required: false): Enter the individual's email address.
* **Address** (`address`, `note`, required: false): Enter the individual's address (for reference purposes).
* **Phone** (`phone`, `text`, required: false): Enter the individual's phone number.
* **Date of Birth** (`date_of_birth`, `date`, required: true): Enter the individual's date of birth. 
* **Date of Death** (`date_of_death`, `date`, required: false): Enter the individual's date of death.
* **Consent Given** (`consent_given`, `select_one`, required: true): Indicate whether the individual gave their consent to be released by selecting "Yes" or "No".
* **Consent Type** (`consent_type`, `select_multiple`, required: true): Select all the consent types that apply to the individual.
