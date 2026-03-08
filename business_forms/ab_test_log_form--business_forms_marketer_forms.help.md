# AB Test Log Form - Help Guide
## Purpose
The AB Test Log Form is used to document and track the progress of A/B tests, providing a clear and concise overview of each test, including its purpose, methodology, and outcome.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the "Full name" field with your name.
2. Enter your work email address in the "Email address" field.
3. Provide the name or identifier of the test in the "Test name / identifier" field.
4. Select the type of test from the "Test type" field.
5. Enter a concise one-sentence hypothesis describing the expected outcome in the "Hypothesis" field.
6. Select the primary metric(s) being tracked in the "Primary metric(s)" field.
7. Enter the baseline conversion rate as a decimal value in the "Baseline conversion rate (%)" field.
8. Estimate the expected lift as a decimal value in the "Expected lift (%)" field.
9. If applicable, enter the sample size required for each variant in the "Sample size required (per variant)" field.
10. Enter the test start and end dates in the "Test start date" and "Test end date" fields respectively.
11. Provide a brief description of each variant in the "Variant details (brief)" field.
12. Indicate the statistical significance status in the "Statistical significance status" field.
13. Enter the observed conversion rate for the winning variant as a decimal value in the "Winning variant conversion rate (%)" field.
14. Select the business priority level for the test in the "Business priority" field.
15. Describe the implementation plan and next steps in the "Implementation plan and next steps" field.
16. Enter the email of the person responsible for metric validation in the "Analytics contact email" field.
17. Provide any additional comments or learnings in the "Additional comments or learnings" field.

## Field-by-Field Explanation

* **Full name** (`full_name`, `text`, required): Enter your name for the test documentation.
* **Email address** (`email_address`, `email`, required): Enter your work email address.
* **Company or team name** (`company_or_team`, `text`, optional): Enter the name of the company or team conducting the test.
* **Test name / identifier** (`test_name`, `text`, required): Use a concise identifier for the test (e.g., hero_button_red_vs_blue).
* **Test type** (`test_type`, `select_one`, required): Select the type of test (e.g., A/B test, Multivariate test, Split URL test, Personalization, Bandit).
* **Hypothesis** (`hypothesis`, `text`, required): Enter a concise one-sentence hypothesis describing the expected outcome.
* **Primary metric(s)** (`primary_metrics`, `select_multiple`, required): Select one or more metrics tracked to evaluate the test (e.g., Conversion rate, Revenue per visitor, Click-through rate, Signup rate, Engagement time, Bounce rate).
* **Baseline conversion rate (%)** (`baseline_conversion_rate`, `decimal`, required): Enter the baseline conversion rate as a decimal value.
* **Expected lift (%)** (`expected_lift`, `decimal`, optional): Estimate the expected lift as a decimal value.
* **Sample size required (per variant)** (`sample_size_required`, `integer`, optional): If applicable, enter the sample size required for each variant.
* **Test start date** (`test_start_date`, `date`, required): Enter the start date of the test.
* **Test end date** (`test_end_date`, `date`, optional): Enter the end date of the test, or leave blank for open-ended tests.
* **Variant details (brief)** (`variant_details`, `text`, required): Provide a brief description of each variant.
* **Statistical significance status** (`statistical_significance`, `select_one`, required): Indicate if the target significance was achieved.
* **Winning variant conversion rate (%)** (`variant_conversion_rate`, `decimal`, optional): Enter the observed conversion rate for the winning variant.
* **Business priority** (`priority`, `select_one`, required): Select the business priority level for the test (e.g., High, Medium, Low).
* **Implementation plan and next steps** (`implementation_plan`, `text`, optional): Describe the rollout plan and next steps for the test.
* **Analytics contact email** (`analytics_contact`, `email`, optional): Enter the email of the person responsible for metric validation.
* **Additional comments or learnings** (`additional_comments`, `text`, optional): Provide any additional comments or learnings from the test.
