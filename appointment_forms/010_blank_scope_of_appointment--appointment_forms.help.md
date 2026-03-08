# Blank Scope Of Appointment - Help Guide
## Purpose
The "Blank Scope Of Appointment" form is designed to collect relevant information about an appointment, including the beneficiary's details, appointment specifics, and topics to be discussed.

## How To Complete This Form
To complete this form, follow these steps:

1. Confirm the scope of the appointment by reading the confirmation header.
2. Enter the Beneficiary's Name in the corresponding field.
3. Provide the Beneficiary's Phone Number in the next field.
4. Enter the Beneficiary's Address in the following field.
5. Select the Date of Appointment using the date picker.
6. Choose the Time of Appointment using the time picker.
7. Enter the Appointment Location in the text field.
8. Select all that apply from the Topics to be Discussed options.
9. Enter the Agent's Name in the text field.
10. Provide the Agent's Phone Number in the text field.
11. Read the agreement section carefully and select whether you agree to the scope of this appointment.

## Field-by-Field Explanation
* **-- Scope of Appointment Confirmation --** (`confirmation_header`, `note`, `false`): This is a confirmation section that briefly explains the purpose and scope of the appointment.
* **Beneficiary Name** (`beneficiary_name`, `text`, `true`): Enter the name of the beneficiary, as it will be used to identify them.
* **Beneficiary Phone Number** (`beneficiary_phone`, `text`, `true`): Enter the phone number of the beneficiary for easy contact.
* **Beneficiary Address** (`beneficiary_address`, `text`, `true`): Enter the address of the beneficiary, including any necessary details.
* **Date of Appointment** (`appointment_date`, `date`, `true`): Select the date of the appointment using the date picker.
* **Time of Appointment** (`appointment_time`, `time`, `true`): Choose the time of the appointment using the time picker.
* **Appointment Location** (`appointment_location`, `text`, `true`): Enter the location where the appointment will take place.
* **-- Topics to be Discussed --** (`topics_header`, `note`, `false`): This is a header indicating that you need to select all applicable topics to be discussed during the appointment.
* **Products/Topics to be Discussed** (`discussed_topics`, `select_multiple`, `true`): Select all that apply from the provided options (Medicare Advantage, Prescription Drug Plans, Dental/Vision, Long Term Care, Life Insurance).
* **-- Agent Information --** (`agent_info_header`, `note`, `false`): This header indicates that you need to provide agent contact information.
* **Agent Name** (`agent_name`, `text`, `true`): Enter the name of the agent or representative.
* **Agent Phone Number** (`agent_phone`, `text`, `true`): Enter the phone number of the agent or representative.
* **-- Agreement --** (`agreement_header`, `note`, `false`): This is a section where you need to read and agree to the scope of the appointment.
* **I agree to the scope of this appointment** (`consent_agreement`, `select_one`, `true`): Select "True" to agree to the scope of the appointment, or "False" if you disagree.
* **Date of Agreement** (`signature_date`, `date`, `true`): Enter the date you agree to the scope of the appointment.
