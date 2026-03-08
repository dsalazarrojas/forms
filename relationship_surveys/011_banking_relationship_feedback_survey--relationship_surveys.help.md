# Banking Relationship Feedback Survey - Help Guide
## Purpose
This survey is designed to gather feedback from customers about their relationship with the bank, to help us understand your satisfaction, pain points, and areas for improvement.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Enter your current date in the "Survey Date" field.
2. Provide your full name in the "Customer Name" field (optional).
3. Enter your email address in the "Email Address" field (optional).
4. Select the length of time you've been with us from the options in "How Long Have You Been with Us?".
5. Check all the products you use from us in the "Which Products Do You Use?" field.
6. Rate your overall satisfaction with us on a scale of 1-5 in the "Overall, How Satisfied Are You with Our Bank?" field.
7. Rate your experience with our customer service in the "How Would You Rate Our Customer Service?" field.
8. Rate how easy it is to access our services in the "How Easy Is It to Access Our Services?" field.
9. Rate your satisfaction with our digital banking platform in the "How Satisfied Are You with Our Digital Banking Platform?" field.
10. Rate your experience with our mobile app in the "How Would You Rate Our Mobile App?" field.
11. Rate how reasonable our fees and pricing are in the "How Reasonable Are Our Fees and Pricing?" field.
12. Rate how competitive our interest rates are in the "How Competitive Are Our Interest Rates?" field.
13. Rate how knowledgeable our staff members are in the "How Knowledgeable Are Our Staff Members?" field.
14. Rate how well we resolve problems in the "How Well Are Problems Resolved?" field.
15. Rate how likely you are to recommend us in the "How Likely Are You to Recommend Us?" field, where 1 is "Not At All Likely" and 10 is "Very Likely".
16. Provide a reason why you would or would not recommend us in the "Why Would You or Would You Not Recommend Us?" field.
17. (Optional) Select areas where we can improve in the "What Areas Could We Improve?" field.
18. (Optional) Provide specific suggestions for improvement in the "Specific Improvement Suggestions" field.
19. (Optional) Let us know if you're interested in new products or services in the "Are You Interested in New Products or Services?" field.
20. (Optional) Select new products that interest you in the "What New Products Interest You?" field.

## Field-by-Field Explanation

* **Survey Date** (`survey_date`, `date`, required): Enter your current date.
* **Customer Name** (`customer_name`, `text`, required): Enter your full name.
* **Email Address** (`customer_email`, `email`, required): Enter your email address for feedback response.
* **How Long Have You Been with Us?** (`account_relationship_length`, `select_one`, required): Select how long you've been with us.
	+ Less than 1 year
	+ 1 - 2 years
	+ 2 - 5 years
	+ 5 - 10 years
	+ 10+ years
* **Which Products Do You Use?** (`account_types`, `select_multiple`, required): Check all the products you use:
	+ Checking Account
	+ Savings Account
	+ Loans
	+ Credit Cards
	+ Investment Services
	+ Wealth Management
	+ Business Services
* **Overall, How Satisfied Are You with Our Bank?** (`overall_satisfaction`, `select_one`, required): Rate your overall satisfaction with us on a scale of 1-5.
	+ 1 - Very Dissatisfied
	+ 2 - Dissatisfied
	+ 3 - Neutral
	+ 4 - Satisfied
	+ 5 - Very Satisfied
* **How Would You Rate Our Customer Service?** (`customer_service_rating`, `select_one`, required): Rate your experience with our customer service.
	+ 1 - Poor
	+ 2 - Fair
	+ 3 - Good
	+ 4 - Very Good
	+ 5 - Excellent
* **How Easy Is It to Access Our Services?** (`branch_experience`, `select_one`, required): Rate how easy it is to access our services.
	+ 1 - Very Difficult
	+ 2 - Difficult
	+ 3 - Neutral
	+ 4 - Easy
	+ 5 - Very Easy
* **How Satisfied Are You with Our Digital Banking Platform?** (`digital_banking_experience`, `select_one`, required): Rate your satisfaction with our digital banking platform.
	+ 1 - Very Dissatisfied
	+ 2 - Dissatisfied
	+ 3 - Neutral
	+ 4 - Satisfied
	+ 5 - Very Satisfied
* **How Would You Rate Our Mobile App?** (`mobile_app_rating`, `select_one`, required): Rate your experience with our mobile app.
	+ 1 - Poor
	+ 2 - Fair
	+ 3 - Good
	+ 4 - Very Good
	+ 5 - Excellent
	+ N/A - Do Not Use
* **How Reasonable Are Our Fees and Pricing?** (`fees_value`, `select_one`, required): Rate how reasonable our fees and pricing are.
	+ 1 - Too High
	+ 2 - High
	+ 3 - Fair
	+ 4 - Reasonable
	+ 5 - Excellent Value
* **How Competitive Are Our Interest Rates?** (`interest_rates`, `select_one`, required): Rate how competitive our interest rates are.
	+ 1 - Well Below Market
	+ 2 - Below Market
	+ 3 - Market Rate
	+ 4 - Above Market
	+ 5 - Best in Market
* **How Knowledgeable Are Our Staff Members?** (`staff_knowledge`, `select_one`, required): Rate how knowledgeable our staff members are.
	+ 1 - Not Knowledgeable
	+ 2 - Somewhat Knowledgeable
	+ 3 - Knowledgeable
	+ 4 - Very Knowledgeable
	+ 5 - Extremely Knowledgeable
* **How Well Are Problems Resolved?** (`problem_resolution`, `select_one`, required): Rate how well we resolve problems.
	+ 1 - Very Poor
	+ 2 - Poor
	+ 3 - Acceptable
	+ 4 - Good
	+ 5 - Excellent
* **How Likely Are You to Recommend Us?** (`recommendation_likelihood`, `select_one`, required): Rate how likely you are to recommend us on a scale of 1-10.
	+ 1 - Not At All Likely
	+ 2
	+ 3
	+ 4
	+ 5
	+ 6
	+ 7
	+ 8
	+ 9
	+ 10 - Very Likely
* **Why Would You or Would You Not Recommend Us?** (`recommendation_reason`, `text`, required): Explain why you would or would not recommend us.
* **What Areas Could We Improve?** (`improvement_areas`, `select_multiple`, required): Select all the areas where we can improve:
	+ Customer Service Quality
	+ Digital Banking Features
	+ Mobile App Functionality
	+ Fees and Pricing
	+ Interest Rates
	+ Branch Hours
	+ Product Variety
	+ Speed of Service
* **Specific Improvement Suggestions** (`specific_improvements`, `text`, required): Provide specific suggestions for improvement.
* **Are You Interested in New Products or Services?** (`new_products_interest`, `select_one`, required): Let us know if you're interested in new products or services.
	+ Yes
	+ No
	+ Maybe
* **What New Products Interest You?** (`product_interests`, `select_multiple`, required): Select new products that interest you:
	+ Investment Products
	+ Wealth Management
	+ Business Banking
	+ Mortgage Services
	+ Insurance Products
	+ Foreign Exchange
