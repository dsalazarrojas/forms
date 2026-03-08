# Beta Product Feedback Form - Help Guide

## Purpose
The Beta Product Feedback Form is designed to collect feedback from customers about a beta product, helping us understand their experiences and suggestions. Your input will aid us in refining and improving the product.

## How To Complete This Form
To submit your feedback, please complete the following steps:

1. Fill in your **Full Name** in the "Your Full Name" field (required).
2. Enter your **Email Address** in the "Your Email Address" field (required).
3. Rate the **Overall Product Rating** by selecting a number from 1 to 5 in the "Overall Product Rating" field (required).
4. Describe your **Favorite Feature** in the "What is your favorite feature" field, explaining why you like it.
5. Identify your **Least Favorite Feature** in the "What is your least favorite feature" field, explaining what could be improved.
6. Indicate how often you **Use the product** by selecting an option from "Daily", "Weekly", "Monthly", or "Rarely" in the "How often do you use the product" field (required).
7. Assess the **Ease of Use** of the product by selecting a number from 1 to 5 in the "How easy is it to use the product" field (required).
8. Indicate if the **Product was easy to set up** by selecting an option from "Yes - very easy", "No - difficult", or "Needs improvement" in the "Was the product easy to set up" field (required).
9. Check if you **Encountered any bugs** by selecting "True" or "False" in the "Did you encounter any bugs" field (required).
10. Provide a detailed description of any bugs you **Found** in the "Describe any bugs you found" field, including what happened and when.
11. Suggest a **Maximum Price** you would be willing to pay for the product in the "Maximum Price You Would Pay" field, in USD.
12. Decide if you would **Recommend this product to others** by selecting an option from "Yes - absolutely" or "False" in the "Would you recommend this product to others" field (required).
13. Provide any **Additional Feedback** you'd like to share about the product in the "Any other feedback" field.
14. Confirm that you have provided **Feedback on the final date**.

## Field-by-Field Explanation

* **Full Name** (`customer_full_name`, text, required): Enter your full name as it is written on your identification or how you would like to be addressed.
* **Email Address** (`customer_email_addr`, email, required): Enter your email address to receive follow-up and updates about the product.
* **Overall Product Rating** (`overall_product_rating`, select_one, required): Rate the product on a scale of 1 to 5, with 1 being poor and 5 being excellent.
* **Favorite Feature** (`favorite_feature_desc`, text, required): Describe your favorite feature of the product, explaining why you like it.
* **Least Favorite Feature** (`least_favorite_feature_desc`, text, required): Identify your least favorite feature and explain what could be improved about it.
* **Use the product** (`usage_frequency_select`, select_one, required): Select how often you use the product: "Daily", "Weekly", "Monthly", or "Rarely".
* **Ease of Use** (`ease_of_use_rating`, select_one, required): Rate the product's ease of use from 1 to 5, with 1 being very difficult and 5 being very easy.
* **Was the product easy to set up** (`setup_ease_status`, select_one, required): Indicate if the product was easy to set up: "Yes - very easy", "No - difficult", or "Needs improvement".
* **Did you encounter any bugs** (`bug_encounter_status`, select_one, required): Check if you encountered any bugs: "True" or "False".
* **Describe any bugs you found** (`bug_description_text`, text, optional): Provide a detailed description of any bugs you found, including what happened and when.
* **Maximum Price You Would Pay** (`price_willingness_val`, number, optional): Suggest a maximum price you would be willing to pay for the product in USD.
* **Would you recommend this product to others** (`product_recommendation_status`, select_one, required): Decide if you would recommend the product to others: "Yes - absolutely" or "False".
* **What should we change to make the product better** (`product_improvement_suggestion`, text, required): Suggest improvements to the product.
* **Any other feedback** (`final_additional_feedback`, text, optional): Share any other comments or thoughts about the product.
* **Feedback Final Date** (`feedback_final_date`, date, required): Confirm the date you are providing the feedback.
