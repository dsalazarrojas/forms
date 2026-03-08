<thinking>As a medical professional, you are likely familiar with the importance of gathering accurate and timely feedback from patients after using a medical device. The Medical Device Follow Up Form is designed to collect relevant information about patient feedback, follow-up dates, and communication channels for future reference. This form is intended to be completed by patients who have used a medical device and are required to provide feedback on their experience. Before starting, please review the form carefully and only answer the questions that apply to your specific situation.</thinking>

# Medical Device Follow Up Form - Help Guide
## Purpose
This form is used to collect patient feedback on medical devices used in clinical trials. It helps to gather information on patient experience, follow-up dates, and communication channels for future reference.

## How To Complete This Form
1. Please select the medical device you used from the dropdown menu.
2. Enter the date and time you followed up with the patient.
3. Enter the patient's name.
4. Provide a description of the device used (if necessary).
5. Follow up care instructions should be a brief summary of any additional care provided to the patient.
6. Select the communication channel used for follow-up (e.g., phone or email).
7. Enter the frequency of follow-up (e.g., weekly, bi-weekly, etc.).
8. Choose the follow-up status (e.g., completed, pending, cancelled).

## Field-by-Field Explanation

* **Patient Feedback** (`patient_feedback`, text, required): A free-text field for patients to provide feedback on their experience with the medical device.
* **Medical Device** (`medical_device`, select_one, required): Select the medical device used from the dropdown menu. This field is required to ensure accurate tracking of device usage.
* **Follow Up Date** (`follow_up_date`, date, required): Enter the date of the follow-up visit or contact with the patient.
* **Follow Up Time** (`follow_up_time`, time, required): Enter the time of the follow-up visit or contact with the patient.
* **Patient Name** (`patient_name`, text, required): Enter the patient's name for identification purposes.
* **Device 1 Description** (`device_type_1_description`, text, optional): If you used a device type 1, provide a brief description of the device used.
* **Device 2 Description** (`device_type_2_description`, text, optional): If you used a device type 2, provide a brief description of the device used.
* **Device 3 Description** (`device_type_3_description`, text, optional): If you used a device type 3, provide a brief description of the device used.
* **Follow Up Care Instructions** (`follow_up_care_instructions`, text, required): Enter a brief summary of any additional care provided to the patient.
* **Communication Channel** (`communication_channel`, select_one, optional): Select the communication channel used for follow-up (e.g., phone, email).
* **Follow Up Frequency** (`follow_up_frequency`, text, required): Enter the frequency of follow-up visits or contacts (e.g., weekly, bi-weekly, etc.).
* **Follow Up Status** (`follow_up_status`, select_one, required): Choose the follow-up status (e.g., completed, pending, cancelled).
