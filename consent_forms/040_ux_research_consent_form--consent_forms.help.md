# ux_research_consent_form - Help Guide
## Purpose
The UX research consent form is used to obtain informed consent from participants before beginning a research study. This form ensures that participants are aware of their rights, the purpose and procedures of the study, and what they can expect during the research process.

## How To Complete This Form
1. Please review the form carefully and fill it out in its entirety. Each field is required to complete the form.
2. Provide your personal and contact information in the participant info section.
3. In the contact info section, select your preferred method of contact (e.g., phone, email, or other).
4. In the participant consent section, indicate your willingness to participate in the study.
5. Select your demographic info (Yes or No).
6. Choose your contact preference (Yes or No).
7. Enter your contact method (e.g., email or phone number).
8. Enter your email address and phone number.
9. Enter your address.
10. Enter the study details.
11. Enter the payment information (a number representing the payment amount).
12. Select your payment method (Yes or No).
13. Sign and date the participant signature section.
14. Sign and date the researcher signature section.
15. Enter the timestamp.

## Field-by-Field Explanation

* **Participant Info** (`participant_info`, `text`, required):
  Enter your name, age, and any other relevant information about yourself.
* **Contact Info** (`contact_info`, `text`, required):
  Enter your contact information such as your name, email address, and phone number.
* **Participant Consent** (`participant_consent`, `note`, required):
  Indicate your willingness to participate in the study.
* **Demographic Info** (`demographic_info`, `select_multiple`, required):
  Select whether you are Yes or No, but no further explanation is available as the options and its implications are not defined in the provided YAML file.
* **Contact Preference** (`contact_preference`, `select_one`, required):
  Choose your preferred method of contact (e.g., phone, email, or other).
* **Contact Method** (`contact_method`, `text`, required):
  Enter the method of contact you prefer (e.g., email or phone number).
* **Email** (`email`, `email`, required):
  Enter your email address.
* **Phone** (`phone`, `text`, required):
  Enter your phone number.
* **Address** (`address`, `text`, required):
  Enter your mailing address.
* **Study Details** (`study_details`, `text`, required):
  Enter the study details, such as its purpose and procedures.
* **Payment** (`payment`, `number`, required):
  Enter the payment amount.
* **Payment Method** (`payment_method`, `select_one`, required):
  Select whether you will receive payment or not.
* **Participant Signature** (`participant_signature`, `date`, required):
  Sign and date the participant signature section.
* **Researcher Signature** (`researcher_signature`, `date`, required):
  Sign and date the researcher signature section.
* **Timestamp** (`timestamp`, `time`, required):
  Enter the timestamp of when the form is completed.
