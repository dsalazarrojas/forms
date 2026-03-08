# Silent Auction Donation Form - Help Guide
## Purpose
The Silent Auction Donation Form is a user-friendly form designed to collect donations from individuals and organizations for the silent auction. It gathers essential information, such as donor contact details, donation type, description, value, and currency, to ensure accurate and efficient processing.

## How To Complete This Form
To complete the Silent Auction Donation Form, follow these steps:

1. Fill in your name and contact information in the "Donor Name", "Donor Email", and "Donor Phone" fields.
2. Select the type of donation you are submitting (e.g., Gift, Prize, Grant).
3. Provide a brief description of your donation.
4. Enter the value of your donation.
5. Choose the currency of your donation (USD, EUR, CAD, JPY).
6. Enter the currency symbol (e.g., $, €, $, ¥).
7. Add any additional notes about your donation (optional).

## Field-by-Field Explanation
### Donor Name
* **Donor Name** (`donor_name`, text, required): Your name as the donor.

### Donor Email
* **Donor Email** (`donor_email`, email, required): Your email address where you can be contacted.

### Donor Phone
* **Donor Phone** (`donor_phone`, text, optional): Your phone number where you can be reached.

### Donation Type
* **Donation Type** (`donation_type`, select_one, required): The type of donation you are submitting (e.g., Gift, Prize, Grant).

### Description
* **Description** (`description`, text, optional): A brief description of your donation.

### Value
* **Value** (`value`, number, optional): The value of your donation.

### Currency
* **Currency** (`currency`, select_one, required): The currency of your donation (USD, EUR, CAD, JPY).

### Currency Symbol
* **Currency Symbol** (`currency_symbol`, text, optional): The symbol for the currency of your donation (e.g., $, €, $, ¥).

### Notes
* **Notes** (`notes`, note, optional): Any additional comments or notes about your donation.
