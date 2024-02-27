import { ComponentDefinition } from "@contentful/experience-builder";

export const AspectRatioDefinition: ComponentDefinition = {
  id: "chakra-aspect-ratio",
  name: "Aspect Ratio",
  children: true,
  category: 'Chakra UI Layout',
  variables: {
    ratio: {
      type: 'Number',
      displayName: 'Aspect Ratio',
      defaultValue: '1',
      group: 'style',
      description: 'Aspect ratio of the container'
    },
    maxW: {
      type: 'Text',
      displayName: 'Max Width',
      defaultValue: '100%',
      group: 'style',
      description: 'Max width of the container'
    }
  }
}
