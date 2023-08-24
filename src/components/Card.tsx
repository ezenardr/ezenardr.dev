import Image from 'next/image';
import './Card.css';

interface CardProps {
    image: string;
    title: string;
    text: string;
    className?: string;
}
export default function Card({
    image,
    title,
    text,
    className = '',
}: CardProps) {
    return (
        <div className={`card ${className}`}>
            <Image
                src={image}
                alt={`Icon of ${title}`}
                title={title}
                className="card-img"
            />
            <p className="card-title">{title}</p>
            <p className="card-text">{text}</p>
        </div>
    );
}
