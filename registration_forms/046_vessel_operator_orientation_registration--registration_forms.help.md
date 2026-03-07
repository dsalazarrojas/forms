<thinking>
This help guide is for the vessel operator orientation registration form, a critical component of the vessel operator management process. 

This form is used to register vessel operators, capturing essential information necessary for effective vessel management. Before proceeding, ensure this is not a duplicate registration.

To be eligible, the registered vessel operator must be one of the following types: marina, boat yard, charter, or other.

The form is divided into 10 fields that gather detailed information about the vessel operator's identity and operational characteristics.

The information provided will help in organizing and categorizing vessels effectively, ensuring a streamlined process for vessel management and related activities.

</thinking>

# vessel_operator_orientation_registration - Help Guide
## Purpose
This form is used to collect information from vessel operators to enable effective vessel management. It is a crucial component in organizing and categorizing vessels for efficient operations.

## How To Complete This Form
1. Complete all the required fields. The form is divided into pages with each page featuring several fields.
2. Fill in your First Name, Last Name, Vessel Name, Email Address, and Contact Number.
3. Select your vessel type and operator type.
4. Provide details of the Vessel Length and Vessel Draft.
5. Confirm your vessel is ready for registration by selecting "Yes" in the "Submit" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required): Enter your first name as it appears on official documents.
* **Last Name** (`last_name`, `text`, required): Enter your last name as it appears on official documents.
* **Vessel Name** (`vessel_name`, `text`, required): Enter the name of the vessel you are registering.
* **Email** (`email`, `email`, required): Enter your official email address.
* **Contact Number** (`contact_number`, `text`, required): Enter your contact number where you can be reached.
* **Operator Type** (`operator_type`, `select_one`, required): Select your vessel operator type: Marina, Boat Yard, Charter, or Other.
* **Vessel Type** (`vessel_type`, `select_multiple`, required): Select the type of vessel: Commercial, Recreational, or Other.
* **Vessel Length** (`vessel_length`, `number`, required): Enter the length of your vessel in meters or feet.
* **Vessel Draft** (`vessel_draft`, `number`, required): Enter the draft of your vessel in meters or feet.
* **Submit** (`submit`, `select_one`, required): Confirm your registration by selecting "Yes".
