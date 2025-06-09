# GitHub Profile Analyzer

A React web application that allows you to search for any GitHub user and view detailed information about their profile, repositories, and language usage. The app provides a clean, responsive UI and visualizes repository language statistics with interactive charts.

---

## Features

- **User Search:** Search for any GitHub user by username.
- **Profile Overview:** View avatar, name, username, email, join date, followers, following, and public repo count.
- **Repository List:** See a list of the user's public repositories with stars, forks, main language, and timestamps.
- **Language Chart:** Visual breakdown of languages used in each repository.
- **Responsive Design:** Works well on desktop and mobile devices.
- **Error Handling:** User-friendly messages for not found users or API errors.
- **Loading Indicators:** Visual feedback while data is being fetched.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ke-kaa/GithubProfileAnalyzer.git
   cd github-profile-analyzer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up your GitHub API token:**
   - Create a `.env` file in the root directory.
   - Add your GitHub token (create one at https://github.com/settings/tokens):
     ```
     VITE_GITHUB_TOKEN=your_github_token_here
     ```

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```
   (or the port shown in your terminal)

---

## Project Structure

```
src/
  components/
    LanguageChart/
    Loading/
    RepoList/
    SearchBar/
    UserCard/
    WebInfo/
  pages/
    HomePage.jsx
  services/
    githubService.js
  App.jsx
  index.css
```

---

## Technologies Used

- **React** (Vite)
- **Axios** (for API requests)
- **Recharts** (for charts)
- **CSS** (custom styling)

---

## Environment Variables

- `VITE_GITHUB_TOKEN` — Your GitHub personal access token for authenticated API requests.

---

## Acknowledgements

- [GitHub REST API](https://docs.github.com/en/rest)
- [Recharts](https://recharts.org/)
- [Poppins Font](https://fonts.google.com/specimen/Poppins)

---