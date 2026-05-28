export default function Card({ id, title, completed, onClick }) {
  return (
    <div
      className={`cursor-pointer p-4 rounded shadow transition ${
        completed ? "bg-linear-to-l from-green-400 to-green-600 text-white" : "bg-white text-black"
      } rounded-3xl `}
      onClick={onClick}
    >
      <h2>{id}</h2>
      <p>{title}</p>
    </div>
  );
}
