import "./navbar.css"

function Navbar() {
    return (
        <header className="header fixed top-1 left-1/2 w-[98%] border-2 border-white flex justify-center transform -translate-x-1/2 backdrop-blur-md rounded-lg z-10">
            <nav className="flex flex-row w-full justify-between items-center px-8 py-4">
                <img src="/mada_flag.jpg" alt="mada_flag_img" className="h-full w-[50px]" />
                <ul className="flex justify-center items-center gap-16 text-white text-xl font-semibold">
                    <li className="flex flex-row justify-center items-center gap-2">
                        <i class="fa-solid fa-house"></i>
                        <a href="">Hero</a>
                    </li>
                    <li className="flex flex-row justify-center items-center gap-2">
                        <i class="fa-solid fa-circle-info"></i>
                        <a href="">About</a>
                    </li>
                    <li className="flex flex-row justify-center items-center gap-2">
                        <i class="fa-solid fa-code"></i>
                        <a href="">Skills</a>
                    </li>
                    <li className="flex flex-row justify-center items-center gap-2">
                        <i class="fa-solid fa-folder-closed"></i>
                        <a href="">Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;