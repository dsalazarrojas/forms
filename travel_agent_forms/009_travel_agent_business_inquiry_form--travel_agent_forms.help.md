# travel_agent_business_inquiry_form - Help Guide
## Purpose
This form is designed to collect business inquiries from travel agents, providing a structured way to gather essential information and improve communication between agents and the travel company.

## How To Complete This Form
To complete this form, please follow these steps:

1. Review the form's pages and fields carefully.
2. Ensure you have all the necessary information before proceeding.
3. Fill out the form accurately and thoroughly.
4. Review your answers before submitting the form.

## Field-by-Field Explanation

* **Client Information (Page 1)** (`title: "Client Information"`, `type: text`, **required: true**): This page collects basic client details such as name, email, and contact information. Please enter the client's name, email, and any other relevant contact information.
* **Travel Information (Page 2)** (`title: "Travel Information"`, `type: text`, **optional: false**): This page gathers travel-related information such as travel dates and destinations. If applicable, please provide this information for efficient processing.
* **Date of Travel** (`type: date`, **required: true**): Enter the date of the travel using the date picker. Please ensure the date is accurate.
* **Travel Agency** (`type: select_multiple`, **required: true**): Select the travel agency from the provided options or specify "Other" if not listed. If you select "Other", please provide additional details in the next field.
* **Inquiry Details** (`type: note`, **required: true**): Please provide more details about your inquiry in this field. Be as specific as possible to ensure efficient processing.
* **Inquiry Type** (`type: select_one`, **required: true**): Select the type of inquiry (Travel Package Inquiry, Travel Service Inquiry, or Other). If you select "Other", please provide additional details in the previous field.
* **Preferred Language** (`type: select_one`, **required: true**): Select your preferred language for communication (English, Spanish, French, Mandarin, or Other). If you select "Other", please specify the language in the field provided.
* **Additional Comments** (`type: note`, **required: true**): This field is for any additional comments or context you'd like to provide about your inquiry.
* **Contact Person** (`type: text`, **optional: false**): If you need to specify a contact person's name or email, please do so here. This is optional but helpful for efficient communication.
