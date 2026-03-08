# Materials Reorder Form - Help Guide
## Purpose
The purpose of this form is to collect customer information for reordering materials for exams or classes.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the customer's information in the "Customer Info" field.
2. If applicable, specify additional materials required in the "Additional Materials" field.
3. Select the level of study from the "Level" field.
4. Select the exam booklets that the customer needs to reorder in the "Exam Booklet" field.
5. Add any customer notes in the "Customer Note" field.
6. Enter the customer's email address in the "Customer Email" field.

## Field-by-Field Explanation
* **Customer Info** (`customer_info`, text, optional): This field is for the customer to provide their information.
* **Additional Materials** (`additional_materials`, text, optional): If the customer needs additional materials, they can specify them here.
* **Level** (`level`, select_one, required): Select the level of study that the customer is reordering materials for.
* **Exam Booklet** (`exam_booklet`, select_multiple, required): Select the exam booklets that the customer needs to reorder.
* **Exam Booklet** (`exam_booklet`, select_multiple, required): This field is a repetition of the "Exam Booklet" field, but with a slightly different label. Please select one or more exam booklets that the customer needs to reorder.
* **Customer Note** (`customer_note`, note, optional): This field is for the customer to add any additional notes or comments about their reordering.
* **Customer Email** (`customer_email`, email, optional): Enter the customer's email address for communication.
