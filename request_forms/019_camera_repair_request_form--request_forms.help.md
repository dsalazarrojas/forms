# Camera Repair Request Form - Help Guide
## Purpose

The Camera Repair Request Form is used to gather information from camera customers who need repair services for their camera devices. By filling out this form, you will help our repair center to efficiently diagnose and fix your issue.

## How To Complete This Form

1. Scroll to the first page of the form, "Customer Repair Information".
2. Enter your full name in the "Full Name" field.
3. Enter your valid email address in the "Email Address" field, so we can contact you with updates.
4. Enter your contact phone number in the "Contact Phone Number" field.
5. Enter your return shipping address in the "Return Shipping Address" field, so we can return your repaired camera to you.
6. Scroll to the second page of the form, "Device and Problem Description".
7. Choose the brand of your camera from the "Camera Brand" dropdown menu.
8. Enter your camera model in the "Camera Model" field.
9. Enter the serial number of your camera, which will help us track your specific unit.
10. On the "Category of Issue" dropdown menu, select the type of problem you are experiencing.
11. In the "Detailed Description of the Problem" field, describe the issue in as much detail as possible, including any symptoms or behaviors you've observed.
12. Select the frequency of the issue from the "Frequency of Issue" dropdown menu.
13. If this is not your first repair, check the "Has this unit been serviced before?" field, and describe any previous repair history.
14. Choose your desired repair urgency from the "Repair Urgency" dropdown menu.
15. Enter your pre-approved repair budget in the "Pre-Approved Repair Budget (USD)" field.
16. Select your preferred return shipping method from the "Preferred Return Shipping Method" dropdown menu.
17. Finally, read and agree to the "Terms and Conditions Agreement" field.

## Field-by-Field Explanation

* **Full Name** (`customer_full_name_rep`, text, required): Please enter your full name.
* **Email Address** (`customer_email_rep`, email, required): Enter your valid email address so we can contact you with updates.
* **Contact Phone Number** (`customer_phone_rep`, text, required): Enter your contact phone number, in case we need to reach out to you for more information.
* **Return Shipping Address** (`shipping_address_rep`, text, required): Enter your return shipping address so we can return your repaired camera to you.
* **Camera Brand** (`repair_camera_brand`, select_one, required): Choose the brand of your camera from the list:
	+ Sony
	+ Canon
	+ Nikon
	+ Fujifilm
	+ Panasonic
	+ Other
* **Camera Model** (`repair_camera_model`, text, required): Enter your camera model.
* **Serial Number** (`serial_number_repair`, text, optional): Enter the serial number of your camera, which helps us track your specific unit.
* **Category of Issue** (`problem_category`, select_one, required): Select the category of issue you are experiencing:
	+ Sensor Damage - Dust
	+ Lens Mount Issue
	+ Shutter Failure
	+ LCD - Screen Issue
	+ Card Slot Error
	+ Battery - Power Issue
	+ Impact - Water Damage
	+ Other
* **Detailed Description of the Problem** (`detailed_issue_description`, text, required): Describe the issue in as much detail as possible, including any symptoms or behaviors you've observed.
* **Frequency of Issue** (`issue_frequency`, select_one, required): Select the frequency of the issue:
	+ Constant
	+ Intermittent
	+ Happened only once
* **Previous Repair History** (`previous_repair_history`, text, optional): If this is not your first repair, describe any previous repair history.
* **Repair Urgency** (`repair_urgency`, select_one, required): Choose your desired repair urgency:
	+ Standard (10-14 business days)
	+ Rush (3-5 business days - Additional fee)
* **Pre-Approved Repair Budget (USD)** (`budget_limit_repair`, number, required): Enter your pre-approved repair budget.
* **Preferred Return Shipping Method** (`shipping_method_repair`, select_one, required): Select your preferred return shipping method:
	+ Standard Ground
	+ 2-Day Air
	+ Overnight
	+ Local Pickup
* **Terms and Conditions Agreement** (`repair_terms_agreement`, select_one, required): Read and agree to the terms and conditions of the repair service.
