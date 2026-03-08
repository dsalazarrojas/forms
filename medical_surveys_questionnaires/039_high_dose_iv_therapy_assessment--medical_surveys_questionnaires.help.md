<thinking>...</thinking>

# High Dose IV Therapy Assessment - Help Guide
## Purpose
The High Dose IV Therapy Assessment form is used to collect information about patients undergoing high dose IV therapy. This form helps gather crucial details about the patient's medical history, current treatment, and medical device information to ensure safe and effective treatment.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer all questions to the best of your ability.
2. Fill in the patient's information on page 1 (Patient Info).
3. Provide any relevant medical history on page 2 (Medical History).
4. Specify any allergies or medical conditions on page 3 (Allergies).
5. List any medications currently being taken on page 4 (Medications).
6. Report any pain levels or anxiety on page 5 (Pain and Anxiety).
7. Record the patient's vital signs on page 6 (Vital Signs).
8. Document the medical device information on page 7 (Medical Device Info).
9. Enter any additional treatment notes on page 8 (Treatment Plan and Notes).

## Field-by-Field Explanation
### Page 1: Patient Info
* **Patient Info** (`patient_info`, text, required: false): This section is for entering the patient's basic information, such as their name, date of birth, and contact details.

### Page 2: Medical History
* **Medical History** (`medical_history`, text, required: false): Describe the patient's medical history, including any previous illnesses or surgeries.

### Page 3: Allergies
* **Allergies** (`allergies`, text, required: false): List any allergies the patient has, including any medications or substances that trigger an allergic reaction.

### Page 4: Medications
* **Medications** (`med_prescriptions`, select_multiple, required: false):
	+ **Anticoagulant Medication**
	+ **Insulin**
	+ **Beta Blockers**
	+ **Chronic Kidney Disease Medication**
	+ **Pain Management Medication**
	+ **Other (please specify)**
* Specify any other medications the patient is currently taking.

### Page 5: Pain and Anxiety
* **Pain** (`pain`, number, required: false): Report the patient's current pain level on a scale of 1-10.
* **Anxiety** (`anxiety`, number, required: false): Measure the patient's anxiety level on a scale of 1-10.

### Page 6: Vital Signs
* **Blood Pressure** (`blood_pressure`, number, required: false): Record the patient's blood pressure reading.
* **Oxygen Saturation** (`oxygen_saturation`, number, required: false): Report the patient's oxygen saturation level.
* **Temperature** (`temperature`, number, required: false): Record the patient's body temperature.

### Page 7: Medical Device Info
* **Medical Device Info** (`medical_device_info`, text, required: false): Describe the medical device in use, including its ID number, type, and serial number.
* **ID Number** (`device_id`, text, required: false): Enter the device's ID number.
* **Type** (`device_type`, text, required: false): Specify the type of medical device in use.
* **Serial Number** (`device_serial_number`, text, required: false): Enter the device's serial number.
* **Other Serial Number** (`device_serial_number_other`, text, required: false): For devices with multiple serial numbers, enter any additional serial numbers.
* **Medical Device Location** (`medical_device_location`, text, required: false): Record the location where the device is being used.
* **Other Medical Device Location** (`medical_device_location_other`, text, required: false): For devices with multiple locations, enter any additional locations.
* **Medical Device Frequency** (`medical_device_frequency`, number, required: false): Report the device's frequency of use.
* **Medical Device Battery Life** (`medical_device_battery_life`, number, required: false): Record the device's battery life.
* **Medical Device Status** (`medical_device_status`, select_one, required: false):
	+ **Functional**
	+ **Non-Functional**
	+ **Lost**
	+ **Other (please specify)**
* **Treatment Plan** (`treatment_plan`, note, required: false): Document any treatment plans related to the medical device.
* **Treatment Notes** (`treatment_notes`, note, required: false): Add any additional treatment notes.

## Tips
Please answer all questions thoroughly and accurately to ensure safe and effective treatment. If you have any questions or concerns, contact your healthcare provider.
