# Agricultural Yield Data Submission Form - Help Guide
## Purpose
This form is for submitting agricultural yield data for official reporting and evaluation purposes.

## How To Complete This Form
- Fill in your name as the farmer or farm manager
- Enter the name of your farm
- Fill in the farm identification number if you have one (optional)
- Enter your primary email for correspondence
- Provide your primary phone number
- Select the season of the harvest (e.g. Spring 2025, Summer 2025, etc.)
- Specify the type of crop being reported (e.g. Corn, Soybeans, etc.)
- If applicable, enter the specific variety of the crop
- Enter the name or ID of the field where the crop was harvested
- Report the size of the harvested acreage
- Enter the dates when the crop was planted, harvest began, and ended
- Enter the total yield of the crop
- Select the unit of measurement for the yield (e.g. Bushels, Pounds, etc.)
- Report the yield per acre
- If applicable, enter the moisture content of the harvested crop
- If applicable, report the test weight of the harvested crop
- If applicable, report the official grade of the harvested crop
- Specify where the harvested crop is stored
- Indicate if irrigation was applied
- Report if pests affected the yield
- Report if weather affected the yield
- If applicable, describe the weather effects
- If applicable, describe the fertilizer program used
- Compare the yield to your average
- Indicate if you have supporting documents to upload
- Confirm that the submitted data is accurate
- Enter the date of submission

## Field-by-Field Explanation
* **Farmer Name** (`farmer_name`, text, required): Full name of farmer or farm manager
* **Farm Name** (`farm_name`, text, required): Name of farming operation
* **Farm ID Number** (`farm_id`, text, optional): Farm identification number if applicable
* **Contact Email** (`contact_email`, email, required): Primary email for correspondence
* **Contact Phone** (`contact_phone`, text, required): Primary phone number
* **Harvest Season** (`submission_season`, select_one, required): Season of this yield data (e.g. Spring 2025, Summer 2025, etc.)
* **Crop Type** (`crop_type`, select_one, required): Primary crop being reported
* **Crop Variety** (`crop_variety`, text, optional): Specific variety if known
* **Field Name or ID** (`field_name`, text, required): Field identifier
* **Field Size (acres)** (`field_size`, number, required): Harvested acreage
* **Planting Date** (`planting_date`, date, required): When crop was planted
* **Harvest Start Date** (`harvest_start_date`, date, required): When harvest began
* **Harvest End Date** (`harvest_end_date`, date, required): When harvest ended
* **Total Yield** (`total_yield`, number, required): Total amount harvested
* **Yield Unit** (`yield_unit`, select_one, required): Unit of measurement (e.g. Bushels, Pounds, etc.)
* **Yield Per Acre** (`yield_per_acre`, number, required): Average yield per acre
* **Moisture Content (%)** (`moisture_content`, number, optional): Percentage at harvest
* **Test Weight (lbs per bushel)** (`test_weight`, number, optional): Quality measurement
* **Grain Quality Grade** (`grain_quality`, select_one, optional): Official grade if available
* **Storage Location** (`storage_location`, select_one, required): Where is the harvest stored
* **Irrigation Used** (`irrigation_used`, select_one, required): Was irrigation applied
* **Pest Issues Encountered** (`pest_issues`, select_one, required): Did pests affect yield
* **Weather Impact** (`weather_impact`, select_one, required): Did weather affect yield
* **Weather Details** (`weather_details`, text, optional): Describe weather effects
* **Fertilizer Program** (`fertilizer_program`, text, optional): Brief description of fertilizer use
* **Yield Comparison to Average** (`yield_comparison`, select_one, required): How does this compare to your average
* **Supporting Documents** (`supporting_documents`, select_one, required): Do you have documents to upload
* **Data Accuracy Confirmation** (`data_accuracy`, select_one, required): I confirm this data is accurate
* **Submission Date** (`submission_date`, date, required): Date of data submission
