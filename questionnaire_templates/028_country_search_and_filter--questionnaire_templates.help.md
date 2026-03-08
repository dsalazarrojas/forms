# Country Search And Filter - Help Guide
## Purpose

This form is used to collect information about countries, languages, and currencies that match specific criteria. You can use it to search for countries with specific languages or currencies, or filter the results based on your preferences.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the "Search Form" field with the desired country or criteria you want to search for.
2. Select the languages you want to filter by in the "Select Language" field.
3. Select the currency you want to filter by in the "Select Currency" field.
4. Optionally, select the country-language or currency-language combination you want to filter by in the "Select Country-Lanuage", "Currency Lanuage", or "Select Currency-Country" fields.
5. Click the "Search" button to view the search results in the "Search Results" field.

## Field-by-Field Explanation

* **Search Form** (`search_form`, `text`, required: false): Enter a country or criteria to search for.
* **Filter Form** (`filter_form`, `text`, required: false): Optional field to filter by, but its purpose is unclear.
* **Result View** (`result_view`, `text`, required: false): Displays the search results.
* **Select Country** (`select_country`, `select_multiple`, required: false): Select multiple countries to filter by.
* **Select Language** (`select_language`, `select_one`, required: false): Select a language to filter by.
* **Select Currency** (`select_currency`, `select_one`, required: false): Select a currency to filter by.
* **Select Country-Lanuage** (`select_country_language`, `select_one`, required: false): Select a country-language combination to filter by. (Note: This field seems to be similar to "Select Country" and "Select Language")
* **Currency Lanuage** (`select_currency_language`, `select_multiple`, required: false): Select a currency-language combination to filter by. (Note: This field seems to be similar to "Select Country" and "Select Language")
* **Select Currency-Country** (`select_currency_country`, `select_one`, required: false): Select a currency-country combination to filter by. (Note: This field seems to be similar to "Select Language" and "Select Country")
* **Search Results** (`search_results`, `text`, required: false): Displays the search results after clicking the "Search" button.

## Tips

* Make sure to fill in the "Search Form" field correctly to get accurate results.
* Select multiple countries or languages to filter by to get more specific results.
* Use the "Search" button to view the search results in the "Search Results" field.
