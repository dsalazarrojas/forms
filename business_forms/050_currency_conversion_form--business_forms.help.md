# currency_conversion_form - Help Guide
## Purpose
The **currency conversion form** is used to convert one currency to another based on user input. This form is designed to provide a simple and straightforward way to perform currency conversions.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the **base currency** you wish to convert from the options provided.
2. Choose the **to currency** you want to convert to from the options.
3. If you want to **convert**, fill out the **amount** you wish to convert and click on the **convert** field to calculate the conversion.
4. If you want to **reset** your inputs, click on the **reset** field to clear all fields.
5. Finally, click on **confirm** to acknowledge that the conversion was performed or **no** to cancel.

## Field-by-Field Explanation
* **base_currency** (`base_currency`, select_one, optional): Select the base currency you wish to convert from. This field will affect the conversion rate.
	+ Options: United States Dollar, Euro, Japanese Yen, Chinese Yuan, Indian Rupee, Korean Won
* **to_currency** (`to_currency`, select_one, optional): Choose the **to currency** you want to convert to. This field will affect the conversion rate.
	+ Options: United States Dollar, Euro, Japanese Yen, Chinese Yuan, Indian Rupee, Korean Won
* **amount** (`amount`, number, optional): Enter the amount you wish to convert. This field is required if you want to convert the currency.
* **rate** (`rate`, number, optional): Enter the conversion rate (this field is not used in the current implementation, but it's included for future reference).
* **convert** (`convert`, note, optional): This field is used to trigger the conversion process. Enter the amount you want to convert, and click on this field to see the converted amount.
* **converted_amount** (`converted_amount`, number, optional): This field displays the converted amount after clicking on the **convert** field.
* **reset** (`reset`, number, optional): Click on this field to clear all input fields and start fresh.
* **confirm** (`confirm`, select_one, optional): Acknowledge that the conversion was performed or cancel the conversion. Options: Yes, No.
