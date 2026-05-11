/**
 * Header Component
 * -----------------
 * Renders the top banner of the blog site.
 * Connected to: App (parent)
 *
 * Props:
 *  - name (string): The title/name of the blog, passed down from App
 */
function Header({ name }) {
  return (
    <header className="site-header">
      <h1>{name}</h1>
    </header>
  );
}

export default Header;