<thinking>As a form designer and technical writer, I'll create a user-facing help guide that explains the purpose and usage of the "Dine In Service Contact Tracing Form". This form is designed to gather information about customers who have visited a service, including their contact details, visit history, and potential exposure to COVID-19. The form is intended to be used by staff members to quickly and accurately gather relevant information in the event of a potential outbreak or exposure.</thinking>

# Dine In Service Contact Tracing Form - Help Guide
## Purpose
This form is used to gather information from customers who have visited our service, including their contact details, visit history, and potential exposure to COVID-19. This helps us to quickly and accurately gather relevant information in the event of a potential outbreak or exposure.

## How To Complete This Form
1. Fill in the customer's name and contact number.
2. Enter the customer's dining date and time.
3. Provide the customer's email address.
4. If the customer has a contact email or phone number (alt), enter that information as well.
5. Indicate if the customer has visited any other locations recently.
6. Answer questions about the customer's travel history, including travel companions.
7. Provide any relevant contact history information.
8. If necessary, provide notes about the customer's symptoms or exposure.
9. Indicate if the customer has been exposed to COVID-19.
10. Indicate if staff members are required to be in contact with the customer.
11. Choose any staff members who may have been exposed to COVID-19.
12. Choose any customers who may have been exposed to COVID-19.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, optional): Enter the customer's name as they would like to be referred to.
* **Contact Number** (`contact_number`, text, optional): Enter the customer's contact number for follow-up.
* **Dining Date** (`dining_date`, date, optional): Enter the date of the customer's visit.
* **Dine-in Time** (`dine_in_time`, time, optional): Enter the time of the customer's visit.
* **Email** (`email`, email, optional): Enter the customer's email address for contact.
* **Contact Email** (`contact_email`, email, optional): Enter the customer's alternative contact email address.
* **Contact Number (Alt)** (`contact_number_alt`, text, optional): Enter the customer's alternative contact number.
* **Dining Duration** (`dining_duration`, number, optional): Enter the length of the customer's visit.
* **Visited Locations** (`visited_locations`, text, optional): List any locations visited by the customer recently.
* **Contact Person** (`contact_person`, text, optional): Name and title of the contact person.
* **Visited Location** (`visited_location`, text, optional): Name of the location visited.
* **Visited Date** (`visited_date`, date, optional): Date of the visit.
* **Visited Time** (`visited_time`, time, optional): Time of the visit.
* **Exposure Date** (`exposure_date`, date, optional): Date of potential exposure.
* **Symptoms** (`symptoms`, text, optional): Describe any symptoms the customer has experienced.
* **Exposure Time** (`exposure_time`, time, optional): Time of potential exposure.
* **Travel History** (`travel_history`, text, optional): Information about recent travel.
* **Travel Companions** (`travel_companions`, text, optional): Names of people the customer has traveled with recently.
* **Contact History** (`contact_history`, text, optional): Information about recent contacts.
* **Staff** (`staff`, select_one, optional): Choose if any staff members are required to be in contact with the customer.
* **Staff Exposure** (`staff_exposure`, select_multiple, optional): Choose any staff members who may have been exposed to COVID-19.
* **Customer** (`customer`, select_multiple, optional): Choose any customers who may have been exposed to COVID-19.
* **Family** (`family`, select_multiple, optional): Choose any family members who may have been exposed to COVID-19.
* **Other Locations** (`other_locations`, select_multiple, optional): Choose any other locations where the customer may have been exposed.
* **Notes** (`notes`, text, optional): Add any additional notes about the customer's visit or potential exposure.
