/**
 * App Component
 * --------------
 * Root component of the blog site.
 * Imports blog data from blog.js and passes it down to child components as props.
 *
 * Component Tree:
 * └── App
 *     ├── Header        (receives: name)
 *     ├── About         (receives: image, about)
 *     └── ArticleList   (receives: posts)
 *         └── Article   (receives: title, date, preview — mapped inside ArticleList)
 */
import blog from "./blog";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Pass the blog name to the Header */}
      <Header name={blog.name} />

      <div className="content-wrapper">
        {/* Pass image URL and about text to About sidebar */}
        <About image={blog.image} about={blog.about} />

        {/* Pass the array of posts to ArticleList */}
        <ArticleList posts={blog.posts} />
      </div>
    </div>
  );
}

export default App;