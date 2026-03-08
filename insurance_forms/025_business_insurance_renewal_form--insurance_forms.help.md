<thinking>
This form is used for business insurance renewal. To ensure you get the correct policy information and updates, please ensure that:
- The policy holder business name is correctly entered to match the policy details.
- The policy number is the existing identifier for the policy.
- The renewal date is accurate and correctly entered to avoid any delays or cancellations.
- For any requested changes, provide clear descriptions to avoid miscommunication.
- Select the correct billing preference to avoid any discrepancies in payment.
- Confirm acceptance of the renewal terms to avoid any issues.
</thinking>

# Business Insurance Renewal Form - Help Guide
## Purpose
The Business Insurance Renewal Form is used to gather information for the business insurance policy renewal process. This form ensures that policy details are accurate, and any changes are properly documented and communicated.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the policy holder's business name as it appears on the policy.
2. Provide the existing policy number for accurate reference.
3. Enter the correct renewal date to avoid any delays or cancellations.
4. If changes are required, select 'True' and describe the changes in the 'Requested changes' field.
5. If no changes are required, select 'False' in the 'Changes required' field.
6. Select the preferred billing method.
7. Confirm acceptance of the renewal terms by selecting 'True'.

## Field-by-Field Explanation
* **Policy holder** (`policy_holder`, text, required): Enter the business name on the policy.
* **Policy number** (`policy_number`, text, required): Enter the existing policy identifier.
* **Renewal date** (`renewal_date`, date, required): Enter the date when the policy renews.
* **Changes required** (`changes_required`, select_one, required): Select 'True' if changes are required, 'False' otherwise.
* **Requested changes** (`requested_changes`, text, optional): Describe any modifications requested.
* **Updated contact details** (`updated_contact_details`, text, optional): Provide any changes to contact information.
* **Billing preference** (`billing_preference`, select_one, optional): Select how you prefer to be billed (Annual, Monthly, Quarterly).
* **Agree to renewal terms** (`agree_to_renewal`, select_one, required): Confirm acceptance of renewal terms by selecting 'True'.
