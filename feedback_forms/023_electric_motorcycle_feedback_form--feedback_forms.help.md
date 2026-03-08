<thinking>
To create a user-facing help guide for the Electric Motorcycle Feedback Form, I need to first understand the internal reasoning behind this form. Based on the YAML configuration, it seems this form is designed to gather user feedback on electric motorcycles. It appears to be a comprehensive form that asks for various details such as name, email, feedback, rating, motorcycle type, color, and transmission. The form likely aims to collect structured feedback for electric motorcycle owners, riders, or potential customers. It might be used for market research, product development, or customer satisfaction analysis. However, without further context, it's hard to confirm the exact purpose. It's essential to ensure this form isn't a duplicate or unnecessary for the intended audience. I will proceed with creating the help guide based on the provided information.
</thinking>

# Electric Motorcycle Feedback Form - Help Guide
## Purpose
This form is designed to collect feedback and ratings from electric motorcycle users. Your input will help us improve our electric motorcycle models and services.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your First Name in the "First Name" field.
2. Provide your email address in the "email" field.
3. Share your feedback in the "Feedback" field.
4. Choose a rating for the electric motorcycle you've used (1-5 stars).
5. Enter the rating numbers corresponding to your chosen rating (e.g., if you chose 4 stars, enter 4 in the "1", "2", "3", and "4" fields).
6. Select the type of motorcycle you used (Electric or Gas-Powered).
7. Choose the color of the motorcycle you used.
8. Select the transmission type of the motorcycle you used (Automatic or Manual).
9. Optionally, add any additional comments about your experience with the electric motorcycle in the "Comments" field.
10. If you have any other comments or observations, you can add them in the "Comments" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name for identification purposes.
* **email** (`email`, email, required): Enter your email address to allow us to contact you.
* **Feedback** (`feedback`, text, required): Share your genuine feedback about your electric motorcycle experience.
* **Rating** (`rating`, select_one, required): Rate your experience with the electric motorcycle (1-5 stars).
* **1**, **2**, **3**, **4**, **5** (`rating_1`, `rating_2`, `rating_3`, `rating_4`, `rating_5`, number, optional): Enter the numbers corresponding to your chosen rating (1, 2, 3, 4, or 5).
* **Date** (`date`, date, optional): If you want to specify the date of your experience with the electric motorcycle.
* **Time** (`time`, time, optional): If you want to specify the time of your experience with the electric motorcycle.
* **Comments** (`comments`, text, required): Add any additional comments or observations about your experience.
* **Motorcycle Type** (`motorcycle_type`, select_multiple, required): Select the type of motorcycle you used (Electric or Gas-Powered).
* **Color** (`color`, select_one, required): Choose the color of the motorcycle you used.
* **Transmission** (`transmission`, select_one, required): Select the transmission type of the motorcycle you used (Automatic or Manual).
