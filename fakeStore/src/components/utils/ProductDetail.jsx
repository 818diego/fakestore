import React, { useContext } from 'react';
import { ShopiCartContext } from '../context/index';
import { XCircleIcon } from "@heroicons/react/16/solid";

export default function ProductoDetail() {
    const { isDetailOpen, closeDetail } = useContext(ShopiCartContext);

    if (!isDetailOpen) return null;

    return (
        <aside className="w-[360px] h-[calc(100vh-80px)] top-[68px] flex-col fixed right-4 border border-black
        rounded-lg bg-white">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div className="cursor-pointer" onClick={closeDetail}>
                    <XCircleIcon className="size-6" />
                </div>
            </div>
            <figure>
                {/*
                <img className="w-full h-full rounded-lg" src={useContext.productToShow.image}
                alt={useContext.productToShow.title}/>
                */}
            </figure>
            <p className="flex flex-col p-6">
                {/*
                <span className="font-medium text-2xl mb-2">{context.productToShow.price}</span>
                <span className="font-medium text-lg mb-2">{context.productToShow.title}</span>
                <span className="font-medium text-lg mb-2">{context.productToShow.description}</span>
                */}
            </p>
        </aside>
    )
}
