import Link from "next/link";

const Header = () => {
    return (
        <header className="absolute z-20 w-full px-6 py-4 bg-transparent md:px-10">
            <nav className="flex items-center justify-between lg:mx-auto lg:container">
                <Link href='/'>
                    <a  className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-brandGreen-dark"></div>
                        <h1 className="text-2xl font-bold text-brandGreen-dark">Buildit</h1>
                    </a>
                </Link>
                <ul className="items-center hidden gap-3 md:flex " >
                    <li ><Link href='/about'><a className="text-base font-medium text-brandGreen" >About</a></Link></li>
                    <li ><Link href='/services'><a className="text-base font-medium text-brandGreen" >Services</a></Link></li>
                    <li ><Link href='/projects'><a className="text-base font-medium text-brandGreen" >Project</a></Link></li>
                    <li ><Link  href='/contact'><a className="text-base font-medium text-brandGreen" >Contact</a></Link></li>
                </ul>
                <button className="hidden px-3 py-2 text-base font-semibold text-white bg-teal-600 rounded-md md:block hover:bg-opacity-75">Need a project?</button>
            </nav>
        </header>
    );
}

export default Header;