<thinking>
This form is intended to gather information about users' preferences regarding contact lens colors, specifically their current and preferred color tones, color opacity, and purchasing habits. This data will help improve the contact lens color offerings for customers. This form should not be filled out by users who do not want to participate in this survey or have previously answered it. If a user has already filled out this form, their responses will not be counted in the data collection.</thinking>

# Contact Lens Color Selection Survey - Help Guide
## Purpose
This form is designed to gather information about your preferences regarding contact lens colors. Your responses will help us improve our contact lens color offerings.

## How To Complete This Form
1. Fill out the form completely and honestly to help us better understand your preferences.
2. Select your age group from the options provided.
3. If you currently use colored contact lenses, specify your current lens color.
4. Choose your preferred color tone.
5. Select your preferred color opacity.
6. Choose the occasions for which you would wear colored lenses.
7. Indicate how important comfort is to you compared to color appearance.
8. Select the purchase channels you prefer for buying contact lenses.
9. Choose how willing you are to try new lens colors.
10. Indicate your price sensitivity when choosing lenses.
11. Provide any additional feedback you have about our contact lens color options.

## Field-by-Field Explanation
* **-- Contact Lens Survey Header** (`header`, `note`, required: false): This is the title of the form.
* **Your name** (`respondent_name`, `text`, required: false): If you want to remain anonymous, you can leave this field blank.
* **Age group** (`age_group`, `select_one`, required: false): Select your age group from the options provided:
	+ Under 18
	+ 18-24
	+ 25-34
	+ 35-44
	+ 45 and over
* **Current contact lens color** (`current_lens_color`, `text`, required: false): If you use colored lenses, specify your current color.
* **Preferred color tone** (`preferred_color_tone`, `select_one`, required: true): Choose the color tone you prefer:
	+ Natural
	+ Vibrant
	+ Subtle enhancement
	+ Dramatic
* **Color opacity preference** (`color_opacity_preference`, `select_one`, required: true): Select your preferred color opacity:
	+ Sheer
	+ Moderate
	+ Opaque
* **Occasions for wearing colored lenses** (`occasions_for_use`, `select_multiple`, required: false): Select all the occasions for which you would wear colored lenses:
	+ Daily use
	+ Special events
	+ Cosplay or costume
	+ Photography
	+ Other
* **Importance of comfort** (`comfort_importance`, `select_one`, required: true): Indicate how important comfort is to you compared to color appearance:
	+ Very important
	+ Somewhat important
	+ Not important
* **Preferred purchase channels** (`purchase_channels`, `select_multiple`, required: false): Select all the channels you prefer for buying contact lenses:
	+ Optical store
	+ Online retailer
	+ Clinic
	+ Brand website
* **Willingsness to try new colors** (`willingness_to_try_new_colors`, `select_one`, required: true): Choose how willing you are to try new lens colors:
	+ True
	+ Maybe
	+ False
* **Price sensitivity** (`price_sensitivity`, `select_one`, required: false): Indicate how sensitive you are to price when choosing lenses:
	+ Highly sensitive
	+ Moderately sensitive
	+ Not sensitive
* **Additional feedback** (`additional_feedback`, `text`, required: false): Provide any other thoughts or feedback about our contact lens color options.
