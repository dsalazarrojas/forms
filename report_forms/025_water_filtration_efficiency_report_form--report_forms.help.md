# Water Filtration Efficiency Report Form - Help Guide
## Purpose
The Water Filtration Efficiency Report Form is designed to collect data on water filtration efficiency from various sources. This form helps in gathering information on water source, flow direction, filter type, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the water source from the available options.
2. Choose the flow direction of the water.
3. Select the filter type used in the water filtration process.
4. Enter the filter size and flow rate if applicable.
5. Enter the pressure drop and water temperature if applicable.
6. Enter the filtration rate if applicable.
7. Add any additional notes about the filtration process.
8. Select the submitter's name, phone number, email, organization, position, and other contact information.

## Field-by-Field Explanation

* **Water Source** (`water_source`, select_one, required: false): Select the source of the water being filtered. This can be Source 1, Source 2, or Source 3.
* **Flow Direction** (`flow_direction`, select_multiple, required: false): Choose the direction of the water flow. Select one or more of Upstream and Downstream.
* **Filter Type** (`filter_type`, select_one, required: false): Select the type of filter used in the filtration process. Options include Activated Carbon, Ceramic, and Fiber.
* **Filter Size** (`filter_size`, number, required: false): Enter the size of the filter, if applicable.
* **Flow Rate** (`flow_rate`, number, required: false): Enter the flow rate of the filtered water, if applicable.
* **Pressure Drop** (`pressure_drop`, number, required: false): Enter the pressure drop of the filtration process, if applicable.
* **Water Temperature** (`water_temperature`, number, required: false): Enter the temperature of the water being filtered, if applicable.
* **Filtration Rate** (`filtration_rate`, number, required: false): Enter the filtration rate, if applicable.
* **Notes** (`notes`, note, required: false): Add any additional notes about the filtration process.
* **Submit** (`submit_button`, select_one, required: false): Select "Submit" to submit the report. Alternatively, you can select "Cancel" to start again.
* **Email** (`email`, email, required: false): Enter the submitter's email address.
* **Phone** (`phone`, text, required: false): Enter the submitter's phone number.
* **Address** (`address`, text, required: false): Enter the submitter's address.
* **City** (`city`, text, required: false): Enter the city where the submitter is located.
* **State** (`state`, text, required: false): Enter the state where the submitter is located.
* **Zip** (`zip`, text, required: false): Enter the zip code where the submitter is located.
* **Country** (`country`, text, required: false): Enter the country where the submitter is located.
* **Date** (`date`, date, required: false): Enter the date of submission.
* **Time** (`time`, time, required: false): Enter the time of submission.
* **Submitter Name** (`submitter_name`, text, required: false): Enter the name of the submitter.
* **Submitter Phone** (`submitters_phone`, text, required: false): Enter the phone number of the submitter.
* **Submitter Email** (`submitters_email`, email, required: false): Enter the email of the submitter.
* **Submitter Organization** (`submitters_organization`, text, required: false): Enter the organization of the submitter.
* **Submitter Position** (`submitters_position`, text, required: false): Enter the position of the submitter.
