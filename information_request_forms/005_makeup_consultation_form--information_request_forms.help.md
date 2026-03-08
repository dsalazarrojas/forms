# Makeup Consultation Form - Help Guide
## Purpose

<thinking>Before starting, please ensure that you're in the correct context to fill out this form. This form is designed for customers to share their specific makeup preferences and needs with our team. We review and respond to this form to provide personalized recommendations for our customers. If you're a representative from our team, please ensure that this form is used for its intended purpose and not for testing or demo purposes.</thinking>

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the required fields marked with \*.
2. Choose your preferred options from the dropdown menus.
3. Enter any additional comments or requests in the text fields.
4. Select your preferred time for the consultation (if available).
5. Submit the form.

## Field-by-Field Explanation

*   **Store Name** (`store_name`, text, `required`: `true`): \* Enter the name of the store where you would like to book your consultation.
*   **Product Type** (`product_type`, select_one, `required`: `false`): Choose the type of product you are interested in getting recommendations for.
    + Foundation
    + Mascara
    + Blush
    + Lipstick
*   **Color Request** (`color_request`, text, `required`: `true`): Enter your desired color.
*   **Desired Color** (`desired_color`, select_multiple, `required`: `false`): Choose the colors you would like to try out.
    + Pink
    + Purple
    + Blue
    + Brown
*   **Skin Type** (`skin_type`, select_one, `required`: `false`): Choose your skin type.
    + Dry
    + Oily
    + Combination
    + Sensitive
*   **Face Shape** (`face_shape`, select_multiple, `required`: `false`): Choose your face shape.
    + Round
    + Square
    + Oval
    + Heart
*   **Eye Type** (`eye_type`, select_one, `required`: `false`): Choose your eye type.
    + Almond
    + Avocado
    + Diamond
    + Heart
    + Oval
    + Round
    + Rounded
*   **Eye Color** (`eye_color`, text, `required`: `true`): \* Enter your eye color.
*   **Eyebrow Type** (`eyebrow_type`, text, `required`: `true`): \* Enter your desired eyebrow type.
*   **Hair Type** (`hair_type`, select_one, `required`: `false`): Choose your hair type.
    + Curly
    + Straight
    + Wavy
*   **Hair Color** (`hair_color`, select_one, `required`: `false`): Choose your hair color.
    + Brown
    + Black
    + Blonde
    + Red
    + Pink
*   **Nail Type** (`nail_type`, select_one, `required`: `false`): Choose your nail type.
    + Natural
    + Acrylic
    + Tip
    + Tipless
*   **Nail Color** (`nail_color`, text, `required`: `true`): \* Enter your nail color.
*   **Desired Look** (`desired_look`, text, `required`: `true`): \* Enter your desired look.
*   **Preferred Time** (`preferred_time`, time, `required`: `false`): Choose your preferred time for the consultation.
*   **Available Time** (`available_time`, time, `required`: `true`): \* Enter your available time.
*   **Special Requests** (`special_requests`, text, `required`: `false`): Is there anything else you would like to share with us?
*   **Email** (`email`, email, `required`: `true`): \* Enter your email address.
*   **Phone** (`phone`, text, `required`: `true`): \* Enter your phone number.
*   **Note** (`note`, note, `required`: `true`): \* Enter any additional comments or notes.
