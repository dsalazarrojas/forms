<thinking>

We need to create a user-facing help guide for the "coverage_selection_form" to ensure that end users understand the purpose and usage of the form. The form is designed to collect information for insurance purposes. It is essential to clarify each field's purpose, making it easy for users to complete the form correctly. To avoid confusion, we will follow the provided YAML fields for guidance. We will also check for duplication and ensure that the form's purpose is concrete and concise.

This form is intended for users who need to select their insurance coverage details. It consists of four fields: "coverage-type", "amount", "add-ons", and "effective-date". These fields are essential for the insurance company to understand the user's needs and preferences.

The form is divided into four pages, and each page has a unique ID. This structure might be confusing for users who are not familiar with the concept of pages in digital forms. We will focus on explaining each field, and users will understand the form's purpose and functionality.

</thinking>

# coverage_selection_form - Help Guide
## Purpose
The "coverage_selection_form" is designed to collect information for insurance coverage purposes. It consists of four fields to help users specify their coverage details.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the coverage type from the available options.
2. Enter the amount of coverage you need.
3. Choose the add-ons you want to include with your coverage (e.g., "Yes" or "No").
4. Select the effective date for your coverage.

## Field-by-Field Explanation
### coverage-type
 **coverage-type** (coverage-type, text, required): This field asks you to select the type of coverage you need. Please choose the option that best describes your insurance requirements.

### amount
 **amount** (amount, number, required): Enter the total amount of coverage you need. This is a numerical value that should be accurate and realistic for your insurance requirements.

### add-ons
 **add-ons** (add-ons, select_multiple, required): Select the add-ons you want to include with your coverage (e.g., "Yes" or "No"). This field allows you to choose multiple add-ons if needed.

### effective-date
 **effective-date** (effective-date, date, required): Choose the effective date for your coverage. This date should reflect when you want your coverage to start.
