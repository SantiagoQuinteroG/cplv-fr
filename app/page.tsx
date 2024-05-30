"use client";

import {Card, Carousel} from "flowbite-react";
import Link from "next/link";
import {FaAccessibleIcon} from "react-icons/fa6";

export default function Home() {
    return (
        <div>
            <section style={{marginTop: "20vh"}}>

            </section>
            <section className="container mx-auto">
                <div className="flex justify-evenly w-full">
                    <Card imgSrc="/3k.jpg"
                          className="text-center max-w-xs flex-1">
                        <h5 className="hidden text-xl font-semibold tracking-tight text-gray-900 dark:text-white md:block">
                            Carrera por la cruz roja, la carrera por la vida
                        </h5>
                        <div className="flex items-center justify-between">
                            <span className="text-9xl font-bold text-gray-900 dark:text-white">$60.000</span>
                            <Link href="#"
                                  className="hidden md:block rounded-lg bg-cyan-700 px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                                Ver Mapa
                            </Link>
                        </div>
                    </Card>
                    <Card imgSrc="/7k.jpg"
                          className="text-center max-w-xs flex-1">
                        <h5 className="hidden text-xl font-semibold tracking-tight text-gray-900 dark:text-white md:block">
                            Carrera por la cruz roja, la carrera por la vida
                        </h5>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">$120.000</span>
                            <Link href="#"
                                  className="hidden md:block rounded-lg bg-cyan-700 px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                                Ver Mapa
                            </Link>
                        </div>
                    </Card>
                    <Card imgSrc="/15k.jpg"
                          className="text-center max-w-xs flex-1">
                        <h5 className="hidden text-xl font-semibold tracking-tight text-gray-900 dark:text-white md:block">
                            Carrera por la cruz roja, la carrera por la vida
                        </h5>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">$120.000</span>
                            <Link href="#"
                                  className="hidden md:block rounded-lg bg-cyan-700 px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                                Ver Mapa
                            </Link>
                        </div>
                    </Card>
                </div>
            </section>
            <section className="container mx-auto">
                <div className="flex justify-evenly w-full">
                    <Card className="text-center max-w-xs flex-1">
                        <FaAccessibleIcon size={80}/>
                        <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
                            Me inscribire
                        </h5>
                        <div className="flex items-center justify-between">
                            <Link href="#"
                                  className="rounded-lg bg-cyan-700 px-4 py-3 text-center text-xl font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                                Inscribirme
                            </Link>
                        </div>
                    </Card>
                    <Card className="text-center max-w-xs flex-1">
                        <FaAccessibleIcon size={80}/>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Me inscribire y a mi equipo
                        </h5>
                        <div className="flex items-center justify-between">
                            <Link href="#"
                                  className="rounded-lg bg-cyan-700 px-4 py-3 text-center text-xl font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                                Inscribirnos
                            </Link>
                        </div>
                    </Card>
                    <Card className="text-center max-w-xs flex-1">
                        <FaAccessibleIcon size={80}/>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Inscribire a corredor(es) o equipo(s)
                        </h5>
                        <div className="flex items-center justify-between">
                            <Link href="#"
                                  className="rounded-lg bg-cyan-700 px-4 py-3 text-center text-xl font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                                Inscribirme
                            </Link>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
