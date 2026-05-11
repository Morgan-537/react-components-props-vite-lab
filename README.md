# The Curious Mind — React Blog Site

A static personal blog built with React, demonstrating component composition and props.

## Component Tree

```
└── App
    ├── Header          → receives: name
    ├── About           → receives: image, about
    └── ArticleList     → receives: posts[]
        └── Article     → receives: title, date, preview
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd blog-site

# Install dependencies
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Running Tests

```bash
npm test
```

## Project Structure

```
src/
├── blog.js                    # Blog data (name, image, about, posts)
├── App.jsx                    # Root component — imports data, passes props
├── App.css                    # Global styles
├── App.test.jsx               # Jest tests
└── components/
    ├── Header.jsx             # Blog title banner
    ├── About.jsx              # Sidebar with logo + bio
    ├── ArticleList.jsx        # Maps posts → Article components
    └── Article.jsx            # Single post preview card
```

## Data Flow

All blog content lives in `blog.js`. `App.jsx` imports it and passes each piece down as props:

| Prop | Passed to | Source |
|------|-----------|--------|
| `name` | Header | `blog.name` |
| `image` | About | `blog.image` |
| `about` | About | `blog.about` |
| `posts` | ArticleList | `blog.posts` |
| `title`, `date`, `preview` | Article | Each post object |

## Screenshot

![Blog Site Screenshot](./screenshot.png)