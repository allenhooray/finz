<script setup lang="ts">
import { ref } from 'vue'
import { Button, Card, CardContent, CardHeader, Modal, Space } from '@finz/ui'

defineProps<{ msg: string }>()

const count = ref(0)

const modalOpen = ref(false)
</script>

<template>
  <Modal v-model="modalOpen" title="Modal Title">
    <div>
      <p>Modal Content</p>
    </div>
  </Modal>

  <Card>
    <CardHeader>
      <h1>{{ msg }}</h1>
    </CardHeader>

    <CardContent>
      <Space>
        <Button @click="count++">count is {{ count }}</Button>
        <Button @click="modalOpen = true">Open Modal</Button>
      </Space>
    </CardContent>
  </Card>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
