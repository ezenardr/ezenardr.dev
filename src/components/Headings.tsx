import './Headings.css';
interface HeadingsProps {
    secondary: string;
    tertiary: string;
    text?: string;
}
export default function Headings({
    secondary,
    tertiary,
    text = '',
}: HeadingsProps) {
    return (
        <div className="heading-box">
            <h2 className="heading-secondary">{secondary}</h2>
            <h3 className="heading-tertiary">{tertiary}</h3>
            <p className="heading-text">{text}</p>
        </div>
    );
}
