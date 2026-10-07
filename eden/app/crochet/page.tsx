import Image from "next/image";

const products = [
  {
    name: "موجود کوچولوی سبز",
    price: "۲۸۰ هزار تومان",
    image: "/crochet-products.png",
  },
  {
    name: "دوست صورتی",
    price: "۳۲۰ هزار تومان",
    image: "/crochet-products.png",
  },
  {
    name: "همراه کوچولوی آبی",
    price: "۲۶۰ هزار تومان",
    image: "/crochet-products.png",
  },
];

export default function CrochetPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#f7f7f3] text-[#111]"
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <a
          href="/"
          className="text-3xl font-black tracking-[-0.08em]"
        >
          Eden
        </a>

        <a
          href="/"
          className="text-sm transition-opacity hover:opacity-50"
        >
          ← برگشت به خانه
        </a>
      </header>

      {/* Title */}
      <section className="px-6 pb-12 pt-16 md:px-16 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm text-black/50">
            -بافتنی هامون
          </p>

          <h1 className="text-6xl font-black tracking-[-0.06em] md:text-8xl">
            دوست های کوچولومون منتظرتونن
          </h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-black/60">
            موجودات کوچولویی که
            <br />
            برای پیدا کردن دوست جدیدشون اینجا هستن
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="border-t-2 border-black px-6 py-16 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden border-2 border-black bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />

               <span className="absolute left-4 top-4 text-sm">
  {String(index + 1).padStart(2, "0")}
</span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-bold">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-sm text-black/50">
                    {product.price}
                  </p>
                </div>

                <span className="text-xl transition-transform duration-300 group-hover:-translate-x-2">
                  ←
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black px-6 py-10 md:px-16">
        <div className="mx-auto flex max-w-6xl justify-between">
          <span className="text-2xl font-black tracking-[-0.08em]">
            Eden
          </span>

          <span className="text-sm text-black/40">
            ساخته‌شده با عشق.
          </span>
        </div>
      </footer>
    </main>
  );
}