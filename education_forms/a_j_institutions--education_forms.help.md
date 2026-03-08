<thinking>...This form is designed to assist in the evaluation and interpretation of A/B testing results, specifically in the context of experimentation. It is meant to be used by analysts, researchers, or other stakeholders to calculate and compare the performance of different variants in an experiment. This form is a helpful tool for making data-driven decisions based on statistical significance.

The form is composed of several sections, each asking for specific information related to the experiment. Please ensure that you have the necessary data and understand the context before filling out this form...

</thinking>

# A/B Testing Calculator - Help Guide
## Purpose
The A/B Testing Calculator is a tool designed to help analysts evaluate and compare the performance of different variants in an experiment. It guides users through a series of questions to calculate and determine the significance of the results, providing valuable insights for decision-making.

## How To Complete This Form
To get the most out of this form, follow these steps:

1.  Enter the **Experiment Name** or ID, which should be a brief description of the experiment being conducted.
2.  Enter the **Experiment Owner**, who is responsible for the experiment.
3.  Select the **Primary Metric of Interest**, which is the key performance indicator being measured.
4.  Choose the **Test Type**, which could be A/B, A/B/n, or Holdout vs Variant.
5.  Enter the **Start Date** and **End Date** of the experiment, or leave them blank if the experiment is ongoing.
6.  Provide the **Total Visitors** for both **Variant A** and **Variant B**, which are the number of unique visitors for each variant.
7.  Enter the **Conversions** for both **Variant A** and **Variant B**, which are the number of conversions for the metric of interest.
8.  Select the **Desired Significance Level**, which is the confidence level for the results.
9.  Optionally, enter the **Minimum Detectable Effect (percent points)**, which is the smallest effect size that can be detected.
10.  Add any **Notes for Statistical Assumptions**, such as pooling or stratification, and **Reviewer or Analyst Comments**, which can be used for further interpretation or recommended next steps.

## Field-by-Field Explanation
* **Experiment Name** (`experiment_name`, text, required): Enter a brief description of the experiment being conducted.
* **Experiment Owner** (`owner_name`, text, required): Enter the name of the person responsible for the experiment.
* **Primary Metric of Interest** (`metric_of_interest`, select_one, required): Choose the key performance indicator being measured, such as Conversion Rate, CTR, Revenue per Visitor, or Bounce Rate.
* **Test Type** (`test_type`, select_one, required): Select the type of test being conducted, which could be A/B, A/B/n, or Holdout vs Variant.
* **Start Date** (`start_date`, date, optional): Enter the start date of the experiment.
* **End Date** (`end_date`, date, optional): Enter the end date of the experiment, or leave blank if the experiment is ongoing.
* **Variant A - Total Visitors** (`variant_a_visitors`, integer, required): Enter the total number of unique visitors for Variant A.
* **Variant B - Total Visitors** (`variant_b_visitors`, integer, required): Enter the total number of unique visitors for Variant B.
* **Variant A - Conversions** (`variant_a_conversions`, integer, required): Enter the number of conversions for Variant A.
* **Variant B - Conversions** (`variant_b_conversions`, integer, required): Enter the number of conversions for Variant B.
* **Desired Significance Level** (`significance_level`, select_one, required): Choose the confidence level for the results, such as 90%, 95%, or 99%.
* **Minimum Detectable Effect (percent points)** (`difference_magnitude_decimal`, decimal, optional): Enter the smallest effect size that can be detected as a decimal (e.g., 0.02 = 2%).
* **Notes for Statistical Assumptions** (`statistical_notes`, text, optional): Document any pooling, stratification, or corrections that may affect the results.
* **Reviewer or Analyst Comments** (`reviewer_comments`, text, optional): Add any comments or recommended next steps for the results.
* **Variant A - Conversions** (`variant_a_conversions`, integer, required): Enter the number of conversions for Variant A.
* **Variant B - Conversions** (`variant_b_conversions`, integer, required): Enter the number of conversions for Variant B.
