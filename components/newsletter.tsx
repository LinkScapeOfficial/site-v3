import React from "react";

export default function Newsletter() {
  return (
    <>
      <h2 className="mt-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Newsletter
      </h2>
      <div className="mb-12 mt-4 flex justify-center">
        <form
          action="https://postal.hackclub.com/subscribe"
          method="POST"
          acceptCharset="utf-8"
          className="w-full max-w-sm "
        >
          <div className="mb-4">
            <label htmlFor="name" className="mb-1 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div className="hidden">
            <label htmlFor="hp" className="mb-1 block">
              HP
            </label>
            <input
              type="text"
              name="hp"
              id="hp"
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <input type="hidden" name="list" value="1AaBEdR4lS7PwHFOfEzGtQ" />
          <input type="hidden" name="subform" value="yes" />
          <input
            type="submit"
            name="submit"
            id="submit"
            className="cursor-pointer rounded-md bg-black px-4 py-2 font-semibold text-white"
            value="Subscribe"
          />
        </form>
      </div>
    </>
  );
}
