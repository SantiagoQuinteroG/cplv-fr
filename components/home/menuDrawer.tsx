"use client";

import { Button, Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import {
    HiMenu,
    HiShoppingBag, HiShoppingCart,
    HiUsers,
} from "react-icons/hi";
import {HiBuildingOffice, HiChatBubbleLeftEllipsis} from "react-icons/hi2";
import {FaFlagCheckered} from "react-icons/fa";
import {GiStairsGoal} from "react-icons/gi";

const MenuDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    return (
        <>
            <Button color={"gray"} onClick={() => setIsOpen(true)}><HiMenu /></Button>
            <Drawer open={isOpen} onClose={handleClose}>
                <Drawer.Header title="MENU" titleIcon={() => <></>} />
                <Drawer.Items>
                    <Sidebar
                        aria-label="Sidebar with multi-level dropdown example"
                        className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                        <div className="flex h-full flex-col justify-between py-2">
                            <div>
                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="/" icon={HiUsers}>
                                            Mi Cuenta
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/e-commerce/products" icon={HiShoppingCart}>
                                            Tienda
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/users/list" icon={HiShoppingBag}>
                                            Mis Compras
                                        </Sidebar.Item>
                                        <Sidebar.Item href="/authentication/sign-in" icon={HiBuildingOffice}>
                                            Alojamiento - Hosteleria
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="https://github.com/themesberg/flowbite-react/" icon={FaFlagCheckered}>
                                            Carrera
                                        </Sidebar.Item>
                                        <Sidebar.Item href="https://flowbite-react.com/" icon={GiStairsGoal}>
                                            Premiacion
                                        </Sidebar.Item>
                                        <Sidebar.Item href="https://github.com/themesberg/flowbite-react/issues" icon={HiChatBubbleLeftEllipsis}>
                                            Recomendaciones
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                </Sidebar.Items>
                            </div>
                        </div>
                    </Sidebar>
                </Drawer.Items>
            </Drawer>
        </>
    );
}

export default MenuDrawer;