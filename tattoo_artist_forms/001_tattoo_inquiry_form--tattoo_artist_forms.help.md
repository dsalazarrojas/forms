# tattoo_inquiry_form - Help Guide
## Purpose
This form is designed to collect information from customers interested in inquiring about tattoos. It is used to gather details about the customer and their desired tattoo style and size.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in your name and contact information under "Customer Details" to ensure we can reach you back.
2. Provide a clear and detailed description of the tattoo you are interested in under "Tattoo Inquiry".
3. Choose one or more tattoo styles that appeal to you from the options provided under "Tattoo Style".
4. If you have a specific size in mind, please enter it under "Tattoo Size". Note that this field is optional.

## Field-by-Field Explanation
* **Customer Details** (`customer_details`, text, required: false): Please enter your name and contact information here. This information will be used to reach you back about your tattoo inquiry.
* **Tattoo Inquiry** (`tattoo_inquiry`, text, required: true): Describe the tattoo you are interested in. Be as detailed as possible about the design and features you want your tattoo to have.
* **Tattoo Style** (`tattoo_style`, select_one, required: false): Choose one or more of the following options:
	+ Line Art: A design that uses only black and white lines to create the tattoo image.
	+ Color: A design that uses color to create the tattoo image.
	+ Color and Line: A design that uses both color and lines to create the tattoo image.
* **Tattoo Size** (`tattoo_size`, number, required: false): If you have a specific size in mind for your tattoo, please enter it here. Note that this field is optional, and our artists will work with you to determine the best size for your body.
