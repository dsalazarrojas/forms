# golf_club_membership_renewal_form - Help Guide
## Purpose
The golf club membership renewal form is used for existing golf club members to renew their membership. This form should only be used for this purpose and not for new membership applications.

## How To Complete This Form
1. Fill in your First Name.
2. Enter your Email address.
3. Provide your Membership Number.
4. Enter your Date of Birth.
5. Enter your Address.
6. Choose your preferred payment method (Credit Card, Bank Transfer, or Cash).
7. Enter the Amount you wish to pay.
8. Select your preferred Payment Terms (Monthly, Quarterly, or Annually).
9. Review your details and click on "Submit" to complete your membership renewal application.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required: false): Enter your full name as it appears on your identification documents.
* **Email** (`email`, `email`, required: false): Enter your valid email address.
* **Membership Number** (`membership_number`, `number`, required: false): Enter your membership ID or account number.
* **Date of Birth** (`date_of_birth`, `date`, required: false): Enter your date of birth in YYYY-MM-DD format.
* **Address** (`address`, `text`, required: false): Enter your current address.
* **Payment Method** (`payment_method`, `select_one`, required: false):
	+ Credit Card: Payment via credit card, with options to pay by instalments or full.
	+ Bank Transfer: Payment via bank transfer or direct deposit.
	+ Cash: Payment in person or by other means, such as cheque or cash at the golf club's office.
* **Amount** (`payment_amount`, `number`, required: false): Enter the amount you wish to pay.
* **Payment Terms** (`payment_terms`, `select_multiple`, required: false):
	+ Monthly: Payment on a monthly basis.
	+ Quarterly: Payment on a quarterly basis.
	+ Annually: Payment on an annual basis.
* **Submit** (`submit`, `text`, required: false): Review your details and submit your membership renewal application.

## Tips
- Ensure you have all required information before filling out the form.
- Review your details carefully before submitting the form.
- If you have any issues with your membership renewal, contact your golf club administrator for assistance.
