# Category Management Form - Help Guide
## Purpose
The Category Management Form is used for managing categories. It allows you to create new categories, update existing ones, merge categories, change category hierarchies, and delete categories. Please fill out this form accurately to ensure that category information is up-to-date and complete.

## How To Complete This Form
1. Fill out the requester's name and email address to associate the category with the correct user.
2. Select the department responsible for the category from the dropdown list.
3. Choose the type of action you want to perform on the category.
4. Enter the date of the request.
5. Input the name of the category and its slug (a URL-friendly identifier, optional).
6. If applicable, select the parent category.
7. Write a brief description of the category.
8. Choose who can see this category from the dropdown list.
9. Select the person responsible for the category.
10. List any related categories.
11. Enter the display order of the category (optional).
12. Choose if this category should be included in the navigation menu.
13. Enter a meta title and description for SEO purposes (optional).
14. Enter a featured image URL or description (optional).
15. Specify any custom fields required for this category (optional).
16. Select the current approval status of the category.
17. Set the effective date for changes to take effect (optional).
18. Add any additional notes for relevant information.

## Field-by-Field Explanation
* **Requester Name** (`requester_name`, text, required): Enter the full name of the person making this request.
* **Email Address** (`email`, email, required): Enter the email address of the person making this request.
* **Department** (`department`, select_one, required): Select the department responsible for the category from the dropdown list.
* **Request Type** (`request_type`, select_one, required): Choose the type of action you want to perform on the category.
* **Request Date** (`request_date`, date, required): Enter the date of this request.
* **Category Name** (`category_name`, text, required): Enter the name of the category.
* **Category Slug** (`category_slug`, text, optional): Enter a URL-friendly identifier for the category.
* **Parent Category** (`parent_category`, text, optional): If applicable, select the parent category.
* **Category Description** (`category_description`, text, required): Write a brief description of the category.
* **Visibility** (`visibility`, select_one, required): Choose who can see this category from the dropdown list.
* **Category Owner** (`category_owner`, text, required): Select the person responsible for the category.
* **Related Categories** (`related_categories`, text, optional): List any related categories.
* **Sort Order** (`sort_order`, number, optional): Enter the display order of the category.
* **Include in Navigation Menu** (`include_in_menu`, select_one, required): Choose if this category should be included in the navigation menu.
* **Meta Title** (`meta_title`, text, optional): Enter a meta title for SEO purposes.
* **Meta Description** (`meta_description`, text, optional): Enter a meta description for SEO purposes.
* **Featured Image** (`featured_image`, text, optional): Enter a featured image URL or description.
* **Custom Fields** (`custom_fields`, text, optional): Specify any custom fields required for this category.
* **Approval Status** (`approval_status`, select_one, optional): Select the current approval status of the category.
* **Effective Date** (`effective_date`, date, optional): Set the effective date for changes to take effect.
* **Additional Notes** (`notes`, text, optional): Add any additional notes for relevant information.
