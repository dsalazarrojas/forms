<thinking>
This form will be used in a virtual medical visit setup, where patients can input their information remotely. We need to verify that the form isn't being used for other purposes than the intended virtual visits, and that it's not being duplicated. This form includes fields for patient information, consent, date and time of the virtual visit, medical information, emergency contact, insurance details, and signatures from both the patient and the physician.

The fields in this form are meant to collect information about patients who are participating in virtual visits. The fields should be filled out by the patient before the virtual visit, and the form should be saved as a record for future reference.

The form's fields should include:

* Patient Info: This field will collect general information about the patient.
* Consent: This field will ask the patient if they are willing to participate in the virtual visit.
* Date & Time: This field will collect the date and time of the virtual visit.
* Medical Info: This field will collect any relevant medical information that the patient has.
* Emergency Contact: This field will collect the contact information of an emergency contact person.
* Insurance: This field will collect the patient's insurance information.
* Patient Signature: This field will collect the patient's signature, indicating that they have read and understood the form.
* Physician Signature: This field will collect the physician's signature, indicating that they have reviewed the patient's information and are ready to proceed with the virtual visit.

The form should not be used for other purposes than virtual visits, and any attempts to use it for other purposes should be blocked.

</thinking>

# Dermtology Virtual Visits Consent Form - Help Guide

## Purpose
This form is intended for patients to provide their information and consent for virtual visits with a physician.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the Patient Info field with your personal details.
2. Answer the Consent question with a "Yes" or "No" to indicate your willingness to participate in the virtual visit.
3. Enter the Date & Time of the virtual visit.
4. Provide any relevant Medical Info.
5. Enter the contact information of an Emergency Contact person.
6. Enter your Insurance details.
7. Sign the Patient Signature field, indicating that you have read and understood the form.
8. Finally, sign the Physician Signature field, indicating that the physician has reviewed your information and is ready to proceed with the virtual visit.

## Field-by-Field Explanation

* **Patient Info** (`patient_info`, text, required): This field is where you will enter your name, address, and contact information.
* **Consent** (`consent`, select_multiple, required): Please answer "Yes" or "No" to indicate your willingness to participate in the virtual visit.
* **Date & Time** (`date_and_time`, date, required): Enter the date and time of the virtual visit.
* **Medical Info** (`medical_info`, text, required): Provide any relevant medical information that you think the physician should know before the virtual visit.
* **Emergency Contact** (`emergency_contact`, text, required): Enter the contact information of an emergency contact person, such as a family member or a friend.
* **Insurance** (`insurance`, text, required): Enter your insurance information, including your policy number and provider.
* **Patient Signature** (`patient_signature`, text, required): Sign your name to indicate that you have read and understood the form.
* **Physician Signature** (`physician_signature`, text, required): Sign your name to indicate that you have reviewed the patient's information and are ready to proceed with the virtual visit.
