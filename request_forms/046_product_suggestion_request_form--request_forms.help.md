<thinking>
This form is intended for users to suggest new products to the company. The form is meant to gather information from users about their product suggestions, including product details, budget, time limit, date range, product type, product category, contact information, and any additional notes. To ensure that each suggestion is valid and relevant, we'll be checking for duplicate suggestions. Please fill out the form completely and accurately. Note: This help guide is for end-users. Do not attempt to submit duplicate suggestions.
</thinking>

# Product Suggestion Request Form - Help Guide
## Purpose
The Product Suggestion Request Form is a tool for users to submit new product suggestions to the company. This form helps us gather information about the suggested product, including its details, budget, and requirements.

## How To Complete This Form
To fill out the form, follow these steps:

1.  Fill out the "What do you want?" field to describe the product you're suggesting.
2.  Provide product details in the "Product Details" field.
3.  Specify your budget for the product in the "Budget" field.
4.  Select the time limit for the product development in the "Time Limit" field.
5.  Choose a specific date range for the product in the "Date Range" field.
6.  Answer the "Product Type" questions by selecting all applicable options.
7.  Specify the product category in the "Product Category" field.
8.  Enter your email address in the "Email" field.
9.  Provide your phone number in the "Phone" field.
10. Add any additional notes about the product in the "Additional Notes" field.
11. Finally, select "Submit" to submit your suggestion, or "Cancel" to discard it.

## Field-by-Field Explanation

*   **What do you want?**: This is the initial description of the product you're suggesting.
    (`first_step`, `text`, required: false)
*   **Product Details**: This is where you provide a detailed description of the product.
    (`product_details`, `text`, required: false)
*   **Budget**: This is the maximum budget you're willing to pay for the product.
    (`budget`, `number`, required: false)
*   **Time Limit**: This is the maximum time you want the product development to take.
    (`time_limit`, `time`, required: false)
*   **Date Range**: This is the specific date range you're looking for the product to be delivered.
    (`date_range`, `date`, required: false)
*   **Product Type**: Choose all applicable types for the product you're suggesting.
    (`product_type`, `select_multiple`, required: false)
*   **Product Category**: Choose the category for the product you're suggesting.
    (`product_category`, `select_one`, required: false)
*   **Email**: Enter your valid email address.
    (`email`, `email`, required: false)
*   **Phone**: Enter your phone number.
    (`phone`, `text`, required: false)
*   **Additional Notes**: Add any additional information about the product.
    (`note`, `note`, required: false)
*   **Submit**: Confirm your suggestion and submit it for review.
    (`submit`, `select_one`, required: false)

## Tips

*   Please ensure that your suggestions are valid and relevant to the company's interests.
*   Avoid submitting duplicate suggestions.
*   Be as detailed as possible in your suggestions.
