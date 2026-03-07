</thinking>

# ingredient_trace_report_request_form - Help Guide
## Purpose
This form is used to request a trace on an ingredient, which is a process to track the origin, movement, and storage of an ingredient from production to consumption. This form is used to gather information about the ingredient, including product details, batch details, and sampling information.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the correct product from the dropdown menu.
2. Enter the batch details, including batch number and batch size.
3. Enter the sampling information, including sampling frequency and location.
4. Enter the sampling date and time.
5. Enter the sample ID and sample type.
6. Choose whether to investigate the ingredient or not.
7. Add any comments about the ingredient.

## Field-by-Field Explanation

* **Product Details**
    * `Product ID` (`ingredient_trace_form_product_id`, text, optional): Enter the unique identifier for the product.
    * `Product Name` (`ingredient_trace_form_product_name`, text, optional): Enter the name of the product.
    * `Product Description` (`ingredient_trace_form_product_description`, text, optional): Enter a brief description of the product.
* **Batch Details**
    * `Batch Number` (`ingredient_trace_form_batch_number`, text, optional): Enter the batch number of the ingredient.
    * `Batch Size` (`ingredient_trace_form_batch_size`, text, optional): Enter the batch size of the ingredient.
    * `Batch Weight` (`ingredient_trace_form_batch_weight`, text, optional): Enter the batch weight of the ingredient.
* **Sampling Information**
    * `Sampling Frequency` (`ingredient_trace_form_sampling_frequency`, number, optional): Enter the sampling frequency (e.g., daily, weekly, monthly).
    * `Sampling Location` (`ingredient_trace_form_sampling_location`, text, optional): Enter the location where the sampling will take place.
    * `Sampling Date` (`ingredient_trace_form_sampling_date`, text, optional): Enter the date of the sampling.
    * `Sampling Time` (`ingredient_trace_form_sampling_time`, text, optional): Enter the time of the sampling.
* **Sample Details**
    * `Sample ID` (`ingredient_trace_form_sample_id`, text, optional): Enter the ID of the sample.
    * `Sample Type` (`ingredient_trace_form_sample_type`, text, optional): Enter the type of sample.
* **Additional Information**
    * `Investigate` (`ingredient_trace_form_investigate`, select_one, optional): Choose whether to investigate the ingredient or not.
    * `Comments` (`ingredient_trace_form_comments`, text, optional): Add any comments about the ingredient.
* **Miscellaneous**
    * `Sample Location` (`ingredient_trace_form_sample_location`, text, optional): Enter the location of the sample.
    * `Sample Weight` (`ingredient_trace_form_sample_weight`, text, optional): Enter the weight of the sample.
    * `Sampling Frequency Unit` (`ingredient_trace_form_sampling_frequency_unit`, text, optional): Enter the unit of the sampling frequency.
