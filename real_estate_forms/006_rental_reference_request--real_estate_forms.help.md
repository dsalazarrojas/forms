<thinking>
This form is used to collect rental reference information from end users. The purpose of this form is to gather specific details about a rental property, including its address, tenant's name, and rental dates. This information is likely to be used by property managers or real estate professionals for administrative tasks.

To determine if this form is being used correctly, we will need to review the input data against the following rules:

*   Each form submission should include a unique `form_id`
*   The tenant's name should match the name on file with the property management system
*   The property address should match the address on file with the property management system
*   The start date and end date should be within a reasonable time range (e.g., not before the year 2000 or after the current year)
*   There should not be duplicate entries for the same `form_id`

If any of these conditions are not met, the form submission will be rejected. Please ensure you have a clear understanding of these requirements before completing this form.
</thinking>

# Rental Reference Request - Help Guide
## Purpose
The Rental Reference Request form is used to collect rental reference information from end users. This form gathers specific details about a rental property, including its address, tenant's name, and rental dates.

## How To Complete This Form

1.  Fill in the "Rental Reference Request Form ID" field with a unique identifier for this form submission (e.g., a randomly generated number).
2.  Enter the tenant's name in the "tenant name" field.
3.  Enter the property address in the "property address" field.
4.  Enter the start date of the rental period in the "start date" field.
5.  Enter the end date of the rental period in the "end date" field.
6.  Provide any additional information about the landlord or property owner in the "landlord information" field.

## Field-by-Field Explanation

*   **Rental Reference Request Form ID** (`form_id`, number, required): A unique identifier for this form submission. This field should not be a duplicate of any existing form ID in the system.
*   **Tenant Name** (`tenant_name`, text, optional): The name of the tenant who rented the property.
*   **Property Address** (`property_address`, text, optional): The address of the rental property.
*   **Start Date** (`start_date`, date, optional): The start date of the rental period.
*   **End Date** (`end_date`, date, optional): The end date of the rental period.
*   **Landlord Information** (`landlord_info`, text, optional): Any additional information about the landlord or property owner.
