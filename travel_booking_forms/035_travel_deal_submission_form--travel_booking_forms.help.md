<thinking>
To avoid duplication and ensure the form's purpose is understood, let's break down the form's goal: This form is designed for users to submit travel-related deals, likely for business or personal use. Submitters will provide essential details about the deal, such as travel agency, destinations, dates, and contact information. The form requires select fields like travel destinations and submitter's contact information, indicating these are critical aspects of the submission. Other fields are optional but can provide additional context. The internal logic of how these submissions will be handled is left to the developer's discretion.
</thinking>

# Travel Deal Submission Form - Help Guide
## Purpose
The travel deal submission form is designed to collect essential information from submitters for travel-related deals, ensuring that all necessary details are captured for further processing.

## How To Complete This Form
To successfully submit a travel deal, follow these steps:

1. Fill in the general information section with a brief description of the deal.
2. Provide travel details, including destinations and dates.
3. Choose a travel agency from the list of options.
4. Enter your contact information, including email and phone number.
5. Optionally, add any additional travel agency notes.
6. Confirm that you have read and agree to the terms and conditions.
7. Confirm that you are willing to review the submitted travel deal.

## Field-by-Field Explanation

* **General Information** (`general_information`, text, optional): Briefly describe the travel deal in this field.
* **Travel Details** (`travel_details`, text, optional): Provide more details about the travel deal, if necessary.
* **Submitter Details** (`submitter_details`, text, optional): Enter any additional information about yourself as the submitter.
* **Travel Agency** (`travel_agency`, select_one, optional): Select the travel agency handling the deal from the provided options.
* **Travel Destination(s)** (`travel_destination`, select_multiple, required): Choose one or multiple destinations for the travel deal.
* **Travel Dates** (`travel_dates`, date, optional): Enter the travel dates for the deal, if known.
* **Travel Price** (`travel_price`, number, optional): Enter the price of the travel deal, if applicable.
* **Notes** (`notes`, note, optional): Add any additional notes about the travel deal.
* **Submitter Email** (`submitter_email`, email, required): Enter your email address for contact purposes.
* **Submitter Phone** (`submitter_phone`, text, required): Enter your phone number for contact purposes.
* **Travel Agency Notes** (`travel_agency_notes`, note, optional): Add any additional notes about the travel agency.
* **Travel Agency Email** (`travel_agency_email`, email, required): Enter the travel agency's email address.
* **Travel Agency Phone** (`travel_agency_phone`, text, required): Enter the travel agency's phone number.
* **Terms Agreed** (`terms_agreed`, select_one, optional): Confirm that you have read and agree to the terms and conditions.
* **Review Agreed** (`review_agreed`, select_one, optional): Confirm that you are willing to review the submitted travel deal.
