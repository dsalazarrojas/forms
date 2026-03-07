<thinking>
This form is designed to collect information from property owners/agents for rental agreement purposes. The form aims to capture detailed information about the tenant, rental terms, and property details. 

Before starting this guide, please ensure that you have reviewed the form's internal logic and that the form is not already completed.

</thinking>

# property_rental_agreement_intake_form - Help Guide
## Purpose
This form is used to collect rental agreement information from property owners/agents for rental purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the tenant's information, including contact details.
2. Enter the address and rent details for the rental property.
3. Select the move-in date and rental length for the agreement.
4. Choose the type of lease and lease term.
5. Enter the rent amount and other payment information (if necessary).
6. Provide any additional information about the tenant, guarantor, and property.
7. Select the type and size of the property.
8. Choose the status of the property and select any additional features.

## Field-by-Field Explanation

* **Tenant Info** (tenant_info, text, required: false): Enter the tenant's name and contact information.
* **Contact Info** (contact_info, text, required: false): Enter the tenant's contact information, including email and phone number.
* **Address Info** (address_info, text, required: false): Enter the address of the rental property.
* **Rent Details** (rent_details, number, required: true): Enter the rent amount for the rental agreement.
* **Move-in Date** (move_in_date, date, required: true): Select the date the tenant plans to move in.
* **Rental Length** (rental_length, number, required: true): Select the length of the rental agreement (in months).
* **Lease Type** (lease_type, select_one, required: false): Choose the type of lease (month to month, month to month with option, year to year).
* **Lease Term** (lease_term, select_multiple, required: false): Select the lease term (6 months, 12 months, 18 months, 24 months).
* **Rent Amount** (rent_amount, number, required: true): Enter the rent amount for the rental agreement.
* **Payment Info** (payment_info, text, required: false): Enter any additional payment information (if necessary).
* **Guarantor Info** (guarantor_info, text, required: false): Enter any guarantor information (if necessary).
* **Property Details** (property_details, text, required: false): Enter any additional information about the property.
* **Property Type** (property_type, select_one, required: false): Choose the type of property (residential, commercial, other).
* **Property Features** (property_features, select_multiple, required: false): Select any additional features of the property (parking available, elevator, other).
* **Landlord Info** (landlord_info, text, required: false): Enter any additional information about the landlord.
* **Agent Info** (agent_info, text, required: false): Enter any additional information about the agent.
* **Property Owner** (property_owner, select_one, required: false): Choose the owner of the property (owner, agent).
* **Rental Status** (rental_status, select_one, required: false): Choose the status of the rental property (available, rented, leased).
* **Property Size** (property_size, select_multiple, required: false): Select the size of the property (small, medium, large, extra large).
* **Additional Info** (additional_info, text, required: false): Enter any additional information about the rental.
* **Property Image** (property_image, text, required: false): Enter any additional image information about the property.
