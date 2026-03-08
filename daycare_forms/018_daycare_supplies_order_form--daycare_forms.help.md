# Daycare Supplies Order Form - Help Guide
## Purpose
The Daycare Supplies Order Form is used to collect information for ordering supplies in daycare settings.

## How To Complete This Form
1. Enter your first name in the **First Name** field.
2. Enter your email address in the **Email** field. This should be a valid email address.
3. Select one of the options for **Items Requested** field.
4. Choose the **Delivery Choice** for your order. You can select either **Pick up** or **Deliver**.
5. In the **Category** field, select one of the available options: **Diapers**, **Wipes**, or **Bottles**.
6. Enter the quantity of the items you need in the **Quantity** field.
7. Optionally, you can add any additional comments in the **Comments** field.
8. You can also provide your phone number in the **Phone** field, but it's not mandatory.
9. Review your information before submitting the form to ensure accuracy.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name as it appears on your official documents.
* **Email** (`email`, email, required): Enter a valid email address where you can be reached.
* **Items Requested** (`items_requested`, select_multiple, required): Select one or more of the options for the items you need.
* **Delivery Choice** (`delivery_choice`, select_one, required): Choose the delivery method for your order. You can pick up the supplies or have them delivered.
* **Category** (`category`, select_one, required): Select the category of supplies you need from the available options.
* **Quantity** (`quantity`, number, required): Enter the quantity of the items you need.
* **Notes** (`notes`, note, optional): Add any additional comments about your order.
* **Phone** (`phone`, text, optional): Enter your phone number if you'd like us to contact you about your order.
* **Comments** (`comments`, text, optional): Add any additional comments about your order.
* **Category** (`category`, select_one, required): This field is the same as the one above with the same options.
