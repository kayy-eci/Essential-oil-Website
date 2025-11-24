import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-light md:text-4xl">
              {" "}
              Welcome to my Essetial Oil shop{" "}
            </h2>
            <p className="text-neutral-600">
              {" "}
              Explore our selection of essential oils.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Essential oils"
            width={400}
            height={400}
            src={products.data[0].images[0]}
          />
        </div>
      </section>
      <section>
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
