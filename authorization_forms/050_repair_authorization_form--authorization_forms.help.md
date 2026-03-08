# Repair Authorization Form - Help Guide
## Purpose
This form is used for repair authorization, and it should only be used when the technician is requesting authorization from the customer to proceed with repairs.

## How To Complete This Form

1. Fill out the form completely and accurately to ensure that the authorization is processed correctly.
2. Ensure that the customer's name is correctly filled out in the "Customer Name" field.
3. Select the appropriate contact method from the "Contact Method" dropdown list.
4. Enter the correct contact number in the "Contact Number" field.
5. Provide a description of the equipment to be repaired in the "Equipment Description" field.
6. Enter the equipment number if applicable.
7. Enter the contact address if the customer wishes to be contacted at their business address.
8. Enter the name of the business if applicable.
9. Select the type of authorization required from the "Authorization Type" dropdown list.
10. Enter any additional authorization notes in the "Authorization Notes" field.
11. Sign and date the form as the customer.
12. Sign and date the form as the technician.
13. Enter the date and time the form was signed.
14. Sign and date the form as the business if applicable.
15. Enter any customer notes in the "Customer Notes" field.
16. Enter any technician notes in the "Technician Notes" field.
17. Enter any business notes in the "Business Notes" field.
18. Enter the date and time of the authorization.
19. Select whether the repair has been authorized.
20. Enter the name of the person authorizing the repair if applicable.
21. Enter any additional notes in the "Notes" field.
22. Select the type of repair required from the "Repair Type" dropdown list.
23. Enter any additional details about the repair type if applicable.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): The customer's name is required to be filled out in this field.
* **Contact Method** (`contact_method`, select_one, optional): Select the method the customer prefers to be contacted, such as phone, email, or mail.
* **Contact Number** (`contact_number`, number, optional): Enter the customer's contact number if applicable.
* **Equipment Description** (`equipment_description`, text, optional): Provide a description of the equipment to be repaired.
* **Equipment Number** (`equipment_number`, text, optional): Enter the equipment number if applicable.
* **Contact Address** (`contact_address`, text, optional): Enter the customer's contact address if applicable.
* **Business Name** (`business_name`, text, optional): Enter the name of the business if applicable.
* **Authorization Type** (`authorization_type`, select_one, optional): Select the type of authorization required, such as "Authorization" or "Non-Authorization".
* **Authorization Notes** (`authorization_notes`, text, optional): Enter any additional authorization notes.
* **Customer Signature** (`customer_signature`, note, optional): Sign and date the form as the customer.
* **Technician Signature** (`technician_signature`, note, optional): Sign and date the form as the technician.
* **Date Signed** (`date_signed`, date, optional): Date and time the form was signed.
* **Business Signature** (`business_signature`, note, optional): Sign and date the form as the business if applicable.
* **Customer Notes** (`customer_notes`, text, optional): Enter any additional customer notes.
* **Technician Notes** (`technician_notes`, text, optional): Enter any additional technician notes.
* **Business Notes** (`business_notes`, text, optional): Enter any additional business notes.
* **Authorization Date** (`authorization_date`, date, optional): Enter the date and time of the authorization.
* **Authorization Time** (`authorization_time`, time, optional): Enter the date and time of the authorization.
* **Authorized By** (`authorized_by`, select_one, optional): Select whether the repair has been authorized.
* **Authorized By Name** (`authorized_by_name`, text, optional): Enter the name of the person authorizing the repair if applicable.
* **Notes** (`notes`, text, optional): Enter any additional notes.
* **Repair Type** (`repair_type`, select_one, optional): Select the type of repair required, such as "Repair" or "Return".
* **Repair Type Other** (`repair_type_other`, text, optional): Enter any additional details about the repair type if applicable.
* **Assigned Tool** (`assigned_tool`, text, optional): Enter the assigned tool if applicable.
* **Notes** (`notes`, text, optional): Enter any additional notes.
