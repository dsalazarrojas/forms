# Building Occupant Feedback Consent Form - Help Guide

## Purpose
This form is designed to collect feedback from building occupants, allowing for their participation in surveys and feedback mechanisms. The form gathers information about their contact preferences, occupancy details, and consent for data use and sharing. It's essential to understand the form's purpose and the importance of accurately completing it.

## How To Complete This Form

To fill out the form correctly, please follow these steps:

1.  Provide your full name in the "Your Full Name" field.
2.  Enter your primary contact email address in the "Primary Contact Email" field.
3.  Fill in your contact phone number in the "Contact Number" field.
4.  Identify the building or property you occupy in the "Building or Property Name" field.
5.  If applicable, specify your unit or apartment number.
6.  Select your occupancy type from the available options.
7.  Indicate the duration of your occupancy.
8.  Choose whether you consent to participate in surveys.
9.  Select your preferred survey frequency.
10. Choose which types of feedback you are willing to provide.
11. Decide whether you allow follow-up contact for clarification.
12. Specify how often you are willing to be contacted.
13. Acknowledge your understanding of data use.
14. Select your preference for data anonymity.
15. Choose whether feedback can be shared with stakeholders.
16. Recognize the option to withdraw consent at any time.
17. Provide any additional preferences or restrictions.
18. Confirm the date of your consent.

## Field-by-Field Explanation

* **Your Full Name** (`occupant_name`, `text`, `required`): Enter your full name as it appears on your identification documents.
* **Primary Contact Email** (`occupant_email`, `email`, `required`): Enter your primary contact email address for follow-up correspondence.
* **Contact Number** (`occupant_phone`, `text`, `required`): Fill in your contact phone number for easy communication.
* **Building or Property Name** (`building_name`, `text`, `required`): Identify the building or property you are occupying.
* **Unit or Apartment Number** (`unit_apartment`, `text`, `optional`): Provide your unit or apartment number if applicable.
* **Occupancy Type** (`occupancy_type`, `select_one`, `required`): Choose from the available occupancy types:
	+ Tenant
	+ Owner
	+ Employee
	+ Contractor
	+ Visitor
* **Duration of Occupancy** (`occupancy_duration`, `select_one`, `optional`): Select from the available duration options:
	+ Less than 6 months
	+ 6 months - 1 year
	+ 1-2 years
	+ 2-5 years
	+ Over 5 years
* **I Consent to Participate in Surveys** (`survey_participation`, `select_one`, `required`): Choose whether you consent to participate in surveys:
	+ Yes, I Consent
	+ No, I Do Not Consent
* **Preferred Survey Frequency** (`survey_frequency`, `select_one`, `optional`): Select your preferred survey frequency:
	+ Monthly
	+ Quarterly
	+ Semi-annually
	+ Annually
	+ As Needed Only
	+ No Surveys
* **Types of Feedback You Are Willing to Provide** (`feedback_types`, `select_multiple`, `optional`): Select the types of feedback you are willing to provide:
	+ Maintenance Issues
	+ Safety Concerns
	+ Amenities
	+ Management Services
	+ Neighbor Relations
	+ Building Conditions
	+ All Topics
* **Allow Follow-Up Contact About Your Feedback** (`follow_up_contact`, `select_one`, `required`): Decide whether you allow follow-up contact:
	+ 'True'
	+ 'False'
	+ Only Email
	+ Only Phone
* **How Often Can We Contact You** (`contact_frequency`, `select_one`, `optional`): Specify your preferred contact frequency:
	+ Daily
	+ Weekly
	+ Monthly
	+ As Needed Only
* **I Understand My Data Will Be Used for Improvement** (`data_privacy`, `select_one`, `required`): Acknowledge your understanding of data use:
	+ Yes, I Understand
	+ No, I Have Questions
* **Data Should Be Kept Confidential** (`anonymity_preference`, `select_one`, `optional`): Choose your preference for data anonymity:
	+ Completely Anonymous
	+ Identified But Confidential
	+ May Be Attributed to Me
	+ No Preference
* **Feedback Can Be Shared With Stakeholders** (`third_party_sharing`, `select_one`, `required`): Choose whether feedback can be shared:
	+ Yes, May Share
	+ No, Keep Private
	+ Only Anonymized Data
* **I Understand I Can Withdraw Consent Anytime** (`withdraw_consent`, `select_one`, `required`): Recognize the option to withdraw consent:
	+ Yes, I Understand
	+ No, Need Clarification
* **Additional Preferences or Restrictions** (`additional_preferences`, `text`, `optional`): Enter any additional preferences or restrictions you have.
* **Date of Consent** (`consent_date`, `date`, `required`): Confirm the date of your consent.
* **Questions Before Consenting** (`questions`, `text`, `optional`): Write down any questions or concerns you have before consenting to the terms.
