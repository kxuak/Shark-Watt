import "./index.css"

type Props = {
  title: string;
  description: string;
};

export default function Card({ title, description }: Props) {
  return (
    <div className="card">
      <div className="card-bar" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}