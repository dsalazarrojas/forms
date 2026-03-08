<thinking>
The purpose of this form is to collect information for an order, customer, and product selection. This form appears to be a complex form with multiple fields for various types of data input such as text, select_one, select_multiple, and date/time fields. The form has 25 fields, which might be overwhelming for some users. To make the most of this form, users should review each field carefully and fill out only the required fields. It's essential to double-check all input data before submitting the form to ensure accuracy and consistency. Please be cautious of the required field indicators, as some might be misleading or not clear in the provided YAML description. For example, the "price" field is not clearly marked as required, although it seems to be a crucial piece of information for an order form. It would be good to have a clear "required" indicator for each field.
</thinking>

# ruby_ribbon_fit_form - Help Guide
## Purpose
The ruby_ribbon_fit_form is designed to collect information for an order, customer, and product selection. This form is used to gather details such as order information, customer data, and product choices.

## How To Complete This Form
1. Review each field carefully and fill out only the required fields.
2. Double-check all input data for accuracy and consistency before submitting the form.
3. Make sure to clearly understand the purpose of each field.

## Field-by-Field Explanation
- **order form** (order_form, text, not required): Enter a brief description of the order.
  - **customer info** (customer_form, select_one, not required): Select one option from "Yes" or "No" regarding customer status.
  - **product info** (product_form, select_multiple, not required): Choose multiple options from "Yes" or "No" for product features.
  - **quantity** (quantity, number, not required): Enter the quantity of products ordered.
  - **price** (price, number, not required): Enter the price of the order.
  - **date** (date, date, not required): Enter the date of the order.
  - **order time** (time, time, not required): Enter the time of the order.
  - **order notes** (order_note, note, not required): Enter any additional order notes.
  - **email** (email, email, not required): Enter the customer's email address.
  - **phone** (phone, text, not required): Enter the customer's phone number.
  - **address** (address, text, not required): Enter the customer's address.
  - **city** (city, text, not required): Enter the customer's city.
  - **state** (state, text, not required): Enter the customer's state.
  - **zip code** (zip, text, not required): Enter the customer's zip code.
  - **customer email** (customer_email, email, not required): Enter the customer's email address.
  - **customer phone** (customer_phone, text, not required): Enter the customer's phone number.
  - **customer address** (customer_address, text, not required): Enter the customer's address.
  - **customer city** (customer_city, text, not required): Enter the customer's city.
  - **customer state** (customer_state, text, not required): Enter the customer's state.
  - **customer zip** (customer_zip, text, not required): Enter the customer's zip code.
  - **customer notes** (customer_note, note, not required): Enter any additional customer notes.
  - **customer fit** (customer_fit, select_one, not required): Select one option from "Yes" or "No" regarding the customer fit.
  - **order fit** (order_fit, select_one, not required): Choose one option from "Yes" or "No" regarding the order fit.
  - **ruby prophets fit** (ruby_ribbon_fit, select_multiple, not required): Select multiple options from "Yes" or "No" for ruby prophets fit.
