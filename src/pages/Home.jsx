import { Hero, About, Container, Button } from '..'
import { project_img_1, project_img_2, project_img_3, project_img_4, project_img_5 } from '../assets'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Container>
        <h1 className="title">Main Focus/Mission Statement</h1>
        <div className="flex max-md:flex-col gap-4 py-5 justify-between *:items-center">
          <div className="flex gap-8">
            <h1 className='lg:text-9xl text-6xl text-grey-200 font-black'>1</h1>
            <p className='lg:max-w-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
          </div>
          <div className="flex gap-8">
            <h1 className='lg:text-9xl text-6xl text-grey-200 font-black'>2</h1>
            <p className='lg:max-w-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
          </div>
        </div>
      </Container>
      <Container>
        <h1 className="title">Our Projects</h1>
        <div className="">
          <div className="grid gap-y-7 *:h-[255px]">
            <div className="flex gap-4 *:w-full">
              <div className="bg-cover p-8 bg-black bg-blend-overlay" style={{backgroundImage: `url(${project_img_1})`}}>
                <h1 className='text-[40px] md:text-[64px] leading-[3rem] font-bold text-white'>Sample <br /> Project</h1>
                <div className=""><Button style='' to='./projects' text='View More' /></div>
              </div>
              <img src={project_img_2} alt="" />
            </div>
            <div className="flex gap-4">
              <img src={project_img_3} alt="" />
              <img src={project_img_4} alt="" />
              <img src={project_img_5} alt="" />
            </div>
          </div>
          <div className="text-right mt-7"><Button style='btn_dark' to='./projects' text='All Projects' /></div>
        </div>
      </Container>
    </>
  )
}

export default Home