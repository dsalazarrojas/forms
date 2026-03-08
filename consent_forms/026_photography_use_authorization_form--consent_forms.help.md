> # photography_use_authorization_form - Help Guide
## Purpose
This form is used to obtain authorization for the use of photographs taken by a photographer. It ensures that both the photographer and the client understand the usage rights and terms of the images taken.

## How To Complete This Form
To complete this form, please follow these steps:

* Enter your name and contact information in the "Client name", "Client contact info", and "Client agreement" fields.
* Specify the date and time of the photo shoot in the "Image date" and "Image time" fields.
* Select "Yes" or "No" for the "Usage rights", "Client acknowledgement", "Usage agreement", "Client agreement", "Photographer agreement", and "Client use terms" fields.
* Enter any additional usage restrictions or conditions in the "Usage restrictions" field.
* Review and sign the form to confirm that you have read and understood the terms of use.

## Field-by-Field Explanation
* **Photographer name** (`photographer_name`, text, required): Enter the name of the photographer taking the photographs.
* **Client name** (`client_name`, text, required): Enter the name of the client or the person being photographed.
* **Image date** (`image_date`, date, required): Enter the date on which the photograph was taken.
* **Image time** (`image_time`, time, optional): Enter the time on which the photograph was taken (if applicable).
* **Usage rights** (`usage_rights`, select_one, optional): Check "Yes" if you grant the client usage rights for the photograph.
* **Photographer contact info** (`photographer_contact_info`, text, optional): Enter the contact information of the photographer, including phone number and email.
* **Client contact info** (`client_contact_info`, text, optional): Enter the contact information of the client, including phone number and email.
* **Photographer signature** (`photographer_signature`, note, required): Sign here to confirm that you have read and understood the usage terms.
* **Client signature** (`client_signature`, note, required): Sign here to confirm that you have read and understood the usage terms.
* **Photographer acknowledgement** (`photographer_acknowledgement`, select_one, optional): Check "Yes" if you acknowledge the terms of use.
* **Client acknowledgement** (`client_acknowledgement`, select_one, optional): Check "Yes" if you acknowledge the terms of use.
* **Usage agreement** (`usage_agreement`, select_one, optional): Check "Yes" if you agree to the usage terms.
* **Photographer agreement date** (`photographer_agreement_date`, date, optional): Enter the date on which you agree to the usage terms.
* **Client agreement date** (`client_agreement_date`, date, optional): Enter the date on which you agree to the usage terms.
* **Usage restrictions** (`usage_restrictions`, select_multiple, optional): Check "Yes" for any restrictions or conditions on the usage of the photograph.
* **Usage conditions** (`usage_conditions`, text, optional): Enter any additional usage conditions or restrictions.
* **Client agreement** (`client_agreement`, select_one, optional): Check "Yes" if you agree to the usage terms.
* **Photographer agreement** (`photographer_agreement`, select_one, optional): Check "Yes" if you agree to the usage terms.
* **Photographer agreement date** (`photographer_agreement_date`, date, optional): Enter the date on which you agree to the usage terms.
* **Client agreement date** (`client_agreement_date`, date, optional): Enter the date on which you agree to the usage terms.
* **Usage terms** (`usage_terms`, text, optional): Enter any additional usage terms or conditions.
* **Client use terms** (`client_use_terms`, text, optional): Enter any additional usage terms or conditions of the client.
* **Photographer use terms** (`photographer_use_terms`, text, optional): Enter any additional usage terms or conditions of the photographer.
* **Other use terms** (`other_use_terms`, text, optional): Enter any additional usage terms or conditions for other parties.
