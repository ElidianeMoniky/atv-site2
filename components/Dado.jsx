export default function Dado({ valor }) {
  if (!valor) return <div className="w-14 h-14" />;

  return (
    <img
      src={`/dados/dado${valor}.png`}
      alt="dado"
      className="w-14 h-14"
    />
  );
}