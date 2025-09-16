export interface SelectOption<ValueType = string> {
  label: string;
  value: ValueType;
  disabled?: boolean;
}

export interface SelectProps<ValueType = string> {
  placeholder?: string;
  options: SelectOption<ValueType>[];
}

export type SelectValue = string;