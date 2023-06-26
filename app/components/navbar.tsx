import Link from 'next/link'
import Image from 'next/image'

const Navs = [
    { href: '/projects', name: 'Projects', passHref: true },
  { href: '/hackathons', name: 'Hackathons', passHref: true },
]

const NavBar = () => {
  return (
    <>
    <div className="navbar absolute top-0 z-50 text-white">
        <a href="#" className="btn btn-ghost normal-case text-xl">
            <Image src="/logo.png" alt="Logo" height={20} width={150}/>
            {/* TODO: make the logo txt white */}
        </a>
        {Navs.map(navItem => {
            return <a href={navItem.href} key={navItem.name} className="link no-underline normal-case mx-5 text-xl">{navItem.name}</a>
        })}
    </div>
    </>
  )
}

export default NavBar