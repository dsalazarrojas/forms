# Veterinary Release Form - Help Guide
## Purpose
The Veterinary Release Form is designed to collect important information from pet owners and provide consent for medical treatment, testing, or euthanasia. This form helps veterinarians to ensure that they have the necessary permissions and understand the pet's medical history before providing care.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your pet's name in the `Pet Name` field.
2. Provide your name as the pet's owner in the `Owner Name` field.
3. Enter the pet's species (e.g., dog, cat, etc.) in the `Pet Species` field.
4. Select the reason for the visit by choosing from the options under `Reason for Visit` (e.g., routine check-up, surgery, etc.).
5. Choose the authorization for medical treatment, testing, or euthanasia from the options under `Authorization`.
6. List any medications the pet is currently taking in the `Medications` field.
7. Provide any special instructions for the veterinarian in the `Special Instructions` field.
8. Enter the date and time of the release in the `Release Date` and `Release Time` fields.
9. Choose the reason for release from the options provided.
10. Sign the form with your signature in the `Signature` field.
11. If applicable, provide your veterinary license number in the `Veterinary License` field.
12. Enter the practice's name, address, phone number, email, and fax number in the respective fields.
13. Sign and date the `Signature Date` and `Signature Time` fields.

## Field-by-Field Explanation
* **Pet Name** (`pet_name`, text, required): Enter your pet's name.
* **Owner Name** (`owner_name`, text, required): Provide your name as the pet's owner.
* **Pet Species** (`pet_species`, text, required): Enter the pet's species (e.g., dog, cat, etc.).
* **Owner Signature** (`owner_signature`, text, required): Sign your name as the pet's owner.
* **Vet Signature** (`vet_signature`, text, required): Sign your name as the veterinarian.
* **Veterinarian** (`veterinarian`, text, required): Enter the name of the veterinarian providing care.
* **Reason for Visit** (`reason_for_visit`, text, required): Choose from the options (e.g., routine check-up, surgery, etc.).
* **Authorization** (`authorization`, select_one, required): Choose from the options (e.g., medical treatment, testing, euthanasia).
* **Medical History** (`medical_history`, text, required): Provide any relevant medical history for the pet.
* **Medications** (`medication_list`, select_multiple, required): List any medications the pet is currently taking.
* **Special Instructions** (`special_instructions`, text, required): Provide any special instructions for the veterinarian.
* **Release Date** (`release_date`, date, optional): Enter the date of release.
* **Release Time** (`release_time`, time, optional): Enter the time of release.
* **Reason for Release** (`reason_for_release`, text, required): Choose the reason for release.
* **Signature Date** (`signature_date`, date, required): Sign and date your signature.
* **Signature Time** (`signature_time`, time, required): Sign and time your signature.
* **Signature** (`signature`, text, required): Sign your name as the veterinarian.
* **Veterinary License** (`veterinary_license`, text, optional): Provide your veterinary license number.
* **Practice Name** (`practice_name`, text, optional): Enter the practice's name.
* **Practice Address** (`practice_address`, text, optional): Enter the practice's address.
* **Practice Phone** (`practice_phone`, text, optional): Enter the practice's phone number.
* **Practice Email** (`practice_email`, text, optional): Enter the practice's email address.
* **Practice Fax** (`practice_fax`, text, optional): Enter the practice's fax number.
* **Practice License** (`practice_license`, text, optional): Provide the practice's license number.
