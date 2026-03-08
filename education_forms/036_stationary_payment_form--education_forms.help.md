</thinking>

# Stationary Payment Form - Help Guide
## Purpose
The Stationary Payment Form is used to collect information about the stationery items purchased by a customer, including store name, stationery type, quantity, and payment details. This form ensures accurate and efficient processing of customer transactions.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the store name where you made the purchase.
2. Select the type of stationery items you purchased (Pencil, Pen, Ruler, etc.).
3. Enter the quantity of stationery items you purchased.
4. Enter your email address for customer communication.
5. Enter your phone number for contact purposes.
6. Select the date and time you visited the store.
7. Enter any additional comments or notes about your purchase.
8. Select the payment method used (Cash, Credit Card, or Bank Transfer).
9. Enter the payment amount.
10. Select the secondary payment method used (if applicable).
11. (Optional) Enter any tax rate and tax amount.
12. Enter any comments about your store visit.

## Field-by-Field Explanation
* **Store Name** (`store_name`, `text`, required): Enter the name of the store where you purchased the stationery items.
* **Stationery Type** (`stationery_type`, `select_multiple`, required): Select one or more types of stationery items you purchased. Examples: Pencil, Pen, Ruler, Notebooks.
* **Quantity** (`quantity`, `number`, required): Enter the quantity of stationery items you purchased.
* **Customer Email** (`customer_email`, `email`, required): Enter your email address for customer communication purposes.
* **Customer Phone** (`customer_phone`, `text`, required): Enter your phone number for contact purposes.
* **Customer Date** (`customer_date`, `date`, required): Select the date you visited the store.
* **Customer Time** (`customer_time`, `time`, required): Select the time you visited the store.
* **Stationery Comments** (`notes`, `note`, optional): Enter any additional comments or notes about your purchase.
* **Payment Method** (`payment_method`, `select_one`, required): Select the payment method used. Options: Cash, Credit Card, or Bank Transfer.
* **Payment Amount** (`payment_amount`, `number`, required): Enter the total payment amount.
* **Payment Method 2** (`payment_method_2`, `select_one`, required): Select the secondary payment method used. Options: Credit Card, Bank Transfer.
* **Total** (`total`, `number`, optional): Enter the total amount (including tax) for your purchase (if applicable).
* **Tax Rate** (`tax_rate`, `number`, optional): Enter the tax rate applied to your purchase (if applicable).
* **Tax Amount** (`tax_amount`, `number`, optional): Enter the tax amount applied to your purchase (if applicable).
* **Store Comments** (`store_comments`, `note`, optional): Enter any comments about your store visit.

## Tips
* Be sure to double-check your input for accuracy and completeness before submitting the form.
* Use the correct date and time format when entering your visit details.
* Ensure that payment amounts are correct and accurate.
* If you have any questions or concerns, contact the store staff for assistance.
