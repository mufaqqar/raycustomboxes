import { Product } from '@/data/Products';
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  product: Product;
  view: "grid" | "list";
}

const ProductBox = ({ product, view }: Props) => {

  if (view === "list") {
    return (
      <Link href={`/product/${product.slug}`} className='flex md:flex-row flex-col items-center rounded-3xl overflow-hidden bg-[#f5f5f5] hover:drop-shadow-md duration-300'>
        <div className='md:w-1/5 w-full rounded-md h-60 flex items-center justify-center bg-background overflow-hidden'>

          <Image src={product.image} alt="feature" width={310} height={384} className='w-full h-full object-cover object-center' />

        </div>
        <div className='md:w-4/5 w-full px-6 py-8 flex flex-col gap-y-4'>
          <span className='md:text-base font-semibold text-title'>
           {product.name}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/product/${product.slug}`} className='rounded-3xl overflow-hidden bg-[#f5f5f5] hover:drop-shadow-md duration-300'>
      <div className='rounded-md flex items-center justify-center h-92 lg:h-96'>
        <Image src={product.image} alt="feature" width={310} height={384} className='w-full h-full object-cover object-center' />
      </div>
      <div className='px-6 py-8 flex flex-col gap-y-4'>
        <span className='md:text-base font-semibold text-center text-title flex w-full justify-center items-center'>
         {product.name}
        </span>
      </div>
    </Link>
  );
};

export default ProductBox;
