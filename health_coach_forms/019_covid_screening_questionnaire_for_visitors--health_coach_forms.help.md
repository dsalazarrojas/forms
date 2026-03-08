<thinking>
This help guide is to ensure the end user understands the purpose and process of completing the Covid Screening Questionnaire For Visitors form, which aims to gather essential information about visitors to assess potential risks of Covid-19 transmission.
</thinking>

# Covid Screening Questionnaire For Visitors - Help Guide
## Purpose
The Covid Screening Questionnaire For Visitors is designed to gather essential information about visitors to assess their potential risks of Covid-19 transmission. This form will help identify any symptoms, recent travel history, and contact with potentially infected individuals.

## How To Complete This Form
1. Fill out the form with the required information for each field.
2. Make sure to answer all the required fields, marked as "required" in the form.
3. Select the correct options for each field based on your actual situation.
4. Review your answers before submitting the form to ensure accuracy.

## Field-by-Field Explanation
### Visitor Details
* **Visitor Details** (`visitor_details`, text, optional): Please provide your name and any other relevant visitor details.
### Contact Info
* **Contact Info** (`contact_info`, text, optional): If you have any contact information, such as a phone number or email, please provide it.
### Travel Details
* **Travel Details** (`travel_details`, text, optional): If you have traveled recently, please describe your travel history, including destinations and dates.
### Symptoms
* **Symptoms** (`symptoms`, select_one, required): Choose "True" if you are experiencing any of the following symptoms:
	+ Fever
	+ Cough
	+ Loss of Smell
	+ Loss of Taste
* **Has Symptoms** (`has_symptoms`, text, optional): Please describe any symptoms you are experiencing.
* **Has Fever** (`has_fever`, text, required): If you have a fever, specify the temperature.
* **Has Cough** (`has_cough`, text, required): If you have a cough, describe it.
* **Loss Of Smell** (`has_loss_of_smell`, text, required): If you have a loss of smell, describe it.
* **Loss Of Taste** (`has_loss_of_taste`, text, required): If you have a loss of taste, describe it.
### Has Symptoms
* **Has Symptoms** (`has_symptoms`, text, required): Please answer "True" if you are experiencing symptoms.
### Recent Travel
* **Recent Travel** (`recent_travel`, date, optional): If you have traveled recently, please enter the date of your return.
* **Return Date** (`return_date`, date, optional): If you are returning on a specific date, please enter it.
### Contact Information
* **Has Contact** (`has_contact`, select_multiple, required): Choose "Yes" if you have had contact with someone with Covid-19.
* **Contact Type** (`contact_type`, text, required): If you have had contact, describe the type (e.g. family member, colleague, etc.).
* **Contact Name** (`contact_name`, text, required): If you have had contact, specify the person's name.
### Additional Information
* **Contact Name** (`contact_name`, text, optional): Please provide any additional information about your contact.
