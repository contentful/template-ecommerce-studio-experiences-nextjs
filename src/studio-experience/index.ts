import {
  defineComponents,
  CONTENTFUL_COMPONENTS,
  defineDesignTokens,
} from '@contentful/experience-builder';

import {
  AspectRatio,
  Center,
  AbsoluteCenter,
  Badge, 
  Tag,
} from '@chakra-ui/react';

import { CtfImage, CtfImageComponentDefinition } from '@src/components/features/CtfImage';
import { AspectRatioDefinition } from './component-definitions/AspectRatio';
import { CenterDefinition } from './component-definitions/Center';
import { AbsoluteCenterDefinition } from './component-definitions/AbsoluteCenter';
import { BadgeDefinition } from './component-definitions/Badge';

import { experienceControlAdapter, experiencePropsAdapter } from './adapters/experienceComponent';
import { TagDefinition } from './component-definitions/Tag';

defineComponents(
  [
    { component: CtfImage, definition: CtfImageComponentDefinition },
    { component: experiencePropsAdapter(AspectRatio), definition: AspectRatioDefinition },
    { component: experiencePropsAdapter(Center), definition: CenterDefinition },
    { component: experiencePropsAdapter(AbsoluteCenter), definition: AbsoluteCenterDefinition },
    { component: experienceControlAdapter(Badge), definition: BadgeDefinition },
    { component: experienceControlAdapter(Tag), definition: TagDefinition },
  ],
  {
    enabledBuiltInComponents: Object.values(CONTENTFUL_COMPONENTS).map(c => c.id),
  },
);

defineDesignTokens({
  color: {
    primary: 'red',
    secondary: 'blue',
  },
});
