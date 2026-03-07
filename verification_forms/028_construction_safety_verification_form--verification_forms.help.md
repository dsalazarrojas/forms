<thinking>As we design forms, we need to ensure that they are clear, concise, and user-friendly. This thought process is crucial in creating forms that are easy to understand and fill out. Before proceeding, let's take a moment to review the form's purpose and ensure that it is relevant to the intended use case. The form in question appears to be related to construction safety verification, which is an essential aspect of ensuring a safe working environment. This form will likely be used to verify that all necessary safety measures are in place, and that workers are following the correct protocols. It's also important to note that we should avoid duplicating efforts and ensure that this form doesn't overlap with existing ones. Let's proceed with creating the user-facing help guide.</thinking>

# Construction Safety Verification Form - Help Guide
## Purpose
The Construction Safety Verification Form is used to ensure that all necessary safety measures are in place on a construction site, and that workers are following the correct protocols. It's a crucial tool for maintaining a safe working environment.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Verification Date** (Page 1)
	* Enter the date when the safety verification was conducted.
2. Enter Project Information (Pages 2-4)
	* Enter the **Project Name** (Page 2)
	* Enter the **Project Address** (Page 3)
	* Enter the **General Contractor** (Page 4)
3. Enter Safety Verification Information (Pages 5-6)
	* Enter the **Safety Manager** (Page 5)
	* Enter the **Verifier Name** (Page 6)
	* Enter the **Verifier Credentials** (Page 6)
4. Confirm Safety Measures (Pages 7-12)
	* Confirm that all workers have completed **Safety Orientation** (Page 7)
	* Confirm **PPE Availability** (Page 8)
	* Confirm **PPE Compliance** (Page 9)
	* Confirm **Safety Signage** (Page 10)
	* Confirm **Emergency Procedures** (Page 11)
	* Confirm **First Aid Availability** (Page 12)
5. Confirm Site-Specific Safety Measures (Pages 13-17)
	* Confirm **Fall Protection Systems** (Page 13)
	* Confirm **Scaffolding Inspection** (Page 14)
	* Confirm **Excavation Safety** (Page 15)
	* Confirm **Electrical Safety** (Page 16)
	* Confirm **Equipment Inspection** (Page 17)
6. Confirm Safety Procedures (Pages 18-21)
	* Confirm **Hazard Communication** (Page 18)
	* Confirm **Safety Meetings** (Page 19)
	* Confirm **Incident Reporting System** (Page 20)
	* Confirm **Safety Violations Found** (Page 21)
7. Finalize Form (Pages 22-23)
	* Enter **Corrective Actions Required** (Page 22)
	* Enter **Overall Safety Compliance** (Page 23)
8. Sign and Date (Pages 24-25)
	* Enter the **Verifier Signature** (Page 24)
	* Enter the **Safety Manager Signature** (Page 25)

## Field-by-Field Explanation

* **Verification Date** (`verification_date`, date, required): Enter the date when the safety verification was conducted.
* **Project Name** (`project_name`, text, required): Enter the name of the construction project.
* **Project Address** (`project_address`, text, required): Enter the site location of the construction project.
* **General Contractor** (`general_contractor`, text, required): Enter the primary contractor company.
* **Safety Manager** (`safety_manager`, text, required): Enter the name of the safety manager.
* **Verifier Name** (`verifier_name`, text, required): Enter the person conducting the verification.
* **Verifier Credentials** (`verifier_credentials`, text, required): Enter the qualifications or certifications of the verifier.
* **Safety Orientation Completed** (`safety_orientation_completed`, select_one, required): Confirm if all workers have completed the safety orientation.
	+ Options: Yes, All Workers, Yes, Most Workers, Partially, False
* **PPE Availability** (`ppe_availability`, select_one, required): Confirm if PPE is available on site.
	+ Options: Yes, Fully Stocked, Yes, Adequate, Limited Supply, False
* **PPE Compliance** (`ppe_compliance`, select_one, required): Confirm if workers are wearing required PPE.
	+ Options: Full Compliance, Mostly Compliant, Partial Compliance, Non-Compliant
* **Safety Signage** (`safety_signage`, select_one, required): Confirm if safety signs are posted in all areas.
	+ Options: Yes, All Areas, Yes, Most Areas, Some Signs Missing, Inadequate Signage
* **Emergency Procedures** (`emergency_procedures`, select_one, required): Confirm if emergency procedures are displayed in all areas.
	+ Options: Yes, Clearly Posted, Yes, Posted, Some Posted, Not Posted
* **First Aid Availability** (`first_aid_availability`, select_one, required): Confirm if first aid equipment is available on site.
	+ Options: Yes, Multiple Stations, Yes, One Station, Limited, Not Available
* **Fire Extinguishers** (`fire_extinguishers`, select_one, required): Confirm if fire extinguishers are available and inspected on site.
	+ Options: Yes, All Inspected, Yes, Some Inspected, Present but Not Inspected, Not Available
* **Fall Protection Systems** (`fall_protection`, select_one, required): Confirm if fall protection systems are in place in all areas.
	+ Options: Yes, All Areas, Yes, Most Areas, Some Areas Missing, Not Adequate
* **Scaffolding Inspection** (`scaffolding_inspection`, select_one, required): Confirm if scaffolding is properly inspected.
	+ Options: Yes, All Inspected, Yes, Some Inspected, Not Inspected, No Scaffolding
* **Excavation Safety** (`excavation_safety`, select_one, required): Confirm if excavations are properly protected.
	+ Options: Yes, All Protected, Yes, Most Protected, Some Not Protected, No Excavations
* **Electrical Safety** (`electrical_safety`, select_one, required): Confirm if electrical systems are properly managed.
	+ Options: Yes, Compliant, Mostly Compliant, Some Issues, Non-Compliant
* **Equipment Inspection** (`equipment_inspection`, select_one, required): Confirm if equipment is regularly inspected.
	+ Options: Yes, Documented, Yes, Not Documented, Irregular, False
* **Hazard Communication** (`hazard_communication`, select_one, required): Confirm if the HazCom program is in place.
	+ Options: Yes, Complete Program, Yes, Basic Program, Partial, False
* **Safety Meetings** (`safety_meetings`, select_one, required): Confirm if regular safety meetings are held.
	+ Options: Yes, Daily, Yes, Weekly, Yes, Monthly, False
* **Incident Reporting System** (`incident_reporting`, select_one, required): Confirm if a formal incident reporting system is in place.
	+ Options: Yes, Formal System, Yes, Informal, Limited, False
* **Safety Violations Found** (`violations_found`, number, required): Enter the number of safety violations found during verification.
* **Corrective Actions Required** (`corrective_actions`, text, optional): Enter the corrective actions required.
* **Overall Safety Compliance** (`overall_compliance`, select_one, required): Confirm the final safety compliance status.
	+ Options: Fully Compliant, Substantially Compliant, Partially Compliant, Non-Compliant
* **Follow-Up Required** (`follow_up_required`, select_one, required): Confirm if a follow-up is needed.
	+ Options: True, False
* **Follow-Up Date** (`follow_up_date`, date, optional): Enter the scheduled date for follow-up verification.
* **Verifier Signature** (`verifier_signature`, text, required): Enter the signature of the verifier.
* **Safety Manager Signature** (`safety_manager_signature`, text, required): Enter the signature of the safety manager.
