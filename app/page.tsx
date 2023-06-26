import Image from 'next/image'
import NavBar from './components/navbar'
import { GitHub, Heart } from 'react-feather'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <NavBar/>
      <div className="hero min-h-screen absolute top-0" style={{
        backgroundImage: "url('/shhacks.jpeg')",
      }}>
        <div className='hero-overlay bg-opacity-80'/>
        <div className="hero-content text-center text-white">
          <div className="max-w-4xl">
            <span className='text-8xl font-bold'>
              This is {" "}
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Linkscape</span>
            </span>
            <p className="py-6 text-lg">A Group of students who hack, build, and compete together.</p>
            <div>
              <a className='btn btn-primary glass mr-5' href='https://github.com/LinkScapeOfficial'>
                <GitHub className='w-6 h-6 mr-3'/>
                GitHub
              </a>
              <a className='btn btn-primary glass' href="/donate">
                {/* TODO */}
                <Heart className='w-6 h-6 mr-3'/>
                Donate
              </a>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
