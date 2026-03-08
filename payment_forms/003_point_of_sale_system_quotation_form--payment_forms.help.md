<thinking>...</thinking>

# Point Of Sale System Quotation Form - Help Guide
## Purpose
This form is designed to be used by the sales team to create quotations for customers, capturing essential information needed for the sales process. It is intended to be used for internal purposes and not for customer self-service.

## How To Complete This Form
To use this form, follow these steps:

1.  Enter the customer's contact information, including their email and phone number.
2.  Fill in the customer's name and address.
3.  Specify the quotation date and time.
4.  Add any relevant notes or comments about the quotation.
5.  Set the total price of the quotation, taking into account the currency used.
6.  Choose the currency of the quotation.
7.  Specify any applicable discount percentage.
8.  Select the customer to whom the quotation is for (optional).
9.  Define the terms of the quotation, including any conditions, services, and tax information.
10.  Determine the payment terms of the quotation.
11.  Choose the tax rate for the quotation.
12.  Select the payment method for the quotation.

## Field-by-Field Explanation

*   **customer (1)** (`text`, **optional**): Enter the customer's name.
*   **contact_email (2)** (`text`, **optional**): Enter the customer's email address.
*   **contact_phone (3)** (`text`, **optional**): Enter the customer's phone number.
*   **address (4)** (`text`, **optional**): Enter the customer's address.
*   **contact_name (5)** (`text`, **optional**): Enter the contact person's name.
*   **quotation_date (6)** (`date`, **optional**): Choose the date of the quotation.
*   **quotation_time (7)** (`time`, **optional**): Choose the time of the quotation.
*   **quotation_note (8)** (`note`, **optional**): Add any additional comments or notes about the quotation.
*   **quotation_total_price (9)** (`number`, **optional**): Enter the total price of the quotation.
*   **quotation_currency_id (10)** (`select_one`, **optional**): Choose the currency of the quotation (USD, EUR, or GBP).
*   **quotation_discount (11)** (`number`, **optional**): Enter the discount percentage.
*   **customer_id (12)** (`select_multiple`, **optional**): Select the customer to whom the quotation is for (Customer 1, Customer 2, or Customer 3).
*   **quotation_terms (13)** (`text`, **optional**): Define the terms of the quotation.
*   **quotation_terms_and_conditions (14)** (`text`, **optional**): Define the terms and conditions of the quotation.
*   **quotation_terms_of_service (15)** (`text`, **optional**): Define the terms of service of the quotation.
*   **quotation_payment_terms (16)** (`text`, **optional**): Define the payment terms of the quotation.
*   **quotation_tax_id (17)** (`select_one`, **optional**): Choose the tax rate for the quotation (VAT 1, VAT 2, or VAT 3).
*   **quotation_payment_method (18)** (`text`, **optional**): Choose the payment method for the quotation.
