# Client Authorize Representative - Help Guide

## Purpose
This form is used to grant permission for a representative to act on behalf of a client in various business or financial matters.

## How To Complete This Form

1. Fill in your full legal name as it appears on your identification documents.
2. Enter your account or case number, if applicable.
3. Provide your email address for communication purposes.
4. Enter your representative's name as it appears on their identification documents.
5. Describe your relationship with your representative (e.g., spouse, attorney, family member, accountant).
6. Enter your representative's phone number for communication.
7. Enter your representative's email address for communication.
8. If you are granting limited access, specify the matters you wish to restrict.
9. Choose the level of access you wish to grant to your representative (Full Access, Information Only, or Limited Access).
10. If you have chosen Limited Access, select the duration of this authorization (Permanent/Until Revoked, One-time disclosure only, or Fixed period).
11. If you have chosen Fixed period, enter the expiration date for this authorization.
12. Create a secret word or PIN that your representative must provide when making calls.
13. Select whether you authorize the company to disclose your personal information to your representative.
14. Sign your full name as the client.

## Field-by-Field Explanation

* **Your Full Legal Name (The Client)** (`client_full_name`, text, required): Enter your full legal name as it appears on your identification documents.
* **Account or Case Number** (`client_account_number`, text, optional): If applicable, enter the account or case number for which you are granting authorization.
* **Your Email Address** (`client_email`, email, required): Enter your email address for communication purposes.
* **Representative Full Name** (`representative_name`, text, required): Enter your representative's full name as it appears on their identification documents.
* **Relationship to You** (`representative_relationship`, text, required): Describe your relationship with your representative (e.g., spouse, attorney, family member, accountant).
* **Representative Phone Number** (`representative_phone`, text, required): Enter your representative's phone number for communication.
* **Representative Email Address** (`representative_email`, email, optional): Enter your representative's email address for communication.
* **Level of Access Granted** (`authorization_level`, select_one, required): Choose the level of access you wish to grant to your representative (Full Access, Information Only, or Limited Access).
* **If 'Limited Access', specify matters** (`specific_matters`, text, optional): If you have chosen Limited Access, specify the matters you wish to restrict.
* **Duration of this Authorization** (`duration_of_authorization`, select_one, required): Choose the duration of this authorization (Permanent/Until Revoked, One-time disclosure only, or Fixed period).
* **Expiration Date (if fixed period)** (`expiration_date`, date, optional): If you have chosen Fixed period, enter the expiration date for this authorization.
* **Security verification for representative (Secret Word/PIN)** (`verification_question`, text, required): Create a secret word or PIN that your representative must provide when making calls.
* **I authorize the company to disclose my personal information to the named representative** (`legal_declaration`, select_one, required): Select whether you authorize the company to disclose your personal information to your representative.
* **Digital Signature (Type Full Name)** (`signature_digital`, text, required): Sign your full name as the client.
* **Date of Signature** (`date_of_signature`, date, required): Enter the date you signed this form.

## Tips

* Please ensure that the representative you are authorizing is aware of this form and understands their responsibilities.
* Review the scope of authorization carefully to ensure that you are granting the correct level of access.
* If you have any questions or concerns, please contact the relevant authorities or personnel for guidance.
