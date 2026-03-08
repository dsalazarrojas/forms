# Property Tax Claim Form - Help Guide
## Purpose
The Property Tax Claim Form is used to submit a claim for property tax relief. This form is typically used when an individual or organization feels that their property taxes are incorrect or unjust.

## How To Complete This Form
1. Start by filling in the property information fields. This includes selecting the property type and providing the address of the property.
2. Enter the tax identification number associated with the property.
3. Add the owner's name and address.
4. Enter the reasons for appeal, clearly stating the grounds for the claim.
5. If necessary, attach supporting documents to substantiate your claim.
6. Add any additional comments or information that may be helpful in processing the claim.
7. Select the options in the "Select Multiple" field as required.
8. Confirm or deny the "Select One" option.
9. Enter the email and phone number of the contact person.
10. Finally, add the date and time of the submission.

## Field-by-Field Explanation
* **Property Information** (`property_tax_claim_form`, text, required: false): Enter a brief description of the property.
* **Property Type** (`property_type`, select_one, required: false): Select the type of property from the options provided. This will help determine the tax rates and regulations that apply.
* **Address** (`address`, text, required: false): Provide the exact address of the property.
* **Tax Identification Number** (`tax_identification_number`, text, required: false): Enter the tax identification number associated with the property.
* **Owner's Name** (`owner_name`, text, required: false): Enter the name of the property owner.
* **Owner's Address** (`owner_address`, text, required: false): Enter the address of the property owner.
* **Reasons for Appeal** (`reasons_for_appeal`, text, required: false): Clearly state the reasons for the appeal, providing as much detail as possible.
* **Supporting Documents** (`supporting_documents`, text, required: false): Attach any relevant documents that support your claim.
* **Additional Comments** (`additional_comments`, text, required: false): Add any additional information that may be helpful in processing the claim.
* **Select Multiple** (`select_multiple`, select_multiple, required: false): Select one or more options as required.
* **Select One** (`select_one`, select_one, required: false): Confirm or deny the option.
* **Email** (`email`, email, required: false): Enter the contact email for the property owner or representative.
* **Phone** (`phone`, text, required: false): Enter the contact phone number for the property owner or representative.
* **Date** (`date`, date, required: false): Enter the date of the submission.
* **Time** (`time`, time, required: false): Enter the time of the submission.

Note: The required fields are marked as required: false, indicating that they are not mandatory to complete the form. Ensure you fill in all relevant fields to ensure a complete submission.
