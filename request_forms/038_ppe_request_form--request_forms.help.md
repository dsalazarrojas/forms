# ppe_request_form - Help Guide
## Purpose
The PPE request form is used to submit a request for personal protective equipment to support the needs of employees in their work.

## How To Complete This Form
To complete this form, simply follow these steps:
1. Fill in the `user_input` field with a brief description of the required equipment.
2. Select the type of equipment you are requesting from the options provided in the `requested_equipment` field.
3. Enter the quantity needed in the `quantity_requested` field.
4. Enter the name of the contact person responsible for the request in the `contact_person` field.
5. Enter the contact number of the contact person in the `contact_number` field.
6. Add any additional details about the request in the `request_details` field.
7. Select the department you belong to from the options in the `department` field.
8. If the request is assigned to someone, select their name from the options in the `assigned_contact` field.
9. Optionally, enter the date the request was received in the `date_received` field.
10. Optionally, enter the time the request was received in the `time_received` field.

## Field-by-Field Explanation
* **User Input (user_input)** (`user_input`, text, optional): A brief description of the required equipment.
* **Requested Equipment (requested_equipment)** (`requested_equipment`, select_multiple, optional): Select the type of equipment you need from the options provided.
* **Quantity Requested (quantity_requested)** (`quantity_requested`, number, optional): The number of equipment you need.
* **Contact Person (contact_person)** (`contact_person`, text, optional): Enter the name of the contact person responsible for the request.
* **Contact Number (contact_number)** (`contact_number`, text, optional): Enter the contact number of the contact person.
* **Request Details (request_details)** (`request_details`, note, optional): Add any additional information about the request.
* **Department (department)** (`department`, select_one, optional): Select the department you belong to from the options provided.
* **Assigned Contact (assigned_contact)** (`assigned_contact`, select_one, optional): If the request is assigned to someone, select their name from the options provided.
* **Date Received (date_received)** (`date_received`, date, optional): Enter the date the request was received (optional).
* **Time Received (time_received)** (`time_received`, time, optional): Enter the time the request was received (optional).
