# Unsplashed Ricky for Developers

This is Unsplashed Ricky for Developers, a web app that provides API examples for integrating Unsplash and Rick and Morty APIs into your projects.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [APIs](#apis)
- [Contributing](#contributing)
- [License](#license)

## Demo
Check out the live demo of the application [here](https://savannah-px5arob5x-clare-codes-projects.vercel.app/).

## Features
- Fetch and display random photos from the Unsplash API.
- Fetch and display characters from the Rick and Morty API.
- Simple and clean UI using Tailwind CSS.
- Navigation to API documentation and examples.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/unsplashed-ricky.git
   cd unsplashed-ricky
   ```
2. **Install dependencies:**

```bash
npm install
```
3. **Create a .env.local file for environment variables:**
```env
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```
4. **Run the development server:**

```bash
npm run dev
```
5. Open http://localhost:3000 to view it in the browser.

## Usage

### Pages
- Home Page: Overview of the application and links to API documentation.
- Unsplash API Page: Displays random photos fetched from the Unsplash API.
- Rick and Morty API Page: Displays characters fetched from the Rick and Morty API.

### Components
- Header: Navigation bar with links to different pages.
- Hero: Introduction to the application.
- APIIntro: Section introducing the APIs with navigation.
- Unsplash: Section featuring Unsplash photos.
- Rick: Section introducing Rick and Morty characters.
- Footer: Footer with social media links.

### Navigation
The application uses Next.js routing to navigate between different pages. Example use in a component:

```jsx
import { useRouter } from 'next/navigation';

const navigateToUnsplash = () => {
  const router = useRouter();
  router.push('/unsplash-api');
};
```

## APIs
### Unsplash API
To fetch photos from the Unsplash API, you'll need an access key. Sign up on the [Unsplash Developer Portal](https://unsplash.com/developers) to get your access key.

### Rick and Morty API
The Rick and Morty API is a free and open API providing information about characters, episodes, and locations from the Rick and Morty show. Documentation is available [here](https://rickandmortyapi.com/documentation/).

### Deployment
Deploy the application to Vercel with a few simple steps:

- Push your repository to GitHub or another version control service.
- Sign up and log in to Vercel.
- Import your project from your version control service.
- Deploy the project.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
