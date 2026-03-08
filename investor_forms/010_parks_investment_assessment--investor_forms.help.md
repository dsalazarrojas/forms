<thinking>
This form is designed to collect data for parks investment assessments. The purpose of this form is to evaluate the investment potential of a park based on various factors such as the park's condition, location, and priority level. The form should only be completed by authorized users, and the data collected will be used to guide investment decisions.
</thinking>

# Parks Investment Assessment - Help Guide

## Purpose
This form is used to assess the investment potential of a park based on its condition, location, and other factors.

## How To Complete This Form

1.  To begin, ensure you have access to this form and have read the purpose and instructions above.
2.  Start by entering the ID of the park you wish to evaluate in the `park` field.
3.  Provide a brief description of the park's location, if applicable, in the `location` field.
4.  Assess the park's current condition by selecting one of the four options (`very good`, `good`, `fair`, or `poor`) in the `condition` field.
5.  Enter a numerical score for the park's condition, with higher scores indicating better condition.
6.  Select all applicable improvements that need to be made in the `improvement_1` and `improvement_2` fields.
7.  Determine the priority level of the park investment by selecting one of the three options (`high`, `medium`, or `low`) in the `priority_level` field.
8.  Finally, provide any additional funding suggestions for the park in the `funding_suggestion` field.

## Field-by-Field Explanation

*   **park**: (`park_id`, Number, Required)
    *   Enter the ID of the park you wish to evaluate.
*   **location**: (`location`, Text, Optional)
    *   Enter a brief description of the park's location.
*   **condition**: (`condition`, Select One, Required)
    *   Assess the park's condition by selecting one of the four options (`very good`, `good`, `fair`, or `poor`).
*   **score**: (`score`, Number, Required)
    *   Enter a numerical score for the park's condition, with higher scores indicating better condition.
*   **improvement 1**: (`improvement_1`, Select Multiple, Required)
    *   Select all applicable improvements that need to be made in the park.
*   **improvement 2**: (`improvement_2`, Select Multiple, Required)
    *   Select all applicable improvements that need to be made in the park.
*   **priority level**: (`priority_level`, Select One, Required)
    *   Determine the priority level of the park investment by selecting one of the three options (`high`, `medium`, or `low`).
*   **funding suggestion**: (`funding_suggestion`, Text, Optional)
    *   Provide any additional funding suggestions for the park.
