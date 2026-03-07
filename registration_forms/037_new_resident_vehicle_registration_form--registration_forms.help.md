<thinking>
Is this form used to register new residents for a building or community? If so, does it also handle other related tasks such as tracking parking needs or submission dates? Are there any potential issues with duplicate submissions or incorrect submission information? This form seems to be designed for a building management or property management scenario, possibly for tracking vehicle information, parking needs, and other relevant details. Double-checking the form schema reveals that the form is mostly focused on vehicle registration, but also includes fields for parking needs, submission notes, and other supplementary information. There are no obvious duplicate submission fields or submission date/time fields, but the "Submission Date" field could potentially be a concern if it's not properly validated or if the field is not filled in correctly. Overall, this form appears to be for tracking vehicle registration for a property or building management scenario, and it's good to confirm the form's purpose and functionality before proceeding.
</thinking>

# New Resident Vehicle Registration Form - Help Guide
## Purpose
This form is designed for residents to register their vehicles with the building management. The form collects details about the resident, their vehicle, and other relevant information to ensure accurate tracking and management of vehicle registrations.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in the resident details, including any relevant contact information.
2. Select the correct vehicle details, including whether you have a vehicle and any parking needs.
3. Optionally, select the parking needs for your vehicle.
4. Add any additional notes or comments about your vehicle registration.
5. Upload a vehicle image (if required).
6. Select the property manager responsible for your vehicle.
7. Select the residential community where you reside.
8. Fill in the submission date and time (if required).
9. Finally, select the submitter ID to verify your identity.

## Field-by-Field Explanation

* **Resident Details** (`resident_details`, text, required): Please enter your name, contact information, and any other relevant details about yourself as a resident.
* **Vehicle Details** (`vehicle_details`, select_one, required): Select 'Yes' if you have a vehicle and 'No' if you do not.
* **Parking Needs** (`parking_needs`, select_multiple, optional): If you have a vehicle, select the parking needs that apply to you.
* **Parking Notes** (`parking_notes`, note, optional): Add any additional comments or notes about your parking needs.
* **Submission Notes** (`submission_notes`, note, optional): Add any additional comments or notes about your vehicle registration.
* **Vehicle Image Upload** (`vehicle_image_upload`, text, optional): Upload a clear image of your vehicle (if required).
* **Property Manager** (`property_manager`, select_one, optional): Select the property manager responsible for your vehicle.
* **Residential Community** (`residential_community`, select_one, optional): Select the residential community where you reside.
* **Submission Date** (`submission_date`, date, optional): Fill in the submission date (if required).
* **Submission Time** (`submission_time`, time, optional): Fill in the submission time (if required).
* **Submitter ID** (`submitter_id`, select_one, optional): Select your ID to verify your identity.
* **Parking Needs (1-3)**: Select any of the available parking needs options (Parking 1, Parking 2, Parking 3).
* **Parking Notes**: Add any additional comments or notes about your parking needs.
