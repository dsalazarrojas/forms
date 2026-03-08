<thinking>...</thinking>

# label_adhesion_quality_report_form - Help Guide

## Purpose
The Label Adhesion Quality Report Form is designed to collect data on the adhesion quality of a product's label. This form gathers information on the label's adhesion to the product, including the category, product description, test results, and testing details.

## How To Complete This Form
1. Begin by entering the category of the product being tested in the "Category" field.
2. If applicable, provide a product description in the "Product Description" field.
3. Indicate whether the label adhesion test was performed ("Yes" or "No") in the "Location of Label Adhesion Test" field.
4. Specify the result of the test ("Yes" or "No") in the "Label Adhesion Test Result" field. If applicable, provide a detailed description of the test result in the "Label Adhesion Test Result Description" field.
5. Enter the size of the product label in the "Product Label Size" field.
6. Enter the color of the product label in the "Product Label Color" field (optional).
7. Select the person who performed the test in the "Tested By" field, and enter the date the test was performed in the "Tested On" field.
8. Enter the title of the person who performed the test in the "Tested By Title" field (optional).
9. Select the department of the person who performed the test in the "Tested By Department" field (optional).
10. If the product was tested by multiple individuals, select the relevant options in the "Prophets" field.
11. Provide any comments or notes in the "Comments" field.
12. If relevant, upload an attachment in the "Attachment" field, and specify its type and size in the "Attachment Type", "Attachment Url", "Attachment Size", "Attachment Data" fields.
13. Enter any additional notes or details in the "Notes" field.

## Field-by-Field Explanation

* **Category** (`category`, text, required): Enter the category of the product being tested.
* **Location of Label Adhesion Test** (`label_adhesion_test_location`, select_one, required): Indicate whether the label adhesion test was performed.
* **Label Adhesion Test Result** (`label_adhesion_test_result`, select_multiple, required): Specify the result of the test.
* **Product Description** (`product_description`, text, optional): Provide a product description (if applicable).
* **Product Label Size** (`product_label_size`, text, required): Enter the size of the product label.
* **Product Label Color** (`product_label_color`, text, optional): Enter the color of the product label (if applicable).
* **Tested By** (`tested_by`, text, required): Select the person who performed the test.
* **Tested On** (`tested_on`, date, required): Enter the date the test was performed.
* **Tested By Title** (`tested_by_title`, text, optional): Enter the title of the person who performed the test.
* **Tested By Department** (`tested_by_department`, text, optional): Select the department of the person who performed the test.
* **Prophets** (`prophets`, select_multiple, required): Select the individuals who tested the product.
* **Comments** (`comments`, text, optional): Provide any comments or notes.
* **Attachment** (`attachment`, text, optional): Upload an attachment (if applicable).
* **Attachment Type** (`attachment_type`, text, optional): Specify the type of attachment.
* **Attachment Url** (`attachment_url`, text, optional): Enter the URL of the attachment.
* **Attachment Size** (`attachment_size`, text, optional): Enter the size of the attachment.
* **Attachment Data** (`attachment_data`, text, optional): Enter any data related to the attachment.
* **Notes** (`notes`, text, optional): Enter any additional notes or details.
* **Label Adhesion Test Notes** (`label_adhesion_test_notes`, text, optional): Enter any notes or details related to the label adhesion test.
* **Attachment Url Type** (`attachment_url_type`, text, optional): Specify the type of attachment URL.
* **Attachment Data Type** (`attachment_data_type`, text, optional): Enter any data related to the attachment.
* **Attachment Size Type** (`attachment_size_type`, text, optional): Enter the type of attachment size.
