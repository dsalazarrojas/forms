# Pacemaker Device Check Form - Help Guide
## Purpose
The Pacemaker Device Check Form is used to monitor and maintain pacemaker devices, ensuring they are functioning correctly and efficiently.
## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the patient's information, including their name and contact details.
2. Select the follow-up appointments that need to be scheduled for the patient.
3. Specify the device's model, type, and current status.
4. Record the device's performance, including battery charge, software and hardware updates, and follow-up appointments.
5. Provide any additional notes or comments about the patient's conversation and counseling.
6. Document any device reprogramming or replacement plans.
7. Confirm the form is complete by signing it.

## Field-by-Field Explanation
* **Patient Information** (`patient_information`, text, required): Enter the patient's name and contact details.
* **Device Follow-ups** (`device_follow_ups`, number, optional): Schedule follow-up appointments for the patient.
* **Patient Consent** (`patient_consent`, select_one, optional): Specify the patient's consent status.
* **Device Model** (`device_model`, text, optional): Record the pacemaker device's model number.
* **Device Type** (`device_type`, text, optional): Specify the pacemaker device's type.
* **Date of Last Follow-up** (`date_of_last_follow_up`, date, optional): Record the date of the last follow-up appointment.
* **Time of Last Follow-up** (`time_of_last_follow_up`, time, optional): Record the time of the last follow-up appointment.
* **Notes** (`notes`, note, optional): Enter any additional comments or notes about the patient's conversation and counseling.
* **Device Serial Number** (`device_serial_number`, text, optional): Record the pacemaker device's serial number.
* **Device Manufacturer** (`device_manufacturer`, text, optional): Specify the pacemaker device's manufacturer.
* **Device Software Version** (`device_software_version`, text, optional): Record the pacemaker device's software version.
* **Device Hardware Version** (`device_hardware_version`, text, optional): Record the pacemaker device's hardware version.
* **Device Battery Charge** (`device_battery_charge`, text, optional): Record the pacemaker device's battery charge level.
* **Device Status** (`device_status`, select_one, optional): Specify the pacemaker device's status as Functional or Nonfunctional.
* **Device Replacement Status** (`device_replacement_status`, select_one, optional): Specify whether the pacemaker device needs replacement.
* **Device Next Follow-up** (`device_next_follow_up`, date, optional): Record the date of the next follow-up appointment.
* **Device Last Battery Charge** (`device_last_battery_charge`, date, optional): Record the date of the last battery charge.
* **Device Last Software Update** (`device_last_software_update`, date, optional): Record the date of the last software update.
* **Device Last Hardware Update** (`device_last_hardware_update`, date, optional): Record the date of the last hardware update.
* **Device Next Battery Charge** (`device_next_battery_charge`, date, optional): Record the date of the next battery charge.
* **Patient Conversation** (`patient_conversation`, text, optional): Enter any notes about the patient's conversation.
* **Patient Counseling** (`patient_counseling`, text, optional): Enter any notes about the patient's counseling.
* **Device Reprogramming** (`device_reprogramming`, text, optional): Record any notes about device reprogramming.
* **Device Reprogramming Notes** (`device_reprogramming_notes`, text, optional): Record any additional notes about device reprogramming.
* **Patient Signature** (`patient_signature`, text, optional): Record the patient's signature.
* **Doctor Signature** (`doctor_signature`, text, optional): Record the doctor's signature.
* **Device Check Complete** (`device_check_complete`, select_one, optional): Confirm that the device check is complete.
