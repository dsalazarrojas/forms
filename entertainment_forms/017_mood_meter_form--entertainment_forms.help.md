This form is used to capture a user's emotional state and feelings, providing a snapshot of their current mood. The form is designed to be simple and easy to complete, with fields that allow users to express their mood level, emotional state, and feelings in various areas.

# mood_meter_form - Help Guide
## Purpose
The mood meter form is a tool for users to self-report their emotional state and feelings, providing valuable feedback on their mental well-being.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer the questions as honestly as possible, keeping in mind that there are no right or wrong answers.
2. Select the number that best represents your current mood level from the "mood_level" field.
3. Choose the emotional states that apply to you from the "emotional_state" field. If none of the provided options align with your emotions, use the "emotional_state_other" field to describe your emotional state.
4. Select the feelings that resonate with you from each of the "feelings" fields (e.g., "feelings_0", "feelings_1", "feelings_2"). Each field has multiple options, but you can select any number of feelings that apply.
5. If you feel that none of the provided feelings in a particular field align with your emotions, use the "other" field (e.g., "feelings_0_other", "feelings_1_other", "feelings_2_other") to describe your feelings.

## Field-by-Field Explanation
- **User Input** (`user_input`, text, optional): You can provide any additional comments or context about your emotional state and feelings.
- **mood_level** (`mood_level`, number, optional): Select a number that best represents your current mood level (e.g., 1, 2, 3, 4, 5).
- **emotional_state** (`emotional_state`, select_one, required): Choose one or more emotional states that apply to you from the options 1, 2, 3, 4, 5.
- **emotional_state_other** (`emotional_state_other`, text, optional): If none of the provided emotional states align with your emotions, describe your emotional state here.
- **feelings_0** (`feelings_0`, select_multiple, required): Select one or more feelings that apply to you in this category (e.g., feelings 0 option 0, feelings 0 option 1, feelings 0 option 2, feelings 0 option 3, feelings 0 option 4).
- **feelings_0_other** (`feelings_0_other`, text, optional): If none of the provided feelings in this category align with your emotions, describe your feelings here.
- **feelings_1** (`feelings_1`, select_multiple, optional): Select one or more feelings that apply to you in this category (e.g., feelings 1 option 0, feelings 1 option 1, feelings 1 option 2, feelings 1 option 3, feelings 1 option 4).
- **feelings_1_other** (`feelings_1_other`, text, optional): If none of the provided feelings in this category align with your emotions, describe your feelings here.
- **feelings_2** (`feelings_2`, select_multiple, required): Select one or more feelings that apply to you in this category (e.g., feelings 2 option 0, feelings 2 option 1, feelings 2 option 2, feelings 2 option 3, feelings 2 option 4).
- **feelings_2_other** (`feelings_2_other`, text, optional): If none of the provided feelings in this category align with your emotions, describe your feelings here.
