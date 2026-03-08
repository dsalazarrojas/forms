# Steam Boiler Form - Help Guide
## Purpose
This form is used to track and report the status of steam boilers in a manufacturing context, including their operational status, maintenance schedule, inspection results, and maintenance records.

## How To Complete This Form

1. Select the appropriate general information about the boiler from the drop-down menu. This field is required and will determine the context for the rest of the form.
2. Select the maintenance schedule frequency for the boiler from the drop-down menu. This field is required and will indicate how often maintenance is performed on the boiler.
3. Select the inspection results for the boiler from the drop-down menu. This field is required and will indicate the status of the boiler's last inspection.
4. Provide a brief description of any maintenance records, including dates, actions taken, and notes from the maintenance team. This field is required and should be filled out with relevant details.

## Field-by-Field Explanation

* **steam_boiler_info** (`steam_boiler_info`, select_multiple, required): Choose the general status of the boiler (operational, non-operational, or under repair).
* **maintenance_schedule** (`maintenance_schedule`, select_multiple, required): Select the frequency of maintenance performed on the boiler (weekly, monthly, quarterly, or yearly).
* **inspection_results** (`inspection_results`, select_multiple, required): Choose the status of the boiler's last inspection (passed, failed, or pending).
* **maintenance_records** (`maintenance_records`, text, required): Provide a brief description of any maintenance work done on the boiler, including dates, actions taken, and notes from the maintenance team.

## Tips

* Make sure to select the correct maintenance schedule frequency to accurately reflect the boiler's maintenance needs.
* Clearly and concisely describe the inspection results, including any issues found and actions taken.
* Be thorough and accurate when filling out the maintenance records, as these will be used for future reference and decision-making.

Note: This guide assumes that the fields are populated in the context of one boiler per form instance. If this is not the case, please adjust the guide accordingly.
