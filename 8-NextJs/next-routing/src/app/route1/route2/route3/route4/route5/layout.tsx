import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Route5 Page",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h2 className="bg-red-300">This is a Layout of route5</h2>
            {children}
        </>
    );
}