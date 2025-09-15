import type { ArgTypes } from "@storybook/vue3-vite"
import type { PrimitiveProps } from "reka-ui"
import type { UnionToTuple } from "type-fest"
import type { HTMLAttributes } from "vue"

type VariantProps = Record<string, string | null | undefined>

type InputProps<T extends VariantProps> = {
  [key in keyof T]: UnionToTuple<NonNullable<T[key]>>
}

const argTypesPrimitiveProps: Partial<ArgTypes<PrimitiveProps>> = {
  asChild: {
    control: "boolean",
    defaultValue: false,
  },
  as: {
    control: "text",
    defaultValue: 'button'
  },
}

const argTypesClass: Partial<ArgTypes<{ class: HTMLAttributes["class"] }>> = {
  class: {
    control: "text",
    defaultValue: ''
  },
}

export const createArgTypesClass = <T extends VariantProps>(props: InputProps<T>) => {
  const argTypes: Partial<ArgTypes<T>> = {};

  Object.entries(props).forEach(([key, value]) => {
    argTypes[key as keyof T] = {
      control: "select",
      options: value,
      defaultValue: value[0],
    }
  })

  return {
    ...argTypes,
    ...argTypesPrimitiveProps,
    ...argTypesClass,
  }
}