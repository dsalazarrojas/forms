# BlueSnap Nonprofit Donation Form - Help Guide
## Purpose
The BlueSnap Nonprofit Donation Form is a secure and user-friendly tool for donors to make one-time or recurring donations to our organization. This form is designed to collect all necessary information and payment details to process and acknowledge donations efficiently.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your name in the "Donor name" field, ensuring it matches the name on your ID or driver's license.
2. Provide a valid email address in the "Email address" field, which will receive the donation receipt.
3. Enter the amount of your donation in the "Donation amount" field. Please ensure it's a numeric value in the currency of your choice.
4. Select your preferred donation frequency: one-time or recurring (monthly or yearly).
5. Choose your preferred payment method: Credit card, PayPal, or Bank transfer.
6. If you wish, provide a dedication for your donation, e.g., honoring someone or remembering someone.
7. Decide whether to make your donation anonymous or have your name displayed publicly.
8. Optionally, provide comments or a message for the organization using the "Comments" field.

## Field-by-Field Explanation
* **Donor name (Donor name)** (`donor_name`, text, required): Enter your full name for receipt purposes.
* **Email address (Email address)** (`email`, email, required): Your email address will receive the donation receipt. Please ensure it's valid and not a disposable or temporary address.
* **Donation amount (Donation amount)** (`donation_amount`, number, required): Enter a numeric value in the currency of your choice. This can be any whole number amount.
* **Donation frequency (Donation frequency)** (`donation_frequency`, select_one, required): Choose between one-time, monthly, or yearly donations.
* **Payment method (Payment method)** (`payment_method`, select_one, required): Select your preferred payment processor: Credit card, PayPal, or Bank transfer.
* **Dedication (Dedication)** (`dedication`, text, optional): If desired, provide a name or description of the person or occasion for your donation dedication.
* **Make donation anonymous (Make donation anonymous)** (`anonymous_donation`, select_one, required): Decide whether to display your name publicly.
* **Comments (Comments)** (`comments`, text, optional): Leave a message or note for the organization, if desired.
