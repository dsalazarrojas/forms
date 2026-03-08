<thinking>
This is the internal reasoning and checks:
We will create a help guide that explains the purpose and completion process of the "New Product Survey" form. The form seems to be for collecting feedback or ratings from customers on a new product. It's not clear if the form is meant for internal or external use, so we will assume it's for external use. We should also check if the form is meant to be filled out by customers or if it's a form for internal staff. Let's assume it's for customers. The fields are mostly self-explanatory, but some labels are a bit weak. For example, "Contact Phone" could be a more specific label like "Mobile Phone Number". "Date of Birth" might be more accurately labeled as "Age" if it's for rating purposes. We will use our best-effort explanation for these fields.

</thinking>

# New Product Survey - Help Guide
## Purpose
The "New Product Survey" form is designed to gather feedback and ratings from customers on a new product. This form is meant to be filled out by customers to provide their opinions and suggestions about the product.

## How To Complete This Form
To complete this form, simply fill out the required fields, which are marked as "required" in the form. Start by entering your name and contact information, including your email address and mobile phone number. Then, rate the product with one of the provided ratings (e.g., "1", "2", "3", "4", "5"). You can also provide additional comments about the product if you want. Finally, click "Submit" to send your feedback.

## Field-by-Field Explanation
* **Product Name** (`product_name`, text, required/optional): Enter the name of the product you are rating.
* **Email** (`email`, email, required/optional): Enter your valid email address where you can be reached.
* **Contact Phone** (`contact_phone`, text, required/optional): Enter your mobile phone number where you can be reached.
* **Date of Birth** (`date_of_birth`, date, required/optional): This field might be more accurately labeled as "Age", but it's meant to collect the date of birth of the customer. Enter your date of birth to help us understand your demographics.
* **Rating** (`rating`, select_one, required/optional): Rate the product with one of the provided ratings (e.g., "1", "2", "3", "4", "5").
* **Rating Other** (`rating_other`, select_multiple, required/optional): If the product rating doesn't fit into one of the provided options, select multiple ratings that best describe your experience.
* **Comments** (`comments`, note, required/optional): Provide any additional comments or suggestions about the product.
* **Submit** (`submit`, select_one, required/optional): Click "Yes" to submit your feedback, or "No" to cancel.
