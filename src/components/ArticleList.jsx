/**
 * ArticleList Component
 * ----------------------
 * Renders the main content area containing all blog post previews.
 * Connected to: App (parent), Article (child)
 *
 * Props:
 *  - posts (array): Array of post objects, each containing id, title, date, and preview
 */
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main className="article-list">
      {/* Map over posts array and render an Article for each post.
          Each Article receives a unique key and the relevant props. */}
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;