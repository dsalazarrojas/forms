# URL Indexing Check Request Form - Help Guide
## Purpose
This form is used for internal purposes to collect and manage detailed information about a URL.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the base URL of the URL you want to check.
2. Enter the title of the URL.
3. Provide a brief description of the URL.
4. Select the type of URL (Home, Internal, or External).
5. Choose the priority of the URL (High, Medium, or Low).
6. Select the status of the URL (Indexed, Not Indexed, or Unknown).
7. Enter the date and time the URL was last checked.
8. Add any additional information about the URL (optional).
9. Enter any comments or feedback from the reviewer (optional).
10. Enter any comments or feedback from the submitter (optional).
11. Select the follow-up status of the URL (Active or Inactive, optional).

## Field-by-Field Explanation

* **base_url** (`base_url`, `text`, required): Enter the base URL of the URL you want to check.
* **base_title** (`base_title`, `text`, required): Enter the title of the URL.
* **base_description** (`base_description`, `text`, required): Provide a brief description of the URL.
* **url_id** (`url_id`, `text`, required): Enter the URL ID.
* **url_type** (`url_type`, `select_one`, required): Select the type of URL (Home, Internal, or External).
* **url_priority** (`url_priority`, `select_multiple`, required): Choose the priority of the URL (High, Medium, or Low).
* **url_status** (`url_status`, `select_multiple`, required): Select the status of the URL (Indexed, Not Indexed, or Unknown).
* **url_date** (`url_date`, `date`, required): Enter the date the URL was last checked.
* **url_time** (`url_time`, `time`, required): Enter the time the URL was last checked.
* **additional_info** (`additional_info`, `text`, optional): Add any additional information about the URL.
* **reviewer_comments** (`reviewer_comments`, `text`, optional): Enter any comments or feedback from the reviewer.
* **submitter_comments** (`submitter_comments`, `text`, optional): Enter any comments or feedback from the submitter.
* **follow_up_status** (`follow_up_status`, `select_one`, optional): Select the follow-up status of the URL (Active or Inactive).

Note: This form is for internal use only.
