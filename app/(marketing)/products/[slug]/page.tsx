import { products } from '@/config/products';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.shortPositioning}</p>
      <p>— Full product detail page coming soon —</p>
    </main>
  );
}
