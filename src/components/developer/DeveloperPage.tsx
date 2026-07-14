"use client";

import Link from "next/link";
import Image from "next/image";

import { developerData } from "./developerData";

export default function DeveloperPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F0E1] text-zinc-900">
      {/* LEFT */}
      <aside className="fixed left-0 top-0 h-screen w-32">
        <div className="absolute -left-54 top-82 -translate-y-1/2 -rotate-90 whitespace-nowrap">
          <h1 className="text-5xl font-bold tracking-[0.35em]">
            SOLO DEVELOPER
          </h1>
          <p className="mt-2 text-xs uppercase tracking-[0.4em] text-zinc-500">
            {developerData.subtitle}
          </p>
          <div className="mt-4 h-px w-full bg-zinc-400" />
        </div>
        <Link
          href="/"
          className="absolute bottom-4 left-4 inline-flex items-center gap-3 rounded-sm border border-zinc-600 bg-[#E9DDC5] px-4 py-2 text-xs uppercase tracking-[0.3em] shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          <span>←</span>
          <span>Return</span>
        </Link>
      </aside>
      {/* CENTER */}
      <section className="ml-32 mr-72 px-16 py-8 overflow-y-auto h-screen">
        <div className="flex items-center gap-10">
          <div className="shrink-0">
            <div className="w-80 border-2 border-zinc-700 bg-[#E9E1CF] p-2 shadow-xl hover:bg-[#f9e5b8]">
              <div className="relative h-52 w-full overflow-hidden border border-zinc-500">
                <Image
                  src="/images/Precious2.jpg"
                  alt="Lestro"
                  fill
                  priority
                  sizes="320px"
                  className="scale-110 object-cover object-center grayscale transition duration-500 hover:grayscale-0"
                />
              </div>
              <p className="mt-3 text-center text-[11px] italic tracking-wide text-zinc-600">
                Me, Sofie, and memories of eternity.
              </p>
            </div>
            <p className="mt-3 text-center text-xs uppercase tracking-[0.35em] text-zinc-500">
              {developerData.photoCaption.years} <br />
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-5xl font-bold tracking-wide">
              {developerData.name}
            </h2>
            <p className="pl-1 mt-2 uppercase tracking-[0.3em] text-zinc-600">
              {developerData.role}
            </p>
            <div className="my-3 h-px w-32 bg-zinc-500" />
            <div className="mt-8 max-w-xl text-zinc-700">
              <p className="italic leading-5">
                {developerData.photoCaption.body}
              </p>
            </div>
          </div>
        </div>
        {/* Letter */}
        <section className="mt-10">
          <div className="mb-2 flex items-center gap-4">
            <h3 className="shrink-0 text-2xl font-semibold uppercase tracking-[0.18em]">
              A Letter For You
            </h3>
            <div className="h-px flex-1 bg-zinc-500" />
          </div>
          <article className="max-w-4xl whitespace-pre-line text-[15px] uppercase leading-10 tracking-[0.12em] text-[#43362D] font-(family-name:--font-eb-garamond)">
            {developerData.letter}
          </article>
          <div className="mt-16 flex justify-end">
            <div className="text-right">
              <p className="mt-2 text-xs uppercase font-family:--font-eb-garamond tracking-wide text-zinc-500">
                {developerData.quote}
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* RIGHT */}
      <aside className="fixed right-0 top-0 flex h-screen w-72 flex-col justify-between px-8 py-8">
        <div className="border-2 border-[#54473F] bg-[#F8F2E5] p-7 shadow-md">
          <div className="mb-5">
            <h2 className="text-lg font-bold tracking-[0.25em]">
              Project Record
            </h2>
            <div className="mt-2 h-px w-28 bg-zinc-500 " />
          </div>
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase text-zinc-500">
                Development Started
              </p>
              <p>{developerData.startedOn}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500">Last Updated</p>
              <p>{developerData.lastUpdated}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500">Game Version</p>
              <p>{developerData.gameVersion}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500">Days Worked</p>
              <p>{developerData.daysWorked}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500">Lines Written</p>
              <p>{developerData.linesWritten}</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-[#54473F] bg-[#F8F2E5] p-6 shadow-md">
          <div className="mb-5">
            <h2 className="text-lg font-bold tracking-[0.25em]">Connect</h2>
            <div className="mt-2 h-px w-20 bg-zinc-500" />
          </div>
          <div className="space-y-3">
            <a
              href={developerData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:translate-x-1"
            >
              Github
            </a>
            <a
              href={developerData.social.reddit}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:translate-x-1"
            >
              reddit
            </a>
            <a
              href={developerData.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:translate-x-1"
            >
              discord
            </a>
          </div>
        </div>
      </aside>
    </main>
  );
}
