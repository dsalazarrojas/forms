# Paypal Coffee Order Form - Help Guide
## Purpose
This form is for ordering coffee. Please fill in your details and preferences, and we'll take care of your order.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **First Name** and **Last Name** in the corresponding fields.
2. Enter your **Email** address to help us contact you for any questions or updates.
3. Provide your **Phone** number for easy contact.
4. Enter the **Quantity** of coffee you would like to order.
5. Select your preferred **Coffee Type** from the list:
	* Latte
	* Cappuccino
	* Mocha
	* Drip
	* Americano
	* Espresso
	* Cold Brew
6. Choose your **Size** from the list:
	* Small
	* Large
	* Extra Large
7. Select your preferred **Milk** options (optional):
	* Half-and-half
	* Whole
	* Skim (none if not selected)
8. Choose your preferred **Sugar** options (optional):
	* None
	* Half
	* Three-quarters
	* Full
9. Enter the **Order Date** for your coffee order.
10. Enter the **Order Time** for your coffee order (optional).
11. Fill in the **Total** amount for your order.
12. If you want to assign a specific **Assigned Tool** for your order, you can enter it here (optional).
13. Finally, fill in the **Form ID** which is not used for the order itself (internal use only).

## Field-by-Field Explanation

* **First Name** (`<name>`, `<type>`: text, `required`: true): Enter your first name.
* **Last Name** (`<name>`, `<type>`: text, `required`: true): Enter your last name.
* **Email** (`<name>`, `<type>`: email, `required`: true): Enter your email address.
* **Phone** (`<name>`, `<type>`: text, `required`: true): Enter your phone number.
* **Quantity** (`<name>`, `<type>`: number, `required`: true): Enter the quantity of coffee you would like to order.
* **Coffee Type** (`<name>`, `<type>`: select_one, `required`: true): Select your preferred coffee type from the list.
* **Size** (`<name>`, `<type>`: select_one, `required`: true): Select your preferred coffee size from the list.
* **Milk** (`<name>`, `<type>`: select_multiple, `required`: false): Select your preferred milk options.
* **Sugar** (`<name>`, `<type>`: select_multiple, `required`: false): Select your preferred sugar options.
* **Order Date** (`<name>`, `<type>`: date, `required`: true): Enter the date for your coffee order.
* **Order Time** (`<name>`, `<type>`: time, `required`: false): Enter the time for your coffee order.
* **Total** (`<name>`, `<type>`: number, `required`: true): Enter the total amount for your order.
* **Assigned Tool** (`<name>`, `<type>`: text, `required`: false): Assign a specific tool for your order (optional).
* **Form ID** (`<name>`, `<type>`: text, `required`: false): Fill in the form ID which is not used for the order itself (internal use only).

## Tips
* Please fill in all required fields accurately to ensure a smooth ordering process.
* If you're unsure about any field, please contact us for clarification.
