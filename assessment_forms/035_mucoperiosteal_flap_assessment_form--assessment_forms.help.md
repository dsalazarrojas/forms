<thinking>...</thinking>
# Mucoperiosteal Flap Assessment Form - Help Guide
## Purpose
The Mucoperiosteal Flap Assessment Form is designed to collect information about the characteristics of a mucoperiosteal flap, a layer of dense fibrous tissue between the periosteum and the periosteum of a bone. This form helps clinicians assess the condition and location of the flap, as well as its size, color, and any additional comments or images.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's details, including their name and any relevant medical history.
2. Indicate the location of the flap, using the text field for this purpose.
3. Select the orientation of the flap using the dropdown menu.
4. Choose the type of flap using the multiple-choice dropdown menu.
5. Enter the size of the flap, using the number field.
6. Record the color of the flap using the text field.
7. Provide any additional comments about the flap's location, if necessary.
8. Upload any relevant images of the flap, if applicable.
9. Add any comments about the images, if necessary.

## Field-by-Field Explanation

* **patient_details** (`patient_details`, text, required: false): Enter the patient's name and any relevant medical history.
* **flap_location** (`flap_location`, text, required: false): Describe the location of the flap, such as which bone or area it is affecting.
* **flap_orientation** (`flap_orientation`, select_one, required: false): Choose the orientation of the flap using the dropdown menu, with options 1 through 8.
* **flap_type** (`flap_type`, select_multiple, required: false): Select the type of flap using the multiple-choice dropdown menu, with options 1 through 5.
* **flap_size** (`flap_size`, number, required: false): Enter the size of the flap in a numerical value.
* **flap_color** (`flap_color`, text, required: false): Record the color of the flap, if applicable.
* **flap_location** (this field seems to be a duplicate of `flap_location`, text, required: false): (No specific guidance provided for this field)
* **flap_comments** (`flap_comments`, note, required: false): Add any additional comments about the flap, if necessary.
* **flap_image** (`flap_image`, note, required: false): Upload any relevant images of the flap, if applicable.
* **flap_image_comment** (`flap_image_comment`, note, required: false): Add any comments about the images, if necessary.
