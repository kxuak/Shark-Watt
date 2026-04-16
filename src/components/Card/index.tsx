import './index.css'

type CardProps = {
  text: string;
};

const Card: React.FC<CardProps> = ({text = "button"}) => {
  return (
  <div className="card">
    <div className="card-content">
      <div className="tittle-card">{text}</div>
    </div>
  </div>
  )
}

export default Card