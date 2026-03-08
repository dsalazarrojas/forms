# Tenant Billing Form - Help Guide
## Purpose
The Tenant Billing Form is used to collect and manage billing information from tenants, including rent amount, payment method, payment status, and other relevant details.

## How To Complete This Form
1. **Enter the tenant's name**: Type the name of the tenant in the `Landlord` field.
2. **Enter the rent amount**: Type the rent amount for the tenant in the `Rent Amount` field.
3. **Enter the payment date**: Select the date of the payment from the calendar.
4. **Select a payment method**: Choose the payment method (Cash, Check, Credit Card, or Online Payment) in the `Payment Method` field.
5. **Update payment status**: Select the payment status (Paid, Pending, or Overdue) in the `Payment Status` field.
6. (Optional) **Enter notes**: Provide any additional comments or notes about the payment in the `Notes` field.
7. **Enter email**: Type the tenant's email address in the `Email` field.
8. **Enter phone number**: Type the tenant's phone number in the `Phone Number` field.
9. **Enter tenant address**: Type the tenant's address in the `Address` field.
10. **Enter landlord address**: Type the landlord's address in the `Landlord Address` field.
11. **Enter date of birth**: Select the tenant's date of birth from the calendar.
12. **Enter social security number**: Type the tenant's social security number in the `Social Security Number` field.

## Field-by-Field Explanation

* **Landlord (tenant_name)** (`tenant_name`, `text`, required/optional): Enter the tenant's name.
* **Rent Amount (rent_amount)** (`rent_amount`, `number`, required/optional): Enter the rent amount for the tenant.
* **Payment Date (payment_date)** (`payment_date`, `date`, required/optional): Select the payment date from the calendar.
* **Payment Method (payment_method)** (`payment_method`, `select_one`, required/optional): Choose a payment method (Cash, Check, Credit Card, or Online Payment) for the tenant.
* **Payment Status (payment_status)** (`payment_status`, `select_multiple`, required/optional): Select the payment status (Paid, Pending, or Overdue) for the tenant.
* **Notes (notes)** (`notes`, `note`, optional/optional): Provide any additional comments or notes about the payment.
* **Email (email)** (`email`, `email`, optional/optional): Enter the tenant's email address.
* **Phone Number (phone_number)** (`phone_number`, `text`, optional/optional): Enter the tenant's phone number.
* **Address (tenant_address)** (`tenant_address`, `text`, optional/optional): Enter the tenant's address.
* **Landlord Address (landlord_address)** (`landlord_address`, `text`, optional/optional): Enter the landlord's address.
* **Date of Birth (date_of_birth)** (`date_of_birth`, `date`, optional/optional): Select the tenant's date of birth from the calendar.
* **Social Security Number (social_security_number)** (`social_security_number`, `text`, optional/optional): Enter the tenant's social security number.
