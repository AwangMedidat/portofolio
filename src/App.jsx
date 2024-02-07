import './App.css'
import Profie from '../src/assets/Photo.png'


function App() {

  return (
    <>
      <header>
        <div className='container m-auto px-4 py-6'>
          <div className="flex justify-between items-center">
            <div>
              <h1 className='font-bold text-xl'>Awang Portofolio</h1>
            </div>
            <div>
              <ul className='flex gap-4'>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>About Me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container m-auto px-4 py-10 flex gap-6">
            <div>
              <h2 className='font-bold text-3xl'>Hello, I'm Awang</h2>
              <h2>frontend developer</h2>
              <p>Frontend Developer, seeking to apply competent development skills with a focus on collaboration, communication, and expertise.</p>
            </div>
            <div>
              <img src={Profie} width={220} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
