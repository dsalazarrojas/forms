# Audition Tape Usage Consent Form - Help Guide
## Purpose
The Audition Tape Usage Consent Form is a document that requires you to provide consent for the usage of your audition tape in various capacities. This form is used by production companies to obtain permission from you to use your audition tape for specific purposes, including casting decisions, director review, and marketing materials.

## How To Complete This Form
1. Fill out the form completely and accurately with your personal information, including your full name, email, phone number, and mailing address.
2. Provide your date of birth for age verification purposes.
3. Indicate whether you are 18 years of age or older.
4. If you are a minor, provide the name and signature of your parent or guardian.
5. Specify the name of the production company and the name of the production or project you auditioned for.
6. Choose the type of content included in your audition tape.
7. Select the purpose of tape usage.
8. Choose the duration of tape usage.
9. Select the scope of tape distribution.
10. Indicate whether you will receive compensation for tape usage.
11. Check whether this consent is exclusive to this production.
12. Decide whether you can request tape deletion.
13. Agree to release the company from liability related to tape usage.
14. Sign the form with your full name as an electronic signature.
15. Provide the date of consent.

## Field-by-Field Explanation

* **Performer Full Name** (`performer_full_name`, `text`, `required`): Please enter your full legal name as it appears on your official documents.
* **Email Address** (`performer_email`, `email`, `required`): Enter your contact email address where you can be reached.
* **Phone Number** (`performer_phone`, `text`, `required`): Enter your contact phone number where you can be reached.
* **Mailing Address** (`performer_address`, `text`, `required`): Enter your full mailing address where you can be reached.
* **Date of Birth** (`date_of_birth`, `date`, `required`): Provide your date of birth for age verification purposes.
* **Age Verification** (`age_verification`, `select_one`, `required`): Indicate whether you are 18 years of age or older.
* **Parent or Guardian Name** (`parent_guardian_name`, `text`, `required if minor`): If you are a minor, enter the full name of your parent or guardian.
* **Parent or Guardian Signature** (`parent_guardian_signature`, `text`, `optional if minor`): If you are a minor, type the full name of your parent or guardian as a signature.
* **Production Company** (`production_company`, `text`, `required`): Enter the name of the production company.
* **Production Name** (`production_name`, `text`, `required`): Enter the name of the production or project you auditioned for.
* **Audition Date** (`audition_date`, `date`, `required`): Provide the date of the audition recording.
* **Role Auditioned For** (`role_auditioned`, `text`, `required`): Enter the name of the role you auditioned for.
* **Tape Content** (`tape_content`, `select_multiple`, `required`): Choose the type of content included in your audition tape.
* **Usage Purpose** (`usage_purpose`, `select_multiple`, `required`): Select the purpose of tape usage.
* **Usage Duration** (`usage_duration`, `select_one`, `required`): Choose the duration of tape usage.
* **Distribution Scope** (`distribution_scope`, `select_one`, `required`): Select the scope of tape distribution.
* **Compensation for Usage** (`compensation_for_usage`, `select_one`, `required`): Indicate whether you will receive compensation for tape usage.
* **Exclusivity Clause** (`exclusivity_clause`, `select_one`, `required`): Check whether this consent is exclusive to this production.
* **Deletion Request** (`deletion_request`, `select_one`, `required`): Decide whether you can request tape deletion.
* **Liability Release** (`liability_release`, `select_one`, `required`): Agree to release the company from liability related to tape usage.
* **Performer Signature** (`performer_signature`, `text`, `required`): Type your full name as an electronic signature.
* **Signature Date** (`signature_date`, `date`, `required`): Provide the date of consent.
