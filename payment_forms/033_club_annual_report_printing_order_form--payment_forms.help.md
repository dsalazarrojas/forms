<thinking>
The purpose of this form is to guide users through the process of placing an order for printing annual club reports. This form captures essential information for the print request, including contact details, report specifications, printing details, and delivery information. The fields are designed to be clear and self-explanatory, and the instructions should help ensure that users understand what data is needed and how it will be used.
Before proceeding, double-check that the form matches your existing internal documentation and business logic.
</thinking>

# Club Annual Report Printing Order Form - Help Guide
## Purpose
This form is used to place an order for printing annual club reports. It captures essential information for the print request, including contact details, report specifications, printing details, and delivery information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the contact information section with your name, email address, and phone number.
2. Enter the club name and report title.
3. Select the report year and specify the total number of pages.
4. Choose the cover color preference and paper type.
5. Select the binding type and interior color printing method.
6. If mixed color printing is selected, specify the page ranges.
7. Choose the lamination option and delivery method.
8. Enter the desired delivery date and estimated total cost.

## Field-by-Field Explanation

* **-- Contact Information --** (`section_contact`, `note`, optional)
	+ This section is where you can enter your contact details, but it's optional.
* **Club Name** (`club_name`, text, required)
	+ Enter the name of your club.
* **Contact Person Name** (`contact_person`, text, required)
	+ Enter the name of the person placing the order.
* **Email Address** (`email_address`, email, required)
	+ Enter your email address.
* **Phone Number** (`phone_number`, text, required)
	+ Enter your phone number.
* **Mailing Address** (`mailing_address`, text, required)
	+ Enter the address where you'd like the printed reports sent.
* **-- Report Specifications --** (`section_report`, `note`, optional)
	+ This section is for specifying report details, but it's not required.
* **Annual Report Title** (`report_title`, text, required)
	+ Enter the title of the report.
* **Report Year** (`report_year`, number, required)
	+ Enter the year covered by this report.
* **Total Number of Pages** (`page_count`, number, required)
	+ Enter the total number of pages in the report.
* **Cover Color Preference** (`cover_color`, select_one, required)
	+ Choose the color of the cover.
* **Paper Type** (`paper_type`, select_one, required)
	+ Select the type of paper to use.
* **Binding Type** (`binding_type`, select_one, required)
	+ Choose the binding type.
* **-- Printing Details --** (`section_printing`, `note`, optional)
	+ This section is for specifying printing details, but it's not required.
* **Quantity to Print** (`quantity`, number, required)
	+ Enter the number of copies to print.
* **Interior Color Printing** (`color_printing`, select_one, required)
	+ Choose the interior color printing method.
* **Color Pages - If Mixed** (`color_pages_range`, text, optional)
	+ If mixed color printing is selected, specify the page ranges.
* **Lamination on Cover** (`lamination`, select_one, optional)
	+ Choose the lamination option.
* **-- Delivery Details --** (`section_delivery`, `note`, optional)
	+ This section is for specifying delivery details, but it's not required.
* **Desired Delivery Date** (`delivery_date`, date, required)
	+ Enter the date when you need the reports.
* **Delivery Method** (`delivery_method`, select_one, required)
	+ Choose the delivery method.
* **-- Cost and Payment --** (`section_cost`, `note`, optional)
	+ This section is for payment details, but it's not required.
* **Estimated Total Cost - USD** (`estimated_cost`, number, optional)
	+ This will display the estimated total cost based on your specifications.
* **Payment Method** (`payment_method`, select_one, required)
	+ Choose the payment method.

## Tips

* Make sure to fill out all required fields.
* Double-check your contact details and report specifications to ensure accuracy.
* If you have any special requests or questions, contact us for assistance.
