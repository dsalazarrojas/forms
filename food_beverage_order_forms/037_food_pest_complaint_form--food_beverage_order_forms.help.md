# Food Pest Complaint Form - Help Guide
## Purpose
This form is designed to collect information from customers who have experienced a food pest complaint. The form aims to gather incident details, customer contact information, and any necessary follow-up actions.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the customer information section with your name, contact number, and any other relevant details.
2. Describe the incident that led to the complaint, providing as much detail as possible.
3. Specify the type of pest involved in the incident.
4. Write a statement explaining the issue you faced.
5. Choose the follow-up option that best suits your needs.
6. Enter the contact method that you would prefer to be contacted through.
7. If applicable, specify the contact person assigned to the complaint.

## Field-by-Field Explanation

* **Customer Information** (`customer_info`, text, optional): Please fill in your name and contact details to help us get in touch with you.
* **Incident Information** (`incident_info`, text, optional): Describe the incident that led to the complaint, including any relevant dates and times.
* **Pest Information** (`pest_info`, text, optional): Specify the type of pest involved in the incident, if known.
* **Customer Statement** (`customer_statement`, text, required): Write a clear and concise statement explaining the issue you faced.
* **Team Follow Up** (`team_follow_up`, select_multiple, optional): Choose the follow-up option that best suits your needs:
	+ No Follow-up Needed
	+ Follow-up in 24 hours
	+ Follow-up in 48 hours
	+ Follow-up in 72 hours
	+ Follow-up in 1 week
	+ Follow-up in 2 weeks
* **Food Establishment Information** (`food_establishment_info`, text, optional): If applicable, provide information about the food establishment involved in the incident.
* **Contact Method** (`contact_method`, text, required): Please select the contact method that you would prefer to be contacted through:
	+ Phone
	+ Email
	+ Text Message
	+ Mail
* **Assigned Contact** (`assigned_contact`, text, optional): If applicable, specify the contact person assigned to the complaint.
