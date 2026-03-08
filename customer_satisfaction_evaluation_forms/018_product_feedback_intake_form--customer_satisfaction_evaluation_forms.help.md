# product_feedback_intake_form - Help Guide
## Purpose
The product feedback intake form is designed to collect information from customers about their experience with a particular product or service. This form helps the product team understand customer satisfaction and identify areas for improvement.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name in the "Name" field.
2. Provide your email address in the "Email" field.
3. Rate your experience with the product by selecting one of the five rating options: Excellent, Good, Satisfactory, Unsatisfactory, or Very Unsatisfactory.
4. Describe the product you are providing feedback on in the "Product" field.
5. Share any additional feedback about your experience in the "Feedback" field.
6. If you want to include any contact information, enter it in the "Contact Info" field.
7. If you have a preferred contact email address, enter it in the "Contact Email" field.
8. If you have an image of the product that can help illustrate your feedback, you can attach it in the "Product Image" field.

## Field-by-Field Explanation
- **Product Feedback** (`product_feedback`, `text`, required: false): Describe your experience with the product, including what you liked or disliked.
- **Name** (`name`, `text`, required: false): Enter your name so we know who you are.
- **Email** (`email`, `email`, required: false): Enter your email address so we can contact you back if needed.
- **Rating** (`rating`, `select_one`, required: false): Select one of the five rating options to express your level of satisfaction.
- **Product** (`product`, `text`, required: false): Type in the name of the product you are providing feedback on.
- **Feedback** (`feedback`, `text`, required: false): Share any additional comments or suggestions you have about your experience.
- **Product Version** (`product_version`, `text`, required: false): If you're providing feedback on a specific product version, enter it here.
- **Contact Info** (`contact_info`, `text`, required: false): If you want to include any additional contact information, enter it here.
- **Contact Email** (`contact_email`, `email`, required: false): Enter your contact email address if you want to be reached directly.
- **Product Image** (`product_image`, `note`, required: false): Attach an image of the product that illustrates your feedback, if relevant.
