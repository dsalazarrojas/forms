<thinking>
We will design a user-facing help guide for the excavator_operator_evaluation_form form. The form is designed to gather information from users about the performance of an excavator operator. This form will likely be used in a construction or excavation industry setting where operators are evaluated based on their performance during a specific site visit or job. 

To ensure that this form is not completed unnecessarily, let's review the form's requirements: 

* Each page has a unique ID.
* Only 6 pages are currently defined.
* "Operator Name" is not required, while the other fields are required.
* "Operator Rating" is a numeric field (likely a score out of a certain amount).
* "Date of Evaluation" and "Time of Evaluation" are date and time fields, respectively.
* "Observation" and "Comments" are free-text fields where users can provide notes or comments.
* "Evaluation Comments" is another free-text field for users to provide additional comments.
 
This form seems to be well-structured, with a clear purpose and required fields for most pages. However, we might want to consider adding an "Operator ID" field to identify the operator being evaluated. Additionally, the "Operator Name" field could be required to ensure consistency across all forms.

</thinking>

# excavator_operator_evaluation_form - Help Guide
## Purpose
This form is designed to gather information about the performance of an excavator operator during a specific site visit or job.

## How To Complete This Form
To complete the form, follow the steps below:

1. Fill in the required fields: **Operator Rating**, **Date of Evaluation**, and **Time of Evaluation**.
2. Optionally, provide the **Operator Name** for the operator being evaluated.
3. In the **Observation** field, provide any notable observations made during the evaluation.
4. In the **Comments** field, provide any additional comments about the operator's performance.
5. In the **Evaluation Comments** field, provide any final comments or recommendations.

## Field-by-Field Explanation

* **Operator Name** (`operator_name`, optional): Enter the name of the excavator operator being evaluated.
* **Site Location** (`site_location`, required): Enter the location where the operator was evaluated.
* **Operator Rating** (`operator_rating`, required): Enter a numeric score (likely out of 100) to evaluate the operator's performance.
* **Date of Evaluation** (`date_of_evaluation`, required): Enter the date the operator was evaluated.
* **Time of Evaluation** (`time_of_evaluation`, required): Enter the time the operator was evaluated.
* **Observation** (`observation`, optional): Provide any notable observations made during the evaluation.
* **Comments** (`comments`, optional): Provide any additional comments about the operator's performance.
* **Evaluation Comments** (`evaluation_comments`, optional): Provide any final comments or recommendations for the operator.
