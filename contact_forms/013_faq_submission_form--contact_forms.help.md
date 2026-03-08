<thinking>
This form is used for submitting FAQs (Frequently Asked Questions). The main purpose of this form is to allow users to provide information about their questions and concerns related to a specific topic or area of interest. This form is typically used by users who need help or clarification on something and want to provide details about their inquiry.

To ensure that the form is completed correctly and accurately, we should verify that the user has provided all required fields and that the information entered is consistent with their actual concerns or questions. This will help us better understand their needs and provide more effective support.

Before starting, please ensure that you have a clear understanding of the questions or concerns you want to address. This form should not be used to submit repetitive or duplicate requests. If you have already submitted a similar query, please don't submit it again. We will do our best to address your concerns once.
</thinking>

# faq_submission_form - Help Guide

## Purpose
The FAQ submission form is a tool to help users provide information about their questions or concerns. This form is designed to gather relevant details that will help us better understand their needs and provide more effective support.

## How To Complete This Form
1. Fill in the **FAQ title** field with a brief title summarizing your question or concern.
2. In the **FAQ description** field, provide a detailed description of your question or concern.
3. Select the relevant **FAQ category** from the provided options to help us direct your query to the right team.
4. Add any relevant **FAQ tags** to help us quickly identify your question or concern.
5. Answer the **Submit** questions by selecting the correct options:
   *   **faq_submit**: Select 'Yes' if you are sure this is a new question or concern, 'No' if you are unsure or have already submitted a similar query.
   *   Other submit questions are optional and should only be answered if relevant to your concern.

## Field-by-Field Explanation
* **FAQ title** (`faq_title`, text, required): This field is for a brief title summarizing your question or concern.
* **FAQ description** (`faq_description`, text, required): Provide a detailed description of your question or concern.
* **FAQ category** (`faq_category`, text, required): Choose a relevant category for your question or concern.
* **FAQ tags** (`faq_tags`, text, optional): Add any relevant tags to help us quickly identify your question or concern.
* **Submit** (`faq_submit`, select_one, required): Select 'Yes' if this is a new question or concern, 'No' if you are unsure or have already submitted a similar query.
* Other **Submit** questions (`faq_submit_2`, `faq_submit_3`, etc.): These questions are optional and should only be answered if relevant to your concern.
 
## Tips
* Be as clear and concise as possible when providing your question or concern.
* Only submit new questions or concerns that you have not already submitted.
* If you are unsure about any of the submit questions, select 'No' and provide a brief explanation in the **FAQ description** field.
