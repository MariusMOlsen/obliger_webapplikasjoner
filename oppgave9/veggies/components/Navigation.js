import Link from 'next/link'

const Navigation = () => {
    return (
        <nav >
            <ul className="navigation">
                <li>
                    <Link href="/">Hjem</Link>
                </li>
                <li>
                    <Link href="/create">Legg til</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navigation