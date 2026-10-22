import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'

const BreadCrumb = ({ title, parentHref = '/products', parentLabel = 'Products' }: { title: string, parentHref?: string, parentLabel?: string }) => {
    return (
        <nav aria-label='Breadcrumb' className='flex items-center gap-1.5 text-xs font-normal text-desc mb-3 flex-wrap'>
            <Link href='/' className='hover:text-primary transition'>Home</Link>
            <FiChevronRight size={11} />
            <Link href={parentHref} className='hover:text-primary transition'>{parentLabel}</Link>
            <FiChevronRight size={11} />
            <span className='text-primary font-medium truncate max-w-[220px]'>{title}</span>
        </nav>
    )
}

export default BreadCrumb
