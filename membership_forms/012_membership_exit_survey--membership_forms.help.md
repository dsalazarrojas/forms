# Membership Exit Survey - Help Guide
## Purpose
The Membership Exit Survey is a form designed to gather feedback from members who are leaving the organization. This information will help us understand the reasons behind a member's decision to exit and identify areas for improvement in our services.

## How To Complete This Form
1. Ensure you are a member of the organization and are filling out this form because you are leaving.
2. Select the correct reasons for your departure in the "Why are you leaving?" section.
3. Choose the correct month and year of your planned departure in the "When are you leaving?" section.
4. If you have more than one type of membership, select all that apply in the "What type of membership do you have?" section.
5. In the "What are the reasons for leaving?" section, list all the reasons that led to your decision to leave.
6. In the "What would improve your experience?" section, select all the features or services that you feel would improve your experience.
7. In the "What would not improve your experience?" section, select all the features or services that you feel would not improve your experience.
8. Select your overall satisfaction level in the "Overall Satisfaction" section.
9. Answer the question "What changes would you like to see made to improve our services?"
10. Finally, answer the question "How much time do you have spent as a member?" and "How much time did you want to spend as a member?".

## Field-by-Field Explanation
- **Why are you leaving?** (`exit_reason`, text, optional): This field asks you to briefly explain why you are leaving the organization.
- **When are you leaving?** (`exit_date`, text, optional): This field asks you to specify the month and year of your planned departure. Please format it as "Month Year" (e.g., "June 2023").
- **What month do you plan to leave?** (`exit_date_month`, select_one, optional): Please select the month of your planned departure from the options provided.
- **What year do you plan to leave?** (`exit_date_year`, number, optional): This field is used to specify the year of your planned departure.
- **What type of membership do you have?** (`membership_type`, select_multiple, optional): This field allows you to select all the types of membership you have. Please select all that apply.
  - **Individual**
  - **Household**
  - **Family**
- **What are the reasons for leaving?** (`reason_for_leaving`, note, optional): Please list all the reasons that led to your decision to leave. This field allows you to provide a detailed explanation.
- **What changes would you like to see made to improve our services?** (`suggestions`, text, optional): This field is used to suggest improvements to our services.
- **How much time do you have spent as a member?** (`how_much_time_spend`, number, optional): This field asks you to specify the amount of time you have spent as a member.
- **How much time did you want to spend as a member?** (`how_much_time_want`, number, optional): This field asks you to specify the amount of time you wanted to spend as a member.
- **What would improve your experience?** (`what_would_improve`, select_multiple, optional): Please select all the features or services that you feel would improve your experience.
  - **Better communication**
  - **More events**
  - **Increased transparency**
  - **Better customer support**
  - **Better services**
  - **More convenient location**
  - **More amenities**
- **What would not improve your experience?** (`why_not_improve`, select_multiple, optional): Please select all the features or services that you feel would not improve your experience.
  - **Poor customer service**
  - **Lack of communication**
  - **Limited resources**
  - **Unclear policies**
  - **Uncomfortable facilities**
  - **Insufficient amenities**
  - **Unhelpful staff**
  - **Unclear rules**
  - **Uncooperative staff**
  - **Unreliable services**
- **Overall Satisfaction** (`overall_satisfaction`, select_one, optional): This field asks you to select your overall satisfaction level with the organization. Please choose from the options provided.
  - **Satisfied**
  - **Neutral**
  - **Dissatisfied**
