import {
  defineComponents,
  CONTENTFUL_COMPONENTS,
  defineDesignTokens,
} from '@contentful/experience-builder';

import {
  Badge, 
  Tag,
} from '@chakra-ui/react';

import { CtfImage, CtfImageComponentDefinition } from '@src/components/features/CtfImage';
import { BadgeDefinition } from './component-definitions/Badge';

import { experienceControlAdapter } from './adapters/experienceComponent';
import { TagDefinition } from './component-definitions/Tag';

defineComponents(
  [
    { component: CtfImage, definition: CtfImageComponentDefinition },
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
