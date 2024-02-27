import { defineComponents, CONTENTFUL_COMPONENTS, defineDesignTokens } from '@contentful/experience-builder';
import { CtfImage, CtfImageComponentDefinition } from '@src/components/features/CtfImage';

defineComponents([
  { component: CtfImage, definition: CtfImageComponentDefinition }
], {
  enabledBuiltInComponents: Object.values(CONTENTFUL_COMPONENTS).map((c) => c.id)
});

defineDesignTokens({
  color: {
    primary: 'red',
    secondary: 'blue'
  }
})
