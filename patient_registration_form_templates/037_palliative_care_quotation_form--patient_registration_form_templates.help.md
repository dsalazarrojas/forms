<thinking>
This form is a patient registration form for palliative care, a type of care that focuses on relieving the symptoms, pain, and stress of a serious illness. The form is designed to collect relevant information about the patient's medical condition, care service requests, and other necessary details. Before proceeding, ensure you are using this form for its intended purpose and not duplicating an existing form.
</thinking>

# palliative_care_quotation_form - Help Guide
## Purpose
This form is used to collect information about patients seeking palliative care services. It is designed to be completed by patients or their representatives, providing essential details about their medical condition, care requirements, and other relevant information.

## How To Complete This Form
1. Enter the patient's name in the "Patient Name" field.
2. Provide the patient's address in the "Patient Address" field.
3. Enter the patient's phone number in the "Patient Phone" field.
4. Describe the patient's medical condition in the "Medical Condition" field.
5. Select the type of care service required from the "Care Service Request" field.
6. If "Other" is selected for "Care Service Request", provide additional details in the "Other Care Service Requested" field.
7. Choose the type of medical specialist involved from the "Medical Specialist" field.
8. Select the visit frequency from the "Visit Frequency" field.
9. Enter the start date of care in the "Start Date" field.
10. Enter the end date of care in the "End Date" field.
11. Choose the frequency of care from the "Frequency" field.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter the name of the patient.
* **Patient Address** (`patient_address`, text, required): Enter the patient's full address.
* **Patient Phone** (`patient_phone`, text, required): Enter the patient's phone number.
* **Medical Condition** (`medical_condition`, text, required): Describe the patient's current medical condition.
* **Care Service Request** (`care_service_request`, select_multiple, required): Select one or more types of care services required, such as Home Care, Hospice Care, or Other.
* **Other Care Service Requested** (`care_service_request_other`, text, optional): If you selected "Other" for Care Service Request, provide more details about the specific care service required.
* **Medical Specialist** (`medical_specialist`, select_multiple, required): Choose the type of medical specialist involved, such as Doctor or Nurse Practitioner.
* **Visit Frequency** (`visit_frequency`, select_one, required): Select the frequency of visits, such as Once, Regular, or As Needed.
* **Start Date** (`start_date`, date, required): Enter the date care will begin.
* **End Date** (`end_date`, date, required): Enter the date care will end.
* **Frequency** (`frequency`, select_one, required): Select the frequency of care, such as Daily, Twice a week, or Weekly.
