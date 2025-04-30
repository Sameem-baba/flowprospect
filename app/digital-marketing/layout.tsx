import type { Metadata } from "next";
import { Electrolize, Roboto } from "next/font/google";
import "../globals.css";


const electrolize = Electrolize({
    variable: "--font-electrolize",
    weight: [ "400" ],
    subsets: [ "latin" ],
})

const roboto = Roboto({
    variable: "--font-roboto",
    weight: [ "400", "500", "700" ],
    subsets: [ "latin" ],
})

export const metadata: Metadata = {
    title: "Flow Prospect - Digital Marketing",
    description: "",
};

export default function DigitalMarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={ `${electrolize.variable} ${roboto.variable} antialiased` }
            >
                { children }
            </body>
        </html>
    );
}
