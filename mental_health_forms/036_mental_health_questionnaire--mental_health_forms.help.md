# mental_health_questionnaire - Help Guide
## Purpose
This form is a mental health questionnaire designed to gather information about your mental health status. The purpose of this form is to help healthcare providers understand your mental health needs and provide you with accurate and effective care.

## How To Complete This Form
1. Please answer the questions honestly and to the best of your ability.
2. Choose the options that best describe your current mental health situation.
3. If you are unsure about any of the questions, please ask for assistance from a healthcare provider.

## Field-by-Field Explanation
- **mental_health_history** (`mental_health_history`, `note`, required: false): This section is a brief introduction to the form, providing a general overview of the mental health questionnaire.
  - **mental_health_history** (`mental_health_history`, `note`, required: false): This section is not used in this form.
- **depression** (`depression`, `select_multiple`, required: false): This question asks if you are currently experiencing depression. Select 'Yes' if you are experiencing symptoms of depression, and 'No' if you are not.
  - **anxiety** (`anxiety`, `select_multiple`, required: false): This question asks if you are currently experiencing anxiety. Select 'Yes' if you are experiencing symptoms of anxiety, and 'No' if you are not.
  - **trauma** (`trauma`, `select_multiple`, required: false): This question asks if you are currently experiencing trauma. Select 'Yes' if you are experiencing trauma, and 'No' if you are not.
  - **substance_use** (`substance_use`, `select_multiple`, required: false): This question asks if you are currently using any substances (e.g. drugs, alcohol). Select 'Yes' if you are using substances, and 'No' if you are not.
  - **suicidal_tendencies** (`suicidal_tendencies`, `select_multiple`, required: false): This question asks if you are currently experiencing suicidal tendencies. Select 'Yes' if you are experiencing suicidal thoughts, and 'No' if you are not.
  - **self_harm** (`self_harm`, `select_multiple`, required: false): This question asks if you are currently experiencing self-harm. Select 'Yes' if you are harming yourself, and 'No' if you are not.
  - **mental_state** (`mental_state`, `select_one`, required: false): This question asks about your current mental state. Select the option that best describes your current mental state: 'good', 'fair', 'poor', or 'very poor'.
