# Audio Cable Replacement Request Form - Help Guide
## Purpose
The Audio Cable Replacement Request Form is used to request replacement audio cables for various types of equipment and situations. This form is completed by users who need to replace an audio cable due to damage, upgrade, or other reasons.

## How To Complete This Form

1. Fill in your full name as the person requesting the replacement.
2. Enter your email address and phone number to allow for follow-up communication.
3. Select the department you belong to (e.g. IT Department, Audio Engineering, etc.).
4. Choose the date of the original request or issue with the cable.
5. Select the type of cable required (e.g. XLR, TRS, etc.).
6. Choose the length of the cable needed.
7. Enter the number of cables required.
8. Provide the brand and model number of the device the cable will be used with.
9. If applicable, describe the reason for the replacement.
10. If applicable, describe the damage or issue with the cable.
11. Choose the urgency level for the replacement (e.g. Critical, High, Medium, etc.).
12. Enter the asset tag or equipment ID number (if applicable).
13. Specify where the replacement cable should be delivered (e.g. office, home, etc.).
14. Indicate if the old cable has been returned (if applicable).
15. Confirm if your manager has approved the request (if applicable).
16. Add any additional notes or information that may be relevant to the request.

## Field-by-Field Explanation

* **Requester Full Name** (`requester_full_name`, text, required): Enter your full name as the person requesting the replacement.
* **Email Address** (`requester_email`, email, required): Enter your contact email address to allow for follow-up communication.
* **Phone Number** (`requester_phone`, text, required): Enter your contact phone number.
* **Department** (`department`, select_one, required): Select your department or team (e.g. IT Department, Audio Engineering, etc.).
* **Request Date** (`request_date`, date, required): Enter the date of the original request or issue with the cable.
* **Cable Type** (`cable_type`, select_one, required): Choose the type of cable required (e.g. XLR, TRS, etc.).
* **Cable Length** (`cable_length`, select_one, required): Select the length of the cable needed.
* **Quantity Needed** (`cable_quantity`, number, required): Enter the number of cables required.
* **Device Brand** (`device_brand`, text, required): Enter the brand of the device the cable will be used with.
* **Device Model** (`device_model`, text, optional): Enter the model number of the device (if applicable).
* **Reason for Replacement** (`replacement_reason`, select_one, required): Describe the reason for the replacement (e.g. physical damage, upgrade, etc.).
* **Damage Description** (`damage_description`, text, optional): Describe the issue or damage with the cable (if applicable).
* **Urgency Level** (`urgency_level`, select_one, required): Choose the urgency level for the replacement (e.g. Critical, High, Medium, etc.).
* **Affected Equipment ID** (`affected_equipment_id`, text, optional): Enter the asset tag or equipment ID number (if applicable).
* **Location Needed At** (`location_needed`, text, required): Specify where the replacement cable should be delivered (e.g. office, home, etc.).
* **Old Cable Returned** (`old_cable_returned`, select_one, required): Indicate if the old cable has been returned (if applicable).
* **Manager Approval** (`manager_approval`, select_one, required): Confirm if your manager has approved this request (if applicable).
* **Additional Notes** (`additional_notes`, text, optional): Add any additional notes or information that may be relevant to the request.
