# Allergy Notification Form - Help Guide
## Purpose
This form is designed to collect important information about a student or patient's allergies and medical history. It's essential to fill it out accurately and completely to ensure their safety and well-being while on school premises.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Enter the student or patient's name, date of birth, grade or class, and school year.
2.  Provide the name, phone number, and email of the parent or guardian who will be contacted in case of an emergency.
3.  List the specific allergies and medical conditions the student or patient has, including any medications they're currently taking.
4.  Indicate the severity of the allergy and any typical reactions that may occur.
5.  If applicable, provide the date of the most recent anaphylaxis incident.
6.  Describe any medications or treatments the student or patient is currently taking.
7.  Specify the type and dosage of epinephrine auto-injector they have on hand.
8.  Detail the storage location for the epinephrine auto-injector and whether there's a backup available.
9.  Indicate whether the student or patient is authorized to carry or administer epinephrine.
10. List any dietary accommodations or restrictions needed.
11. Specify any classroom or school-wide accommodations required.
12. Describe any activity or field trip limitations.
13. Identify the people who should be notified in case of an emergency.
14. Describe the emergency procedures to be followed.
15. Specify when to call 911.
16. Choose the nearest or preferred hospital for emergencies.
17. Provide information on medical insurance coverage, if applicable.
18. Indicate whether photos may be shared with school staff.
19. Confirm whether annual updates are needed.
20. Certify the accuracy of the information provided.
21. Sign and date the form to confirm authorization.
22. Sign and date the form to confirm verification from a treating physician, if applicable.

## Field-by-Field Explanation

* **Student/Patient Name** (`student_patient_name`, `text`, required): Enter the full name of the student or patient.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter the date of birth in MM/DD/YYYY format.
* **Grade/Class** (`grade_class`, `text`, required): Enter the current grade or class of the student or patient.
* **School Year** (`school_year`, `text`, required): Enter the current school year.
* **Parent/Guardian 1 Name** (`parent_guardian_1_name`, `text`, required): Enter the full name of the parent or guardian.
* **Parent/Guardian 1 Phone** (`parent_guardian_1_phone`, `text`, required): Enter the contact phone number of the parent or guardian.
* **Parent/Guardian 1 Email** (`parent_guardian_1_email`, `text`, required): Enter the contact email of the parent or guardian.
* **Parent/Guardian 2 Name** (`parent_guardian_2_name`, `text`, optional): Enter the full name of the second parent or guardian, if applicable.
* **Parent/Guardian 2 Phone** (`parent_guardian_2_phone`, `text`, optional): Enter the contact phone number of the second parent or guardian, if applicable.
* **Home Address** (`home_address`, `text`, required): Enter the full address of the student or patient.
* **Physician Name** (`physician_name`, `text`, required): Enter the full name of the treating physician.
* **Physician Phone** (`physician_phone`, `text`, required): Enter the contact phone number of the treating physician.
* **Physician Email** (`physician_email`, `text`, optional): Enter the contact email of the treating physician, if applicable.
* **Allergy Diagnosis Date** (`allergy_diagnosis_date`, `date`, optional): Enter the date when the allergy was diagnosed.
* **Specific Allergies** (`specific_allergies`, `text`, required): List all known allergies and medical conditions.
* **Allergen Types** (`allergen_types`, `select_multiple`, required): Choose all applicable allergen types (Food, Environmental, Insect sting, Medication, Latex, Chemical, Other).
* **Food Allergies Detail** (`food_allergies_detail`, `text`, optional): Provide specific foods causing allergic reactions.
* **Environmental Allergies Detail** (`environmental_allergies_detail`, `text`, optional): List specific allergens causing reactions.
* **Allergy Severity** (`allergy_severity`, `select_one`, required): Rate the severity of the allergy (Mild, Moderate, Severe, Life-threatening).
* **Typical Allergic Reactions** (`typical_reactions`, `text`, required): Describe the symptoms that occur during an allergic reaction.
* **History of Anaphylaxis** (`anaphylaxis_history`, `select_one`, required): Indicate whether anaphylaxis has occurred (True, False, Unknown).
* **Date of Most Recent Anaphylaxis** (`anaphylaxis_date`, `date`, optional): Enter the date of the most recent anaphylaxis incident, if applicable.
* **Current Medications** (`current_medications`, `text`, required): List all medications the student or patient is currently taking.
* **Epinephrine Auto-Injector** (`epinephrine_auto_injector`, `text`, required): Describe the type and dosage of epinephrine auto-injector.
* **Epinephrine Location** (`epinephrine_location`, `text`, required): Specify the storage location for the epinephrine auto-injector.
* **Backup Epinephrine** (`backup_epinephrine`, `select_one`, required): Indicate whether there's a backup epinephrine available (Option 1, False).
* **Authorized to Carry/ Administer Epinephrine** (`self_carry_administer`, `select_one`, required): Indicate whether the student or patient is authorized to carry or administer epinephrine (Yes, No, not authorized).
* **Dietary Accommodations Needed** (`dietary_accommodations`, `text`, optional): Specify any special meal requirements.
* **Classroom Accommodations Needed** (`classroom_accommodations`, `text`, optional): Describe any special classroom needs.
* **Activity Restrictions** (`activity_restrictions`, `text`, optional): List any activity or field trip limitations.
* **Field Trip Considerations** (`field_trip_considerations`, `text`, optional): Provide special instructions for field trips.
* **Substitute Teacher Instructions** (`substitute_teacher_instructions`, `text`, optional): Provide important notes for substitute teachers.
* **Staff Notification List** (`staff_notification_list`, `select_multiple`, required): Choose all staff members who should be notified in case of an emergency (Classroom teacher, School nurse, Principal, Cafeteria staff, Bus driver, After-school staff, Coach).
* **Emergency Procedures** (`emergency_procedures`, `text`, required): Describe the emergency procedures to follow.
* **When to Call 911** (`when_to_call_911`, `text`, required): Specify the criteria for calling 911.
* **Preferred Hospital** (`hospital_preference`, `text`, optional): Choose the nearest or preferred hospital.
* **Medical Insurance** (`medical_insurance`, `text`, optional): Enter the name of the medical insurance provider, if applicable.
* **Photo Release for Staff** (`photo_release`, `select_one`, optional): Indicate whether photos may be shared with school staff (Yes, for identification, False).
* **Annual Update Required** (`annual_update_required`, `select_one`, required): Confirm whether annual updates are needed (Yes, I will update annually, False).
* **Information Accuracy** (`information_accuracy`, `select_one`, required): Certify the accuracy of the information provided (Yes, all information is accurate, False).
* **Parent/Guardian Signature** (`parent_signature`, `select_one`, required): Sign to confirm authorization.
* **Signature Date** (`signature_date`, `date`, required): Date signed.
* **Physician Signature** (`physician_signature`, `select_one`, optional): Sign to confirm verification from a treating physician, if applicable.
* **Physician Signature Date** (`physician_signature_date`, `date`, optional): Date signed by the physician.
