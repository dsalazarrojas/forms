<thinking>
This form is designed to collect information related to the intake and care of a dog. The purpose of this form is to gather vital details about the dog's intake date, owner's information, medical history, and other relevant details. This form should be used when a dog is being brought into a shelter or rescue organization. The internal logic checks for duplicate records based on the microchip number. This form does not collect any sensitive or personally identifiable information.
</thinking>

# dog_intake_record_checklist - Help Guide
## Purpose
This form is designed to collect information about the intake and care of a dog. It gathers vital details about the dog's intake date, owner's information, medical history, and other relevant details to help care for the dog.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the intake date of the dog.
2. Provide information about the owner, such as their name and contact details.
3. Enter details about the dog, including its name and any relevant medical history.
4. Answer questions about the dog's microchip status, license status, and spay/neutered status.
5. Enter the microchip number, if applicable.
6. Provide any previous rescue information, veterinary information, and shelter information.
7. Enter any relevant medical history or notes.

## Field-by-Field Explanation
* **Intake Date** (`intake_date`, `date`, required: false): The date the dog was brought into the shelter or rescue organization.
* **owner_info** (`owner_info`, `text`, required: false): Information about the dog's owner, including their name and contact details.
* **dog_info** (`dog_info`, `text`, required: false): Details about the dog, such as its name, age, and breed.
* **Medical Notes** (`medical_notes`, `text`, required: false): Any relevant medical history or notes about the dog.
* **Microchip Status** (`microchip_status`, `select_one`, required: false): Whether the dog is microchipped or not.
* **License Status** (`license_status`, `select_one`, required: false): The status of the dog's license, such as whether it's licensed or not.
* **Spay/ Neutered** (`spay_neutered`, `select_multiple`, required: false): Whether the dog is spayed or neutered or not.
* **Microchip Number** (`microchip_number`, `text`, required: false): The microchip number of the dog, if applicable.
* **Previous Rescue Info** (`previous_rescue_info`, `text`, required: false): Any previous rescue information, such as the name of the previous shelter or rescue organization.
* **Veterinary Info** (`veterinary_info`, `text`, required: false): Information about the dog's veterinary care, such as the name of the vet and any relevant medical history.
* **Shelter Info** (`shelter_info`, `text`, required: false): Information about the shelter or rescue organization that brought the dog in.
* **Medical History** (`medical_history`, `text`, required: false): A comprehensive medical history of the dog, including any allergies, surgeries, or other relevant health issues.
