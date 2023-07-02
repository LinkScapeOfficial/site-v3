import {FiMoreHorizontal} from "react-icons/fi";
import Link from 'next/link'

const people = [
    {
      name: 'Thomas Wu',
      role: 'Founder & CEO',
      imageUrl:
        'https://avatars.githubusercontent.com/u/62056970',
    },
    {
        name: 'Meli Liu',
        role: 'Founder',
        imageUrl:
          'https://gcore.jsdelivr.net/gh/thomaswcy/linkscape.io@main/MeliLiu-Avatar.png',
    },
    {
        name: 'Jett Chen',
        role: 'Co-Founder & CTO',
        imageUrl:
            'https://gcore.jsdelivr.net/gh/thomaswcy/linkscape.io@main/JettChen-Avatar.jpg',
    },
    {
        name: 'Snapdragon Lee',
        role: 'Co-Founder',
        imageUrl:
            'https://avatars.githubusercontent.com/u/61799448',
    },
    {
        name: 'Anthony Ji',
        role: 'Co-Founder & Head of Singapore',
        imageUrl:
            'https://cdn.linkscape.app/AnthonyJi.jpg',
    },
]

export default function Leaders() {
    return (
      <div className="bg-white mb-10 -mt-5">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-10 sm:gap-y-12 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
            <li className="flex items-center gap-x-6">
              <Link href="/team">
                <div className="flex items-center gap-x-6">
                  <FiMoreHorizontal className="h-16 w-16 rounded-full" />
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 -mt-1">View More</h3>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  