# Asphalt Shingles Inspection Form - Help Guide
## Purpose
This form is designed to collect detailed information about the condition of asphalt shingles on a property. It helps inspectors to accurately report on the state of the shingles, flashing, and other roof components.

## How To Complete This Form

1. Fill in your name and the name of your company in the respective fields.
2. Date of inspection should be in the format `MM/DD/YY`.
3. Enter the full address of the property.
4. Estimate the age of the roof in years.
5. Select the type of asphalt shingles.
6. Enter the manufacturer of the shingles, if known.
7. Measure and enter the total square footage of the roof.
8. Indicate the slope of the roof.
9. Rate the overall condition of the shingles, including:
	* Excellent - Like New
	* Good - Minor Wear
	* Fair - Moderate Wear
	* Poor - Significant Damage
	* Failed - Replacement Needed
10. Assess the amount of granules lost from the shingles, including:
	* None - No Loss
	* Minimal - Slight Loss
	* Moderate - Noticeable Loss
	* Severe - Heavy Loss
	* Complete - Bare Shingles
11. Check if there is any curling or clawing of the shingles.
12. Estimate the number of cracked shingles.
13. Count the number of completely missing shingles.
14. Check if blistering is observed on the shingles.
15. Assess the presence of organic growth (moss or algae).
16. Rate the condition of the metal flashing.
17. Rate the condition of the gutters and downspouts.
18. Check if the roof ventilation is adequate.
19. Estimate the remaining life of the roof in years.
20. Enter any repair recommendations.
21. Confirm if a full replacement is recommended.
22. If applicable, take photos of the roof and enter the number of photos taken.
23. Sign your name as the inspector.

## Field-by-Field Explanation

* **Inspector Name** (`inspector_name`, `text`, `required`): Enter your full name.
* **Company Name** (`company_name`, `text`, `required`): Enter your company name.
* **Inspection Date** (`inspection_date`, `date`, `required`): Enter the date of inspection in `MM/DD/YY` format.
* **Property Address** (`property_address`, `text`, `required`): Enter the full address of the property.
* **Roof Age in Years** (`roof_age_years`, `number`, `required`): Estimate the age of the roof in years.
* **Shingle Type** (`shingle_type`, `select_one`, `required`): Select the type of asphalt shingles.
* **Shingle Brand** (`shingle_brand`, `text`, `optional`): Enter the manufacturer of the shingles if known.
* **Roof Square Footage** (`roof_square_footage`, `number`, `required`): Measure and enter the total square footage of the roof.
* **Roof Pitch** (`roof_pitch`, `select_one`, `required`): Select the slope of the roof.
* **Overall Shingle Condition** (`shingle_condition`, `select_one`, `required`): Rate the condition of the shingles, including:
	+ Excellent - Like New
	+ Good - Minor Wear
	+ Fair - Moderate Wear
	+ Poor - Significant Damage
	+ Failed - Replacement Needed
* **Granule Loss Assessment** (`granule_loss`, `select_one`, `required`): Assess the amount of granules lost from the shingles, including:
	+ None - No Loss
	+ Minimal - Slight Loss
	+ Moderate - Noticeable Loss
	+ Severe - Heavy Loss
	+ Complete - Bare Shingles
* **Is Shingle Curling Present** (`curling_present`, `select_one`, `required`): Check if there is any curling or clawing of the shingles.
* **Number of Cracked Shingles** (`cracked_shingles`, `number`, `required`): Estimate the number of cracked shingles.
* **Number of Missing Shingles** (`missing_shingles`, `number`, `required`): Count the number of completely missing shingles.
* **Is Blistering Observed** (`blistering_observed`, `select_one`, `required`): Check if blistering is observed on the shingles.
* **Moss or Algae Growth** (`moss_algae_growth`, `select_one`, `required`): Assess the presence of organic growth (moss or algae).
* **Flashing Condition** (`flashing_condition`, `select_one`, `required`): Rate the condition of the metal flashing.
* **Gutter and Downspout Condition** (`gutter_condition`, `select_one`, `required`): Rate the condition of the gutters and downspouts.
* **Is Roof Ventilation Adequate** (`ventilation_adequate`, `select_one`, `required`): Check if the roof ventilation is adequate.
* **Estimated Remaining Life in Years** (`estimated_remaining_life`, `number`, `required`): Estimate the remaining life of the roof in years.
* **Repair Recommendations** (`repair_recommendations`, `text`, `required`): Enter any repair recommendations.
* **Is Full Replacement Recommended** (`replacement_recommended`, `select_one`, `required`): Confirm if a full replacement is recommended.
* **Number of Photos Taken** (`photos_count`, `number`, `optional`): If applicable, enter the number of photos taken.
* **Inspector Signature** (`inspector_signature`, `text`, `required`): Sign your name as the inspector.

## Tips

* Make sure to fill out the form thoroughly and accurately.
* Be consistent in your ratings and assessments.
* Take photos of any notable issues for documentation.
* Enter any repair recommendations or full replacement recommendations.
* Verify the accuracy of your information with other relevant sources.
* Sign and date the form as the inspector.
