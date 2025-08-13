function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus feature: emoji indicator
  let emoji = "";
  if (minutes) {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      emoji = "☕️".repeat(cups);
    } else {
      const boxes = Math.ceil(minutes / 10);
      emoji = "🍱".repeat(boxes);
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutes && <small> - {emoji} {minutes} min read</small>}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
