<thinking>
This form is likely used for searching tool models by their model numbers. This form could be used by users who need to search for tool models based on their assigned status or search for a specific tool model number. This form might be part of a larger system for managing tool models, possibly in a manufacturing or production environment. To avoid duplication, the form should be used for single-purpose searching. This form should not be used for other purposes that could be misinterpreted as searching tool models.
</thinking>

# tool_model_number_search_form - Help Guide
## Purpose
This form is designed to aid users in searching tool models based on their assigned status or by entering a specific model number.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the **tool_model_number** field with the model number you are searching for, if desired. If you are searching by assigned tool, select "Yes" or "No" from the **search_button** field.
2. Click "submit" or the equivalent button on your device.

## Field-by-Field Explanation

* **tool_model_number** (`tool_model_number`, `text`, required: false): Enter the model number you are searching for. This field is optional and can be left blank to search all tool models.
* **assigned_tool** (`assigned_tool`, `select_one`, required: false): Select "Yes" to search for tool models that are assigned or "No" to search for unassigned tool models.
* **search_button** (`search_button`, `select_multiple`, required: false): Select "Yes" to search for tool models with the "assigned_tool" status or "No" to search for tool models without this status.

## Tips
* Make sure to fill out all required fields or select at least one option in this form.
* If you are unsure about the field labels or options, review the form instructions carefully to avoid misinterpretation.
* This form is designed to provide quick and simple searching functionality. If you need to perform other actions, refer to the main system or contact the relevant department.
