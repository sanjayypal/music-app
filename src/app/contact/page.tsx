"use client";
import React from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

const page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black pt-20">
      <div className="bg-slate-500 p-4 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-black">
              Your Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <Label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </Label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 bg-zinc-800  block w-full px-3 py-2 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-zinc-800 text-white py-2 px-4 rounded-md hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub className="h-6 w-6 text-gray-500 hover:text-gray-800" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <IconBrandGoogle className="h-6 w-6 text-gray-500 hover:text-gray-800" />
          </a>
          <a href="https://onlyfans.com" target="_blank" rel="noopener noreferrer">
            <IconBrandOnlyfans className="h-6 w-6 text-gray-500 hover:text-gray-800" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default page
