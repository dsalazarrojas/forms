# Food Bank Order Form - Help Guide
## Purpose
The Food Bank Order Form is used by users to place orders with the food bank. It is designed to guide users through a step-by-step process to provide all necessary information to complete an order.

## How To Complete This Form
To complete this form, follow the steps below:

1. Select the desired options for your order on the first page.
2. Provide your donor information on the second page.
3. Enter your address and contact information on the third page.
4. Specify the order details and any additional notes on the fourth page.
5. Finally, select the date and time of the order on the fifth page.

## Field-by-Field Explanation
* **Order Form** (`order_form`, `select_multiple`, required: false): Select one or multiple options for your order from the available choices.
* **Donor Information** (`donor_info`, `select_one`, required: false): Choose how you would like to be recognized as the donor for this order.
* **Address** (`address`, `text`, required: false): Enter your address where the order will be delivered.
* **Order Details** (`order_details`, `text`, required: false): Provide any additional details about your order, such as special requests or allergies.
* **Contact Information** (`contact_info`, `text`, required: false): Enter your contact information so we can get in touch with you about your order.
* **Order Date** (`order_date`, `date`, required: false): Select the date you would like to receive your order on.
* **Order Time** (`order_time`, `time`, required: false): Select the time you would like to receive your order on.
* **Notes** (`notes`, `note`, required: false): Add any additional notes or comments about your order if needed.
