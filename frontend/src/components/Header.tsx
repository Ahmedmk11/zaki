export default function Header() {
    return (
        <header className="flex justify-between items-center pl-20 pr-20 h-[109px] bg-[#484848]/[0.26] border border-black opacity-[0.97] backdrop-blur-[21.7px]">
            <img src="/logo.png" alt="Zaki Logo" />
            <div>
                <nav>
                    <ul className="flex justify-center items-center gap-20">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Product</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex justify-center items-center gap-5">
                <a href="/login" className="">
                    Login
                </a>
                <a href="/cart" className="">
                    Cart
                </a>
            </div>
        </header>
    )
}
