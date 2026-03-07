<thinking>
This form is used to gather information about the transfer of healthcare services between two facilities. The form is designed to be completed by healthcare professionals to provide a detailed and accurate record of the transfer. This form should only be completed by authorized users and the information should be kept confidential. 
To ensure the form is completed correctly, please review the following instructions carefully.
</thinking>

# Healthcare Service Transfer Survey - Help Guide
## Purpose
The Healthcare Service Transfer Survey is used to record the transfer of healthcare services between two facilities. This form is essential for maintaining accurate records and facilitating smooth transitions of care.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the name of Facility A where the patient is currently receiving care.
2. Enter the name of Facility B where the patient will receive care after transfer.
3. Enter the date of the service transfer.
4. Select the time of the transfer.
5. Add any relevant comments about the transfer.
6. (Optional) Enter the email address and phone number of Facility B.

## Field-by-Field Explanation

* **Service Transfer** (`service_transfer_survey_1`, text, required): Enter a brief description of the healthcare service being transferred.
* **Facility A** (`facility_a`, text, required): Enter the name of the facility where the patient is currently receiving care.
* **Facility B** (`facility_b`, text, false): Enter the name of the facility where the patient will receive care after transfer. (This field is optional, as it is only required for certain transfers.)
* **Service Transfer Date** (`service_transfer_date`, date, required): Enter the date of the service transfer in YYYY-MM-DD format.
* **Time Of Transfer** (`time_of_transfer`, time, required): Select the time of the transfer in 24-hour format (e.g., 14:30).
* **Comments** (`comments`, note, false): Add any additional comments or notes about the transfer.
* **Email** (`email`, email, false): Enter the email address of Facility B (if applicable).
* **Phone Number** (`phone_number`, text, false): Enter the phone number of Facility B (if applicable).
* **Facility C** (`facility_c`, text, true): Enter the name of the facility where the patient will receive care after transfer (if Facility B is not the final facility).
* **Facility D** (`facility_d`, text, false): Enter the name of the facility where the patient will receive care after transfer (if Facility C is not the final facility).
* **Service Transfer Survey 2** (`service_transfer_survey_2`, text, false): This field is not currently used. 

Note: Please ensure that all required fields are completed accurately and completely to avoid delays or errors in the care transition process.
