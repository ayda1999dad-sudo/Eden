"use client";

import { useState } from "react";
import Image from "next/image";

const colors = [
  {
    name: "سبز",
    value: "#B8CDB5",
    image: "/Satar.png",
  },
    {
    name: "پیچ",
    value: "#F6A08F",
    image: "/Satar-peach.png",
  },
];

export default function SatarPage() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#f7f7f3] text-[#111]"
    >
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <a
          href="/"
          className="text-3xl font-black tracking-[-0.08em]"
        >
          Eden
        </a>

        <a
          href="/crochet"
          className="text-sm transition-opacity hover:opacity-50"
        >
          ← "شاید چیز دیگه"
        </a>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-12 md:grid-cols-2 md:px-12 md:pt-20">
        {/* تصویر */}
        <div className="relative aspect-square overflow-hidden border-2 border-black bg-white">
          <Image
            src={selectedColor.image}
            alt="ستار"
            fill
            className="object-contain p-8"
          />
        </div>

        {/* اطلاعات محصول */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm text-black/50">
            زمان ساخت : 2 هفته
          </p>

          <h1 className="text-6xl font-black tracking-[-0.06em]">
            ستار
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-black/60">
            یک ستاره سقوط کرده از آسمون برای ستاره ها
          </p>

          <p className="mt-8 text-xl font-bold">
            140 هزار تومان
          </p>

          {/* انتخاب رنگ */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">
                رنگ
              </h2>

              <span className="text-sm text-black/50">
                {selectedColor.name}
              </span>
            </div>

            <div className="mt-5 flex gap-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  aria-label={`انتخاب رنگ ${color.name}`}
                  className={`h-10 w-10 rounded-full border-2 border-black transition-transform duration-200 hover:scale-110 ${
                    selectedColor.name === color.name
                      ? "scale-110 ring-2 ring-black ring-offset-4"
                      : ""
                  }`}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          </div>

          {/* افزودن به سبد */}
          <button
            type="button"
            className="mt-10 w-full border-2 border-black bg-black px-6 py-4 text-base font-bold text-white transition-transform duration-200 hover:-translate-y-1"
          >
            افزودن به سبد خرید ←
          </button>
        </div>
      </section>
    </main>
  );
}