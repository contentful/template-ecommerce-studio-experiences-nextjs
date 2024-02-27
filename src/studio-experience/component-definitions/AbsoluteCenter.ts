import type { ComponentDefinition } from "@contentful/experience-builder";

export const AbsoluteCenterDefinition: ComponentDefinition = {
  id: "chakra-absolute-center",
  name: "Absolute Center",
  children: true,
  category: 'Chakra UI Layout',
  builtInStyles: ['cfBackgroundColor', 'cfMargin', 'cfPadding', 'cfTextColor'],
  variables: {
    w: {
      type: 'Text',
      displayName: 'Width',
      defaultValue: '100%',
      group: 'style',
      description: 'Width of the container'
    },
    h: {
      type: 'Text',
      displayName: 'Height',
      defaultValue: '100%',
      group: 'style',
      description: 'Height of the container'
    },
    color: {
      type: 'Text',
      displayName: 'Text Color',
      defaultValue: 'black',
      group: 'style',
      description: 'Color of the container'
    },
    bg: {
      type: 'Text',
      displayName: 'Background Color',
      defaultValue: 'transparent',
      group: 'style',
      description: 'Background color of the container'
    },
    p: {
      type: 'Text',
      displayName: 'Padding',
      defaultValue: '0',
      group: 'style',
      description: 'Padding of the container'
    },
    m: {
      type: 'Text',
      displayName: 'Margin',
      defaultValue: '0',
      group: 'style',
      description: 'Margin of the container'
    },
    borderWidth: {
      type: 'Text',
      displayName: 'Border Width',
      defaultValue: '0',
      group: 'style',
      description: 'Border width of the container'
    },
    borderRadius: {
      type: 'Text',
      displayName: 'Border Radius',
      defaultValue: '0px',
      group: 'style',
      description: 'Border radius of the container'
    }
  }
};
