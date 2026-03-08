<thinking>
This help guide will cover the Smart Contract Lease Execution Consent Form, ensuring that users understand its purpose, how to complete it, and what each field means.
</thinking>

# Smart Contract Lease Execution Consent Form - Help Guide
## Purpose
The Smart Contract Lease Execution Consent Form is a critical document that facilitates the execution of smart contracts for leasing transactions. It captures essential information from both the tenant and landlord to ensure a smooth and secure process. This form is essential for creating, managing, and executing smart contracts in the context of leasing.
## How To Complete This Form
To complete this form, follow these steps:

1.  Select the relevant options for "Tenant Consent" and "Landlord Consent" by choosing between 'Yes' or 'No'.
2.  In "Lease Execution Details", enter a detailed description of the lease execution process.
3.  Enter "Smart Contract" details, providing all necessary information about the smart contract.
4.  Provide both the "Tenant ID" and "Landlord ID" numbers.
5.  Choose the start and end dates for the lease term using the "Lease Start Date" and "Lease End Date" fields.
6.  Enter the lease duration in "Lease Term" using the time format.
7.  Enter the lease amount in "Lease Amount".
8.  Add any additional notes in "Notes", if necessary.
9.  Enter the email address of the party involved in "Email".
10. Provide the phone number of the party involved in "Phone".
11. If applicable, enter the date and time the contract was signed in "Contract Signed At" and the name of the person signing the contract in "Contract Signed By".

## Field-by-Field Explanation
- **Tenant Consent** (`tenant_consent`, select_multiple, required): This is where you select whether the tenant consents to the lease execution. Choose between 'Yes' or 'No' to confirm or deny your consent.
- **Landlord Consent** (`landlord_consent`, select_multiple, required): Similar to the Tenant Consent field, select whether the landlord consents to the lease execution. Choose between 'Yes' or 'No'.
- **Lease Execution Details** (`lease_execution_details`, text, required): Provide a detailed description of the lease execution process here.
- **Smart Contract** (`smart_contract`, text, required): Enter all the necessary details about the smart contract.
- **Tenant ID** (`tenant_id`, number, required): Enter the unique ID of the tenant.
- **Landlord ID** (`landlord_id`, number, required): Enter the unique ID of the landlord.
- **Lease Start Date** (`lease_date_start`, date, required): Select the start date of the lease term.
- **Lease End Date** (`lease_date_end`, date, required): Select the end date of the lease term.
- **Lease Term** (`lease_term`, time, required): Enter the duration of the lease term in time format.
- **Lease Amount** (`lease_amount`, number, required): Enter the total amount of the lease.
- **Notes** (`notes`, note, optional): Add any additional notes or comments about the lease execution.
- **Email** (`email`, email, required): Enter the email address of the party involved.
- **Phone** (`phone`, text, required): Enter the phone number of the party involved.
- **Contract Signed At** (`contract_signed_at`, date, optional): If applicable, enter the date and time the contract was signed.
- **Contract Signed By** (`contract_signed_by`, text, optional): If applicable, enter the name of the person signing the contract.
