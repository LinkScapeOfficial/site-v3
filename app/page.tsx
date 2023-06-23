import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen ">
      <h1 className="text-7xl font-bold text-center mt-4">
        We are
        <span className="text-blue-500"> Linkscape</span>
      </h1>
      <p className="text-center mt-4 text-xl">
        Initiated at December 2022, we are a group of Student Hackers from China
        who are passionate about building open-source projects together.
      </p>
    </main>
  )
}
