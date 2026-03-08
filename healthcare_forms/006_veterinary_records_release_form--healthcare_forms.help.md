# Veterinary Records Release Form - Help Guide
## Purpose
The Veterinary Records Release Form is a document used to facilitate the transfer of veterinary records between practices. This form is used to ensure that the records are handled properly and in compliance with relevant laws and regulations.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the information for the pet owner, including their name and any relevant contact details.
2. Select the veterinary practice that currently holds the medical records for the pet.
3. If the transfer of medical records is authorized, select "True" from the "transfer_authorization" field.
4. If the transfer of medical records is authorized, enter the date and time of the transfer in the "transfer_date" and "transfer_time" fields respectively.
5. Indicate the reason for the transfer in the "transfer_reason" field.
6. Finally, sign and date the form in the "signature" field.

## Field-by-Field Explanation

* **pet_owner** (`pet_owner`, Text, Optional): Enter the name and contact information for the pet owner.
* **veterinary_practice** (`veterinary_practice`, Text, Optional): Enter the name of the veterinary practice that currently holds the medical records for the pet.
* **transfer_authorization** (`transfer_authorization`, Select, Optional): Select "True" if the transfer of medical records is authorized.
* **transfer_date** (`transfer_date`, Date, Optional): Enter the date of the transfer of medical records.
* **transfer_time** (`transfer_time`, Time, Optional): Enter the time of the transfer of medical records.
* **medical_records** (`medical_records`, Select Multiple, Optional): Indicate which medical records are being transferred (All, Some, or None).
* **transfer_reason** (`transfer_reason`, Text, Optional): Enter the reason for the transfer of medical records.
* **signature** (`signature`, Note, Optional): Sign and date the form to confirm that the transfer of medical records has been completed.

## Tips
* Ensure that all fields are completed accurately and thoroughly.
* This form should only be used for the transfer of veterinary records and not for other purposes.
* Review the form carefully before signing to ensure that all information is complete and correct.
