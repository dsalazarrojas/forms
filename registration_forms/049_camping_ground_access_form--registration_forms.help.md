<thinking>
This form is designed to collect information from visitors to a campground for access purposes. The form requires visitors to provide personal and contact information, details about their visit, and acknowledgment of the campground's rules and liability waiver. This form will help the campground staff manage access and ensure a smooth experience for visitors.

The form consists of multiple fields, including text, email, phone, and date fields for general information, as well as select_one and select_multiple fields for more specific questions. The form also includes fields for visitors to describe their purpose of visit, number of people, vehicles, and pets they are bringing. Additionally, the form requires visitors to provide their signature and confirm their understanding of the campground's rules and liability waiver.

This form is intended for individual visitors, family groups, organizations, and commercial groups. It should not be used for other purposes. Please ensure you are using this form correctly and only for its intended purpose.

</thinking>

# Camping Ground Access Form - Help Guide
## Purpose
The Camping Ground Access Form is used to collect information from visitors for access purposes. This form helps the campground staff manage access and ensure a smooth experience for visitors.

## How To Complete This Form

1. Fill out the form with accurate and complete information.
2. Make sure to enter your contact information, visit details, and select the correct options for your group type.
3. If you are bringing pets, describe them in the pet details field.
4. If you are a group, enter your group name if required.
5. Sign and date the form to acknowledge the campground's rules and liability waiver.

## Field-by-Field Explanation

* **Visitor First Name** (`visitor_first_name`, text, required): Enter your first name.
* **Visitor Last Name** (`visitor_last_name`, text, required): Enter your last name.
* **Email Address** (`email`, email, required): Enter your contact email address.
* **Phone Number** (`phone`, text, required): Enter your contact phone number.
* **Street Address** (`address`, text, required): Enter your street address.
* **City** (`city`, text, required): Enter your city or town.
* **State** (`state`, text, required): Enter your state or province.
* **ZIP Code** (`zip_code`, text, required): Enter your postal code.
* **Date of Visit** (`visit_date`, date, required): Enter the date you plan to visit the campground.
* **Arrival Time** (`arrival_time`, time, required): Enter the time you arrive at the campground.
* **Departure Time** (`departure_time`, time, required): Enter the time you plan to leave the campground.
* **Purpose of Visit** (`purpose_of_visit`, select_one, required): Select the reason for your visit.
* **Purpose Details** (`purpose_details`, text, optional): If your purpose is "Other", describe your visit.
* **Number in Your Party** (`number_in_party`, number, required): Enter the total number of people in your group.
* **Number of Vehicles** (`number_of_vehicles`, number, required): Enter the total number of vehicles.
* **Vehicle Make and Model** (`vehicle_make_model`, text, required): Enter the make and model of your primary vehicle.
* **License Plate Number** (`license_plate`, text, required): Enter the license plate number of your primary vehicle.
* **License Plate State** (`license_plate_state`, text, required): Enter the state where your vehicle is registered.
* **Areas You Need to Access** (`areas_to_access`, select_multiple, required): Select all areas you need to access during your visit.
* **Are You Bringing Pets** (`bringing_pets`, select_one, required): Indicate if you are bringing pets.
* **Pet Details** (`pet_details`, text, optional): If you are bringing pets, describe them.
* **Are You Bringing Firewood** (`bringing_firewood`, select_one, required): Indicate if you are bringing firewood.
* **Are You Bringing Alcohol** (`bringing_alcohol`, select_one, optional): Indicate if you are bringing alcohol.
* **Group Affiliation** (`group_affiliation`, select_one, required): Select the type of group you belong to.
* **Group Name** (`group_name`, text, optional): If applicable, enter your group name.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of your emergency contact.
* **Any Medical Conditions** (`medical_conditions`, text, optional): Describe any medical conditions you have.
* **Access Fee** (`access_fee`, number, optional): If applicable, enter the access fee.
* **Fee Paid** (`fee_paid`, select_one, optional): Indicate if you have paid the access fee.
* **I Have Read and Agree to Campground Rules** (`rules_acknowledged`, select_one, required): Confirm that you have read and agree to the campground's rules.
* **I Accept the Liability Waiver** (`liability_waiver`, select_one, required): Confirm that you accept the liability waiver.
* **Visitor Signature** (`visitor_signature`, text, required): Sign your name.
* **Date** (`signature_date`, date, required): Date of access.
* **Staff Initials** (`staff_initials`, text, optional): For office use only.
