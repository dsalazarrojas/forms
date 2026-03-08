<thinking>...This form is used to collect information on the sampling frequency and methodology for a batch of products. It is used to track the number of samples taken, the date of collection, and the storage conditions for samples. This form is likely used by quality assurance teams to ensure that products are being sampled and stored correctly.

</thinking>

# Batch Sampling Frequency Report Form - Help Guide
## Purpose
This form is used to collect information on the sampling frequency and methodology for a batch of products.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Batch Identifier** to identify the batch being sampled.
2. Select the **Product Type** from the list of options provided.
3. Choose the **Sampling Frequency** from the list of options provided.
4. Select the **Sampling Method Used** from the list of options provided.
5. Enter the **Total Number of Samples Collected per Batch**.
6. Enter the **Date of Collection**.
7. Enter the **Sample Collector Name**.
8. Provide the **Storage Conditions for Samples**, e.g. Refrigerated 2-8C, Ambient, Frozen.
9. Add any **Observations during Sampling**, e.g. inconsistencies or equipment issues.
10. Select the **QA Approval Status** from the list of options provided.
11. If required, enter the **Next Scheduled Review Date**.
12. Finally, enter the **Report Generated On** date and time.

## Field-by-Field Explanation
- **Batch Identifier** (`batch_id`, text, **required**): Enter a unique identifier for the batch being sampled.
- **Product Type** (`product_type`, select_one, **required**): Choose the type of product being sampled, e.g. Liquid, Solid/Powder, Tablet/Capsule, Packaged Good.
- **Sampling Frequency** (`sampling_frequency`, select_one, **required**): Choose how often samples are taken, e.g. Every Batch, Every 10th Batch, Every Hour, Start/Middle/End of Production, Random Interval.
- **Sampling Method Used** (`sampling_method`, select_one, **required**): Choose the method used for sampling, e.g. Systematic Random Sampling, Stratified Sampling, Composite Sampling, Grab Sampling.
- **Total Number of Samples Collected per Batch** (`total_samples_collected`, number, **required**): Enter the total number of samples collected for the batch.
- **Date of Collection** (`collection_date`, date, **required**): Enter the date on which the samples were collected.
- **Sample Collector Name** (`collector_name`, text, **required**): Enter the name of the person who collected the samples.
- **Storage Conditions for Samples** (`storage_conditions`, text, **required**): Enter the storage conditions for the samples, e.g. Refrigerated 2-8C, Ambient, Frozen.
- **Observations during Sampling** (`observation_notes`, text, **optional**): Enter any observations or notes during the sampling process, e.g. inconsistencies or equipment issues.
- **QA Approval Status** (`qa_approval_status`, select_one, **required**): Select the QA approval status for the sampling plan, e.g. Approved, Pending Review, Requires Modification.
- **Next Scheduled Review Date** (`next_scheduled_review`, date, **optional**): If required, enter the next scheduled review date.
- **Report Generated On** (`report_timestamp`, date, **required**): Enter the date and time on which the report was generated.
