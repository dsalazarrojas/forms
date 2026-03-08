# speech_therapy_service_agreement - Help Guide
## Purpose
The speech therapy service agreement is a form used to collect information and agreements related to speech therapy services between the client and the therapist.
## How To Complete This Form
To complete this form, simply fill out all the required fields and review the terms and conditions carefully.
## Field-by-Field Explanation

* **Client Information** (`client_information`, `text`, required): This field is meant to be filled out by the client with their name, address, and other relevant contact information.
* **Consent Date** (`consent_date`, `date`, required): This field is meant to be filled out by the client with the date they consent to the therapy sessions.
* **Start Date** (`start_date`, `date`, required): This field is meant to be filled out by the therapist with the start date of the therapy sessions.
* **End Date** (`end_date`, `date`, required): This field is meant to be filled out by the therapist with the end date of the therapy sessions.
* **Speech Therapy Goals** (`speech_therapy_goals`, `text`, optional): This field is meant to be filled out by the client with their goals for the therapy sessions.
* **Therapist** (`therapist`, `select_one`, required): This field is a dropdown list of available therapists, and the client is to select one from the list.
* **Therapy Duration** (`therapy_duration`, `number`, required): This field is meant to be filled out by the therapist with the number of sessions planned.
* **Session Frequency** (`session_frequency`, `number`, optional): This field is meant to be filled out by the therapist with the frequency of the sessions.
* **Payment Terms** (`payment_terms`, `text`, optional): This field is meant to be filled out by the client with their understanding of the payment terms and conditions.
* **Client Signature** (`client_signature`, `text`, required): This field is meant to be filled out by the client with their signature.
* **Therapist Signature** (`therapist_signature`, `text`, required): This field is meant to be filled out by the therapist with their signature.
* **Payment Terms Agreement** (`payment_terms_agreement`, `select_multiple`, required): This field is a dropdown list of available payment terms, and the client is to select one or more from the list.
* **Emergency Contact** (`emergency_contact`, `text`, optional): This field is meant to be filled out by the client with their emergency contact information.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, `text`, optional): This field is meant to be filled out by the client with their relationship to the emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, `text`, optional): This field is meant to be filled out by the client with the phone number of the emergency contact.
* **Emergency Contact Email** (`emergency_contact_email`, `email`, optional): This field is meant to be filled out by the client with the email of the emergency contact.
* **Medical Information** (`medical_information`, `text`, optional): This field is meant to be filled out by the client with their medical information.
* **Emergency Contact Permission** (`emergency_contact_permission`, `select_one`, optional): This field is a dropdown list of available permission options, and the client is to select one.
* **Payment Terms for Therapist** (`payment_terms_therapist`, `text`, optional): This field is meant to be filled out by the therapist with their payment terms.
* **Payment Terms for Client** (`payment_terms_client`, `text`, optional): This field is meant to be filled out by the client with their payment terms.
* **Consent Date (Client)** (`consent_date_client`, `date`, required): This field is meant to be filled out by the client with the date they consent to the therapy sessions.
* **Consent Date (Therapist)** (`consent_date_therapist`, `date`, required): This field is meant to be filled out by the therapist with the date they consent to the therapy sessions.
* **Payment Terms Agreement** (`payment_terms_agreement_client`, `select_multiple`, optional): This field is a dropdown list of available payment terms, and the client is to select one or more from the list.
* **Signature Date** (`signature_date`, `date`, required): This field is meant to be filled out by the therapist with the date they sign the agreement.
* **Therapist Comments** (`therapist_comments`, `text`, optional): This field is meant to be filled out by the therapist with their comments.
</thinking>

Note: I've assumed that some fields are required and some are optional based on the provided YAML. If you need to make any corrections, please let me know.
