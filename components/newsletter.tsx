import React from 'react';

export default function Newsletter() {
  return (
    <>
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mt-12">Newsletter</h2>
        <div className="flex justify-center mt-4 mb-4">
            <form
            action="https://postal.hackclub.com/subscribe"
            method="POST"
            acceptCharset="utf-8"
            className="max-w-sm w-full"
        >
            <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
                Name
            </label>
            <input
                type="text"
                name="name"
                id="name"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
                Email
            </label>
            <input
                type="email"
                name="email"
                id="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
            </div>
            <div className="hidden">
            <label htmlFor="hp" className="block mb-1">
                HP
            </label>
            <input
                type="text"
                name="hp"
                id="hp"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
            </div>
            <input type="hidden" name="list" value="1AaBEdR4lS7PwHFOfEzGtQ" />
            <input type="hidden" name="subform" value="yes" />
            <input
            type="submit"
            name="submit"
            id="submit"
            className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
            value="Subscribe"
            />
        </form>
        </div>
    </>    
  );
}
