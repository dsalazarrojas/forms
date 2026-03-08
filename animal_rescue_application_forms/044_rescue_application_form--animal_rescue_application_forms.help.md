# rescue_application_form - Help Guide

## Purpose
The <code>rescue_application_form</code> is a form used to record information about animal rescues. It is intended for individuals or organizations seeking to adopt a rescue animal. This form helps in providing critical information about the animal's condition, the adopter's details, and other relevant data required for the adoption process.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by filling in the required fields, such as "Adopts Application", "Animal", "Rescue Date" (if applicable), "Animal Type", "Contact Number", and "Adopter Signature".
2. For the "Adopter Message" field, provide any additional information you'd like to share with the animal rescue team.
3. Select the correct "Animal Type" for the animal you are interested in adopting.
4. If applicable, select the "Rescue Date" when the animal was rescued.
5. Fill in your contact details in the "Contact Details" field.
6. If the animal has a distinct color, select it from the "Animal Color" options.
7. If you are contacting from a specific location, select the correct "Rescue Location".
8. Finally, confirm your "Adopter Signature" by selecting the correct option.

## Field-by-Field Explanation
* **Adopts Application** (`adopters_application`, text, required): This is the main application form for adopting a rescue animal. Provide your name and any relevant information.
* **Animal** (`animal_id`, number, required): Enter the ID number of the animal you are interested in adopting.
* **Rescue Date** (`rescue_date`, date, optional): If the animal was rescued, provide the date of the rescue.
* **Contact Details** (`contact_details`, text, optional): Provide any additional contact information, such as address or phone number.
* **Adopter Message** (`adopted_message`, text, optional): Share any additional information about yourself or the animal you are interested in adopting.
* **Animal Type** (`animal_type`, select_one, required): Choose the type of animal you are interested in adopting. Options are "Dog", "Cat", "Other".
* **Animal Color** (`animal_color`, select_multiple, optional): If the animal has a distinct color, select it from the options.
* **Contact Number** (`contact_number`, text, required): Enter your contact number for follow-up communication.
* **Adopter Details** (`adopted_details`, text, optional): Provide any additional details about yourself as an adopter.
* **Rescue Location** (`rescue_location`, select_one, optional): If applicable, select the location where the animal was rescued.
* **Adopter Signature** (`adopted_signature`, select_one, required): Confirm your signature by selecting the correct option.
* **Assigned Tool** (`assigned_tool`, text, optional): This field is currently not required. However, you can provide any additional information about the assigned tool for the rescue operation.
