<thinking>As a form designer and technical writer, I'll create a user-facing help guide for this "School Superintendent Evaluation Form" that explains its purpose, how to complete it, and what each field means. I'll carefully review the provided YAML fields and provide clear explanations for each field, ensuring the guide is concrete, concise, and practical. After reviewing the form fields, I'll output the final help guide in Markdown format, following the required structure.</thinking>

# School Superintendent Evaluation Form - Help Guide
## Purpose

This form is designed to evaluate the performance and effectiveness of a school superintendent. It helps to assess their leadership skills, communication, and decision-making abilities. The purpose of this form is to gather feedback on the school superintendent's performance, which can be used to improve their role and the overall school's functioning.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the school superintendent's ID number.
2. Fill in the school superintendent's name.
3. Provide their email address (if available).
4. Select their position (Assistant, Head, or Principal).
5. Enter any additional comments or feedback about the school superintendent's performance.
6. Select any prophets that are relevant to the evaluation.
7. Rate the school board's performance on a scale (not specified in the YAML, so I'll assume it's a 1-10 scale).
8. Rate the school superintendent's performance on a scale (same as above).
9. Enter any additional comments about the school board.
10. Choose a date for the evaluation.
11. Choose a time for the evaluation (though this seems unnecessary, as evaluation_date is already provided).
12. Choose a completion date for the evaluation form.
13. Enter the school board's ID number (this is a repeat of field 1).
14. Enter the school superintendent's position (this is a repeat of field 4).

## Field-by-Field Explanation

* **School Superintendent ID** (id: 1, type: number, required: false)
	+ Enter the school superintendent's unique ID number.
* **name** (id: 2, type: text, required: false)
	+ Enter the school superintendent's name.
* **Email** (id: 3, type: email, required: false)
	+ Enter the school superintendent's email address (if available).
* **Position** (id: 4, type: select_one, required: false)
	+ Select the school superintendent's position (Assistant, Head, or Principal).
* **Comments** (id: 5, type: note, required: false)
	+ Provide any additional comments or feedback about the school superintendent's performance.
* **Prophets** (id: 6, type: select_multiple, required: false)
	+ Select any prophets that are relevant to the evaluation. (Note: The prophets listed are John the Baptist, Isaiah, and Jeremiah. This field seems to be unrelated to the school evaluation purpose. Consider removing or redefining its purpose.)
* **School Board Rating** (id: 7, type: number, required: false)
	+ Rate the school board's performance on a scale (1-10).
* **School Superintendent Rating** (id: 8, type: number, required: false)
	+ Rate the school superintendent's performance on a scale (1-10).
* **School Board Comments** (id: 9, type: note, required: false)
	+ Provide any additional comments about the school board.
* **Evaluation Date** (id: 10, type: date, required: false)
	+ Choose a date for the evaluation.
* **Evaluation Time** (id: 11, type: time, required: false)
	+ Choose a time for the evaluation (though this seems unnecessary, as evaluation_date is already provided).
* **Evaluation Form Completion Date** (id: 12, type: date, required: false)
	+ Choose a date for the evaluation form completion.
* **School Board ID** (id: 13, type: number, required: false)
	+ Enter the school board's ID number (this is a repeat of field 1).
* **Position** (id: 14, type: text, required: false)
	+ Enter the school superintendent's position (this is a repeat of field 4).

**Tips**

* Please ensure to fill in all required fields accurately and completely.
* If a field is marked as optional, feel free to skip it or add any additional information you find relevant.
* If you're unsure about any field, consult the school's administrative team or the form creator for clarification.
