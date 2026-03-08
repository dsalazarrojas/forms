# Product Review Form - Help Guide
## Purpose
This form is designed to collect user feedback on products, allowing customers to provide their opinions and ratings on products they have interacted with. This data will be used by product teams to improve and refine their products.

## How To Complete This Form
To complete this form, follow these steps:

1. **Fill in the Product ID**: Enter the unique ID number associated with the product you are reviewing. (optional)
2. **Enter Product Name**: Write the name of the product you are reviewing. This will help our team identify the specific product being evaluated. (optional)
3. **Select a Rating**: Choose a rating from the provided options (1 star, 2 stars, 3 stars, 4 stars, 5 stars) that best represents your experience with the product. (not required)
4. **Provide Comments**: Share your thoughts and feedback about the product. This is an optional field, but it helps our team understand your perspective. (optional)
5. **Enter Email**: If you'd like to be contacted about your feedback, please enter your email address. (optional)
6. **Add Contact Info**: If you'd like to provide additional contact information, you can enter it here. (optional)
7. **Select Category**: Choose the category that best fits the product being reviewed. (optional)
8. **Select Sub Category**: Choose one or multiple sub categories that best fit the product being reviewed. (optional)
9. **Review Date**: Enter the date you reviewed the product. (optional)
10. **Review Time**: Enter the time you reviewed the product. (optional)

## Field-by-Field Explanation
* **Product ID**: (`product_id`, number, optional) Enter the unique ID number associated with the product.
* **Product Name**: (`product_name`, text, optional) Write the name of the product you are reviewing to help our team identify it.
* **Rating**: (`rating`, select_one, not required) Choose a rating from 1 star to 5 stars that best represents your experience with the product.
* **Comments**: (`comments`, text, optional) Share your thoughts and feedback about the product.
* **Email**: (`email`, email, optional) If you'd like to be contacted, please enter your email address.
* **Contact Info**: (`contact_info`, text, optional) Add any additional contact information you'd like to provide.
* **Category**: (`category`, select_one, optional) Choose the category that best fits the product being reviewed.
* **Sub Category**: (`sub_category`, select_multiple, optional) Choose one or multiple sub categories that best fit the product being reviewed.
* **Review Date**: (`review_date`, date, optional) Enter the date you reviewed the product.
* **Review Time**: (`review_time`, time, optional) Enter the time you reviewed the product.
