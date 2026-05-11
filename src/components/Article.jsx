/**
 * Article Component
 * ------------------
 * Renders a single blog post preview card.
 * Connected to: ArticleList (parent)
 *
 * Props:
 *  - title (string): The title of the blog post
 *  - date (string): The publication date of the post
 *  - preview (string): A short excerpt/preview of the post content
 */
function Article({ title, date, preview }) {
  return (
    <article className="article-card">
      {/* Article title */}
      <h3>{title}</h3>
      {/* Publication date displayed in small text */}
      <small>{date}</small>
      {/* Short preview/excerpt of the article */}
      <p>{preview}</p>
    </article>
  );
}

export default Article;