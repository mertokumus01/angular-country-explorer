# Angular Country Explorer 🌍

A modern Angular application for exploring countries worldwide. Fetch real-time country data including capital cities and currency information using the [REST Countries API](https://restcountries.com/).

## Features

✨ Browse all countries in the world  
🔍 Search countries by name  
💱 View country capitals and currencies  
⚡ Built with modern Angular 21  
📱 Responsive design with Bootstrap 5  

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/angular-country-explorer.git
   cd angular-country-explorer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   Open your browser and navigate to `http://localhost:4200/`

## Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the project for production
- `npm test` - Run unit tests

## Technology Stack

- **Angular 21** - Frontend framework
- **RxJS 7.8** - Reactive programming
- **Bootstrap 5** - UI framework
- **REST Countries API** - Country data source
- **TypeScript 5.9** - Language

## API Reference

The application uses the [REST Countries API](https://restcountries.com/v3.1/all) to fetch:
- Country names
- Capital cities
- Currency information

## Project Structure

```
src/
├── app/
│   ├── country.service.ts       # Service for API calls
│   ├── models/
│   │   └── country.model.ts     # Country data model
│   └── countries/               # Countries component
├── index.html
├── main.ts
└── styles.css
```

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is open-source and available under the MIT License.

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
