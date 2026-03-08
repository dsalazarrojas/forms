<thinking>
We need to create a user-facing help guide for the "Product Tracking System Application Form" to ensure end users understand its purpose, how to complete it, and what each field means. This form is designed to track products in the manufacturing process, gathering crucial information about products such as their name, description, tracking setup, tracking method, date and time tracked, tracking status, and user ID. The form's fields should be self-explanatory, making it easy for users to fill out. We should also provide tips on how to use this form correctly and efficiently.
</thinking>

# Product Tracking System Application Form - Help Guide
## Purpose
The Product Tracking System Application Form is designed to collect and track product information throughout the manufacturing process. This form helps to ensure accurate and efficient tracking of products, facilitating better management and decision-making within the organization.

## How To Complete This Form

1. To start, fill out the form completely and accurately, ensuring all required fields are filled out.
2. For fields with options, select the relevant options from the available choices.
3. When entering date and time information, use the format specified in the input fields.

## Field-by-Field Explanation

* **Product Name** (`product_name`, text, optional): Enter the name of the product being tracked.
* **Product Description** (`product_description`, text, optional): Provide a brief description of the product.
* **Tracking Setup** (`tracking_setup`, select_multiple, optional): Select one or more tracking setup options to suit the product's tracking needs.
	+ Select multiple options to track the product's progress through different stages of the manufacturing process.
* **Tracking Method** (`tracking_method`, select_one, optional): Choose the tracking method that best fits the product's requirements.
	+ This will dictate how the product's tracking status is updated and reflected in the system.
* **Date Tracked** (`date_tracked`, date, optional): Enter the date the product was last tracked.
* **Time Tracked** (`time_tracked`, time, optional): Enter the time the product was last tracked.
* **Tracking Status** (`tracking_status`, select_one, optional): Select the current tracking status of the product.
	+ This will reflect the product's current position in the manufacturing process.
* **User ID** (`user_id`, number, optional): Enter the ID of the user responsible for tracking the product.

## Tips

* Double-check all entered information for accuracy and completeness before submitting the form.
* Use the same format for date and time entries to maintain consistency.
* If unsure about any field or tracking setup, consult with the relevant personnel for clarification.
