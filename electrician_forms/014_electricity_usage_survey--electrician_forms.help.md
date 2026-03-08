# electricity_usage_survey - Help Guide
## Purpose
The purpose of this form is to collect information about an electrician's usage and consumption habits.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Select your usage period from the options provided in the "usage_period" field.
2. Choose the type of usage from the options in the "usage_type" field.
3. Fill in the square footage of the building or area being used in the "building_sqft" field.
4. If applicable, enter the amount of electricity consumed in the "electricity_consumed" field.
5. If applicable, enter the billed amount of electricity in the "electricity_billed" field.
6. Choose the billing period from the options in the "billing_period" field.
7. If applicable, enter the cost of electricity in the "electricity_cost" field.
8. Enter the total energy consumed in the "total_energy_consumed" field.
9. Enter the peak demand in the "peak_demand" field.
10. Enter the off-peak demand in the "off_peak_demand" field.
11. Enter the energy efficiency in the "energy_efficiency" field.
12. Add any additional notes about your electricity usage in the "notes" field.

## Field-by-Field Explanation

* **usage_period** (`usage_period`, select_one, required: false): Select the period of electricity usage.
  + High: High usage period
  + Medium: Medium usage period
  + Low: Low usage period
* **usage_type** (`usage_type`, select_one, required: false): Choose the type of electricity usage.
  + Home: Home usage
  + Building: Building usage
* **building_sqft** (`building_sqft`, number, required: false): Enter the square footage of the building or area being used.
* **electricity_consumed** (`electricity_consumed`, number, required: false): If applicable, enter the amount of electricity consumed.
* **electricity_billed** (`electricity_billed`, number, required: false): If applicable, enter the billed amount of electricity.
* **billing_period** (`billing_period`, select_one, required: false): Choose the billing period.
  + Month: Monthly billing period
  + Quarter: Quarterly billing period
  + Year: Yearly billing period
* **electricity_cost** (`electricity_cost`, number, required: false): If applicable, enter the cost of electricity.
* **total_energy_consumed** (`total_energy_consumed`, number, required: false): Enter the total energy consumed.
* **peak_demand** (`peak_demand`, number, required: false): Enter the peak demand.
* **off_peak_demand** (`off_peak_demand`, number, required: false): Enter the off-peak demand.
* **energy_efficiency** (`energy_efficiency`, number, required: false): Enter the energy efficiency.
* **notes** (`notes`, note, required: false): Add any additional notes about your electricity usage.
