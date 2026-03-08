# library_book_check_out_form - Help Guide
## Purpose
The library_book_check_out_form is used to check out books from the library's collection. This form is for library members only and should not be used to check out books for non-library members. It is also not intended to be used for books that are not available for check-out.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the `form_id` - This is a unique ID for the form, please enter the number assigned to you by the library staff.
2. Enter your `user_name` - Please enter your name as it appears on your library membership card.
3. Enter your `user_email` - Please enter your email address as it appears on your library membership card.
4. Enter the `book_title` - Please enter the title of the book you wish to check out.
5. Enter the `book_author` - Please enter the author of the book you wish to check out.
6. Enter the `borrowing_date` - Please select the date you wish to borrow the book. This date should be in the format of MM/DD/YYYY.

## Field-by-Field Explanation
* **form_id** (`form_id`, Number, Optional): This is a unique ID for the form. Enter the number assigned to you by the library staff.
* **form_title** (`form_title`, Text, Optional): Please enter the title of the book you wish to check out.
* **user_name** (`user_name`, Text, Required): This is your name as it appears on your library membership card.
* **user_email** (`user_email`, Email, Required): This is your email address as it appears on your library membership card.
* **book_title** (`book_title`, Text, Required): This is the title of the book you wish to check out.
* **book_author** (`book_author`, Text, Optional): This is the author of the book you wish to check out.
* **borrowing_date** (`borrowing_date`, Date, Required): Please select the date you wish to borrow the book. This date should be in the format of MM/DD/YYYY.

## Tips
* Make sure to enter accurate information, especially your name and email address.
* Ensure you are not trying to check out a book that is already checked out or not available.
* If you need help with the form, please ask library staff for assistance.
