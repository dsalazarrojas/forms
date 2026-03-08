# rent_schedules_form - Help Guide
## Purpose
The rent_schedules_form is used to collect rental schedule information, including date, time, rent frequency, and contact details for both tenants and landlords.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the "Rent Schedule Form" page.
2. Enter the date of the rental schedule in the "Date" field.
3. Enter the time of the rental schedule in the "Time" field.
4. Choose the rent frequency from the "Rent Frequency" dropdown menu.
5. Enter the tenant's email address in the "Tenant Email" field.
6. Enter the landlord's email address in the "Landlord Email" field.
7. Enter the tenant's phone number in the "Tenant Phone" field.
8. Enter the landlord's phone number in the "Landlord Phone" field.
9. Enter the rent amount in the "Rent Amount" field.

## Field-by-Field Explanation
* **Rent Schedule Form** (`rent_schedule_form`, text, required): This is the main page of the form, where you'll enter the rental schedule information.
* **Date** (`date`, date, required): Enter the date of the rental schedule.
* **Time** (`time`, time, required): Enter the time of the rental schedule.
* **Rent Frequency** (`rent_frequency`, select_one, required): Choose how often the rent is paid (weekly, biweekly, monthly, or quarterly).
* **Tenant Email** (`tenant_email`, email, optional): Enter the tenant's email address (leave blank if not applicable).
* **Landlord Email** (`landlord_email`, email, optional): Enter the landlord's email address (leave blank if not applicable).
* **Tenant Phone** (`tenant_phone`, text, optional): Enter the tenant's phone number (leave blank if not applicable).
* **Landlord Phone** (`landlord_phone`, text, optional): Enter the landlord's phone number (leave blank if not applicable).
* **Rent Amount** (`rent_amount`, number, required): Enter the amount of rent to be paid.

## Tips
- Ensure that all required fields (Date, Time, Rent Frequency, and Rent Amount) are filled out.
- Enter valid email and phone numbers for both tenants and landlords.
- Review your input before submission to ensure accuracy.
