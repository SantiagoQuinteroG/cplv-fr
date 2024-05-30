import {
    Navbar,
} from "flowbite-react";
import MenuDrawer from "@/components/home/menuDrawer";
import Link from "next/link";
import "@/app/divLayout.css"

const navbar = () => {
    return(
            <Navbar fluid rounded>
                <MenuDrawer/>
                <div className="flex space-x-4">
                    <Link href={"/sign"} className="navButton">Recorrido</Link>
                    <Link href={"/log"} className="navButton">Patrocinio</Link>
                    <Link href={"/riv"} className="navButton">Carrito</Link>
                </div>
            </Navbar>
    );
}

export default navbar;