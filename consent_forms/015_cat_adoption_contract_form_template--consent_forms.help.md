# Cat Adoption Contract Form Template - Help Guide
## Purpose
The purpose of this form is to finalize the adoption of a cat, establishing the terms of the adoption between the adopter and the shelter.
## How To Complete This Form
To complete this form, please follow these steps:

* Read and review each field carefully, ensuring you understand the agreement or information required.
* Fill out your details accurately and honestly.
* For select fields (e.g., veterinary care, return policy), select the corresponding option that best represents your intentions.
* Sign the form electronically, using your full legal name.

## Field-by-Field Explanation
### Adopter Full Name
* Adopter Full Name (`adopter_full_name`, `text`, `required`: true)
	+ Enter your full legal name as it appears on your government-issued identification documents.
* Cat Name and ID Number
* Cat Name and ID Number (`cat_id_name`, `text`, `required`: true)
	+ Enter the name and ID number of the adopted cat.
* Final Adoption Fee Paid
* Final Adoption Fee Paid (`adoption_fee`, `number`, `required`: true)
	+ Enter the amount paid for the adoption, as agreed upon with the shelter.
* I agree to provide annual veterinary check-ups and vaccinations
* I agree to provide annual veterinary check-ups and vaccinations (`veterinary_care_ack`, `select_one`, `required`: true)
	+ Select `I Agree` to confirm your agreement to provide annual veterinary check-ups and vaccinations for the adopted cat.
* I agree to return the cat to the shelter if I can no longer care for it
* I agree to return the cat to the shelter if I can no longer care for it (`return_policy_ack`, `select_one`, `required`: true)
	+ Select `I Agree` to confirm your agreement to return the cat to the shelter if you can no longer care for it.
* I agree to keep this cat as an indoor-only pet
* I agree to keep this cat as an indoor-only pet (`indoor_only_agreement`, `select_one`, `required`: true)
	+ Select `I Agree` to confirm your agreement to keep the cat indoors, unless otherwise specified for a working cat.
* I agree that I will not declaw this cat
* I agree that I will not declaw this cat (`declaw_prohibition`, `select_one`, `required`: true)
	+ Select `I Agree` to confirm your agreement not to declaw the cat, as it is a major surgery.
* I consent to a follow-up home visit or phone call
* I consent to a follow-up home visit or phone call (`home_inspection_consent`, `select_one`, `required`: true)
	+ Select `I Consent` to confirm your agreement to a follow-up visit or call from the shelter.
* I release the shelter from all liability after adoption
* I release the shelter from all liability after adoption (`liability_waiver`, `select_one`, `required`: true)
	+ Select `I Agree` to confirm your release of liability from the shelter after adoption.
* -- Final Signatures --
* -- Final Signatures -- (`signatures_header`, `note`, `required`: false)
* Adopter Electronic Signature
* Adopter Electronic Signature (`signature_adopter`, `text`, `required`: true)
	+ Type your full legal name for electronic signature.
* Shelter Representative Name
* Shelter Representative Name (`signature_representative`, `text`, `required`: true)
	+ Type the full name of the shelter representative.
* Date signed
* Date signed (`signing_date`, `date`, `required`: true)
	+ Enter the date the form was signed.
