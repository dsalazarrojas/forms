# introductory_questionnaire_sheet_graphics - Help Guide
## Purpose
This form is designed to collect information about graphic-related settings for a specific project.

## How To Complete This Form
1. Read the form carefully to understand what each field is asking for.
2. Fill out the introduction section to provide a brief overview of the project.
3. Select the correct type of graphic work you're dealing with (web, print, video) from the "web", "print", and "video" fields.
4. Choose the format and resolution of the output in the "format", "resolution", and "orientation" fields.
5. Specify the color mode and paper type in the "color_mode" and "paper_type" fields.
6. Determine the bleeding and trimming settings in the "bleed", "trim_type", "bleed_position", and "trim_size" fields.
7. Select the file type for the output in the "file_type" field.

## Field-by-Field Explanation

* **Introduction** (`introduction`, text, optional): This field is for a brief overview of the project.
* **Web** (`web`, select_one, required): Choose the type of graphic work you're doing (web, Web).
* **Print** (`print`, select_one, required): Choose the type of graphic work you're doing (print, Print).
* **Video** (`video`, select_one, required): Choose the type of graphic work you're doing (video, Video).
* **What Type of Work** (`work_type`, select_multiple, required): Choose the type of work you're doing (logo, icon, banner, brochure, business cards).
* **Size** (`size`, number, optional): Specify the size of the project (if applicable).
* **Color Mode** (`color_mode`, select_one, required): Choose the color mode (color, grayscale).
* **Format** (`format`, select_one, required): Choose the format (portrait, landscape, square).
* **Resolution** (`resolution`, number, optional): Specify the resolution of the project (if applicable).
* **Orientation** (`orientation`, select_one, required): Choose the orientation (portrait, landscape).
* **Bleed** (`bleed`, select_one, required): Choose if there's bleeding or not.
* **Bleed Type** (`trim_type`, select_one, required): Choose the bleed type (bleed, no trim).
* **Bleed Size** (`bleed_size`, number, optional): Specify the bleed size (if applicable).
* **Bleed Size Margin** (`bleed_size_margin`, number, optional): Specify the bleed size margin (if applicable).
* **Bleed Position** (`bleed_position`, select_one, required): Choose the bleed position (bleed, no bleed).
* **Trim Size** (`trim_size`, number, optional): Specify the trim size (if applicable).
* **Trim Position** (`trim_position`, select_one, required): Choose the trim position (trim, no trim).
* **File Type** (`file_type`, select_one, required): Choose the file type (pdf, eps).
* **Notes** (`notes`, note, optional): Add any additional notes about the project.
