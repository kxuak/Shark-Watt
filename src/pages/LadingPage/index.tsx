import Button from '../../components/Button'
import Card from '../../components/Card'
import './lading.css'

const LadingPage = () => {
  return (
    <div className="container">
    <div className="ladingPage">
      <div className="upper">
      <Button
        text="My Device"
      />
      </div>
      <div className="main">
      <div className="mainFirst">
          <h1 className="titleLading">Fierce Style <br />Real Power</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempora officia, earum quibusdam ullam quasi illum nulla laboriosam dolores facere, maiores necessitatibus accusamus, reprehenderit ea voluptate doloribus consequuntur? Vel, quia?</p>
      </div>

      <div className="mainSecond">
        tubarao
      </div>
      </div>
      <h1 className='features'>Features</h1>
      <div className="cards"><Card
      text="A prova d'água"/></div>
      <div className="cards"><Card
      text='design inteligente'/></div>
      <div className="cards"><Card
      text='prevençaõ contra curto-circuito dobrado'/></div>
      <div className="cards"><Card
      text='proteção contra entrada de agua'/></div>
    </div>
    </div>
  )
}

export default LadingPage