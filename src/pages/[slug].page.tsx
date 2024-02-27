import { ExperienceRoot, createExperience, fetchBySlug } from '@contentful/experience-builder';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { deliveryClient, previewClient } from '@src/lib/client';
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';

import '@src/studio-experience/index';

const Page = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { experienceJSON, locale, referencedEntries, referencedAssets } = props;

  const experience = createExperience(experienceJSON);
  // @ts-expect-error
  experience.entityStore!.entryMap = new Map(referencedEntries);
  // @ts-expect-error
  experience.entityStore!.assetMap = new Map(referencedAssets);

  return <ExperienceRoot experience={experience} locale={locale} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params, query, locale }) => {
  if (!params?.slug || !locale) {
    return {
      notFound: true,
    };
  }

  const client = query?.preview === 'true' ? previewClient : deliveryClient;

  try {
    const experience = await fetchBySlug({
      slug: params.slug.toString(),
      localeCode: locale,
      client,
      experienceTypeId: process.env.CONTENTFUL_EXPERIENCE_TYPE_ID as string,
    });

    if (!experience) {
      return {
        notFound: true,
      };
    }

    // @ts-expect-error
    const referencedAssets = Array.from(experience.entityStore?.assetMap.entries());
    // @ts-expect-error
    const referencedEntries = Array.from(experience.entityStore?.entryMap.entries());

    return {
      props: {
        ...(await getServerSideTranslations(locale)),
        experienceJSON: JSON.stringify(experience),
        referencedAssets,
        referencedEntries,
        locale,
      },
    };
  } catch (e) {
    console.error('error', e);
    return {
      notFound: true,
    };
  }
};

export default Page;
