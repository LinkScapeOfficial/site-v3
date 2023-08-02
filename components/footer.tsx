export default function Footer() {
  return (
    <footer className="bg-gray-50 text-center text-black">
      <br />
      <a href="https://vercel.com/?utm_source=linkscape&utm_campaign=oss">
        <img
          src="https://cdn.linkscape.app/powered-by-vercel.svg"
          alt="Powered by Vercel"
          className="mx-auto"
        />
      </a>
      <div className="mt-4">
        © 2022-2023 LinkScape, a nonprofit fiscally sponsored by{" "}
        <a href="https://the.hackfoundation.org" className="underline">
          The Hack Foundation
        </a>
        .
      </div>
      <br />
    </footer>
  );
}
