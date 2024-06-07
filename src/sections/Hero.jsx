import { Button, Container } from ".."
import {arrow_left, arrow_right, hero_img} from '../assets'

const Hero = () => {
  return (
    <Container className="md:flex items-end max-lg:gap-8 max-md:px-0">
      <div className="md:w-1/3 max-md:hidden pb-52">
        <h1 className="title">PROJECT</h1>
        <h1 className="sub_title font-bold text-black">Lorum</h1>
        <div className="my-24 flex items-center">
          <div className="flex gap-2 *:p-2 *:border-grey-300 *:border *:shadow-sm">
            <img className="bg-white" src={arrow_left} alt='arrow_left' />
            <img className="bg-grey-300" src={arrow_right} alt='arrow_right' />            
          </div>
          <hr className="border w-full max-lg:hidden ml-6 border-grey-300" />
        </div>
        {/* <div className="flex">
          <h3>0<br />1</h3>
          <hr className="border w-9 ml-6 translate-y-6 border-grey-300" />
          <h3>02</h3>
        </div> */}
      </div>
      <div className={`md:w-2/3 bg-cover relative bg-black max-md:bg-blend-overlay bg-bottom py-64 md:py-96`} style={{backgroundImage: `url(${hero_img})`}}>        
        <div className="text-center max-md:text-white *:title leading-10 md:hidden">
          <h1>PROJECT</h1>
          <h1 className="font-bold">Lorum</h1>
        </div>
        <div className=""><Button style='absolute left-[35%] sm:left-[40%] max-md:mt-5 md:left-0 md:bottom-0 btn_light' to='./projects' text='View Project' /></div>
      </div>            
    </Container>
  )
}

export default Hero