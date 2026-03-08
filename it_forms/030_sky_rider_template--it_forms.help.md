<thinking>...thinking>

The form is used to create a new template for the Sky Rider system, which is likely a custom content management system or a template engine. The purpose of the form is to allow users to create and configure new templates with specific settings, such as category, description, form ID, output file, assigned tool, and assigned user. 

The form is likely used by administrators or content editors to create new templates that can be used to generate output in specific formats, such as HTML, CSV, or JSON. The output file field may indicate the file format that the template will generate as output.

It is assumed that the template category, description, and assigned user fields are free-text fields, while the assigned tool field is likely a fixed set of options that the administrator has pre-defined. The form ID and output file fields are likely intended to be filled with numeric and text inputs, respectively.

The form is not explicitly designed to prevent non-duplication, so it is possible that users may create multiple templates with the same form ID or output file.

This form may be part of a larger system that allows users to create, edit, and manage templates. The form is likely to be used in conjunction with other features, such as template editing and management interfaces.

The user is expected to have a basic understanding of how to fill out a form, and should be able to complete it with ease.

</thinking>

# Sky Rider Template - Help Guide
## Purpose
The Sky Rider Template form is used to create a new template for the Sky Rider system, specifying category, description, form ID, output file, assigned tool, and assigned user for the template.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the title of the new template in the "Sky Rider Template" field.
2. Select the category for the template from the "Category" dropdown list.
3. Enter a brief description of the template in the "Description" field.
4. Enter the ID of the form that this template will generate as output in the "Form ID" field.
5. Enter the file format that the template will generate as output in the "Output File" field.
6. Select the tool that is assigned to this template from the "Assigned Tool" dropdown list.
7. Select the user that is assigned to this template from the "Assigned User" dropdown list.

## Field-by-Field Explanation
- **Category** (`sky_rider_template_category`, select_one, required: false): Select the category for this template.
- **Description** (`sky_rider_template_description`, text, required: false): Enter a brief description for this template.
- **Form ID** (`sky_rider_template_form_id`, number, required: false): Enter the ID of the form that this template will generate as output.
- **Output File** (`sky_rider_template_output_file`, text, required: false): Enter the file format that the template will generate as output.
- **Assigned Tool** (`sky_rider_template_assigned_tool`, text, required: false): Select the tool that is assigned to this template.
- **Assigned User** (`sky_rider_template_assigned_user`, text, required: false): Select the user that is assigned to this template.
- **Sky Rider Template** (`sky_rider_template_title`, text, required: false): Enter a title for the new template.
