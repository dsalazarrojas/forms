# Surgery Reservation Form - Help Guide
## Purpose
The surgery reservation form is designed to collect and store information about upcoming surgeries, including patient and surgeon availability. The form is used to streamline the scheduling process and ensure that both patients and surgeons have the necessary information for a smooth and efficient surgery day.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields with the relevant information.
2. Select the correct options for the "surgery_type" field to indicate the type of surgery being performed.
3. Choose the availability time slots for both the surgeon and patient.
4. Confirm whether anesthesia will be used during the surgery.

## Field-by-Field Explanation

### 1. **Patient Name** (`patient_name`, text, required: false)
The patient's name is used to identify the individual undergoing the surgery. Enter the patient's full name in this field.

### 2. **Surgery Date** (`surgery_date`, date, required: false)
Enter the date of the surgery in the format MM/DD/YYYY.

### 3. **Surgeon Name** (`surgeon_name`, text, required: false)
Enter the name of the surgeon performing the surgery.

### 4. **Surgery Time** (`surgery_time`, time, required: false)
Enter the time of the surgery in the format HH:MM.

### 5. **Procedure Name** (`procedure_name`, text, required: false)
Enter a brief description of the surgery procedure.

### 6. **Room Number** (`room_number`, text, required: false)
Enter the room number where the surgery will be performed.

### 7. **Surgery Type** (`surgery_type`, select_one, required: false)
Select the type of surgery being performed from the options:
* Surgical
* Diagnostic
* Therapeutic

### 8. **Anesthesia Used** (`anesthesia_used`, select_multiple, required: false)
Indicate whether anesthesia will be used during the surgery:
* 'True'
* 'False'
* Not Applicable

### 9. **Surgeon Availability** (`surgeon_availability`, select_multiple, required: false)
Choose the availability time slots for the surgeon from the options:
* 08:00-12:00
* 12:00-16:00
* 16:00-20:00

### 10. **Patient Availability** (`patient_availability`, select_multiple, required: false)
Choose the availability time slots for the patient from the options:
* 08:00-12:00
* 12:00-16:00
* 16:00-20:00

## Tips
* Make sure to double-check the accuracy of the information entered.
* If you're unsure about any field, ask a colleague or supervisor for guidance.
* Use the reservation form to schedule surgeries efficiently and minimize waiting times.
* Regularly update the form to ensure that availability slots are accurately represented.
