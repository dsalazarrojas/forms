# Company Vehicle And Driver Details Form - Help Guide
## Purpose
This form is designed to collect information about company vehicle and driver details for administrative and safety purposes. It is intended for employees who use company vehicles for work-related activities. The form will be reviewed by the fleet manager and the employee's manager for approval and to ensure compliance with company policies and regulations.

## How To Complete This Form
To complete this form, please follow these steps:
1. Fill in your full name, employee ID, email, phone number, department, and job title.
2. If applicable, provide details about your company vehicle, including vehicle make, model, year, color, VIN, license plate number, and registration state.
3. If you have a company vehicle assigned to you, select "True" and provide the vehicle assignment date.
4. If you are a driver, provide your license details, including license number, issuing state, expiration date, license class, and any license restrictions.
5. If you have any driving violations in the past 3 years, select "Yes" and provide details.
6. If you have been in any accidents in the past 3 years, select "Yes" and provide details.
7. Confirm that your license has never been suspended or revoked, or select "True" and provide details.
8. If you have any current vehicle issues, select "Yes" and provide details.
9. Confirm that you will practice safe driving at all times and agree to follow all traffic laws and regulations.
10. Confirm that you will take proper care of the vehicle and report any accidents or incidents immediately.
11. Confirm that you understand that unauthorized personal use of the company vehicle is prohibited.
12. Sign the form as a final step to confirm your understanding and agreement.

## Field-by-Field Explanation
* **Full Name** (`employee_full_name`, `text`, `required`): Your full name as it appears on your identification.
* **Employee ID** (`employee_id`, `text`, `required`): Your employee ID provided by the company.
* **Email Address** (`employee_email`, `email`, `required`): Your company email address.
* **Phone Number** (`employee_phone`, `text`, `required`): Your contact phone number.
* **Department** (`department`, `text`, `required`): Your department as per company records.
* **Job Title** (`job_title`, `text`, `required`): Your job title as per company records.
* **Manager Name** (`manager_name`, `text`, `required`): The name of your direct supervisor.
* **Vehicle Information** (`section_vehicle`, `note`, `optional`): Optional section for company vehicle details.
* **Have you been assigned a company vehicle?** (`vehicle_assigned`, `select_one`, `required`): If you have been assigned a company vehicle, select "True".
* **Vehicle Make** (`vehicle_make`, `text`, `optional`): The make of your company vehicle.
* **Vehicle Model** (`vehicle_model`, `text`, `optional`): The model of your company vehicle.
* **Vehicle Year** (`vehicle_year`, `number`, `optional`): The year of manufacture of your company vehicle.
* **Vehicle Color** (`vehicle_color`, `text`, `optional`): The primary color of your company vehicle.
* **Vehicle VIN** (`vehicle_vin`, `text`, `optional`): The vehicle identification number (17-digit VIN).
* **License Plate Number** (`vehicle_license_plate`, `text`, `optional`): The plate number of your company vehicle.
* **Registration State** (`vehicle_registration_state`, `text`, `optional`): The state where your company vehicle is registered.
* **Current Mileage** (`vehicle_mileage`, `number`, `optional`): The current odometer reading.
* **Vehicle Assignment Date** (`vehicle_assignment_date`, `date`, `optional`): The date the company vehicle was assigned to you.
* **Driver Information** (`section_driver`, `note`, `optional`): Optional section for driver information.
* **Driver's License Number** (`drivers_license_number`, `text`, `optional`): Your license number.
* **Driver's License State** (`drivers_license_state`, `text`, `optional`): The state that issued your license.
* **Driver's License Expiry Date** (`drivers_license_expiry`, `date`, `optional`): When your license expires.
* **License Class** (`license_class`, `select_one`, `optional`): The class type of your license.
* **Any License Restrictions?** (`license_restrictions`, `text`, `optional`): If you have any license restrictions.
* **Driving Violations History** (`section_history`, `note`, `optional`): Optional section for driving violations history.
* **Do you have any driving violations in the past 3 years?** (`violations_history`, `select_one`, `optional`): If you have any driving violations, select "Yes" and provide details.
* **If yes, please provide details** (`violations_details`, `text`, `optional`): If you have any driving violations, provide details about them.
* **Have you been in any accidents in the past 3 years?** (`accidents_history`, `select_one`, `optional`): If you have been in any accidents, select "Yes" and provide details.
* **If yes, please provide details** (`accidents_details`, `text`, `optional`): If you have been in any accidents, provide details about them.
* **Has your license ever been suspended or revoked?** (`suspended_license`, `select_one`, `optional`): If your license has been suspended or revoked, select "True" and provide details.
* **If yes, please provide details** (`suspended_license_details`, `text`, `optional`): If your license has been suspended or revoked, provide details about it.
* **Vehicle Usage** (`section_usage`, `note`, `optional`): Optional section for vehicle usage information.
* **Primary Use of Vehicle** (`primary_use`, `select_one`, `optional`): The main purpose of using the vehicle.
* **Typical Routes/Destinations** (`typical_routes`, `text`, `optional`): The places you typically drive to or from.
* **Average Weekly Mileage** (`average_weekly_mileage`, `number`, `optional`): The average mileage per week.
* **Where is the vehicle parked overnight?** (`overnight_parking`, `text`, `optional`): The location where your vehicle is parked overnight.
* **Maintenance** (`section_maintenance`, `note`, `optional`): Optional section for vehicle maintenance information.
* **Last Maintenance Date** (`last_maintenance_date`, `date`, `optional`): The date of the last maintenance performed on the vehicle.
* **Last Maintenance Type** (`last_maintenance_type`, `text`, `optional`): The type of maintenance performed last.
* **Next Maintenance Due** (`next_maintenance_due`, `date`, `optional`): The date when the next maintenance is due.
* **Are there any current vehicle issues?** (`current_issues`, `select_one`, `optional`): If you have any current issues, select "Yes" and provide details.
* **If yes, please describe** (`issues_details`, `text`, `optional`): If you have any current issues, provide details about them.
* **Insurance Information** (`section_insurance`, `note`, `optional`): Optional section for insurance information.
* **Insurance Policy Number** (`insurance_policy_number`, `text`, `optional`): The insurance policy number.
* **Insurance Expiry Date** (`insurance_expiry`, `date`, `optional`): When the insurance expires.
* **Driver Agreement** (`section_agreement`, `note`, `optional`): Optional section for driver agreement information.
* **I agree to practice safe driving at all times** (`agree_safe_driving`, `select_one`, `optional`): If you agree to practice safe driving, select "Yes, I Agree".
* **I agree to obey all traffic laws and regulations** (`agree_traffic_laws`, `select_one`, `optional`): If you agree to obey all traffic laws and regulations, select "Yes, I Agree".
* **I agree to take proper care of the vehicle** (`agree_vehicle_care`, `select_one`, `optional`): If you agree to take proper care of the vehicle, select "Yes, I Agree".
* **I agree to report any accidents or incidents immediately** (`agree_report_incidents`, `select_one`, `optional`): If you agree to report any accidents or incidents, select "Yes, I Agree".
* **I understand that unauthorized personal use is prohibited** (`agree_personal_use`, `select_one`, `optional`): If you understand that unauthorized personal use is prohibited, select "Yes, I Understand".
* **Employee Signature** (`employee_signature`, `text`, `required`): Your electronic signature.
* **Submission Date** (`submission_date`, `date`, `required`): The date this form is submitted.
* **Manager Approval** (`manager_approval`, `text`, `optional`): This field is to be completed by your manager.
* **Fleet Manager Review** (`fleet_manager_review`, `text`, `optional`): This field is to be completed by the fleet manager.
