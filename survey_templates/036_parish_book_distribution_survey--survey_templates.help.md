# Parish Book Distribution Survey - Help Guide
## Purpose
This form is used to track the distribution status of parish books and collect relevant information about each book.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the **Book name** from the dropdown menu to identify the book you are reporting on.
2. Choose the **Distribution status** by selecting one or more of the options (Distributed, Not distributed, Missing).
3. Provide any **Feedback** or comments about the book's distribution status.
4. (Optional) Enter the **Date received** and **Time received** if you have this information.
5. (Optional) Enter the **Contact person** and **Email** and **Phone** if you need to provide additional contact information.

## Field-by-Field Explanation
* **Survey Template** (`survey_template`, text, optional): This field is not applicable for the end-user.
* **Parish** (`parish`, text, optional): Enter the name of the parish where the book is being distributed.
* **Book name** (`book_name`, select_one, required): Select the name of the book you are reporting on.
* **Distribution status** (`distribution_status`, select_multiple, required): Select one or more of the following options: Distributed, Not distributed, Missing.
* **Feedback** (`feedback`, text, optional): Provide any feedback or comments about the book's distribution status.
* **Date received** (`date_received`, date, optional): Enter the date when you received the book (if applicable).
* **Time received** (`time_received`, time, optional): Enter the time when you received the book (if applicable).
* **Contact person** (`contact_person`, text, optional): Enter the name of the person you contact for further information.
* **Email** (`email`, email, optional): Enter the contact email address of the person (if applicable).
* **Phone** (`phone`, text, optional): Enter the contact phone number of the person (if applicable).
