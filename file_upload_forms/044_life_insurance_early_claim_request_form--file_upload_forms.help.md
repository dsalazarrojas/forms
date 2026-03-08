# Life Insurance Early Claim Request Form - Help Guide
## Purpose
This form is used to gather information for an early life insurance claim request. Please fill in all required fields accurately and completely to facilitate the claim process.

## How To Complete This Form
1. Click on the "Upload claim file" field to attach a supporting document related to the claim.
2. Enter the insured's name exactly as it appears on the policy.
3. Fill in the claim date, which is the date of the event that triggered the claim.
4. Provide a detailed description of the claim in the "claim description" field.
5. Enter the insurance policy number as it appears on the policy document.
6. Enter your phone number and email address (if applicable) so we can contact you regarding the claim.
7. If applicable, sign the claimant's signature field.
8. If applicable, enter the policy holder's name and sign the policy holder's signature field.
9. Fill in the claimant's name, address, phone number, and relationship with the policy.
10. Choose your type (individual, business, or group) in the claimant type field.
11. Select the type of policy (term, whole, or other) in the policy type field.
12. Enter the amount of the claim.
13. Click the submit button to send the form.

## Field-by-Field Explanation

* **Upload claim file** (`upload_claim_file`, text, optional): Attach a supporting document related to the claim. This field is not required but recommended for a smooth claim process.
* **Insured name** (`insured_name`, text, required): Enter the insured's name exactly as it appears on the policy.
* **Claim date** (`claim_date`, date, required): Enter the date of the event that triggered the claim.
* **Claim description** (`claim_description`, note, required): Provide a detailed description of the claim.
* **Insurance policy number** (`insurance_policy_number`, text, required): Enter the insurance policy number as it appears on the policy document.
* **Phone number** (`phone_number`, text, required): Enter your phone number so we can contact you regarding the claim.
* **Email address** (`email_address`, email, optional): Enter your email address so we can contact you regarding the claim.
* **Claimant's signature** (`claimant_signature`, date, optional): If applicable, sign this field to confirm your identity.
* **Insurance provider** (`insurance_provider`, text, optional): If applicable, enter the insurance provider's name and contact information.
* **Policy holder's signature** (`policy_holder_signature`, date, optional): If applicable, sign this field to confirm your identity.
* **Claimant's name** (`claimant_name`, text, optional): Enter your name.
* **Claimant's address** (`claimant_address`, text, optional): Enter your address.
* **Claimant's phone number** (`claimant_phone`, text, optional): Enter your phone number.
* **Policy holder** (`policy_holder`, text, optional): If applicable, enter the policy holder's name.
* **Claimant's relationship** (`claimant_relationship`, select_one, required): Choose how you are related to the policy (Claimant is an Insured, Claimant is a Claimant, Claimant is a Policy Holder).
* **Claimant type** (`claimant_type`, select_multiple, required): Choose your type (Individual, Business, Group, Policy Holder).
* **Policy type** (`policy_type`, select_one, optional): Choose the type of policy (Term, Whole, Other).
* **Claim amount** (`claim_amount`, number, required): Enter the amount of the claim.
* **Submit button** (`submit_button`, text, optional): Click to send the form to complete the claim request process.
