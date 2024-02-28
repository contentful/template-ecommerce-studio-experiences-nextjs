import type { ComponentDefinition } from '@contentful/experience-builder';
import { AbsoluteCenterDefinition } from './AbsoluteCenter';

export const CenterDefinition: ComponentDefinition = {
  ...AbsoluteCenterDefinition,
  id: 'chakra-center',
  name: 'Center',
};
