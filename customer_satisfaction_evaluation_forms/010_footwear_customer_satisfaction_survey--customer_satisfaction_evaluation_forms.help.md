# Footwear Customer Satisfaction Survey - Help Guide
## Purpose
This form is designed to gather customer feedback and satisfaction ratings for our footwear products.

## How To Complete This Form
To complete this form, follow the steps below:

1.  On the first page, you will be greeted with a welcome message.
2.  Please provide the name of the product that you purchased.
3.  Enter the date of your purchase.
4.  Enter the price of the product.
5.  Rate your overall satisfaction with the product using the options provided.
6.  Indicate whether you would recommend this product to a friend.
7.  If desired, provide additional feedback about your experience.
8.  Enter your contact email address (if you'd like to be contacted for follow-up).
9.  Enter your contact phone number (if you'd like to be contacted for follow-up).
10.  Provide any additional comments or feedback about your experience.
11.  Rate the customer service you received during your purchase.

## Field-by-Field Explanation
*   **Welcome to the Survey** (`first_page`, text, required: false): This is the first page of the survey, and it's a welcome message.
*   **What was the name of the product?** (`product_name`, text, required: true): Please enter the name of the product you purchased.
*   **Purchase Date** (`purchase_date`, date, required: true): Enter the date of your purchase in the format MM/DD/YY.
*   **Purchase Price** (`purchase_price`, number, required: true): Enter the price you paid for the product.
*   **Overall Satisfaction** (`overall_satisfaction`, select\_multiple, required: true): Rate your overall satisfaction with the product using the options:
    +   Very Satisfied
    +   Somewhat Satisfied
    +   Neutral
    +   Somewhat Dissatisfied
    +   Very Dissatisfied
*   **Recommendation** (`recommendation`, select\_one, required: true): Indicate whether you would recommend this product to a friend.
*   **Feedback** (`feedback`, text, required: false): If you'd like to provide additional feedback about your experience, please do so here.
*   **Contact Email** (`contact_email`, email, required: false): Enter your contact email address if you'd like to be contacted for follow-up.
*   **Contact Phone Number** (`contact_phone`, text, required: false): Enter your contact phone number if you'd like to be contacted for follow-up.
*   **Customer Feedback** (`customer_feedback`, text, required: false): If you'd like to provide any additional feedback or comments, please enter them here.
*   **Additional Comments** (`additional_comments`, text, required: false): Enter any additional comments or feedback about your experience.
*   **Customer Service** (`customer_service`, select\_one, required: false): Rate the customer service you received during your purchase using the options:
    +   Excellent
    +   Good
    +   Fair
    +   Poor
