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
      <section>
        <div>
          <div>
            <h2> Welcome to my Essetial Oil shop </h2>
            <p> Explore our selection of essential oils.</p>
            <Button asChild variant="default">
              <Link href="/products">Browse Products</Link>
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
        <Carousel />
      </section>
    </div>
  );
}
