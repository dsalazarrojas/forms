<thinking>...</thinking>

# Vendor Approval Authorization Form - Help Guide
## Purpose
This form is used to collect information about a vendor, including their name, address, and contact details. It also captures contract-related information, such as contract type, terms, and date. The form is typically used for internal approval and management purposes.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the vendor's name, address, and email address in the corresponding fields.
2. Provide the contract date and number.
3. Select the contract type and vendor type from the available options.
4. Add any contract terms or notes in the contract terms field.
5. Select the people assigned to manage the vendor.
6. Choose the status of the vendor.

## Field-by-Field Explanation
* **Vendors Name** (`vendor_name`, text, required): Enter the name of the vendor, e.g., XYZ Corporation.
* **Business Name** (`business_name`, text, required): Enter the business name of the vendor, e.g., ABC Inc.
* **Address** (`address`, text, required): Enter the vendor's address, including street, city, state, and zip code.
* **Email** (`email`, email, required): Enter the vendor's email address.
* **Phone** (`phone`, text, required): Enter the vendor's phone number.
* **Contract Date** (`contract_date`, date, required): Enter the date the contract was signed.
* **Contract Number** (`contract_number`, text, required): Enter the contract number.
* **Contract Type** (`contract_type`, select_one, required): Select the type of contract with the vendor, e.g., Service Agreement.
* **Contract Terms** (`contract_terms`, note, required): Enter any additional terms or conditions of the contract.
* **Vendor Type** (`vendor_type`, select_one, required): Select the type of vendor, e.g., Supplier.
* **Assigned To** (`assigned_to`, select_multiple, required): Select the people assigned to manage the vendor.
* **Status** (`status`, select_one, required): Choose the status of the vendor, e.g., Active.
* **Created At** (`created_at`, date, required): This field is automatically populated by the system and should not be edited.
