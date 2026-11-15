import Image from 'next/image';
import Link from 'next/link';

type MediaCardProps = {
  href: string;
  image: string;
  title: string;
  description: string;
  cta: string;
  imageHeight?: number;
};

export function MediaCard({ href, image, title, description, cta, imageHeight = 220 }: MediaCardProps) {
  return (
    <article className="media-card">
      <div className="media-card-image" style={{ height: imageHeight }}>
        <Image src={image} alt={title} fill sizes="(max-width: 900px) 100vw, 33vw" />
      </div>
      <div className="media-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href}>{cta}</Link>
      </div>
    </article>
  );
}
