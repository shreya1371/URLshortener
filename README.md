# URL Shortener

## Overview
The URL Shortener is a web application designed to simplify long URLs into short, shareable links. It streamlines the process of sharing URLs on various platforms like social media, emails, and messaging apps, where character limits may pose challenges.

## Features
- Converts lengthy URLs into concise links
- Facilitates seamless sharing on social media and other platforms
- Redirection to the original URL upon clicking the shortened link
- Offers analytics for tracking link performance

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shreya1371/URLshortener.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Run the application:
   ```bash
   npm start
   ```
2. Access the application in your web browser at `http://localhost:8001`
3. Enter a long URL into the input field and click "Generate" to obtain a shortened URL
4. Copy the shortened URL and share it across platforms as needed

## Configuration
- Customize application settings in the `config.js` file
- Adjust database configurations in `database.js`

## Dependencies
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Shortid](https://www.npmjs.com/package/shortid)
- [Cookie-parser](https://www.npmjs.com/package/cookie-parser) 
- [EJS](https://ejs.co/)
- [JWT](https://jwt.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request for review.
