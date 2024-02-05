import Link from "next/link";
import "./button.css";

export function ButtonCta({
  children,
  action = "/",
}: {
  children: React.ReactNode;
  action: string;
}) {
  return (
    <Link href={action} className="animated-button">
      <span>{children}</span>
      <span></span>
    </Link>
  );
}
