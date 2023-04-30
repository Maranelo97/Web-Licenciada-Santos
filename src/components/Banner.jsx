import img from '../assets/banner.jpg'

function Banner() {
  return (
    <div>
        <img src={img} alt='freud' style={{ width:"100%", height:"40vh", filter:"blur(5px)"}}></img>
        <h2 className='fs-1 text-center fw-bold position-absolute top-50 start-50'>Atención Psicológica</h2>
    </div>
  )
}

export default Banner
