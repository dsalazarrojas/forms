<thinking>
We need to create a user-facing help guide for the "mummy_and_me_contract" form. This form is used for customers to provide information about themselves, including contact details, address, and nationality. The purpose of this form is to collect relevant data from customers for processing or communication purposes. It's essential to ensure that each field is filled out correctly to avoid any issues or misunderstandings. We should double-check that the customer's nationality is selected correctly from the list, as this field is required. We should also clarify what type of date is expected for the "Date of Birth" field.
</thinking>

# mummy_and_me_contract - Help Guide
## Purpose
The "mummy_and_me_contract" form is used to collect customer information for processing and communication purposes.

## How To Complete This Form
- Fill out each field as per the instructions provided in the "Field-by-Field Explanation" section.

## Field-by-Field Explanation
- **Mummy & Me Contract** (`mummy_and_me_contract_form_data`, `text`, required: false): This field is used for general information about the customer. Please provide any relevant details about yourself.
- **Customer Details** (`customer_details`, `text`, required: false): Enter the customer's name or company name for processing purposes.
- **Address** (`customer_address`, `text`, required: false): Enter the customer's address for delivery or communication purposes.
- **Phone Number** (`customer_phone`, `text`, required: false): Enter the customer's phone number for communication purposes.
- **Email Address** (`customer_email`, `email`, required: false): Enter the customer's email address for communication purposes. Please use the correct format for the email address.
- **Date of Birth** (`customer_date_of_birth`, `date`, required: false): Enter the customer's date of birth in the correct format (DD/MM/YYYY or MM/DD/YYYY).
- **Nationality** (`customer_nationality`, `text`, required: false): Enter the customer's nationality, which will be further clarified in the next field.
- **Nationality List** (`customer_nationality_list`, `select_one`, required: true): Select the customer's nationality from the provided list (Option 1, Option 2, or Option 3).
- **Nationality Details** (`customer_nationality_details`, `text`, required: false): Enter any additional details about the customer's nationality.

## Tips
- Double-check the customer's nationality selection to ensure it's accurate.
- Use the correct date format for the "Date of Birth" field.
- Fill out each field as per the instructions provided, and don't hesitate to ask if you have any questions or concerns.
