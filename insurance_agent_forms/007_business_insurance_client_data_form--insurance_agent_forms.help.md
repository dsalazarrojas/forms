# Business Insurance Client Data Form - Help Guide
## Purpose
This form is designed to collect business insurance data from clients, including business name, type, industry, address, years in operation, number of employees, annual revenue, number of locations, current insurance carrier, policy expiration, coverage types, property ownership, property value, number of vehicles, vehicle types, claims history, risk management practices, special risks, coverage limits preference, deductible preference, and additional comments. This information is crucial for the insurance agent to assess the business's insurance needs.

## How To Complete This Form
To fill out this form, follow these steps:

1.  Enter your business name.
2.  Select your business type (Sole proprietorship, Partnership, Limited Liability Company, Corporation, S Corporation, Non-profit, etc.).
3.  Choose your industry classification (Agriculture, Construction, Manufacturing, Retail, etc.).
4.  Enter your business address.
5.  Enter how long your business has been in operation.
6.  Enter the total number of full-time and part-time employees.
7.  Enter your approximate annual revenue.
8.  Enter the number of business locations.
9.  If you have a current insurance carrier, enter their name.
10.  If you have a current policy, enter the policy expiration date.
11.  Select all the coverage types you need (General liability, Property insurance, Workers compensation, etc.).
12.  Choose how you own or lease your business property.
13.  Enter the value of your business property.
14.  Enter the number of vehicles your business owns.
15.  Select all the vehicle types your business owns.
16.  Select your claims history (No claims, One claim, Two to three claims, Four or more claims).
17.  If you have had any claims, briefly describe them.
18.  Select all the risk management practices your business has in place.
19.  Describe any special risks associated with your business.
20.  Choose your preferred coverage limit level (Minimum required, Moderate coverage, Comprehensive coverage, Maximum available).
21.  Select your preferred deductible amount (Low deductible - higher premium, Medium deductible, High deductible - lower premium).
22.  Enter any additional comments or information about your business.

## Field-by-Field Explanation

*   **Business Name** (`business_name`, `text`, `required`): Enter the legal name of your business.
*   **Business Type** (`business_type`, `select_one`, `required`): Select the type of your business structure (Sole proprietorship, Partnership, Limited Liability Company, Corporation, S Corporation, Non-profit, etc.).
*   **Industry Classification** (`industry_classification`, `select_one`, `required`): Choose your business's primary industry (Agriculture, Construction, Manufacturing, Retail, etc.).
*   **Business Address** (`business_address`, `text`, `required`): Enter your business's full physical address.
*   **Years in Operation** (`years_in_operation`, `number`, `required`): Enter how long your business has been in operation.
*   **Number of Employees** (`number_of_employees`, `number`, `required`): Enter the total number of full-time and part-time employees.
*   **Annual Revenue** (`annual_revenue`, `number`, `required`): Enter your approximate annual revenue.
*   **Number of Locations** (`business_locations`, `number`, `required`): Enter the number of business locations.
*   **Current Insurance Carrier** (`current_insurance_carrier`, `text`, `optional`): If you have a current insurance carrier, enter their name.
*   **Current Policy Expiration** (`current_policy_expiration`, `date`, `optional`): If you have a current policy, enter the policy expiration date.
*   **Coverage Types Needed** (`coverage_types_needed`, `select_multiple`, `required`): Select all the insurance coverage types you need (General liability, Property insurance, Workers compensation, etc.).
*   **Property Ownership** (`property_ownership`, `select_one`, `required`): Choose how you own or lease your business property (Own building and land, Own building - lease land, Lease building, Home-based business, Mobile business, etc.).
*   **Property Value** (`property_value`, `number`, `optional`): Enter the value of your business property.
*   **Number of Vehicles** (`vehicles_owned`, `number`, `optional`): Enter the number of vehicles your business owns.
*   **Vehicle Types** (`vehicle_types`, `select_multiple`, `optional`): Select all the vehicle types your business owns (Cars, Trucks, Vans, etc.).
*   **Claims History** (`claims_history`, `select_one`, `required`): Select your claims history (No claims, One claim, Two to three claims, Four or more claims).
*   **Claims Description** (`claims_description`, `text`, `optional`): If you have had any claims, briefly describe them.
*   **Risk Management Practices** (`risk_management_practices`, `select_multiple`, `required`): Select all the risk management practices your business has in place (Safety training programs, Regular equipment maintenance, Security systems, etc.).
*   **Special Risks or Hazards** (`special_risks`, `text`, `optional`): Describe any special risks associated with your business.
*   **Coverage Limits Preference** (`coverage_limits_preference`, `select_one`, `required`): Choose your preferred coverage limit level (Minimum required, Moderate coverage, Comprehensive coverage, Maximum available).
*   **Deductible Preference** (`deductible_preference`, `select_one`, `required`): Select your preferred deductible amount (Low deductible - higher premium, Medium deductible, High deductible - lower premium).
*   **Additional Comments** (`additional_comments`, `text`, `optional`): Enter any additional comments or information about your business.

## Tips

*   Please answer all questions thoroughly and accurately to ensure the business's insurance needs are properly assessed.
*   If you are unsure about any question, contact the insurance agent for clarification.
*   Review the form before submitting it to ensure all information is complete.
