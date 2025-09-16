<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/base/dialog'
import { DialogPortal } from 'reka-ui'
import type { ModalProps } from './type';
import { inject } from 'vue';

const { title } = defineProps<
  ModalProps
>();
const open = defineModel<boolean>({
  default: false,
})
const container = inject('popup-container', document.body)

const handleUpdateOpen = (newOpen: boolean) => {
  if (!newOpen) {
    open.value = false;
  }
}
</script>

<template>
  <Dialog :open="open" modal @update:open="handleUpdateOpen">
    <DialogPortal :to="container">
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <template v-if="!title">
              <slot name="title" />
            </template>
            <template v-else>
              {{ title }}
            </template>
          </DialogTitle>
          <DialogDescription>
            <slot name="description" />
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <slot />
        </div>
        <DialogFooter v-if="$slots.footer">
          <slot name="footer" />
        </DialogFooter>
      </DialogContent>
    </DialogPortal>
  </Dialog>
</template>
