import './App.css'

function App() {


  return (
    <div className='flex justify-center overflow-hidden '>

      <div className="w-[1000px] h-full relative grid md:grid-rows-[30%_1fr]  bg-white">
        <div className="relative flex justify-center w-full h-auto md:h-full ">
          <div className="overflow-hidden w-full h-full md:h-full ">
            <img src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?cs=srgb&dl=bread-color-copyspace-1565982.jpg&fm=jpg" alt=""
              className='w-full h-full md:h-full object-cover object-right-bottom hover:scale-110 duration-100 ease-in  ' />
          </div>


          <div className="absolute top-5 left-5 text-white text-[3rem] font-bold drop-shadow-md">LOGO</div>

          <div className=" absolute bottom-[-2rem] w-[50%] max-w-[800px] m-[0_auto] bg-red-600 text-white p-7 text-center rounded-md ">
            <p className='text-3xl drop-shadow-md'>restaurant</p>
           
          </div>
        </div>



        <div className="pt-[3rem] grid grid-cols-[40%_1fr] relative  w-full ">

          <div className="flex flex-col  gap-10  text-center">
            <div className="p-1 bg-red-500 mx-10 rounded-md text-white ">
              <p className='drop-shadow-md'>product</p>
            </div>
            <div className='text-start mx-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, amet?
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className='w-[50%] h-auto '>
                <img src="https://tse3.mm.bing.net/th?id=OIP.H_8F-1bmoPnqYHRgiY8dMwAAAA&pid=Api&P=0&h=180" alt="" 
                className='rounded-md hover:scale-110 duration-100 ease-in hover:shadow-lg hover:shadow-black' />

              </div>
              <div className='w-[50%] h-auto '>
                <img src="https://wallpaperaccess.com/full/767042.jpg" alt="" 
                className='rounded-md hover:scale-110 duration-100 ease-in hover:shadow-lg hover:shadow-black' />
              </div>

              <div className='w-[50%] h-auto '>
                <img src="http://www.wallpaperup.com/uploads/wallpapers/2015/04/11/659101/5ff9c57dcd7405f38eda737bc5be9e1c.jpg" alt="" 
                className='rounded-md hover:scale-110 duration-100 ease-in hover:shadow-lg hover:shadow-black' />
              </div>

             <div className='w-[50%] h-auto '>
                <img src="https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg" alt="" 
                className='rounded-md hover:scale-110 duration-100 ease-in hover:shadow-lg hover:shadow-black' />
              </div>


            </div>


          </div>
          <div className="flex flex-col  gap-10  text-center mx-10">
            <div className="p-1 bg-red-500 rounded-md text-white">
              <p className='drop-shadow-md'>Detail</p>
            </div>
            <div className='text-start '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, amet?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, amet?
            </div>
            <div className="flex flex-col justify-center items-start gap-5">
              <div className='w-full h-auto text-start'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nobis quasi repellendus unde quidem laborum! Eum eligendi aut natus modi.</p>
              </div>
              <div className='w-full h-auto text-start'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus placeat veritatis nostrum excepturi amet ipsam eius odit, laudantium, corrupti est expedita ad ducimus libero, porro fugit architecto odio officia similique reprehenderit aut rem quae unde! Numquam harum fuga laboriosam neque, vel deserunt delectus eligendi reprehenderit ut iure minima. Beatae?</p>
              </div>

              <div className='w-[50%] h-auto '>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit voluptates earum et magnam, numquam molestias! Dolor magnam cum quae!</p>
              </div>

              <div className='w-[50%] h-auto '>
               
              </div>


            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default App
