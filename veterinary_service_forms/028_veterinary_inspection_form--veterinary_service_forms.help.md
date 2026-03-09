# Veterinary Inspection Form - Help Guide
## Purpose
The Veterinary Inspection Form is a document used to collect information about the veterinary services provided to animals. This form helps veterinary professionals keep accurate records of the services they have performed.

## How To Complete This Form
1. Fill in the general information section (Field 2) with details about the inspection, including the date, client information, and any other relevant details.
2. In the animal details section (Field 3), select the applicable options for the condition of the animal.
3. In the medical information section (Field 4), provide any medical information relevant to the inspection, including any medications or treatments administered.
4. In the medical condition section (Field 5), describe any medical conditions present during the inspection.
5. Add any additional notes or comments in the notes section (Field 6).
6. If applicable, upload photos of the animal or inspection results.
7. Review and sign off on the form (Field 8) to confirm that the inspection has been completed.
8. Finally, add any additional comments or observations in the additional comments section (Field 9).

## Field-by-Field Explanation

* **Title** (`title`, string, required): Enter a brief title for the inspection.
* **General info** (`general_info`, string, required): Enter details about the inspection, including date, client information, and any other relevant details.
* **Animal details** (`animal_details`, select_multiple, required): Select the applicable options for the condition of the animal.
	+ 'Yes': The animal is in good condition.
	+ 'No': The animal is not in good condition.
* **Medical info** (`medical_info`, string, required): Provide any medical information relevant to the inspection, including any medications or treatments administered.
* **Medical condition** (`medical_condition`, string, required): Describe any medical conditions present during the inspection.
* **Notes** (`notes`, string, required): Add any additional notes or comments about the inspection.
* **Photos** (`photos`, string, required): If applicable, upload photos of the animal or inspection results.
* **Veterinarian Signoff** (`veterinary_sign_off`, string, required): Review and sign off on the form to confirm that the inspection has been completed.
* **Additional comments** (`additional_comments`, string, required): Add any additional comments or observations about the inspection.
