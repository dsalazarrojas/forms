# Visitor Management Login Form - Help Guide
## Purpose
The Visitor Management Login Form is used to log and categorize visitors to the facility. This form is for visitor check-in purposes, where visitors can provide their information and details about their visit.

## How To Complete This Form
To complete the form, follow these steps:
1. Select if you are a "Yes" or "No" visitor.
2. Enter your email address in the "visitor_email" field.
3. Enter your name in the "visitor_name" field.
4. Choose a date for your visit in the "visit_date" field.
5. Choose a time for your visit in the "visit_time" field.
6. Select the purpose of your visit from the options provided, such as "Visitor", "Guest", or "Client".
7. Add any comments about your visit in the "comments" field, if needed.

## Field-by-Field Explanation
* **Yes/No** (`user_input`, `select_multiple`, required/optional): Please select "Yes" if you are a visitor, or "No" if you are not.
* **Visitor Email** (`email`, `text`, optional): Enter your email address, which will be used for contact purposes.
* **Visitor Name** (`text`, `text`, optional): Enter your name, which will be used for visitor identification.
* **Visit Date** (`date`, `date`, optional): Choose the date you plan to visit the facility.
* **Visit Time** (`time`, `time`, optional): Choose the time you plan to visit the facility.
* **Visit Purpose** (`select_one`, `select_one`, optional): Select the purpose of your visit, which can be "Visitor", "Guest", or "Client".
* **Comments** (`note`, `note`, optional): Add any comments or details about your visit, if needed.
* **Submit** (`text`, `text`, optional): This is the submit button to complete the form.

## Tips
* Please make sure to fill out all required fields to ensure accurate information is captured.
* If you need to log multiple visitors, you can select "Yes" in the "Yes/No" field for each additional visitor.
* You can add comments for each visitor, if needed.
