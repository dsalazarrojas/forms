<thinking>
The form "residence_verification_form" is designed to collect information about a residential property's tenant or occupant's contact details and signature, which is essential for real estate agents to verify the property's status. This form will help agents gather accurate and up-to-date information about the tenant's contact method, name, relationship with the property, and signatures. The form should only be completed by authorized personnel to ensure data accuracy and security. Please note that this form should not be filled out if the property is not under the agent's management or control.
</thinking>

# residence_verification_form - Help Guide
## Purpose
The "residence_verification_form" is designed to collect verification information about a residential property's tenant or occupant's contact details and signatures. This form helps real estate agents to confirm the property's status and ensure accurate records.

## How To Complete This Form
1. Select the correct contact method by choosing from "phone", "email", or "in person".
2. Enter the name of the contact person.
3. Choose the relationship between the contact person and the property (e.g., "landlord", "property manager", or "other").
4. Leave a note for the tenant's signature (if applicable).
5. If the property is managed by a third party (landlord), the landlord's signature should be included.
6. Enter the name of the housing provider (if applicable).

## Field-by-Field Explanation
* **address** (`address`, text, required/optional): Enter the address of the property.
* **date_of_last_contact** (`date_of_last_contact`, date, required/optional): Enter the date of the last contact with the contact person.
* **contact_method** (`contact_method`, select_one, required/optional): Choose the contact method by selecting from "phone", "email", or "in person".
* **contact_name** (`contact_name`, text, required/optional): Enter the name of the contact person.
* **contact_relationship** (`contact_relationship`, select_one, required/optional): Choose the relationship between the contact person and the property (e.g., "landlord", "property manager", or "other").
* **tenant_signature** (`tenant_signature`, note, required/optional): Leave a note for the tenant's signature (if applicable).
* **landlord_signature** (`landlord_signature`, note, required/optional): Leave a note for the landlord's signature (if applicable).
* **housing_provider** (`housing_provider`, text, required/optional): Enter the name of the housing provider (if applicable).
