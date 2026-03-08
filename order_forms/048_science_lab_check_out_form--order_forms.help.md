# science_lab_check_out_form - Help Guide
## Purpose
The science lab check-out form is used to document the check-out process of science lab equipment and tools, ensuring accurate inventory and minimizing losses.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your user information in the "User" field.
2. Enter the date and time you are checking out the item in the "Date Out" and "Time Out" fields respectively.
3. Enter the name of the item you are checking out in the "Item Name" field.
4. Enter the quantity of the item in the "Quantity Out" field.
5. Optionally, enter the return date and time in the "Date Return" and "Time Return" fields.
6. Select the current status of the item in the "Item Status" dropdown menu.
7. Enter any additional notes about the check-out in the "Note" field.
8. If applicable, enter the name of the tool or equipment in the "Assigned Tool" field.

## Field-by-Field Explanation
* **User** (`User`, text, required): Enter your name and contact information.
* **Date Out** (`Date Out`, date, required): Enter the date you will be checking out the item.
* **Time Out** (`Time Out`, time, optional): Enter the time you will be checking out the item, if applicable.
* **Item Name** (`Item Name`, text, required): Enter the name of the item you are checking out.
* **Item Number** (`Item Number`, text, required): Enter the quantity of the item you are checking out.
* **Quantity Out** (`Quantity Out`, text, required): Enter the quantity of the item you are checking out.
* **Date Return** (`Date Return`, date, optional): Enter the date you expect to return the item by, if applicable.
* **Time Return** (`Time Return`, time, optional): Enter the time you expect to return the item by, if applicable.
* **Item Status** (`Item Status`, select_one, optional): Select the current status of the item from the options "Available", "Not Available", or "Checked Out".
* **Note** (`Note`, note, optional): Enter any additional notes or comments about the check-out.
* **Assigned To** (`Assigned To`, text, required): Enter the name of the person or team assigned to work with the tool or equipment.
* **Email** (`Email`, email, optional): Enter the contact email of the person or team assigned to work with the tool or equipment.
* **Phone** (`Phone`, text, optional): Enter the contact phone number of the person or team assigned to work with the tool or equipment.
* **Assigned Tool** (`Assigned Tool`, text, optional): Enter the name of the tool or equipment assigned to the person or team.
