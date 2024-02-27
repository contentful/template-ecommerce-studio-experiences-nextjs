import { ComponentDefinition } from "@contentful/experience-builder";

export const BadgeDefinition: ComponentDefinition = {
  id: "chakra-badge",
  name: "Badge",
  category: 'Chakra UI Data Display',
  variables: {
    colorScheme: {
      type: 'Text',
      displayName: 'Color Scheme',
      defaultValue: 'gray',
      group: 'style',
      description: 'Color scheme of the badge',
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
    variant: {
      type: 'Text',
      displayName: 'Variant',
      defaultValue: 'subtle',
      group: 'style',
      description: 'Variant of the badge',
      validations: {
        in: [
          { value: 'subtle' },
          { value: 'solid' },
          { value: 'outline' }
        ]
      }
    },
    value: {
      type: 'Text',
      displayName: 'Text',
      defaultValue: 'Badge',
      description: 'Text of the badge'
    }
  }
}
