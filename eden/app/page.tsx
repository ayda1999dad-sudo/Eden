import Image from "next/image";

export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#f7f7f3] text-[#111] selection:bg-black selection:text-white"
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <div className="text-3xl font-black tracking-[-0.08em]">
          Eden
        </div>

        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#" className="transition-opacity hover:opacity-50">
            فروشگاه
          </a>
          <a href="#" className="transition-opacity hover:opacity-50">
            درباره ما
          </a>
          <a href="#" className="transition-opacity hover:opacity-50">
            علاقه‌مندی‌ها
          </a>
          <a href="#" className="transition-opacity hover:opacity-50">
            سبد خرید
          </a>
        </nav>

        <button className="rounded-full border border-black px-4 py-2 text-sm transition-all hover:bg-black hover:text-white">
          ورود
        </button>
      </header>

      {/* Main */}
      <section className="relative flex min-h-[calc(100vh-100px)] items-center px-6 py-16 md:px-16">
        {/* Decorative hand-drawn circle */}
        <div className="pointer-events-none absolute right-[8%] top-[12%] h-32 w-32 rounded-full border-2 border-black opacity-20 md:h-52 md:w-52" />

        {/* Eden creature */}
<div className="pointer-events-none absolute bottom-6 left-6 z-20 w-10 md:bottom-10 md:left-10 md:w-12">
  <Image
    src="/eden-creature.png"
    alt=""
    width={120}
    height={120}
    className="animate-[edenFloat_5s_ease-in-out_infinite]"
  />
</div>

        <div className="mx-auto w-full max-w-6xl">
          <div className="relative max-w-4xl">
            <h1 className="text-[clamp(4rem,13vw,11rem)] font-black leading-[0.8] tracking-[-0.09em]">
             پناهگاه
              <br />
              <span className="mr-[8vw] inline-block rotate-[-2deg]">
               عدن
              </span>
            </h1>
<div className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-100 hidden md:block">
  <Image
    src="/Cozy-Moonlit-Tiny-Shelter.png"
    alt="پناهگاه عدن"
    width={360}
    height={360}
    className="w-[980px] h-auto object-contain"
  />
</div>
           <div className="mt-14 flex flex-col gap-8 md:flex-row-reverse md:items-end md:justify-between">
              <p className="max-w-md text-lg leading-9 text-black/65">
               محصولات دست ساز
               در این دنیای
               ماشینی
              </p>

              <a
                href="#products"
                className="group inline-flex w-fit items-center gap-4 border-b-2 border-black pb-2 text-lg"
              >
               چک کردن محصولات
                <span className="transition-transform duration-300 group-hover:-translate-x-2">
                  ←
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Small intro */}
      <section
        id="products"
        className="border-t-2 border-black px-6 py-20 md:px-16"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          جدید ترین های عدن
          </h2>

          <p className="max-w-sm leading-8 text-black/60">
            هر محصول یک داستان کوچک دارد.
            <br />
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
          <ProductCard
            title="بافتنی کوچک"
            price="۲۵۰ هزار تومان"
            number="۰۱"
          />
          <ProductCard
            title="اکسسوری دست‌ساز"
            price="۱۸۰ هزار تومان"
            number="۰۲"
          />
          <ProductCard
            title="چیز مرموز"
            price="۳۵۰ هزار تومان"
            number="۰۳"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black px-6 py-10 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 md:flex-row">
          <span className="text-2xl font-black tracking-[-0.08em]">
            Eden
          </span>
          <span className="text-sm text-black/50">
            ساخته‌شده با عشق.
          </span>
        </div>
      </footer>
    </main>
  );
}

function ProductCard({
  title,
  price,
  number,
}: {
  title: string;
  price: string;
  number: string;
}) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden border-2 border-black bg-white">
        <div className="absolute inset-8 rotate-[-3deg] border-2 border-black transition-transform duration-500 group-hover:rotate-3" />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl font-black opacity-10 transition-opacity duration-500 group-hover:opacity-20">
            {number}
          </span>
        </div>

        <div className="absolute bottom-5 right-5 text-sm">
          شاید این یکی تو را انتخاب کند.
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="mt-1 text-sm text-black/50">{price}</p>
        </div>

        <span className="text-xl transition-transform duration-300 group-hover:-translate-x-2">
          ←
        </span>
      </div>
    </article>
  );
}