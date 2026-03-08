<thinking>
The Quilt Show Entry Form is designed for artists to submit their quilters to an exhibition or event. This form aims to collect relevant information about the quilters, including artist name, art title, category, artist statement, medium, date completed, size, price range, and an image file. This form is intended for use by event organizers to collect and display quilter information in an organized and easily accessible manner. It is not affiliated with any proprietary form platforms, and its design is based on the provided YAML input. The form consists of 9 fields, including text inputs for artist name, art title, artist statement, medium, and size, as well as a date field for the date quilters were completed. The category and price range fields are select fields, allowing artists to choose from pre-defined options. The image file field is text-based, indicating the file or location where the artist's image will be uploaded. This form is intended for use by quilting communities, exhibition organizers, and artists to efficiently collect and display quilter information.

</thinking>

# Quilt Show Entry Form - Help Guide
## Purpose
The Quilt Show Entry Form is designed to collect information about quilters for exhibition or event purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your artist name in the "Artist Name" field.
2. Enter the title of your art piece in the "Art Title" field.
3. Select the category that best describes your quilt from the options provided in the "Category" field.
4. Provide a statement about your art piece in the "Artist Statement" field.
5. Enter the medium used to create your quilt in the "Medium" field.
6. Enter the date you completed your quilt in the "Date Quilts Completed" field.
7. Enter the size of your quilt in inches in the "Size Inchs" field.
8. Choose a price range for your quilt from the options provided in the "Price Range" field.
9. Upload or reference your image file in the "Image File" field.

## Field-by-Field Explanation

* **Artist Name** (`artist_name`, text, required: false): Please enter your name as the artist.
* **Art Title** (`art_title`, text, required: false): Enter the title of your art piece.
* **Category** (`category`, select_one, required: false): Select a category for your quilt from the options:
	+ Handmade Art
	+ Mixed Media
	+ Quilted Textile
	+ Other
* **Artist Statement** (`artist_statement`, text, required: false): Provide a brief statement about your art piece.
* **Medium** (`medium`, text, required: false): Enter the medium used to create your quilt.
* **Date Quilts Completed** (`date_quilts_completed`, date, required: false): Enter the date you completed your quilt.
* **Size** (`size_inchs`, text, required: false): Enter the size of your quilt in inches.
* **Price Range** (`price_range`, select_one, required: false): Select a price range for your quilt from the options:
	+ 100-500
	+ 501-1000
	+ 1000+
* **Image File** (`image_file`, text, required: false): Upload or reference your image file.
