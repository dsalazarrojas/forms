<thinking>What is the purpose of this form? This form is designed to collect essential information from customers during the Know Your Customer (KYC) process. It's meant to be completed by customers to provide accurate and complete details about themselves, which will be used to verify their identity and assess their eligibility for our services. Is this the correct form for your use case? Please ensure this form is not a duplicate or outdated. If you're unsure, please refer to your internal documentation or contact your internal team for assistance.</thinking>

# kyc_form - Help Guide
## Purpose
The KYC form is used to collect customer details for identity verification and eligibility assessment.

## How To Complete This Form
To complete this form, follow these steps:
1. Start by filling in the customer details section (page 1).
2. Provide a signature in the signature section (page 2).
3. Enter your address in the address section (page 3).
4. Enter your date of birth in the date of birth section (page 4).
5. Indicate your nationality status (Yes/No) in the nationality section (page 5).
6. Select your customer type (Yes/No) in the customer type section (page 6).
7. Enter your contact details in the contact details section (page 7).
8. Enter your customer ID number in the customer ID section (page 8).

## Field-by-Field Explanation
- **Customer Details** (`customer_details`, text, required: false): This section is for entering your basic customer details. Please fill in this section with your name and any other relevant information.
- **Signature** (`signature`, note, required: false): Please add your signature to this form as proof of your identity.
- **Address** (`address`, text, required: false): Enter your current address for verification purposes.
- **Date of Birth** (`date_of_birth`, date, required: false): Enter your date of birth in the format MM/DD/YYYY.
- **Nationality** (`nationality`, select_multiple, required: false): Select your nationality status by choosing either "Yes" or "No".
- **Customer Type** (`customer_type`, select_one, required: false): Choose your customer type by selecting either "Yes" or "No".
- **Contact Details** (`contact_details`, text, required: false): Provide your contact details, such as phone number and email, for communication purposes.
- **Customer ID** (`customer_id`, number, required: false): Enter your customer ID number for reference.

## Tips
* Please ensure all fields are filled in correctly and accurately.
* If you're unsure about any field, please refer to your internal documentation or contact your internal team for assistance.
* This form is for identification and verification purposes only; do not use it for any other purpose.
