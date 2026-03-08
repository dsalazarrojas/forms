# Risk Calculator Form - Help Guide

## Purpose
The Risk Calculator Form helps users determine the risk level of an investment opportunity by considering factors such as risk rating, probability of occurrence, impact on business, and mitigation strategies. This form collects relevant data to provide a calculated risk assessment.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Investment** name in the first field.
2. Fill in the **Risk Rating** field with the calculated risk rating for the investment.
3. Calculate the **Probability of Occurrence** as a decimal value between 0 and 1 (e.g., 0.25 for 25% chance).
4. Describe the **Impact on Business** in the text field, considering factors that may affect the investment's outcomes.
5. Choose whether the investment has a **Risk Acceptance Level** by selecting 'Yes' or 'No'.
6. Select all applicable **Risk Priority** levels (e.g., 'Yes' for high-priority risks).
7. Provide a **Mitigation Plan** to outline strategies for addressing identified risks.

## Field-by-Field Explanation
* **Investment**: Enter the name of the investment opportunity.
	+ Type: text
	+ Required: no
* **Risk Rating**: Enter the calculated risk rating for the investment (e.g., 1-5).
	+ Type: number
	+ Required: no
* **Risk Rating**: (Note: this field might be confusing with the one above, but based on the provided YAML, I assumed it to be the same field as the previous one with the same name but different id. If you intended it to be different, please clarify.)
	+ Type: number
	+ Required: no
* **Mitigation Strategy**: Describe strategies to address identified risks in this field.
	+ Type: text
	+ Required: no
* **Probability of Occurrence**: Enter a decimal value between 0 and 1 for the probability of the risk occurring.
	+ Type: number
	+ Required: no
* **Risk Level**: Describe the risk level in this field (e.g., low, medium, high).
	+ Type: text
	+ Required: no
* **Impact on Business**: Describe the potential impact of the risk on the business.
	+ Type: text
	+ Required: no
* **Risk Acceptance Level**: Choose 'Yes' or 'No' to indicate whether the risk is acceptable.
	+ Type: select_one
	+ Required: no
* **Risk Priority**: Select all applicable risk priority levels (e.g., high, medium, low).
	+ Type: select_multiple
	+ Required: no
* **Mitigation Plan**: Outline strategies for addressing identified risks.
	+ Type: text
	+ Required: no

## Tips
* Please ensure you enter accurate data for all fields to receive a correct risk assessment.
* Review and update the form regularly to reflect changes in the investment's risk profile.
* Consult with relevant stakeholders for input on risk assessment and mitigation planning.
