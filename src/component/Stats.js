export default function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>start chose some items</em>
      </p>
    );
  const numItem = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything! ready to go"
          : `you have ${numItem} item on your list, abd you already packed ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
