# Hair Salon Client Liability Release Form - Help Guide
## Purpose
This form is designed to be completed by clients before they receive any services from the salon. It outlines the client's understanding and acceptance of the risks involved in visiting a salon during the COVID-19 pandemic.

## How To Complete This Form
To complete this form, please follow these steps:
1. Read the form carefully and acknowledge your understanding of the risks involved.
2. Select all the options that apply under the "Waiver" section.
3. Select the option for "Signature" that matches your identification.
4. Sign your name in the "Client Signature" field.
5. Date and time stamp the "Date Signed" field.

## Field-by-Field Explanation
* **Client Agrees** (`client_agreement`, number, required: false):
  This field is not applicable as it is not required.
* **Risk Acceptance** (`risk_acceptance`, number, required: false):
  This field allows you to acknowledge your understanding of the risks involved in visiting a salon during the COVID-19 pandemic.
* **Waiver** (`waiver`, select_multiple, required: true):
  Select all the options that apply:
  + Client agrees to accept all responsibility for the risk that they may contract COVID-19.
  + Client acknowledges that their risk of contracting COVID-19 is not limited to this salon.
  + Client agrees that this salon is not responsible for any damage or harm to the client.
* **Signature** (`signature`, select_one, required: true):
  Select the option that matches your identification:
  + Client Name
  + Client Date of Birth
  + Client Contact Number
  + Client Email Address
* **Client Signature** (`client_signature`, text, required: false):
  This field is intended for the client to sign their name, however, it is not required.
* **Date Signed** (`date_signed`, date, required: false):
  This field is intended for the date the form was signed, however, it is not required.
* **Date** (`date`, date, required: false):
  This field is likely a duplicate of the "Date Signed" field.
* **Time** (`time`, time, required: false):
  This field is not applicable.
* **Salon Name** (`salon_name`, text, required: false):
  This field is not applicable.

## Tips
* Please complete this form carefully and honestly.
* If you are unsure about any of the fields, please ask your salon representative for clarification.
* This form is a requirement for all clients before receiving services from the salon.
