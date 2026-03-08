# Security Deposit Forfeiture Notice - Help Guide
## Purpose
The "Security Deposit Forfeiture Notice" form is used to inform tenants that their security deposit is being forfeited due to a breach of the rental agreement.

## How To Complete This Form
1. Enter the tenant's name in the "Tenant" field.
2. Enter the date the security deposit was forfeited in the "Date Forfeited" field.
3. Enter the amount of the security deposit being forfeited in the "Amount" field in decimal format.
4. Select the appropriate payment method(s) in the "Payment Method" field.
5. If the tenant plans to pay the forfeited amount, enter the date of payment in the "Date Paid" field.
6. Indicate whether the notice has been served to the tenant by selecting "Yes" or "No" in the "Notice Served" field.
7. Select the method used to serve the notice in the "Notice Method" field.
8. Add any additional comments in the "Comments" field.

## Field-by-Field Explanation

* **Security Deposit Forfeiture Notice** (`security_deposit_forfeiture_notice`, text, optional): This is the title of the form, which should be filled out with the specific reason for forfeiture.
* **Tenant** (`tenant_name`, text, optional): Enter the name of the tenant who is being given notice.
* **Date Forfeited** (`date_forfeited`, date, optional): Enter the date the security deposit was forfeited.
* **Amount** (`amount`, number, optional): Enter the amount of the security deposit being forfeited in decimal format.
* **Payment Method** (`payment_method`, select_multiple, optional): Select the method(s) the tenant plans to use to make payment (e.g. Certified Check, Electronic Transfer, Money Order, Cash, Credit/Debit Card).
* **Date Paid** (`payment_date`, date, optional): If the tenant plans to pay the forfeited amount, enter the date of payment.
* **Notice Served** (`notice_served`, select_one, optional): Indicate whether the notice has been served to the tenant by selecting "Yes" or "No".
* **Notice Method** (`notice_method`, select_one, optional): Select the method used to serve the notice (e.g. By Mail, By Hand).
* **Comments** (`comments`, text, optional): Add any additional comments related to the forfeiture of the security deposit.
