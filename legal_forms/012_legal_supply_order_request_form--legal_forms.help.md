<thinking>
This form is intended to collect information from users about legal supply orders. The form has two main purposes: to determine whether a user requests legal supplies and if they need help with the current legal supply order process. If a user requests supplies, the form will guide them through the steps needed to place an order. If a user answers "No" to the category question, they will skip the rest of the form and not be asked to provide further information. This ensures that users who do not need legal supplies do not have to fill out a lengthy form. The internal system will automatically skip to the next page for users that answer "No" to the category question.

The form has several sections:
*   **Legal Supply Order Request Form: This is the main form where users will input information about their legal supply order.**
*   **Category: This field will determine if a user requests legal supplies or not. If they answer "No" to this question, they will skip the rest of the form.**
*   **Item Name: This field is where users can input the name of the legal supply they are requesting.**
*   **Supply Type: This field will ask users if the legal supply is a one-time or recurring supply.**
*   **Description: This field is where users can input any additional information about the legal supply they are requesting.**
*   **Quantity: This field will ask users to input the quantity of legal supply they are requesting.**
*   **Unit Price: This field will ask users to input the price of the legal supply per unit.**
*   **Total Cost: This field will automatically calculate the total cost of the legal supply order based on the quantity and unit price.**
*   **Delivery Method: This field will ask users if they have a preferred delivery method.**
*   **Delivery Date: This field will ask users to input the date they want the legal supply delivered.**

</thinking>

# Legal Supply Order Request Form - Help Guide
## Purpose
This form is used to collect information from users about legal supplies they are requesting. The form has been designed to guide users through the process of placing an order for legal supplies, and it will automatically skip unnecessary fields based on the user's input.

## How To Complete This Form
To complete this form, follow these steps:

1.  Determine whether you need legal supplies by answering the "Category" question. If you do not need legal supplies, you can skip the rest of the form.
2.  If you need legal supplies, fill out the "Item Name" field with the name of the legal supply you are requesting.
3.  Choose whether the legal supply is a one-time or recurring supply by answering the "Supply Type" question.
4.  Input any additional information about the legal supply in the "Description" field.
5.  Enter the quantity of the legal supply you are requesting in the "Quantity" field.
6.  Enter the price of the legal supply per unit in the "Unit Price" field.
7.  The "Total Cost" field will automatically calculate the total cost of your order based on the quantity and unit price.
8.  Choose your preferred delivery method by answering the "Delivery Method" question.
9.  Input the date you would like the legal supply delivered in the "Delivery Date" field.

## Field-by-Field Explanation

### Category (`Category`, select_one, required: false)
This field determines whether you need legal supplies or not. If you answer "No" here, you will skip the rest of the form and will not be asked to provide further information.

### Legal Supply Order Request Form (`Legal Supply Order Request Form`, note, required: false)
This field will be automatically filled out by the system and is for informational purposes only.

### Item Name (`Item Name`, text, required: false)
This field is where you can input the name of the legal supply you are requesting.

### Supply Type (`Supply Type`, select_one, required: false)
This field will ask you if the legal supply is a one-time or recurring supply.

### Description (`Description`, text, required: false)
This field is where you can input any additional information about the legal supply you are requesting.

### Quantity (`Quantity`, number, required: false)
This field will ask you to input the quantity of the legal supply you are requesting.

### Unit Price (`Unit Price`, number, required: false)
This field will ask you to input the price of the legal supply per unit.

### Total Cost (`Total Cost`, number, required: false)
This field will automatically calculate the total cost of your order based on the quantity and unit price.

### Delivery Method (`Delivery Method`, select_one, required: false)
This field will ask you your preferred delivery method.

### Delivery Date (`Delivery Date`, date, required: false)
This field will ask you to input the date you would like the legal supply delivered.

## Tips
*   If you answer "No" to the "Category" question, you will skip the rest of the form and will not be asked to provide further information.
*   Make sure to input accurate information in the "Item Name", "Quantity", "Unit Price", and "Delivery Date" fields to ensure accurate calculations.
