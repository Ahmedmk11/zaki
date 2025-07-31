'use client'

import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="flex justify-between items-center pl-20 pr-20 h-[109px] bg-[#484848]/[0.26] border border-black opacity-[0.97] backdrop-blur-[21.7px]">
            <img className="w-[94px] h-auto" src="/images/icons/logo.png" alt="Zaki Logo" />
            <div>
                <nav className="outfit-medium">
                    <ul className="flex justify-center items-center gap-20">
                        <li>
                            <a
                                href="/"
                                className={pathname === '/' ? 'text-primary' : 'text-secondary'}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/product"
                                className={
                                    pathname === '/product' ? 'text-primary' : 'text-secondary'
                                }
                            >
                                Product
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className={
                                    pathname === '/about' ? 'text-primary' : 'text-secondary'
                                }
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex justify-center items-center gap-5">
                <a href="/login">
                    <img src="/images/icons/profile.svg" alt="User Icon" />
                </a>
                <a href="/cart">
                    <img src="/images/icons/cart.svg" alt="Cart Icon" />
                </a>
            </div>
        </header>
    )
}
