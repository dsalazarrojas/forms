# customer_loyalty_program_quotation_form - Help Guide
## Purpose
The customer loyalty program quotation form is designed to help customers sign up for a customer loyalty program. It generates a quote for their chosen program based on the information provided.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the customer information section.
2. Enter the customer's name, email, and phone number.
3. Choose a loyalty program from the options provided.
4. Provide the quote details.
5. Enter the desired quote date and time.

## Field-by-Field Explanation
### 1. customer_info 
**Customer Info** (`customer_info`, `text`, required: false): Enter the customer's name, email, and phone number in the format you would like to appear on the quote. 

### 2. program_selection 
**Program Selection** (`program_selection`, `select_one`, required: false): Choose the loyalty program you would like to sign up for. 

### 3. quote_details 
**Quote Details** (`quote_details`, `text`, required: false): Enter any additional details regarding the quote, such as any special requests.

### 4. loyalty_program 
**Loyalty Program** (`loyalty_program`, `select_multiple`, required: false): Select multiple loyalty programs you would like to sign up for. 

### 5. customer_email 
**Customer Email** (`customer_email`, `email`, required: false): Enter the customer's email address.

### 6. customer_phone 
**Customer Phone** (`customer_phone`, `text`, required: false): Enter the customer's phone number.

### 7. quote_date 
**Quote Date** (`quote_date`, `date`, required: false): Enter the desired quote date.

### 8. quote_time 
**Quote Time** (`quote_time`, `time`, required: false): Enter the desired quote time. 

## Tips
- Make sure to fill out all required fields accurately.
- Double-check your selection of loyalty programs before submitting.
- Use the provided hints and explanations to help you with any unclear fields.
- If you have any doubts or issues, do not hesitate to contact us for assistance. 

Note: This help guide is based on the assumption that all fields are required unless otherwise stated as optional in the input schema.
