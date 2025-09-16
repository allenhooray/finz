<script setup lang="ts">
import type { SelectProps, SelectValue as SelectValueType } from './type';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/base/select';

const props = defineProps<SelectProps>();
const value = defineModel<SelectValueType>();
</script>

<template>
  <Select v-model="value">
    <SelectTrigger class="w-full truncate">
      <SelectValue :placeholder="props.placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem v-for="item in props.options" :key="item.value" :value="item.value" :disabled="item.disabled">
          {{ item.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>