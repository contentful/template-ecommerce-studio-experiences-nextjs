import type { ComponentDefinition } from "@contentful/experience-builder";

export const TagDefinition: ComponentDefinition = {
  id: 'chakra-tag',
  name: 'Tag',
  category: 'Chakra UI Data Display',
  variables: {
    variant: {
      type: 'Text',
      displayName: 'Variant',
      defaultValue: 'subtle',
      group: 'style',
      description: 'Variant of the tag',
      validations: {
        in: [
          { value: 'solid' },
          { value: 'subtle' },
          { value: 'outline' },
        ]
      }
    },
    colorScheme: {
      type: 'Text',
      displayName: 'Color Scheme',
      defaultValue: 'gray',
      group: 'style',
      description: 'Color scheme of the tag',
      validations: {
        in: [
          { value: 'gray' },
          { value: 'red' },
          { value: 'orange' },
          { value: 'yellow' },
          { value: 'green' },
          { value: 'teal' },
          { value: 'blue' },
          { value: 'cyan' },
          { value: 'purple' },
          { value: 'pink' }
        ]
      }
    },
    size: {
      type: 'Text',
      displayName: 'Size',
      defaultValue: 'md',
      group: 'style',
      description: 'Size of the tag',
      validations: {
        in: [
          { value: 'sm' },
          { value: 'md' },
          { value: 'lg' },
        ]
      }
    },
    value: {
      type: 'Text',
      displayName: 'Value',
      defaultValue: 'Tag value',
      description: 'Value of the tag',
    },
  }
}
