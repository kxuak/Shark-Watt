import "./index.css"

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({text = "button"}) => {
  return (
    <button className="botao">{text}</button>
  )
}

export default Button