# Artist Auction Participation - Help Guide
## Purpose
The purpose of this form is to provide artists with a clear and structured way to participate in an auction. By following this guide, you will be able to submit your artwork and information accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your artist information in the Artist Information section, including your name, email, and phone number.
2.  In the Art Medium and Experience section, select your primary art medium and choose your level of experience as an artist.
3.  Move on to the Artwork for Auction section, where you will enter details about the artwork being auctioned, including its title, description, dimensions, and medium used.
4.  Proceed to the Auction Details section, where you will specify the estimated value or reserve price of your artwork and the percentage of the sale that will be donated.
5.  In the Additional Information section, provide a brief artist biography and any additional information about the artwork.

## Field-by-Field Explanation

### Artist Information

*   **Artist Name** (`artist_name`, `text`, `true`): Enter your full legal name or stage name.
*   **Email Address** (`artist_email`, `email`, `true`): Enter your primary contact email.
*   **Phone Number** (`artist_phone`, `text`, `true`): Enter your contact number.
*   **Website or Portfolio URL** (`artist_website`, `text`, `false`): Enter a link to your website or portfolio.

### Art Medium and Experience

*   **Primary Art Medium** (`primary_medium`, `select_one`, `true`): Select the type of art you create, such as Painting, Sculpture, Photography, Digital Art, Printmaking, Drawing, Mixed Media, Installation, Performance Art, or Other.
*   **Years Active as an Artist** (`years_active`, `select_one`, `false`): Choose how long you have been creating art: Less than 1 year, 1-3 years, 3-5 years, 5-10 years, or 10+ years.
*   **Exhibition Experience** (`artist_experience`, `select_one`, `false`): Choose your level of exhibition experience: Extensively exhibited, Several exhibitions, Few exhibitions, First time.

### Artwork for Auction

*   **Title of Artwork for Auction** (`artwork_title`, `text`, `true`): Enter the name of the artwork being auctioned.
*   **Artwork Description** (`artwork_description`, `text`, `true`): Describe your artwork in detail.
*   **Artwork Dimensions** (`artwork_dimensions`, `text`, `false`): Enter the height, width, and depth of the artwork as applicable.
*   **Specific Materials or Technique** (`artwork_medium_detail`, `text`, `false`): Specify the materials used in creating this piece.

### Auction Details

*   **Estimated Value or Reserve Price (GBP)** (`estimated_value`, `number`, `true`): Enter your suggested starting bid or reserve price.
*   **Percentage of Sale to Donate** (`donation_percentage`, `number`, `true`): Enter the percentage of the sale that should go to the cause.
*   **Are You Donating the Full Proceeds?** (`artist_commitment`, `select_one`, `true`): Confirm whether you are donating the full proceeds, a percentage as noted above, a flat donation amount, or are still deciding.

### Additional Information

*   **Brief Artist Biography** (`artist_bio`, `text`, `true`): Provide a 50-100 word description of your work.
*   **Artwork Provenance or History** (`artwork_provenance`, `text`, `false`): Enter the background of this specific piece.
*   **Condition of Artwork** (`condition_notes`, `select_one`, `true`): Choose the condition of your artwork: Excellent condition, Good condition, Fair condition, Has minor damage, Has significant damage.
*   **I Agree to Participate in This Auction** (`artist_agreement`, `select_one`, `true`): Confirm your participation.
*   **Permission to Use My Name and Artwork in Publicity** (`publicity_consent`, `select_one`, `true`): Choose the level of publicity: Yes, full permission, Yes, with approval of images, Limited permission, No publicity.
*   **Additional Comments or Questions** (`additional_comments`, `text`, `false`): Enter any other information or questions.

## Tips
- Double-check your information before submission to ensure accuracy and completeness.
- If you are unsure about any field, please contact the auction organizers for guidance.
- This form is designed to be completed in conjunction with other information provided by the auction organizers.
