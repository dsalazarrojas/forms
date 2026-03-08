<thinking>
To ensure the form's purpose and relevance to the user's needs, we'll review the provided YAML fields. This form appears to be designed to screen patients for eating disorders, likely to identify potential cases and provide guidance or referrals for further evaluation and treatment. This form seems to be focused on gathering information about the patient's eating behaviors, food preferences, and emotional states. To confirm, let's review the form's fields:

*   **patient_info** (text): This field likely collects the patient's personal details, such as name, contact information, or demographics.
*   **daily_food_frequency** (select_one): This field asks about the frequency of eating, with options ranging from "Rarely" to "Every day."
*   **other_food_frequency** (text): This field might be used for patients who don't fit the provided frequency options or need to specify an alternative frequency.
*   **eating_behaviors** (select_multiple): This field inquires about various eating habits, such as bingeing, gorging, or eating in response to emotional states.
*   **food_preferences** (select_one): This field asks about the patient's preferred food categories, like fruits, vegetables, grains, or fats/oils.
*   **food_aversion** (select_one): Similar to food_preferences, this field asks about the food categories the patient might be avoiding.
*   **eating_habits** (select_multiple): This field inquires about the patient's eating habits, such as eating in response to boredom or stress.
*   **food_control** (select_one): This field asks about the level of control the patient feels when eating.
*   **eating_frequency** (number): This field might be used to collect more specific information about eating frequency.
*   **eating_duration** (number): Another field for gathering more specific information about eating duration.
*   **food_avoidance** (select_one): This field asks about the level of avoidance the patient experiences when eating certain foods.
*   **other_food_avoidance** (text): A field for patients who don't fit the provided avoidance options or need to specify an alternative reason.
*   **eating_avoidance_reasons** (select_multiple): This field inquires about the reasons behind the patient's food avoidance, such as fear of choking or vomiting.
*   **body_image_distortion** (select_multiple): This field asks about the patient's body image concerns, such as body fat, shape, or weight.
*   **emotional_states** (select_multiple): This field inquires about the patient's emotional states, such as fear of failure or shame.
*   **food_refusal** (select_one): This field asks about the patient's level of food refusal.
*   **other_food_refusal** (text): A field for patients who don't fit the provided refusal options or need to specify an alternative reason.
*   **eating_refusal_reasons** (select_multiple): This field inquires about the reasons behind the patient's food refusal, such as fear of choking or vomiting.
*   **weight_concerns** (select_multiple): This field asks about the patient's weight concerns, such as weight gain or loss.
*   **other_weight_concerns** (text): A field for patients who don't fit the provided concerns options or need to specify an alternative concern.
*   **weight_preoccupation** (select_multiple): This field inquires about the patient's weight preoccupation, such as weight gain or loss.
*   **other_weight_preoccupation** (text): A field for patients who don't fit the provided preoccupation options or need to specify an alternative preoccupation.
*   **eating_frequency_1** and **eating_duration_1** (number): These fields might be used for more specific information about eating frequency and duration.

This form appears to be comprehensive in its coverage of eating disorder-related topics. Given the fields and their labels, the purpose of this form is likely to assess the patient's eating habits, preferences, and concerns to identify potential eating disorders.

Now, let's create the user-facing help guide for the form.

# Eating Disorder Screener Form - Help Guide

## Purpose

This form is designed to screen patients for eating disorders. It helps identify potential cases and provides guidance or referrals for further evaluation and treatment.

## How To Complete This Form

1.  Provide your personal details in the **patient_info** field.
2.  Answer the questions about your eating behaviors, food preferences, and emotional states on the following pages:
    *   **Food Frequency**: Choose how often you eat in a day.
    *   **Eating Behaviors**: Select all the behaviors that apply to you.
    *   **Food Preferences**: Choose your preferred food categories.
    *   **Food Aversion**: Select the food categories you avoid.
    *   **Eating Habits**: Choose the habits that apply to you.
    *   **Food Control**: Select the level of control you feel when eating.
    *   **Eating Frequency and Duration**: Enter specific information about your eating frequency and duration if applicable.
    *   **Food Avoidance**: Select the level of avoidance you experience when eating certain foods.
    *   **Other Food Avoidance**: Specify any other reasons for food avoidance if not listed.
    *   **Eating Avoidance Reasons**: Choose the reasons behind your food avoidance.
    *   **Body Image Distortion**: Select all the body image concerns that apply to you.
    *   **Emotional States**: Choose the emotional states that apply to you.
    *   **Food Refusal**: Select the level of food refusal you experience.
    *   **Other Food Refusal**: Specify any other reasons for food refusal if not listed.
    *   **Eating Refusal Reasons**: Choose the reasons behind your food refusal.
    *   **Weight Concerns**: Select all the weight concerns that apply to you.
    *   **Other Weight Concerns**: Specify any other weight concerns if not listed.
    *   **Weight Preoccupation**: Select all the weight preoccupations that apply to you.
    *   **Other Weight Preoccupation**: Specify any other weight preoccupations if not listed.

