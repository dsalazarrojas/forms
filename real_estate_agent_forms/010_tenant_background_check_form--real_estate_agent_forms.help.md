<thinking>
This help guide is intended to provide end-users with a clear understanding of the purpose and usage of the Tenant Background Check Form. Before proceeding, it's essential to note that the form is designed to collect information from tenants, ensuring the accuracy and thoroughness of the data provided. To avoid duplication and ensure the effectiveness of the form, it's crucial to complete it in the correct sequence, from page 1 to page n.
</thinking>

# Tenant Background Check Form - Help Guide
## Purpose
The Tenant Background Check Form is a crucial document that aids in the process of verifying tenant information, ensuring they are suitable candidates for renting or leasing a property.

## How To Complete This Form
- Start by filling out the form page by page, following the sequence of pages as presented.
- Ensure each page is filled out completely before proceeding to the next.
- Take your time to provide accurate information, especially for fields that require more attention, like employment status and previous employers.

## Field-by-Field Explanation
### Page 1: First Name
* **First Name** (`tenant_first_name`, `text`, required: false): This is the first name of the tenant, typically the given name or the name that is most commonly used.

### Page 2: Last Name
* **Last Name** (`tenant_last_name`, `text`, required: false): This is the last name of the tenant.

### Page 3: Date of Birth
* **Date of Birth** (`tenant_date_of_birth`, `date`, required: false): Enter the tenant's date of birth in the correct format (MM/DD/YYYY).

### Page 4: Address
* **Address** (`tenant_address`, `text`, required: false): Provide the tenant's current address, including the house number and street name.

### Page 5: City
* **City** (`tenant_city`, `text`, required: false): Enter the city where the tenant resides or has their business.

### Page 6: State
* **State** (`tenant_state`, `text`, required: false): Select the state in which the tenant resides or operates their business.

### Page 7: Zip
* **Zip** (`tenant_zip`, `number`, required: false): Enter the zip code of the tenant's current address.

### Page 8: Employment Status
* **Employment Status** (`tenant_employment_status`, `select_one`, required: false): Choose one of the following:
  - Employed: The tenant has a steady income and job.
  - Self-Employed: The tenant operates their own business or has a non-traditional employment arrangement.
  - Unemployed: The tenant does not currently have a job.

### Page 9: Occupations
* **Occupations** (`tenant_occupations`, `select_multiple`, required: false): Select all occupations the tenant has had or currently holds.

### Page 10: Education
* **Education** (`tenant_education`, `text`, required: false): Provide any relevant educational background that the tenant wishes to disclose.

### Page 11: Previous Employers
* **Previous Employers** (`tenant_previous_employers`, `text`, required: false): List any previous employers, workplaces, or organizations the tenant has been associated with.

### Page 12: Crime Record
* **Crime Record** (`tenant_crime_record`, `select_one`, required: false): Choose one of the following:
  - None: The tenant has no record.
  - True: The tenant has a crime record.
  Please note that selecting "True" implies the tenant has a crime record and might affect the suitability of the lease or rental agreement.

## Tips
- Ensure you fill out the form honestly, accurately, and truthfully to avoid any complications with the rental or lease process.
- If you're unsure about any field, refer back to this guide for clarification.
- If you need help or have questions, don't hesitate to reach out to your property manager or landlord.
