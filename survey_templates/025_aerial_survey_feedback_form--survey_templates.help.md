# Aerial Survey Feedback Form - Help Guide
## Purpose
This form is designed to collect feedback from users who have participated in an aerial survey. It aims to assess the quality of the survey outputs, the accuracy of the spatial data, and overall user satisfaction.

## How To Complete This Form

To complete this form, follow these steps:

*   Fill out the required fields:
    *   **Project Name / ID**: Enter the name or ID of the project you participated in.
    *   **Your Name**: Enter your name as the person providing the feedback.
    *   **Your Role**: Select your role in the project (Client, Project Manager, Data Analyst, GIS Specialist, or Surveyor).
    *   **Overall Satisfaction**: Choose your level of satisfaction with the survey (Very Satisfied, Satisfied, Neutral, Dissatisfied, or Very Dissatisfied).
    *   **Speed of Delivery**: Select the delivery time of the data (Early, On Time, Late).
    *   **Georeferencing Accuracy**: Evaluate the spatial data accuracy (Highly Accurate, Acceptable, Inaccurate, Not Applicable).
    *   **Coverage Completeness**: Assess the area coverage (100% Complete, Mostly Complete, Significant Gaps).
    *   **Image Resolution/Clarity**: Rate the image resolution (Excellent, Good, Fair, Poor).
*   Optionally, provide more detailed feedback in the **Issues Encountered** field, if you experienced any technical or logistical problems.
*   Additionally, offer suggestions for improvement in the **Suggestions for Improvement** field, if you have any ideas for better survey design or execution.

## Field-by-Field Explanation

*   **Project Name / ID** (`project_name`, text, required): Enter the name or ID of the project you participated in.
*   **Your Name** (`feedback_provider`, text, required): Enter your name as the person providing the feedback.
*   **Your Role** (`role`, select_one, required): Select your role in the project (Client, Project Manager, Data Analyst, GIS Specialist, or Surveyor).
*   **Image Resolution/Clarity** (`image_resolution`, select_one, required): Rate the image resolution (Excellent, Good, Fair, Poor).
*   **Georeferencing Accuracy** (`georeferencing_accuracy`, select_one, required): Evaluate the spatial data accuracy (Highly Accurate, Acceptable, Inaccurate, Not Applicable).
*   **Coverage Completeness** (`coverage_completeness`, select_one, required): Assess the area coverage (100% Complete, Mostly Complete, Significant Gaps).
*   **Speed of Delivery** (`delivery_speed`, select_one, required): Select the delivery time of the data (Early, On Time, Late).
*   **Overall Satisfaction** (`overall_satisfaction`, select_one, required): Choose your level of satisfaction with the survey (Very Satisfied, Satisfied, Neutral, Dissatisfied, Very Dissatisfied).
*   **Issues Encountered** (`issues_reported`, text, optional): Provide any technical or logistical problems you experienced.
*   **Suggestions for Improvement** (`improvement_suggestions`, text, optional): Offer ideas for better survey design or execution.
