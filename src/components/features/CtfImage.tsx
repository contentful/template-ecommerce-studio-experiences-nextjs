import type { ComponentDefinition } from '@contentful/experience-builder';
import NextImage, { ImageProps as NextImageProps } from 'next/image';


type CtfImageProps = Omit<NextImageProps, 'src'> & {
  url?: string;
  experienceProps?: Record<string, unknown>;
}

export const CtfImage = ({
  url,
  width,
  height,
  title,
  ...experienceProps
}: CtfImageProps) => {
  if (!url || !width || !height) return null;

  const urlWithProtocol = url.startsWith('//') ? `https:${url}` : url;

  const blurURL = new URL(urlWithProtocol);
  blurURL.searchParams.set('w', '10');

  return (
    <NextImage
      src={urlWithProtocol}
      width={width}
      height={height}
      // @ts-expect-error
      alt={title || ''}
      sizes="(max-width: 1200px) 100vw, 50vw"
      placeholder="blur"
      blurDataURL={blurURL.toString()}
      {...experienceProps}
    />
  );
};

export const CtfImageComponentDefinition: ComponentDefinition = {
  id: 'nextjs-image',
  name: 'Nextjs Image',
  category: 'Contentful Demo',
  variables: {
    url: {
      type: 'Media',
      defaultValue: 'https://via.placeholder.com/300x200',
      displayName: 'Image URL',
    },
    width: {
      type: 'Number',
      defaultValue: 300,
      displayName: 'Image Width',
    },
    height: {
      type: 'Number',
      defaultValue: 200,
      displayName: 'Image Height',
    },
    title: {
      type: 'Text',
      defaultValue: 'Placeholder Image',
      displayName: 'Image Title',
    },
  },
};
