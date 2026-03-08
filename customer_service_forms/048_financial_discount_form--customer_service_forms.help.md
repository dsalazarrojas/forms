# Financial Discount Form - Help Guide
## Purpose
The Financial Discount Form is used to apply a financial discount to a customer's order. 

## How To Complete This Form
To complete the form, please follow these steps:

1. Ensure you have all necessary information and approvals before proceeding. 
2. Enter the Customer Id in the designated field. 
3. Enter the Discount Code and type in the appropriate fields. 
4. Select the type of discount from the Code Type dropdown menu. 
5. Enter the Amount of the discount. 
6. Select the type of Amount from the Amount Type dropdown menu. 
7. Enter the Date and Time of the discount application. 

## Field-by-Field Explanation
* **Customer Id** (`customer_service_forms_financial_discount_form_customer_id`, `number`, required/optional): Enter the customer's unique identifier.
* **Discount Code** (`customer_service_forms_financial_discount_form_code`, `text`, required/optional): Enter the code associated with the discount.
* **Code Type** (`customer_service_forms_financial_discount_form_code_type`, `select_one`, required/optional): Select the type of discount code, such as 'Percentage', 'Fixed', or 'Dollar Amount'.
* **Amount** (`customer_service_forms_financial_discount_form_amount`, `number`, required/optional): Enter the amount of the discount.
* **Amount Type** (`customer_service_forms_financial_discount_form_amount_type`, `select_multiple`, required/optional): Select the type of amount, such as 'Percentage', 'Fixed', or 'Dollar Amount'.
* **Date** (`customer_service_forms_financial_discount_form_date`, `date`, required/optional): Enter the date the discount was applied.
* **Time** (`customer_service_forms_financial_discount_form_time`, `time`, required/optional): Enter the time the discount was applied.

## Tips
* Ensure all fields are accurate and complete before submitting the form. 
* If you are unsure of any field, please reach out to your supervisor for assistance. 
* This form should only be used for applying financial discounts, not for other types of customer service requests. 

Note: This guide was created based on the provided YAML fields. If the actual form implementation differs, please disregard this guide or update it accordingly.