## Field-by-Field Explanation

*   **patient_info** (`patient_info`, text, optional): Provide your personal details, such as name, contact information, or demographics.
*   **daily_food_frequency** (daily\_food\_frequency, select\_one, optional): How often do you eat in a day? Choose from **Rarely, Less than once a day, **5-6 times a week, **Every day, **Every other day, **2-3 times a day, **More than once a week, **Every 2 days, **Every 3 days**.
*   **food_frequency_other** (other\_food\_frequency, text, optional): If you don't fit the provided frequency options or need to specify an alternative frequency, enter it here.
*   **eating_behaviors** (eating\_behaviors, select\_multiple, optional): Select all the eating behaviors that apply to you: **Bingeing, Gorging, Eating in response to emotional states, Restrictive eating, Eating in secret, Purging, Eating very fast, Eating very little**.
*   **food_preferences** (food\_preferences, select\_one, optional): What are your preferred food categories? Choose from **Fruits, Vegetables, Grains, Meat, Dairy, Fats/Oils**.
*   **food_aversion** (food\_aversion, select\_one, optional): What food categories do you avoid? Choose from **Fruits, Vegetables, Grains, Meat, Dairy, Fats/Oils**.
*   **eating_habits** (eating\_habits, select\_multiple, optional): Select all the eating habits that apply to you: **Eating in response to boredom, Eating in response to stress, Eating to soothe emotions, Eating when not hungry, Eating when hungry, Eating in secret, Eating very fast, Eating very little**.
*   **food_control** (food\_control, select\_one, optional): Select the level of control you feel when eating: **None, Somewhat, Some control, A little control, Quite a bit of control, A lot of control, Almost complete control**.
*   **eating_frequency** (eating\_frequency, number, optional): Enter more specific information about your eating frequency, if applicable.
*   **eating_duration** (eating\_duration, number, optional): Enter more specific information about your eating duration, if applicable.
*   **food_avoidance** (food\_avoidance, select\_one, optional): Select the level of avoidance you experience when eating certain foods: **None, Some, A lot, Almost none**.
*   **other_food_avoidance** (other\_food\_avoidance, text, optional): Specify any other reasons for food avoidance if not listed.
*   **eating_avoidance_reasons** (eating\_avoidance\_reasons, select\_multiple, optional): Choose the reasons behind your food avoidance: **Weight, Body image, Fear of choking, Other**.
*   **body_image_distortion** (body\_image\_distortion, select\_multiple, optional): Select all the body image concerns that apply to you: **Body fat, Body shape, Weight, Muscle mass, Body appearance**.
*   **emotional_states** (emotional\_states, select\_multiple, optional): Choose the emotional states that apply to you: **Fear of failure, Shame, Anger, Fear of weight gain, Anxiety, Sadness, Fear of loss, Fear of rejection, Fear of success**.
*   **food_refusal** (food\_refusal, select\_one, optional): Select the level of food refusal you experience: **None, Some, A lot, Almost none**.
*   **other_food_refusal** (other\_food\_refusal, text, optional): Specify any other reasons for food refusal if not listed.
*   **eating_refusal_reasons** (eating\_refusal\_reasons, select\_multiple, optional): Choose the reasons behind your food refusal: **Fear of choking, Fear of vomiting, Fear of losing control, Other**.
*   **weight_concerns** (weight\_concerns, select\_multiple, optional): Select all the weight concerns that apply to you: **Weight gain, Weight loss, Body fat, Weight distribution**.
*   **other_weight_concerns** (other\_weight\_concerns, text, optional): Specify any other weight concerns if not listed.
*   **weight_preoccupation** (weight\_preoccupation, select\_multiple, optional): Select all the weight preoccupations that apply to you: **Weight gain, Weight loss, Body fat, Weight distribution**.
*   **other_weight_preoccupation** (other\_weight\_preoccupation, text, optional): Specify any other weight preoccupations if not listed.
*   **eating_frequency_1** (eating\_frequency\_1, number, optional): Enter more specific information about your eating frequency, if applicable.
*   **eating_duration_1** (eating\_duration_1, number, optional): Enter more specific information about your eating duration, if applicable.

## Tips

*   Make sure to answer all the questions honestly and accurately.
*   If you need more information about a specific field, you can add notes in the corresponding text fields (e.g., **other\_food\_frequency**, **other\_food\_refusal**).
*   If you are unsure or uncomfortable answering a question, you can leave it blank or mark it as "I don't know."
