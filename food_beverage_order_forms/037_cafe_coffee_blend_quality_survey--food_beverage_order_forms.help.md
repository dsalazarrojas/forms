<thinking>
We will design this form to guide users in completing a survey about a cafe's coffee blend quality. The purpose of this form is to collect data on user preferences and feedback about a specific coffee blend. The form will likely be used in a coffee shop setting to gather information from customers and baristas. We need to ensure that the form is clear and concise in its instructions and field explanations to avoid confusion and misinterpretation.
</thinking>

# Cafe Coffee Blend Quality Survey - Help Guide
## Purpose
This form is designed to gather information from customers about the quality of a specific coffee blend at a cafe. Please answer the questions honestly to help us improve our products and services.

## How To Complete This Form
1. Fill in your name (optional but recommended for our records).
2. Enter the date you visited the cafe and tasted the blend (optional but recommended).
3. Enter the name or code of the blend you tested.
4. Rate the aroma, flavor, and mouthfeel of the blend on a scale from 1 (low) to 5 (high).
5. Indicate if you would purchase this blend (True, False, or Maybe).
6. Provide any additional tasting notes (optional).

## Field-by-Field Explanation
* **Respondent name** (`respondent_name`, `text`, optional): Enter your name so we can keep records of your feedback.
* **Visit date** (`visit_date`, `date`, optional): Enter the date you visited the cafe and tasted the blend.
* **Blend tested** (`blend_tested`, `text`, required): Enter the name or code of the blend you tested.
* **Aroma rating** (`aroma_rating`, `number`, required): Rate the aroma of the blend on a scale from 1 (low) to 5 (high). A high rating means the aroma is strong and pleasant.
* **Flavor rating** (`flavor_rating`, `number`, required): Rate the flavor of the blend on a scale from 1 (low) to 5 (high). A high rating means the flavor is balanced and enjoyable.
* **Mouthfeel rating** (`mouthfeel_rating`, `number`, required): Rate the mouthfeel of the blend on a scale from 1 (low) to 5 (high). A high rating means the mouthfeel is smooth and pleasant.
* **Overall preference** (`overall_preference`, `select_one`, required): Choose whether you would purchase this blend (True, False, or Maybe). A True rating means you would definitely purchase the blend, while a False rating means you would not.
* **Tasting notes** (`tasting_notes`, `text`, optional): Provide any additional notes or observations about the flavor profile and overall experience of the blend. This can include notes about the flavor, acidity, or body of the blend.

## Tips
* Be honest and accurate when rating the aroma, flavor, and mouthfeel of the blend.
* If you are unsure about a particular rating, choose a rating that best represents your experience.
* If you have any additional comments or suggestions, include them in the tasting notes field.
