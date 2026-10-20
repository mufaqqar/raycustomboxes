import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

const BreadCrumb = ({ title }: { title: string }) => {
    return (
        <nav aria-label='Breadcrumb' className='flex items-center gap-1.5 text-sm font-normal text-desc mb-3'>
            <Link href='/' className='hover:text-primary transition'>Home</Link>
            <FaAngleRight size={12} />
            <Link href='/product' className='hover:text-primary transition'>Products</Link>
            <FaAngleRight size={12} />
            <span className='text-primary font-medium truncate'>{title}</span>
        </nav>
    )
}

export default BreadCrumb
