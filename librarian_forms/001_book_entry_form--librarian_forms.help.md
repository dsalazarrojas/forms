<thinking>
This form is intended to collect metadata about books in the library's inventory. Each field is designed to provide a clear and concise way to record relevant information about a book. The form should be completed by library staff to accurately catalog and track book entries. Please ensure that the form is filled out completely and accurately to avoid duplication or incomplete information.
</thinking>

# Book Entry Form - Help Guide
## Purpose
The Book Entry Form is a tool used to record and maintain accurate information about books in the library's inventory. This guide will walk you through the process of filling out the form, field by field.

## How To Complete This Form
To complete this form, follow the steps below:

1. Start by selecting the book title from the "Book Title" field. This field is a required field and should be filled out completely.
2. Next, enter the author's name in the "Author Name" field. This field is also a required field.
3. If available, enter the 10 or 13 digit ISBN number in the "ISBN Number" field. If not available, leave this field blank.
4. Enter the publication year in the "Publication Year" field. This field is a required field and should be filled out completely.
5. Enter the total page count in the "Number of Pages" field. This field is a required field and should be filled out completely.
6. Select the primary category for the book from the "Book Category" dropdown menu. This field is a required field.
7. If applicable, enter the publisher's name in the "Publisher Name" field. This field is optional and may not be necessary.
8. If applicable, enter the edition number in the "Edition Number" field. This field is optional and may not be necessary.
9. Select the current physical condition of the book from the "Book Condition" dropdown menu. This field is a required field.
10. Enter the date the book was added to the inventory in the "Date Acquired" field. This field is a required field.
11. If applicable, enter the cost price of the book in the "Cost Price" field. This field is optional and may not be necessary.
12. Enter any additional notes or comments in the "Cataloging Notes" field. This field is optional.

## Field-by-Field Explanation

* **Book Title** (`book_title`, `text`, required): Enter the full title of the book.
* **Author Name** (`author_name`, `text`, required): Enter the first and last name of the author.
* **ISBN Number** (`isbn_number`, `text`, optional): If available, enter the 10 or 13 digit ISBN number.
* **Publication Year** (`publication_year`, `number`, required): Enter the year the book was published.
* **Number of Pages** (`page_count`, `number`, required): Enter the total page count.
* **Book Category** (`book_category`, `select_one`, required): Select the primary category for the book.
* **Publisher Name** (`publisher_name`, `text`, optional): Enter the name of the publishing company, if applicable.
* **Edition Number** (`edition_number`, `text`, optional): Enter the edition number, if applicable.
* **Book Condition** (`book_condition`, `select_one`, required): Select the current physical condition of the book.
* **Date Acquired** (`acquisition_date`, `date`, required): Enter the date the book was added to the inventory.
* **Cost Price** (`cost_price`, `number`, optional): Enter the cost price of the book, if applicable.
* **Cataloging Notes** (`cataloging_notes`, `text`, optional): Enter any additional notes or comments about the book entry.
