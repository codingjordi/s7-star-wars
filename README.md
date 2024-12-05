# Star Wars Ships Explorer App
## 📝 Project Description
A React application that explores the Star Wars universe by fetching and displaying information about starships from the Star Wars API (SWAPI). The app allows users to view a comprehensive list of starships and access detailed information for each individual ship.

## ✨ Features
- Fetch starship data from SWAPI
- Display a comprehensive list of Star Wars starships
- Detailed view for individual starship information
- Responsive and interactive user interface
- Real-time data loading

## 🛠 Technologies and Dependencies
### Core Dependencies
- React v18.3.1
- React DOM v18.3.1
- React Router DOM v6.28.0
- Firebase v11.0.2

### Development Dependencies
- Vite v5.4.10
- Tailwind CSS v3.4.14
- ESLint v9.13.0
- PostCSS v8.4.47
- Autoprefixer v10.4.20

### Type Definitions
- @types/react v18.3.12
- @types/react-dom v18.3.1

### ESLint Plugins
- @eslint/js v9.13.0
- eslint-plugin-react v7.37.2
- eslint-plugin-react-hooks v5.0.0
- eslint-plugin-react-refresh v0.4.14

### Prerequisites
- Node.js v16 or later
- npm v8 or later

### Installation Steps
1. Clone the repository
   ```bash
   git clone https://github.com/codingjordi/s7-star-wars.git
   ```
2. Navigate to the project directory
   ```bash
   cd s7-star-wars
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```

## 📂 Project Structure
```
s7-star-wars/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── StarshipList.jsx
│   │   └── StarshipDetail.jsx
│   ├── services/
│   │   └── swapi.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## 🧪 Available Scripts
| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Starts the development server |
| `build` | `npm run build` | Builds the app for production |
| `lint` | `npm run lint` | Runs ESLint to check code quality |
| `preview` | `npm run preview` | Serves the production build locally |

## 🌐 API Integration
- Source: Star Wars API (SWAPI)
- Endpoint: https://swapi.dev/
- Data: Starship information

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/StarshipExplorer`)
3. Commit your changes (`git commit -m 'Add starship detail view'`)
4. Push to the branch (`git push origin feature/StarshipExplorer`)
5. Open a Pull Request

## 📄 License
ISC License

## 👥 Author
Jordi Saperasc Castro(codingjordi)
