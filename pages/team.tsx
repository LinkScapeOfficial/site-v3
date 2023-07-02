import {FiMoreHorizontal} from "react-icons/fi";
import Link from 'next/link'

const people = [
    {
        name: 'Thomas Wu',
        role: 'Founder & CEO',
        imageUrl:
            'https://cdn.linkscape.app/ThomasWu.png',
        github:
            'https://github.com/thomaswcy',    
    },
    {
        name: 'Meli Liu',
        role: 'Founder',
        imageUrl:
            'https://gcore.jsdelivr.net/gh/thomaswcy/linkscape.io@main/MeliLiu-Avatar.png',
        github:
        'https://github.com/MeliLXT',    
    },
    {
        name: 'Jett Chen',
        role: 'Co-Founder & CTO',
        imageUrl:
            'https://cdn.linkscape.app/JettChen.png',
        github:
            'https://github.com/JettChenT',    
    },
    {
        name: 'Snapdragon Lee',
        role: 'Co-Founder',
        imageUrl:
            'https://avatars.githubusercontent.com/u/61799448',
        github:
            'https://github.com/SnapdragonLee',    
    },
    {
        name: 'Anthony Ji',
        role: 'Co-Founder & Head of Singapore',
        imageUrl:
            'https://cdn.linkscape.app/AnthonyJi.jpg',
        github:
                '',
    },
    {
        name: 'Andy Chang',
        role: 'Senior Member',
        imageUrl:
            'https://cdn.linkscape.app/AndyChang.png',
        github:
            'https://github.com/xiaobaizzh',            
    },
    {
        name: 'Kai Xu',
        role: 'Senior Member',
        imageUrl:
            '',
        github:
            '',
        },
    {
        name: 'Tim Yu',
        role: 'Senior Member',
        imageUrl:
            '',
        github:
            '',    
    },
    {
        name: 'Evoker Ma',
        role: 'Senior Member',
        imageUrl:
            'https://cdn.linkscape.app/EvokerMa.png',
        github:
            '',
    },
    {
        name: 'Kevin Zhang',
        role: 'Senior Member',
        imageUrl:
            '',
        github:
            'https://github.com/juicyk-cn',    
    },
    {
        name: 'Tze-Yun Hsiao',
        role: 'Senior Member',
        imageUrl:
            '',
        github:
            'https://github.com/SolarisEco',    
    },
    {
        name: 'Yucheng Zou',
        role: 'Senior Member',
        imageUrl:
            '',
        github:
            '',
    },
    {
        name: 'Nash Sun',
        role: 'Senior Member',
        imageUrl:
            '',
        github:
            'https://github.com/sun-xx',    
    },
    {
        name: 'Thedust Ye',
        role: 'Senior Member',
        imageUrl:
            'https://cdn.linkscape.app/Thedustye.png',
        github:
            'https://github.com/Thedustye',    
    },
    {
        name: 'Patirck Peng',
        role: 'Senior Member',
        imageUrl:
            '',
        github:
            'https://github.com/DDizzzy79',
    },
    {
        name: 'Ana Jiang',
        role: 'Senior Member',
        imageUrl:
            '',
        github:
            'https://github.com/ana-jiangR',
    },
    {
        name: 'Always Finder',
        role: 'Member',
        imageUrl:
            '',
        github:
            '',
    },
    {
        name: 'Eason Ji',
        role: 'Member',
        imageUrl:
            '',
        github:
            '',
    },
    {
        name: 'Newton Ngau',
        role: 'Member',
        imageUrl:
            '',
        github:
            '',
    },
]

export default function Leaders() {
    return (
      <div className="bg-white mb-10 mt-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mt-12">Meet Our Team</h2>
          <ul role="list" className="grid gap-x-8 gap-y-6 sm:gap-x-6 sm:gap-y-8 sm:grid-cols-2 xl:gap-y-10 xl:grid-cols-3 mt-8">
            {people.map((person) => (
              <Link href={person.github}>
                <li key={person.name} className="flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                    <div className="text-center">
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    </div>
                    </div>
                </li>
              </Link>  
            ))}
          </ul>
        </div>
      </div>
    );
  }
  