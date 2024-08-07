import Link from "next/link";


export default function CriaLinkImagem({link, texto}) {
    return (
        <Link href={link}>
            <div>
                <picture>
                    <img></img>
                </picture>
                <div>
                    <span>{texto}</span>
                </div>
            </div>
        </Link>
    );
}