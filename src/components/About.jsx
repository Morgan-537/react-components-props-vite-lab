/**
 * About Component
 * ----------------
 * Renders the sidebar/about section of the blog.
 * Connected to: App (parent)
 *
 * Props:
 *  - image (string): URL of the blog logo image
 *  - about (string): Short description/bio text for the blog
 */
function About({ image, about }) {
  return (
    <aside className="about-section">
      {/* Accessible blog logo image */}
      <img src={image} alt="blog logo" className="blog-logo" />
      {/* Blog description passed in as prop */}
      <p>{about}</p>
    </aside>
  );
}

export default About;