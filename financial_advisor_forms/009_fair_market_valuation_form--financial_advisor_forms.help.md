<thinking>This form is part of a larger system for financial advisors to perform tasks related to fair market valuation. The Fair Market Valuation Form is used to gather information about a specific property for the purpose of assessing its value. This form is not intended for use in other contexts.

The form is designed to be completed in conjunction with other forms and systems used for property evaluation and appraisal. The purpose of this form is to help the user gather data that can be used to make a more accurate and informed assessment of the property's value.

Before proceeding, please ensure that you are using this form as intended and that you have reviewed the relevant sections for any information that may be specific to your situation or jurisdiction. This form is not a substitute for professional expertise or local regulations, and you should always consult with a qualified financial advisor or local authorities before making any decisions related to property valuation.

This form is divided into two main sections: Property and Comparable Sales. The Property section gathers information about the specific property in question, while the Comparable Sales section is used to gather data from similar properties that can be used for comparison and analysis.

This form does not duplicate any other form in the system, and you should not use it for any other purpose.</thinking>

# Fair Market Valuation Form - Help Guide
## Purpose
This form is used to gather information about a specific property for the purpose of assessing its value.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer each question carefully and accurately based on the information about the property in question.
2. For the Property section, enter the details about the specific property you are evaluating.
3. For the Comparable Sales section, select the options that apply to similar properties that can be used for comparison and analysis.

## Field-by-Field Explanation
### Page 1: Property Location
* **Property Location** (`property_location`, text, required): Enter the address or location of the property in question.

### Page 2: Property Type
* **Property Type** (`property_type`, select_one, required): Select the type of property being evaluated (e.g. residential, commercial, etc.).

### Page 3: Property Size
* **Property Size** (`property_size`, number, required): Enter the size of the property in question.

### Page 4: Property Year Built
* **Property Year Built** (`property_year_built`, number, required): Enter the year the property was built.

### Page 5: Property Age
* **Property Age** (`property_age`, number, required): Calculate the age of the property by subtracting the year built from the current year.

### Page 6: Property Condition
* **Property Condition** (`property_condition`, select_one, required): Select the condition of the property (e.g. good, fair, poor).

### Page 7: Comparable Sales
* **Comparable Sales** (`comparable_sales`, select_multiple, required): Select the properties that are comparable to the property in question.
	+ Select "Yes" if the property has had recent sales.
	+ Select "No" if the property has not had recent sales.

### Page 8: Comparable Rental Data
* **Comparable Rental Data** (`comparable_rental_data`, select_multiple, required): Select the rental data available for the property in question.
	+ Select "Yes" if rental data is available.
	+ Select "No" if rental data is not available.

### Page 9: Comparable Rental Rate
* **Comparable Rental Rate** (`comparable_rental_rate`, select_one, required): Select the rental rate for the property in question (e.g. Good, Fair).

### Page 10: Comparable Rental Period
* **Comparable Rental Period** (`comparable_rental_period`, select_one, required): Select "Yes" if rental period is available for the property in question.

### Page 11: Comparable Sold Price
* **Comparable Sold Price** (`comparable_sold_price`, number, required): Enter the sold price of the comparable property.

### Page 12: Comparable Sold Date
* **Comparable Sold Date** (`comparable_sold_date`, date, required): Enter the date the comparable property was sold.

### Page 13: Property Use
* **Property Use** (`property_use`, select_one, required): Select the use of the property in question (e.g. residential, commercial, etc.).

### Page 14: Property Use Other
* **Other Property Use** (`property_neighbouring_land_use_other`, text, required): Enter any other use of the property in question.

### Page 15: Property Neighbouring Land Use
* **Property Neighbouring Land Use** (`property_neighbouring_land_use`, select_one, required): Select the land use neighboring the property in question.

### Page 16: Property Neighbouring Waterfront Use
* **Property Neighbouring Waterfront Use** (`property_neighbouring_waterfront_use`, select_one, required): Select "Yes" if the property is located on a waterfront.

### Page 17: Property Neighbouring Parking Use
* **Property Neighbouring Parking Use** (`property_neighbouring_parking_use`, select_one, required): Select "Yes" if the property is located near a parking area.

### Page 18: Property Neighbouring Public Space Use
* **Property Neighbouring Public Space Use** (`property_neighbouring_public_space_use`, select_one, required): Select "Yes" if the property is located near public space.

### Page 19: Property Neighbouring Other Use
* **Property Neighbouring Other Use** (`property_neighbouring_other_use`, text, required): Enter any other land use neighboring the property in question.

### Page 20: Notes
* **Notes** (`notes`, text, optional): Enter any additional comments or notes about the property in question.
