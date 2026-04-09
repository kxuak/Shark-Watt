import './index.css'

const YouDo = () => {
  return (
    <div className='apresentation'>

      <h1 className='titleYouDo'>Do it yourself</h1>

      <div className='midia'>
          <p className='textVideo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem cum dolorum ullam? Qui temporibus fuga maiores? Rem velit dolor praesentium, quaerat itaque aspernatur reprehenderit maxime maiores cum a magni. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente et earum facere neque possimus minima adipisci sunt eligendi animi.</p>
          <iframe
          className='video'
          width="100%"
          height="auto"
          src="https://www.youtube.com/embed/ykAoLY9RMCo"
          title="YouTube video"
          allowFullScreen
          ></iframe>
      </div>

      <div className='cartilha'>cartilha</div>
    </div>
  )
}

export default YouDo