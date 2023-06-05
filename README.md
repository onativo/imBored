# Random Quote Translator

This is a simple web application that fetches the [Bored API](https://www.boredapi.com/) to return a random activity a person can practice/do in a moment of boredom.

Also, it fetches a random quote from the [ZenQuotes API](https://docs.zenquotes.io/zenquotes-documentation/) to bring you few seconds of reflection.

As a feature, it translates both responses into Portuguese using the Google Translate API. The translated quote and activity are then displayed on the webpage.

## Prerequisites

- Node.js (v12 or higher)
- Google Translate API key

## Getting Started

1. Clone the repository:

```shell
git clone <repository-url>
```

2. Install the dependencies:

```shell
  cd random-quote-translator
  npm install
```

3.Set up your Google Translate API key:

Sign up for the Google Translate API and obtain an API key.

Replace the placeholder API key in the `translateActivity` function with your actual API key.

4. Start the server:

```shell
  node index.js
```

5. Open your web browser and navigate to http://localhost:3000 to see the application in action.

---

## License
This project is licensed under the MIT License.

Feel free to modify the README.md file as needed to include additional details or instructions specific to your project.

---

<div align="center">
  <img src="./src/img/homescreen.png">
  <sub>Application homepage</sub>
</div>