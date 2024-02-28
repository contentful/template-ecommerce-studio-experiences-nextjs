import { ComponentDefinition } from "@contentful/experience-builder";

export const CodeDefinition: ComponentDefinition = {
  id: "chakra-code",
  name: "Code",
  category: 'Chakra UI Data Display',
  children: true,
  variables: {
    value: {
      type: 'Text',
      displayName: 'Text',
      defaultValue: 'const hello = "world"',
      description: 'Code to display'
    },
    colorScheme: {
      type: 'Text',
      displayName: 'Color Scheme',
      defaultValue: 'gray',
      group: 'style',
      description: 'Color scheme of the code',
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
      description: 'Variant of the code',
      validations: {
        in: [
          { value: 'subtle' },
          { value: 'solid' },
          { value: 'outline' }
        ]
      }
    }
  }
}
