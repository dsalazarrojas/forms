<thinking>
The search results report form is used to gather information about a search query and its associated search results. This form helps in tracking and documenting search queries and results, which can aid in improving search algorithms and result accuracy. 

</thinking>

# search_results_report_form - Help Guide
## Purpose
The search results report form is used to record details about a search query and its results, helping to track and analyze search performance and user behavior.

## How To Complete This Form
To fill out the form, follow these steps:

1. Enter the search query that was performed.
2. Select the range of search results that were retrieved.
3. Choose the time range for the search.
4. Specify the number of search results found.
5. Indicate if the search results type is relevant.
6. Select the type of relevance of the search results.
7. Indicate if the search results range is relevant.
8. Choose the search results range and type for relevance.
9. Determine if the search results are relevant.
10. Select the search results range and type for relevance.

## Field-by-Field Explanation

* **What is the search query?** (`search_query`, text, required): Enter the exact search query performed.
* **What is the range of search results?** (`search_results_range`, number, required): Choose a numerical value to indicate the range of results found.
* **What is the time range?** (`time_range`, time, required): Select the time period for the search query.
* **What is the number of search results?** (`search_results_count`, number, required): Enter the total count of search results found.
* **Is the search results type relevant?** (`search_results_type`, select_one, required): Select 'Yes' or 'No' to indicate if the type of results is relevant.
* **What is the search results type relevance?** (`search_results_type_relevance`, select_one, required): Choose 'Yes' or 'No' to indicate the type of results relevance.
* **Is the search results range relevant?** (`search_results_range_type`, select_one, required): Select 'Yes' or 'No' to indicate the range of results relevance.
* **What is the search results range?** (`search_results_range`, select_multiple, required): Choose the specific range of results, selecting 'Yes' for 'Range 1' and/or 'Range 2'.
* **Is the search results relevant?** (`search_results_relevance`, select_one, required): Select 'Yes' or 'No' to indicate the overall relevance of the results.
* **Search Results Range Relevance** (`search_results_range_relevance`, select_one, required): Select 'Yes' or 'No' to indicate the relevance of the results range.
* **Search Results Type Relevance** (`search_results_type_relevance`, select_one, required): Select 'Yes' or 'No' to indicate the relevance of the results type.
* **Search Results Range Type 2** (`search_results_range_type_2`, select_multiple, required): Choose the specific range type for relevance, selecting 'Yes' for 'Range 1' and/or 'Range 2'.
