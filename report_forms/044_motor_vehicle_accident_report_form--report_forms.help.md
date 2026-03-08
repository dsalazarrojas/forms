# Motor Vehicle Accident Report Form - Help Guide
## Purpose
This form is designed to collect information about a motor vehicle accident, including details about the accident, the parties involved, and the reporting person's information. The form will help you gather all the necessary information to create a comprehensive report about the incident.

## How To Complete This Form

To complete this form, follow these steps:

1. Start by providing a brief description of the accident, including the date and location where it occurred.
2. Identify the parties involved in the accident, which can be the First Party (driver or rider), Second Party (other vehicle or object), or Third Party (person or object).
3. Describe any damage to the vehicles involved.
4. Provide information about the witness, including their contact information and relationship to the parties involved.
5. Give details about the vehicle registration, driver information, and vehicle type.
6. Finally, provide contact information for the reporting person and their relationship to the parties involved.

## Field-by-Field Explanation
### Accident Description (Page 1)
* **Accident Description** (`motor_vehicle_accident_description`, text, optional): Describe the accident in a few sentences, including the date and location where it occurred.
* **Accident Date** (`accident_date`, date, optional): Enter the date of the accident in the format `YYYY-MM-DD`.
* **Vehicle Involved Parties** (`vehicle_involved_parties`, select multiple, optional): Select all parties involved in the accident, which can be First Party, Second Party, or Third Party.
* **Vehicle Damage** (`vehicle_damage`, text, optional): Describe any damage to the vehicles involved.
* **Witness Info** (`witness_info`, select one, optional): Select the type of witness, which can be Police, Witness, or Insurance.
* **Witness Statements** (`witness_statements`, text, optional): Provide a statement from the witness, including their contact information.
* **Vehicle Registration** (`vehicle_registration`, text, optional): Enter the vehicle registration information, including the license plate number and state.
* **Driver Info** (`driver_info`, select one, optional): Select the driver's gender, which can be Male, Female, or Other.
* **Vehicle Type** (`vehicle_type`, select one, optional): Select the type of vehicle involved in the accident, which can be Car, Motorcycle, Truck, or Bike.
* **Accident Location** (`accident_location`, text, optional): Describe the location where the accident occurred.
* **Reporting Person Info** (`reporting_person_info`, select one, optional): Select the type of reporting person, which can be Police, Witness, Driver, or Insurance Company.
* **Reporting Person Contact** (`reporting_person_contact`, text, optional): Enter the contact information for the reporting person.
* **Reporting Person Relationship** (`reporting_person_relationship`, select one, optional): Select the relationship of the reporting person to the parties involved, which can be Witness, Driver, Police Officer, or Family Member.
* **Reporting Person Organization** (`reporting_person_organization`, text, optional): Enter the name of the reporting person's organization or company.
