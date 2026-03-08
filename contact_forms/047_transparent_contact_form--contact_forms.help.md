# Transparent Contact Form - Help Guide
## Purpose
The Transparent Contact Form is designed to collect contact information and event details for users to provide a transparent and user-friendly interface.

## How To Complete This Form
1. First, enter your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Enter your email address in the "Email" field.
4. If you have a phone number, enter it in the "Phone" field (optional).
5. Enter your message in the "Message" field.
6. Select your preferred music type from the "Music Type" dropdown menu.
7. Select your preferred contact method (phone, email, or message) from the "Preferred Contact" dropdown menu.
8. Enter the date of the event in the "Event Date" field.
9. Enter the start and end times of the event in the "Event Start Time" and "Event End Time" fields.
10. Select the background color of the event from the "Background Color" dropdown menu.
11. Select the color scheme of the event from the "Color Scheme" dropdown menu.
12. Select the font style of the event from the "Font Style" dropdown menu.
13. Select the font size of the event from the "Font Size" dropdown menu.
14. Enter the text for the submit button in the "Submit Button Text" field.
15. Select the color of the submit button from the "Submit Button Color" dropdown menu.
16. Select the background color of the submit button from the "Submit Button Background" dropdown menu.
17. Select the animation type of the event from the "Animation" dropdown menu.
18. Enter the speed of the animation in the "Animation Speed" field (a numeric value).
19. Select how often the animation should repeat from the "Animation Repeat" dropdown menu.
20. Select whether to display a background image or not from the "Background Image" dropdown menu.
21. Select whether to repeat the background image or not from the "Background Repeat" dropdown menu.
22. Select the transparency of the background image from the "Background Transparency" dropdown menu.
23. Select how to repeat the background image from the "Background Repeat Style" dropdown menu.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number (optional).
* **Message** (`message`, text, required): Enter a message to us.
* **Music Type** (`music_type`, select_one, required): Select the type of music you like (Classical, Jazz, Pop, or Rock).
* **Preferred Contact** (`preferred_contact`, select_multiple, optional): Select how you want to be contacted (phone, email, or message).
* **Date & Time** (`date_time`, date, required): Enter the date of the event.
* **Event Date** (`event_date`, date, required): Enter the date of the event.
* **Event Start Time** (`event_start_time`, time, required): Enter the start time of the event.
* **Event End Time** (`event_end_time`, time, required): Enter the end time of the event.
* **Background Color** (`background_color`, select_one, optional): Select the background color of the event (Transparent, Solid, Gradient, or Pattern).
* **Color Scheme** (`color_scheme`, select_one, optional): Select the color scheme of the event (Light, Dark, Custom).
* **Font Style** (`font_style`, select_one, optional): Select the font style of the event (Arial, Times New Roman, or Courier).
* **Font Size** (`font_size`, select_one, optional): Select the font size of the event (Small, Medium, or Large).
* **Submit Button Text** (`submit_button_text`, text, required): Enter the text for the submit button.
* **Submit Button Color** (`submit_button_color`, select_one, optional): Select the color of the submit button (Blue, Red, or Green).
* **Submit Button Background** (`submit_button_background`, select_one, optional): Select the background color of the submit button (Translucent, Solid, or Gradient).
* **Animation** (`animation`, select_one, optional): Select the animation type of the event (None, Fade In, Fade Out, or Rotate).
* **Animation Speed** (`animation_speed`, number, required): Enter the speed of the animation (a numeric value).
* **Animation Repeat** (`animation_repeat`, select_multiple, optional): Select how often the animation should repeat (Once, Repeatedly, or Until Submission).
* **Background Image** (`background_image`, select_one, optional): Select whether to display a background image or not (No Image, Image, or Video).
* **Background Repeat** (`background_repeat`, select_one, optional): Select whether to repeat the background image or not (No Repeat, Repeat).
* **Background Transparency** (`background_transparency`, select_one, optional): Select the transparency of the background image (0, 50, or 100).
* **Background Repeat Style** (`background_repeat_style`, select_one, optional): Select how to repeat the background image (No Repeat, Repeat X, or Repeat All).
