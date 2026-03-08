# Energy Credit Authorization Form - Help Guide
## Purpose
The Energy Credit Authorization Form is a document used to authorize energy credits for an account holder, ensuring transparency and accountability in the billing process.

## How To Complete This Form

1. Fill out the basic details section.
2. Choose the correct authorization type.
3. Enter account details.
4. Select authorization dates.
5. Enter account holder details.
6. Provide joint account holder details (if applicable).
7. Enter authorized representative details (if applicable).
8. Specify energy service provider and billing account details.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter the first name of the account holder.
* **Last Name** (`last_name`, text, required): Enter the last name of the account holder.
* **Email** (`email`, email, required): Enter the email address of the account holder.
* **Phone Number** (`phone_number`, text, required): Enter the phone number of the account holder (Format: 123-456-7890, or 1234567890).
* **Authorization Type** (`authorization_type`, select_one, required): Choose the type of authorization (Account Holder, Joint Account Holder, or Authorized Representative).
* **Account Number** (`account_number`, text, required): Enter the account number associated with the account.
* **Authorization Date** (`authorization_date`, date, required): Select the authorization date for the energy credits.
* **Expiration Date** (`expiration_date`, date, required): Select the expiration date for the energy credits.
* **Account Holder Name** (`account_holder_name`, text, required): Enter the name of the account holder.
* **Account Holder Address** (`account_holder_address`, text, required): Enter the address of the account holder.
* **Account Holder Phone Number** (`account_holder_phone`, text, required): Enter the phone number of the account holder.
* **Account Holder Email** (`account_holder_email`, email, required): Enter the email address of the account holder.
* **Joint Account Holder Name** (`joint_account_holder_name`, text, required): Enter the name of the joint account holder (if applicable).
* **Joint Account Holder Address** (`joint_account_holder_address`, text, required): Enter the address of the joint account holder (if applicable).
* **Joint Account Holder Phone Number** (`joint_account_holder_phone`, text, required): Enter the phone number of the joint account holder (if applicable).
* **Joint Account Holder Email** (`joint_account_holder_email`, email, required): Enter the email address of the joint account holder (if applicable).
* **Authorized Representative Name** (`authorized_representative_name`, text, required): Enter the name of the authorized representative (if applicable).
* **Authorized Representative Title** (`authorized_representative_title`, text, required): Enter the title of the authorized representative (if applicable).
* **Authorized Representative Phone Number** (`authorized_representative_phone`, text, required): Enter the phone number of the authorized representative (if applicable).
* **Authorized Representative Email** (`authorized_representative_email`, email, required): Enter the email address of the authorized representative (if applicable).
* **Energy Service Provider** (`energy_service_provider`, text, required): Enter the energy service provider associated with the authorization.
* **Billing Account** (`billing_account`, text, required): Enter the billing account associated with the authorization.
* **Form Footer** (`form_footer`, note, required): This is the footer of the form with additional information.

Note: Some fields are marked as "required" but actually have no impact on the form functionality. These are kept for consistency with the original YAML structure.
