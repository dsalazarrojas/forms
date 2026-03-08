# CAHPS Clinician & Group Survey Version 3.0 (Adult) - Help Guide
## Purpose
This survey is used to gather feedback from patients about their experiences with healthcare clinicians and groups. It helps to identify areas of strength and weakness in the care provided, allowing clinicians and healthcare organizations to make improvements.

## How To Complete This Form
1. Fill in the name of the clinician you saw.
2. Select the type of visit you had (e.g., routine, urgent, specialist consultation, or follow-up visit).
3. Answer questions about your experience with the clinician, including how often you got an appointment as soon as you needed, how long you had to wait in the office past your scheduled appointment time, and whether the clinician explained things in a way that was easy to understand.
4. Rate the clinician's listening skills and knowledge about your medical history.
5. Evaluate the clinician's respect for you and your medical history.
6. Assess the helpfulness and respectfulness of the office staff.
7. Answer questions about whether you received information about what to do if you needed care after hours.
8. Evaluate the clinician's follow-up on test results.
9. Provide an overall rating of the clinician.
10. Optionally, share any additional comments about your visit.

## Field-by-Field Explanation
* **Name of the doctor or clinician you saw** (`clinician_name`, `text`, required): Enter the name of the doctor or clinician who provided care.
* **Type of visit** (`visit_type`, `select_one`, required): Select the type of visit you had, such as routine check-up, urgent care, specialist consultation, or follow-up visit.
* **How often did you get an appointment as soon as you needed?** (`timely_appointments`, `select_one`, required): Choose whether you usually, sometimes, rarely, or never got an appointment as soon as you needed.
* **How long did you wait in the office past your appointment time?** (`office_wait_time`, `select_one`, required): Select how long you had to wait in the office past your scheduled appointment time.
* **Did the clinician explain things in a way that was easy to understand?** (`communication_clarity`, `select_one`, required): Evaluate the clinician's communication skills.
* **Did the clinician listen carefully to you?** (`active_listening`, `select_one`, required): Assess the clinician's listening skills.
* **Did the clinician seem to know the important information about your medical history?** (`records_knowledge`, `select_one`, required): Evaluate the clinician's knowledge about your medical history.
* **Did the clinician show respect for what you had to say?** (`respect_and_dignity`, `select_one`, required): Assess the clinician's respectfulness.
* **Were the clerks and receptionists as helpful as you thought they should be?** (`staff_courtesy`, `select_one`, required): Evaluate the helpfulness of the office staff.
* **Did the office staff treat you with courtesy and respect?** (`staff_respect`, `select_one`, required): Assess the staff's respectfulness.
* **Did you get information about what to do if you needed care after hours?** (`health_info_access`, `select_one`, required): Evaluate whether you received information about what to do if you needed care after hours.
* **Did the clinician follow up with you to give results of tests?** (`coordination_care`, `select_one`, optional): Optionally, evaluate the clinician's follow-up on test results.
* **Overall rating of this clinician** (`clinician_rating`, `select_one`, required): Rate the clinician's performance, with 0 being the worst and 10 being the best.
* **Please share any other comments about your visit** (`additional_visit_comments`, `text`, optional): Optionally, provide any additional comments about your visit.
