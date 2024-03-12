import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <ul className='flex m-4'>
                <li className='mx-5 underline'>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                </li>
                <li className='mx-5 underline'>
                    <Link href="/route1">
                        <p>Route1</p>
                    </Link>
                </li>
                <li className='mx-5 underline'>
                    <Link href="/route1/route2">
                        <p>Route2</p>
                    </Link>
                </li>
                <li className='mx-5 underline'>
                    <Link href="/route1/route2/route3">
                        <p>Route3</p>
                    </Link>
                </li>
                <li className='mx-5 underline'>
                    <Link href="/route1/route2/route3/route4">
                        <p>Route4</p>
                    </Link>
                </li>
                <li className='mx-5 underline'>
                    <Link href="/route1/route2/route3/route4/route5">
                        <p>Route5</p>
                    </Link>
                </li>
                <li className='mx-5 underline'>
                    <Link href="/not-found">
                        <p>Not Found</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;