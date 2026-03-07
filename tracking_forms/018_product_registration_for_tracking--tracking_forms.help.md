<thinking>
This form is meant to collect information from users about a product for tracking purposes. The goal is to gather essential details such as the product ID, name, price, category, and notes, while also capturing the user's name, email, and company. The tracking status and comments can also be included. This form aims to simplify the process of registering products for tracking and providing a clear record of the submitted data.

The form will be used to register a product only once, to avoid duplication. If the user already has a product registered, they will not be able to submit another form for the same product.

The form will be filled out by the user, and the data will be reviewed and approved by the relevant personnel before being added to the tracking system.

Please note that all fields with the "required: true" flag will need to be filled out.

</thinking>

# Product Registration For Tracking - Help Guide
## Purpose
This form is designed to collect product information for tracking purposes, ensuring that all relevant details are captured and recorded for easy reference and management.

## How To Complete This Form
1. Fill out the form with the required information, including the user's name, email, and company.
2. Enter the product ID, name, and price.
3. Select the product category from the provided options.
4. Add any relevant notes about the product.
5. Choose the tracking status and provide any comments.
6. Enter the submitter's name and date of submission.
7. Review and submit the form for approval.

## Field-by-Field Explanation
* **User Name** (`user_name`, text, required): Enter the name of the user submitting the form.
* **User Email** (`user_email`, email, required): Enter the email address of the user submitting the form.
* **User Company** (`user_company`, text, optional): Enter the name of the user's company (if applicable).
* **Product ID** (`product_id`, text, required): Enter the unique identifier for the product.
* **Product Name** (`product_name`, text, optional): Enter the name of the product.
* **Product Price** (`product_price`, number, optional): Enter the price of the product.
* **Product Category** (`product_category`, select_one, optional): Select the category of the product from the provided options.
* **Product Notes** (`product_notes`, note, optional): Enter any relevant notes or comments about the product.
* **Tracking Status** (`tracking_status`, select_one, optional): Select the current tracking status of the product from the provided options.
* **Tracking Comments** (`tracking_comments`, text, optional): Enter any comments about the product's tracking status.
* **Submitter** (`submitter`, text, optional): Enter the name of the person submitting the form.
* **Submit Date** (`submit_date`, date, required): Enter the date of form submission.
