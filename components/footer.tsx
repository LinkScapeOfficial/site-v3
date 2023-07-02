export default function Footer(){
    return(

        <div className="bg-gray-50 text-black text-center">
            <br />
            <a href="https://vercel.com/?utm_source=linkscape&utm_campaign=oss">
                <img src="https://cdn.linkscape.app/powered-by-vercel.svg" alt="Vercel" className="mx-auto" />
            </a>
            <div className="mt-4">
              ©2022-2023 LinkScape, a nonprofit fiscally sponsored by <a href="https://thehackfoundation.org" className="underline">The Hack Foundation</a>.
            </div>
            <br />
        </div>
    )
}