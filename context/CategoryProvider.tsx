"use client"

import { createContext, useState, Dispatch, SetStateAction } from "react";

export interface CategoryContextType {
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
}

export const CategoryContext = createContext<CategoryContextType>({} as CategoryContextType)

export default function CategoryProvider({ children }: { children: React.ReactNode }) {

    const [category, setCategory] = useState<string>("")

    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    )

}