/**
 * App.test.jsx
 * Unit tests verifying that components render correctly with props.
 */
import { render, screen } from "@testing-library/react";
import App from "../App";
import Header from "../components/Header";
import About from "../components/About";
import Article from "../components/Article";
import ArticleList from "../components/ArticleList";
 
// ── Header ──────────────────────────────────────────────
describe("Header", () => {
  test("renders the blog name passed as a prop", () => {
    render(<Header name="My Test Blog" />);
    expect(screen.getByText("My Test Blog")).toBeInTheDocument();
  });
 
  test("renders an h1 element", () => {
    render(<Header name="Hello Blog" />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
 
// ── About ────────────────────────────────────────────────
describe("About", () => {
  test("renders the about text passed as a prop", () => {
    render(<About image="test.png" about="A blog about coding" />);
    expect(screen.getByText("A blog about coding")).toBeInTheDocument();
  });
 
  test("renders an image with alt text 'blog logo'", () => {
    render(<About image="test.png" about="Some text" />);
    expect(screen.getByAltText("blog logo")).toBeInTheDocument();
  });
 
  test("image src is set from the image prop", () => {
    render(<About image="https://example.com/logo.png" about="Test" />);
    expect(screen.getByAltText("blog logo")).toHaveAttribute(
      "src",
      "https://example.com/logo.png"
    );
  });
});
 
// ── Article ──────────────────────────────────────────────
describe("Article", () => {
  const testPost = {
    title: "My First Post",
    date: "January 1, 2025",
    preview: "This is a preview of the article.",
  };
 
  test("renders the title", () => {
    render(<Article {...testPost} />);
    expect(screen.getByText("My First Post")).toBeInTheDocument();
  });
 
  test("renders the date", () => {
    render(<Article {...testPost} />);
    expect(screen.getByText("January 1, 2025")).toBeInTheDocument();
  });
 
  test("renders the preview", () => {
    render(<Article {...testPost} />);
    expect(
      screen.getByText("This is a preview of the article.")
    ).toBeInTheDocument();
  });
});
 
// ── ArticleList ──────────────────────────────────────────
describe("ArticleList", () => {
  const posts = [
    { id: 1, title: "Post One", date: "Jan 1", preview: "Preview one" },
    { id: 2, title: "Post Two", date: "Jan 2", preview: "Preview two" },
  ];
 
  test("renders the correct number of articles", () => {
    render(<ArticleList posts={posts} />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(2);
  });
 
  test("renders all post titles", () => {
    render(<ArticleList posts={posts} />);
    expect(screen.getByText("Post One")).toBeInTheDocument();
    expect(screen.getByText("Post Two")).toBeInTheDocument();
  });
});
 
// ── App (integration) ────────────────────────────────────
describe("App", () => {
  test("renders without crashing", () => {
    render(<App />);
  });
 
  test("renders blog name in the header", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();
  });
 
  test("renders the blog logo image", () => {
    render(<App />);
    expect(screen.getByAltText("blog logo")).toBeInTheDocument();
  });
});
 