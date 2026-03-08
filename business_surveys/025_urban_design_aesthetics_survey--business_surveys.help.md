<thinking>
This form seems to be designed to collect feedback on the urban design aesthetics of a particular area or space. It might be used to gather opinions on the overall feel, visual appearance, and design characteristics of a neighborhood or public space. To confirm, the form has a mix of questions related to categorization (e.g., neighborhood), description (open-ended), and more subjective ratings (e.g., aesthetic feel, color scheme score). The purpose of this form might be to inform urban planning decisions or to help designers evaluate the aesthetic quality of existing spaces. Before creating this guide, I'll ensure that the form's purpose and content are well understood.
</thinking>

# Urban Design Aesthetics Survey - Help Guide
## Purpose
This form is designed to collect feedback on the urban design aesthetics of a particular area or space. It will help inform urban planning decisions or aid designers in evaluating the aesthetic quality of existing spaces.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the title of the space or area you are surveying.
2. Choose a category that best describes the space (e.g., Business Surveys, Technology Surveys).
3. Provide a description of the space.
4. Mention the neighborhood where the space is located.
5. Select all that apply from the list of public space types that best describe the space.
6. Rate the aesthetic feel of the space using the provided scale.
7. Assign a score to the aesthetic feel of the space (out of 10).
8. Choose a color scheme that best describes the space's color palette.
9. Assign a score to the color scheme's aesthetic quality (out of 10).
10. Describe the materials used in the space.

## Field-by-Field Explanation

* **Urban Design Aesthetics Survey** (`survey_title`, `text`, required): Enter a brief title of the space or area being surveyed.
* **Category** (`category`, `select_one`, required/optional): Choose a category that best describes the space (e.g., Business Surveys, Technology Surveys). This field is optional but can help provide context.
* **Description** (`description`, `text`, required): Provide a detailed description of the space, including its features and characteristics.
* **Neighborhood** (`neighborhood`, `text`, required): Mention the neighborhood where the space is located.
* **Public Space** (`public_space`, `select_multiple`, required/optional): Select all that apply from the list of public space types that best describe the space (e.g., Parks, Streets, Alleys, Other).
* **Aesthetic Feel** (`aesthetic_feel`, `time`, required): Rate the aesthetic feel of the space using the provided scale.
* **Aesthetic Feel Score** (`aesthetic_feel_score`, `number`, required): Assign a score (out of 10) to the aesthetic feel of the space.
* **Color Scheme** (`color_scheme`, `select_one`, required/optional): Choose a color scheme that best describes the space's color palette.
* **Color Scheme Score** (`color_scheme_score`, `number`, required): Assign a score (out of 10) to the color scheme's aesthetic quality.
* **Materials** (`materials_use`, `text`, required): Describe the materials used in the space.
