<script setup>
import { ref } from 'vue';
import axios from "axios";
import { app_data_contacts, app_data_sources, app_action_balance, app_result_balance } from '@/app_data'

const logs = ref([])
const logMe = function(text) { logs.value.unshift(text) }

const ws = ref(null)
const wsAddress = ref('alpha.dolphinai.ir:9123/api/v1/')
const wsConversationId = ref('123456')

// list of api calls
const sendGetContacts = async function() {
  try {
    logMe('Call API Get Contacts')
    const { data } = await axios.get(`http://${wsAddress.value}Conversation/${wsConversationId.value}/contacts`);
    logMe('Result API Get Contacts : ' + JSON.stringify(data))
  } catch (e) { logMe('Error API Get Contacts : ' + e.response.data.StatusCode) }
}
const sendGetSources = async function() {
  try {
    logMe('Call API Get Sources')
    const { data } = await axios.get(`http://${wsAddress.value}Conversation/${wsConversationId.value}/sources`);
    logMe('Result API Get Sources : ' + JSON.stringify(data))
  } catch (e) { logMe('Error API Get Sources : ' + e.response.data.StatusCode) }
}
const sendPostCommandBalance = async function() {
  try {
    logMe('Call API Post Command Balance')
    const { data } = await axios.post(`http://${wsAddress.value}Conversation/${wsConversationId.value}/command`, app_action_balance);
    logMe('Result API Post Command Balance : ' + JSON.stringify(data))
  } catch (e) { logMe('Error API Post Command Balance : ' + e.response.data.StatusCode) }
}

// ws
const wsConnect = function() {
  ws.value = new WebSocket(`ws://${wsAddress.value}WebSocket?ConversationId=${wsConversationId.value}`)
  ws.value.onerror = (error) => { logMe('WS Error : ' + error.code) }
  ws.value.onclose = (event) => { logMe('WS Close : ' + event.code + ' ' + event.reason) }
  ws.value.onopen = (event) => { logMe('WS Open') }
  ws.value.onmessage = (event) => {
    logMe('WS Receive : ' + event.data)
    try {
      const t = JSON.parse(event.data)
      if (t.action === 'contactList') { app_get_contacts(event.data) }
      if (t.action === 'getSources') { app_get_sources(event.data) }
      if (t.action === 'bankInfoByBankId') { app_get_balance(event.data) }
    } catch (e) { console.log(e) }
  }
}
const wsDisconnect = function() { if (ws.value !== null) { ws.value.close(1000); ws.value = null } }
const clear = function() { logs.value.length = 0 }

// app simulator
const timeout = function(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
const app_get_contacts = async function(t) {
  logMe('App Send Request : ' + t)
  logMe('Wait for 1s'); await timeout(1000)
  logMe('App Receive : Contact List')
  logMe('WS Send : Contacts List'); ws.value.send(JSON.stringify(app_data_contacts))
}
const app_get_sources = async function(t) {
  logMe('App Send Request : ' + t)
  logMe('Wait for 1s'); await timeout(1000)
  logMe('App Receive : Sources List')
  logMe('WS Send : Sources List'); ws.value.send(JSON.stringify(app_data_sources))
}

const app_get_balance = async function(t) {
  logMe('App Send Request : ' + t)
  logMe('Wait for 1s'); await timeout(1000)
  logMe('App Receive : Balance')
  logMe('Widget : ' + JSON.stringify(app_result_balance))
}

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
      <div class="action_1"  @click="clear">Clear</div>
      <div class="ml-auto">{{ ws === null ? 'Disconnect' : 'Connected' }}</div>
    </div>
    <div class="border rounded p-2 flex gap-2 items-center">
      <div class="action_1" @click="sendGetContacts">Call API Get Contacts</div>
      <div class="action_1" @click="sendGetSources">Call API Get Sources</div>
      <div class="action_1" @click="sendPostCommandBalance">Call API POST Command Balance</div>
    </div>
    <div class="border rounded p-2 grow flex flex-col gap-1 overflow-y-auto text-xs">
      <div class="text-wrap" v-for="(item, index) in logs" :key="index">{{logs.length - index}} - {{item}}</div>
    </div>
  </main>
</template>