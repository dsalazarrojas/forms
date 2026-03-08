# Apartment Lease Agreement - Help Guide
## Purpose
This form is used to create a comprehensive lease agreement between a landlord and a tenant for an apartment rental property. It captures essential details such as lease dates, rent amount, payment terms, and other conditions to ensure a smooth and legal leasing process.

## How To Complete This Form

1.  Start by filling out the **Lease Agreement Date** field with the date you are signing the lease.
2.  Enter the **Landlord or Property Owner Name**, which is the name of the person or entity signing the lease.
3.  Provide the **Landlord address**, which should match the address of the rental property.
4.  Enter the **Landlord Email**, which is the contact information for the landlord.
5.  Fill out the **Landlord Phone Number**, which is the contact number for the landlord.
6.  Enter the **Tenant Full Name**, which is the name of the person signing the lease.
7.  Enter the **Tenant Current Address**, which is the address of the tenant's current residence.
8.  Enter the **Tenant Email**, which is the contact information for the tenant.
9.  Fill out the **Tenant Phone Number**, which is the contact number for the tenant.
10. Enter the **Tenant Date of Birth** for identification purposes.
11. Check the **Is there a co-tenant or additional occupant?** field to indicate if there is another person living with the tenant.
12. If you answered 'True' to the previous question, enter the **Co-tenant Full Name**.
13. Enter the **Property Address Being Rented**, which is the address of the rental property.
14. Fill out the **Unit or Apartment Number**, which is the number of the unit or apartment.
15. Enter the **Lease Start Date**, which is the date the lease begins.
16. Enter the **Lease End Date**, which is the date the lease ends.
17. Fill out the **Lease Term in Months**, which is the duration of the lease.
18. Enter the **Monthly Rent Amount**, which is the rent price per month.
19. Enter the **Rent Due Date Each Month**, which is the day of the month when rent is due.
20. Fill out the **Late Fee for Overdue Rent** if applicable.
21. Enter the **Security Deposit Amount**, which is the initial payment made by the tenant.
22. Fill out the **When Security Deposit is Due**, which is the date the security deposit is due.
23. Select the **Utilities Included in Rent** that apply, which are:
    *   Water
    *   Electricity
    *   Gas
    *   Garbage
    *   Internet
    *   Cable
    *   None
24. Fill out the **Utilities Tenant is Responsible For**, which includes any additional utilities not included in the rent.
25. Select the **Pet Policy** that applies, which is:
    *   No pets allowed
    *   Cats only
    *   Dogs only
    *   Pets allowed with deposit
    *   All pets allowed
26. If pets are allowed, enter the **Pet Deposit Amount**.
27. Select the **Smoking Policy** that applies, which is:
    *   No smoking allowed
    *   Smoking allowed
    *   Smoking only on balcony
    *   Smoking in designated areas
28. Select the **Parking Included** that applies, which is:
    *   Yes, included
    *   Yes, additional fee
    *   Street parking only
    *   No parking available
29. If parking is not included, fill out the **Monthly Parking Fee**.
30. Fill out the **Tenant Maintenance Responsibilities**, which are any maintenance tasks assigned to the tenant.
31. Select the **Landlord Agrees** to the lease terms.
32. Select the **Tenant Agrees** to the lease terms.
33. Fill out the **Landlord Signature Date**, which is the date the landlord signs the lease.
34. Fill out the **Tenant Signature Date**, which is the date the tenant signs the lease.

## Field-by-Field Explanation

*   **Lease Agreement Date** (`lease_date`, date, required): The date on which this lease agreement is being signed.
*   **Landlord or Property Owner Name** (`landlord_name`, text, required): The name of the person or entity signing the lease.
*   **Landlord Address** (`landlord_address`, text, required): The address of the rental property.
*   **Landlord Email** (`landlord_email`, email, required): The contact information for the landlord.
*   **Landlord Phone Number** (`landlord_phone`, text, required): The contact number for the landlord.
*   **Tenant Full Name** (`tenant_name`, text, required): The name of the person signing the lease.
*   **Tenant Current Address** (`tenant_address`, text, required): The address of the tenant's current residence.
*   **Tenant Email** (`tenant_email`, email, required): The contact information for the tenant.
*   **Tenant Phone Number** (`tenant_phone`, text, required): The contact number for the tenant.
*   **Tenant Date of Birth** (`tenant_dob`, date, required): The date of birth of the tenant for identification purposes.
*   **Is there a co-tenant or additional occupant?** (`co_tenant`, select_one, required): A yes or no question about co-tenants.
*   **Co-tenant Full Name** (`co_tenant_name`, text, required): The name of any additional person living with the tenant.
*   **Property Address Being Rented** (`property_address`, text, required): The address of the rental property.
*   **Unit or Apartment Number** (`unit_number`, text, required): The number of the unit or apartment.
*   **Lease Start Date** (`lease_start_date`, date, required): The date the lease begins.
*   **Lease End Date** (`lease_end_date`, date, required): The date the lease ends.
*   **Lease Term in Months** (`lease_term_months`, number, required): The duration of the lease in months.
*   **Monthly Rent Amount** (`monthly_rent`, number, required): The rent price per month.
*   **Rent Due Date Each Month** (`rent_due_date`, number, required): The day of the month when rent is due.
*   **Late Fee for Overdue Rent** (`late_fee`, text, required): A penalty for late payments if applicable.
*   **Security Deposit Amount** (`security_deposit`, number, required): The initial payment made by the tenant.
*   **When Security Deposit is Due** (`deposit_due_date`, date, required): The date the security deposit is due.
*   **Utilities Included in Rent** (`utilities_included`, select_multiple, required): A list of utilities that are included in the rent.
*   **Utilities Tenant is Responsible For** (`utilities_tenant_pays`, text, required): Any additional utilities not included in the rent.
*   **Pet Policy** (`pet_policy`, select_one, required): A rule about pets in the rental property.
*   **Pet Deposit Amount** (`pet_deposit`, number, required): A deposit for pets if they are allowed.
*   **Smoking Policy** (`smoking_allowed`, select_one, required): A rule about smoking in the rental property.
*   **Parking Included** (`parking_included`, select_one, required): A rule about parking in the rental property.
*   **Monthly Parking Fee** (`parking_fee`, number, required): A fee for parking if it is not included.
*   **Tenant Maintenance Responsibilities** (`maintenance_responsibility`, text, required): Any maintenance tasks assigned to the tenant.
*   **Landlord Agrees** (`landlord_agrees`, select_one, required): A confirmation from the landlord about the lease terms.
*   **Tenant Agrees** (`tenant_agrees`, select_one, required): A confirmation from the tenant about the lease terms.
*   **Landlord Signature Date** (`landlord_signature_date`, date, required): The date the landlord signs the lease.
*   **Tenant Signature Date** (`tenant_signature_date`, date, required): The date the tenant signs the lease.
