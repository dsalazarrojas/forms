<thinking>
To create a user-facing help guide for the "Security Deposit Forfeiture Notice" form, I need to consider the following: 
- The form purpose is to provide a notice to tenants when their security deposit is being forfeited due to a breach of the rental agreement. 
- This form is likely used by property managers or landlords to inform tenants about the deposit being returned or forfeited. 
- The form may need to be filled out for tenants who are being given notice that their security deposit is being forfeited due to non-payment of rent, damage to the rental property, or other breach of the agreement. 
- The form may also be used to request that the tenant pay back the forfeited amount or to confirm whether the tenant has received the notice. 
The "Security Deposit Forfeiture Notice" form should be completed by the tenant or their representative, and the information should be accurate and up-to-date, as it is a formal document. 
The "Date Forfeited" field should be completed with the date the security deposit was forfeited. 
The "Amount" field should be filled out in decimal format. 
The "Payment Method" field is a multiple selection field, allowing the user to select one or more methods for payment. 
The "Date Paid" field should be filled out if the tenant plans to pay the forfeited amount. 
The "Notice Served" field should indicate whether the notice has been served to the tenant. 
The "Notice Method" field should be filled out to indicate the method of serving the notice. 
The "Comments" field is an optional field where the tenant or representative can add any additional comments.</thinking>

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
