import "./navbar.css"

function Navbar() {
    return (
        <header className="header fixed top-2 left-1/2 w-[50%] flex justify-center transform -translate-x-1/2 backdrop-blur-md rounded-lg">
            <nav className="flex flex-row w-full justify-between items-center px-8 py-2">
                <img src="../../public/mada_flag.jpg" alt="mada_flag_img" className="h-full w-[50px]" />
                <ul className="flex justify-center items-center gap-10 text-white text-xl font-bold">
                    <li>
                        <a href="">Hero</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Skills</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;