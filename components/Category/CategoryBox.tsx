import Image from 'next/image'
import Link from 'next/link'
import { Categories } from '@/data/Categories'

const CategoryBox = ({ slug }: { slug?: string } = {}) => {
  const category = Categories.find((c) => c.slug === (slug || 'corrugated-boxes')) || Categories[0]
  return (
    <div className='px-2 group transition-all duration-400 ease-[cubic-bezier(.175,.885,.32,1.275)]'>
      <div className='rounded-[20px] overflow-hidden bg-white p-5 border border-RC_border shadow-[0_15px_30px_rgb(56,56,130,0.05)] hover:shadow-[0_15px_30px_rgb(56,56,130,.15)] relative before:content-[""] before:absolute before:w-full before:h-1 before:bottom-0 before:rounded-b-xl before:left-0 before:right-0 before:bg-gradient-to-r before:from-primary before:to-RC_Green before:scale-x-0 group-hover:before:scale-x-100 before:transition-all before:duration-400'>
        <Link href={`/category/${category.slug}`} className='rounded-[20px] block'>
          <Image src={category.image} alt={category.shortName} width={229} height={234} className='w-full rounded-[20px] group-hover:scale-105 transition-all duration-400 ease-[cubic-bezier(.175,.885,.32,1.275)]' />
        </Link>
        <div className='pt-2.5'>
          <Link href={`/category/${category.slug}`} className='text-lg md:text-base lg:text-lg font-semibold text-center text-primary group-hover:text-RC_Green flex w-full justify-center items-center'>
            {category.shortName}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryBox