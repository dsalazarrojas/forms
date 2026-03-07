<thinking>
We will create a help guide for the Ruby Ribbon Sizing Form (Newberry) form, a tool used for measuring and confirming customer measurements for fitting. This form is used to capture the customer's preferred style, height, chest, waist, hip, and body measurements. The form is essential for determining the correct fit of clothing items. To prevent duplicates, we will check if the form has been previously submitted by the customer.

</thinking>

# Ruby Ribbon Sizing Form (Newberry) - Help Guide
## Purpose
The Ruby Ribbon Sizing Form (Newberry) is a form used to collect measurements and style preferences from customers to ensure accurate fitting of clothing items.

## How To Complete This Form
To complete this form, follow these steps:

1. Select your preferred style from the "Preferred Style" dropdown menu:
	* Choose from the options: Ruby Ribbon, Classic, Elegant, or Casual.
2. Provide your height in inches in the "Height" field.
3. Enter your chest measurement in inches in the "Chest" field.
4. Enter your waist measurement in inches in the "Waist" field.
5. Enter your hip measurement in inches in the "Hip" field.
6. Confirm your body measurements in the "Confirm Body Measurements" field.
7. Click the "Submit" button to submit your form.

## Field-by-Field Explanation
* **Body Measurements** (`body_measurements`, `text`, required: false): Enter your body measurements, which will be confirmed on the next page.
* **Preferred Style** (`preferred_style`, `select_one`, required: true): Choose your preferred style from the available options: Ruby Ribbon, Classic, Elegant, or Casual.
* **Height** (`height_in`, `number`, required: true): Enter your height in inches.
* **Chest** (`chest_in`, `number`, required: true): Enter your chest measurement in inches.
* **Waist** (`waist_in`, `number`, required: true): Enter your waist measurement in inches.
* **Hip** (`hip_in`, `number`, required: true): Enter your hip measurement in inches.
* **Confirm Body Measurements** (`measurements_confirmation`, `text`, required: false): Double-check your body measurements to ensure accuracy.
* **Submit** (`submit_button`, `note`, required: false): Click to submit your form and confirm your measurements.
