<thinking> 
The Dish Pricing Setup Form is used to set up pricing for dishes in the system. This form is typically used by administrators to configure dish pricing on a page-by-page basis. It allows users to select the pricing setup for a dish, update the price, and optionally add notes or contact information. The form is designed to be used in conjunction with other forms and tools to streamline the pricing management process. This form is not intended for customer-facing use, so only internal users with the necessary permissions can access it. 
</thinking>

# Dish Pricing Setup Form - Help Guide
## Purpose
The Dish Pricing Setup Form is used to set up pricing for dishes in the system.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the dish pricing setup for the desired page from the "dish_pricing_setup_form" select multiple field.
2. Enter the price for the dish in the "price" field.
3. Choose whether to update the price frequency from the "update_frequency" select one field.
4. Add any additional notes or comments in the "notes" field.
5. Enter the email address of the contact person in the "email" field (optional).
6. Enter the phone number of the contact person in the "phone_number" field (optional).

## Field-by-Field Explanation

* **Dish Pricing Setup Form** (`dish_pricing_setup_form`, select multiple, required): This field is used to select the pricing setup for a dish from a list of options. Select one or more of the available options to apply the corresponding pricing setup to the dish.
* **Price** (`price`, number, required): Enter the price of the dish in this field. The price is the amount that will be displayed to customers.
* **Update Frequency** (`update_frequency`, select one, optional): Choose whether the price should be updated (Yes) or not updated (No) based on the selected pricing setup. This option is typically used to set up automatic price updates.
* **Notes** (`notes`, note, optional): Add any additional notes or comments for the dish pricing setup. This field is useful for storing additional information about the dish.
* **Email** (`email`, email, optional): Enter the email address of the contact person responsible for the dish pricing setup. This field is useful for contacting the person if there are any issues with the price.
* **Phone Number** (`phone_number`, text, optional): Enter the phone number of the contact person responsible for the dish pricing setup. This field is useful for contacting the person if there are any issues with the price.

## Tips

* Make sure to select the correct pricing setup for each dish to ensure accurate pricing information is displayed to customers.
* Use the "notes" field to store additional information about each dish pricing setup.
* If the "update_frequency" field is set to "Yes", ensure that the price is updated accordingly and that the contact person is notified of any changes.
* Use the "email" and "phone_number" fields to store contact information for each dish pricing setup, in case of any issues.
