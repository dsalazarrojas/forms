# inventory_supply_query_contact_form - Help Guide
## Purpose
The inventory supply query contact form is designed for authorized users to request information from suppliers. This form is intended for inquiries that require immediate attention from our supply team.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the supplier's name in the "Supplier" field.
2. Provide the contact information, including name, email, and phone number.
3. Select whether the inquiry is a "Yes" or "No" type of request.
4. Enter the quantity required for the inquiry.
5. If applicable, enter the start and end dates for the inquiry.
6. If applicable, enter the end time for the inquiry.
7. Add any additional notes or comments in the "Note" field.

## Field-by-Field Explanation
* **Supplier** (`Supplier`, `text`, required): Please enter the name of the supplier.
* **Contact Info** (`Contact Info`, `text`, required): Enter the supplier's contact information, including name, email, and phone number.
* **Inquiry Type** (`Inquiry Type`, `select_one`, required): Select "Yes" if the inquiry requires immediate attention, "No" if it's a general inquiry.
* **Quantity** (`Quantity`, `number`, required): Enter the quantity required for the inquiry.
* **Start Date** (`Start Date`, `date`, optional): If the inquiry has a specific start date, enter it here.
* **End Date** (`End Date`, `date`, optional): If the inquiry has a specific end date, enter it here.
* **End Time** (`End Time`, `time`, optional): If the inquiry has a specific end time, enter it here.
* **Note** (`Note`, `note`, optional): Add any additional notes or comments about the inquiry.
