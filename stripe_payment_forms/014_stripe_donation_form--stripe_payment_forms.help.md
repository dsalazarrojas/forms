<thinking>
  Stripe payment forms are used for online fundraising or donations. 
  This form should only be used for donation purposes. 
  Please do not use this form for other purposes. 
  The form is intended to gather user information and payment method details for Stripe payment processing. 
  Please ensure you have Stripe account to process payments. 
  Stripe payment forms are used for online fundraising or donation purposes. 
  The form fields should only be filled out as relevant to your use case. 
  Do not use the form for other purposes.
</thinking>

# Stripe Donation Form - Help Guide
## Purpose
This form is for making online donations or payments through Stripe. Only fill out this form for donation or payment purposes. If you're looking for other services, please contact your administrator.

## How To Complete This Form
Complete the form by filling out each section. If you're unsure about a field, please refer to the Field-by-Field Explanation section below.

## Field-by-Field Explanation
### First Name
• **First Name** (`user_name`, text, optional): Enter your first name to be associated with your donation or payment.

### Email
• **Email** (`user_email`, email, optional): Enter your email address for Stripe to send notifications or payment receipts.

### Phone
• **Phone** (`user_phone`, text, optional): Enter your phone number for Stripe to contact you.

### Note
• **Note** (`user_note`, note, optional): Provide a note or comment related to your donation or payment.

### Amount
• **Amount** (`stripe_amount`, number, optional): Enter the amount you wish to donate or pay.

### Currency
• **Currency** (`stripe_currency`, select_one, optional): Select the currency for your donation or payment. Options include:
  • USD (United States Dollar)
  • EUR (Euro)
  • CAD (Canadian Dollar)

### Other Currency
• **Other** (`stripe_currency_other`, text, optional): If you need to specify a different currency not listed above, enter it here.

### Payment Method
• **Payment Method** (`stripe_payment_method`, select_multiple, optional): Select one or multiple payment methods to process your donation or payment. Options include:
  • Card Number
  • Payable at a Bank
  • Apple Pay
  • Google Pay
  • Other
  • Bitcoin

## Tips
* Ensure your Stripe account is set up and ready to process payments before using this form.
* Only fill out the form for donation or payment purposes.
* If you have any issues or questions, contact your administrator.
