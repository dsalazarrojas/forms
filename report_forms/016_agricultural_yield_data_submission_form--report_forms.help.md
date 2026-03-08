# Agricultural Yield Data Submission Form - Help Guide
## Purpose
This form is designed to collect data on agricultural yield from farms, allowing for the accurate tracking and analysis of yield data.

## How To Complete This Form
1. Fill in the required fields with accurate information:
	* Farm name: Enter the name or identifier of the farm.
	* Crop type: Select the main crop type for the reported yield.
	* Harvest date: Enter the date when the yield was measured.
	* Area harvested in hectares: Enter the area for which the yield is reported.
	* Total yield in tonnes: Enter the measured or estimated yield.
	* Measurement method: Select how the yield was measured or estimated.
	* Total yield in tonnes (optional): If applicable, provide the total yield in tonnes.
2. Provide optional information:
	* Contact person: Enter the name of the person preparing the submission (optional).
	* Moisture content percent: If known, enter the moisture content percentage at harvest.
	* Post harvest losses percent: If known, enter the estimated post-harvest losses percentage.
	* Supporting documents: Attach or describe any supporting documents or evidence.

## Field-by-Field Explanation
* **Farm name (1)** (`farm_name`, text, required): The name or identifier of the farm.
* **Contact person (2)** (`contact_person`, text, optional): The name of the person preparing the submission (if applicable).
* **Crop type (3)** (`crop_type`, text, required): The main crop type for the reported yield.
* **Harvest date (4)** (`harvest_date`, date, required): The date when the yield was measured.
* **Area harvested in hectares (5)** (`area_harvested_hectares`, number, required): The area for which the yield is reported.
* **Total yield in tonnes (6)** (`total_yield_tonnes`, number, required): The measured or estimated yield.
* **Moisture content percent (7)** (`moisture_content_percent`, number, optional): If known, enter the moisture content percentage at harvest.
* **Post harvest losses percent (8)** (`post_harvest_losses_percent`, number, optional): If known, enter the estimated post-harvest losses percentage.
* **Measurement method (9)** (`measurement_method`, select_one, required): Select how the yield was measured or estimated.
* **Supporting documents (10)** (`supporting_documents`, text, optional): Attach or describe any supporting documents or evidence.
* **Measurement method (9)**: Options for measurement method include Weighbridge, Sampling and extrapolation, Estimate, or Other.
