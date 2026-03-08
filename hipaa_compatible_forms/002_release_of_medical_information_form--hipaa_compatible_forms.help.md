# Release Of Medical Information Form - Help Guide
## Purpose
This form is used by patients to release their medical records to another person or entity. It allows patients to provide their consent and identify the purpose and recipient of the information release.

## How To Complete This Form
To complete this form, follow these steps:

1.  **Fill out the owner's information**: Enter your name, title, address, phone number, and email.
2.  **Choose the reason for releasing information**: Select the type of medical information you want to release (e.g., medical records, other health information).
3.  **Specify the information recipient**: Enter the name, date of birth, title, address, phone number, and email of the person or entity receiving the information.
4.  **Specify the purpose of releasing the information**: Enter the purpose of releasing the information (e.g., for insurance, medical treatment).
5.  **Provide your signature and date**: Sign and date the form to confirm your consent.
6.  **Provide the authorized person's signature and date**: If someone else is authorized to release your information, sign and date their consent.

## Field-by-Field Explanation
- **Owner Information** (`owner_information`, text, required): Enter your name, title, address, phone number, and email.
  - This field is used to collect your contact information.
- **Authorization** (`authorization`, select_one, optional): Choose whether you are authorized or not authorized to release your medical records.
  - This field is used to determine your consent to release your medical records.
- **Reason for Release** (`reason_for_release`, text, optional): Select the type of medical information you want to release (e.g., medical records, other health information).
  - This field is used to identify the type of information you are releasing.
- **What Information to Release** (`what_info_be_released`, select_one, optional): Select the specific type of medical information you want to release (e.g., medical records, other health information).
  - This field is used to specify the type of information you are releasing.
- **Consent to Release Info** (`consent_to_release_info`, select_one, optional): Choose whether you consent or not to release your medical information.
  - This field is used to confirm your consent to release your medical records.
- **Name of Person Receiving Info** (`name_of_person_receiving_info`, text, optional): Enter the name of the person or entity receiving your medical information.
  - This field is used to identify the person or entity receiving your medical records.
- **Date of Birth of Person Receiving Info** (`date_of_birth_of_person_receiving_info`, date, optional): Enter the date of birth of the person or entity receiving your medical information.
  - This field is used to identify the person or entity receiving your medical records.
- **Purpose of Releasing Info** (`purpose_of_releasing_info`, text, optional): Enter the purpose of releasing your medical information (e.g., for insurance, medical treatment).
  - This field is used to identify the reason for releasing your medical records.
- **Signature Date** (`signature_date`, date, optional): Enter the date of your signature.
  - This field is used to confirm the date of your signature.
- **Signature** (`signature`, note, optional): Sign your name to confirm your consent.
  - This field is used to confirm your consent to release your medical records.
- **Owner Signature** (`owner_signature`, note, optional): Sign your name to confirm your consent as the owner of the medical records.
  - This field is used to confirm your consent as the owner of the medical records.
- **Authorized Person Signature** (`authorized_person_signature`, note, optional): Sign the name of the person authorizing the release of your medical records.
  - This field is used to confirm the consent of the authorized person.
- **Authorized Person Signature Date** (`authorized_person_signature_date`, date, optional): Enter the date of the authorized person's signature.
  - This field is used to confirm the date of the authorized person's signature.
- **Owner's Name** (`owner_name`, text, optional): Enter your name as the owner of the medical records.
  - This field is used to identify yourself as the owner of the medical records.
- **Owner's Title** (`owner_title`, text, optional): Enter your title as the owner of the medical records.
  - This field is used to provide additional information about your title.
- **Owner's Address** (`owner_address`, text, optional): Enter your address as the owner of the medical records.
  - This field is used to provide your contact information.
- **Owner's Phone** (`owner_phone`, text, optional): Enter your phone number as the owner of the medical records.
  - This field is used to provide your phone number.
- **Owner's Email** (`owner_email`, email, optional): Enter your email as the owner of the medical records.
  - This field is used to provide your email address.
- **Authorized Person's Title** (`authorized_person_title`, text, optional): Enter the title of the person authorizing the release of your medical records.
  - This field is used to provide additional information about the authorized person's title.
- **Authorized Person's Address** (`authorized_person_address`, text, optional): Enter the address of the person authorizing the release of your medical records.
  - This field is used to provide their contact information.
- **Authorized Person's Phone** (`authorized_person_phone`, text, optional): Enter the phone number of the person authorizing the release of your medical records.
  - This field is used to provide their phone number.
- **Authorized Person's Email** (`authorized_person_email`, email, optional): Enter the email of the person authorizing the release of your medical records.
  - This field is used to provide their email address.
