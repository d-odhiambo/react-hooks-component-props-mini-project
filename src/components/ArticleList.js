import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id} // make sure your data has unique ids
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes} // optional for bonus
        />
      ))}
    </main>
  );
}

export default ArticleList;
