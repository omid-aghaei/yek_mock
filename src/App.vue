<script setup>
import { ref } from 'vue';

const logs = ref([])
const logMe = function(text) { logs.value.unshift(text) }

const ws = ref(null)
const wsAddress = ref('ws://alpha.dolphinai.ir:9123/api/v1/WebSocket')
const wsConversationId = ref('123456')

const wsConnect = function() {
  ws.value = new WebSocket(`${wsAddress.value}?ConversationId=${wsConversationId.value}`)
  ws.value.onmessage = (event) => {

  };
  ws.value.onerror = (error) => { logMe('WS Error : ' + error.code) }
  ws.value.onclose = (event) => { logMe('WS Close : ' + event.code + ' ' + event.reason) }
  ws.value.onopen = (event) => { logMe('WS Open') }
}
const wsDisconnect = function() { if (ws.value !== null) { ws.value.close(1000) } }

</script>

<template>
  <main class="flex flex-col gap-2 h-screen w-full p-2 text-sm">
    <div class="border rounded p-2 flex gap-2 items-center">
      <div>WS</div>
      <input type="text" class="input_1" v-model="wsAddress">
      <div>ConversationId</div>
      <input type="text" class="input_1" v-model="wsConversationId">
      <div class="action_1" @click="wsConnect">Connect</div>
      <div class="action_1"  @click="wsDisconnect">Disconnect</div>
    </div>
    <div class="border rounded p-2 flex gap-2 items-center">
      <div class="action_1">Temp Action ...</div>
      <div class="action_1">Temp Action ...</div>
      <div class="action_1">Temp Action ...</div>
      <div class="action_1">Temp Action ...</div>
      <div class="action_1">Temp Action ...</div>
      <div class="action_1">Temp Action ...</div>
      <div class="action_1">Temp Action ...</div>
      <div class="action_1">Temp Action ...</div>
      <div class="action_1">Temp Action ...</div>
    </div>
    <div class="border rounded p-2 grow flex flex-col gap-2 overflow-y-auto">
      <div class="text-wrap" v-for="(item, index) in logs" :key="index">{{item}}</div>
    </div>
  </main>
</template>