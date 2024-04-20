<script setup>
import { ref } from 'vue';
import axios from "axios";
import { app_data_contacts, app_data_deposits, app_action_balance, app_result_balance } from '@/app_data'

const app_data_contacts_ref = ref(app_data_contacts)
const app_data_deposits_ref = ref(app_data_deposits)
const app_action_balance_ref = ref(app_action_balance)
const app_result_balance_ref = ref(app_result_balance)

const logs = ref([])
const logMe = function(text) { logs.value.unshift(text) }

const ws = ref(null)
const wsAddress = ref('alpha.dolphinai.ir:9123/api/v1/')
const wsConversationId = ref('123456')
const wsToken = ref('')

// list of api calls
const sendGetContacts = async function() {
  try {
    logMe('Call GET Contacts')
    const { data } = await axios.get(`http://${wsAddress.value}Conversation/${wsConversationId.value}/contacts`);
    logMe('Result GET Contacts : ' + JSON.stringify(data))
  } catch (e) { logMe('Error API GET Contacts : ' + e.response.data.StatusCode) }
}
const sendGetDeposits = async function() {
  try {
    logMe('Call GET Deposits')
    const { data } = await axios.get(`http://${wsAddress.value}Conversation/${wsConversationId.value}/deposits`);
    logMe('Result GET Deposits : ' + JSON.stringify(data))
  } catch (e) { logMe('Error API GET Deposits : ' + e.response.data.StatusCode) }
}
const sendPostCommandBalance = async function() {
  try {
    logMe('Call POST Balance')
    const { data } = await axios.post(`http://${wsAddress.value}Conversation/${wsConversationId.value}/command`, app_action_balance_ref.value);
    logMe('Result POST Balance : ' + JSON.stringify(data))
  } catch (e) { logMe('Error API POST Balance : ' + e.response.data.StatusCode) }
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
      if (t.action === 'getAuthToken') { app_login() }
      if (t.action === 'showMessage') { app_show_message(event.params) }
      if (t.action === 'contactList') { app_get_contacts(event.data) }
      if (t.action === 'getDeposits') { app_get_sources(event.data) }
      if (t.action === 'bankInfoByBankId') { app_get_balance(event.data) }
      if (t.action === 'showBalance') { app_show_balance(event.params) }
    } catch (e) { console.log(e) }
  }
}
const wsDisconnect = function() { if (ws.value !== null) { ws.value.close(1000); ws.value = null } }
const clear = function() { logs.value.length = 0 }

// app simulator
const timeout = function(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
const app_show_message = async function(t) {
  logMe('Message : ' + t.text)
}
const app_login = async function () {
  logMe('Dolphin asked to login')
  logMe('WS Send : login : ' +  JSON.stringify({ action: "getAuthToken", data : { token : wsToken.value } }));
  ws.value.send(JSON.stringify({ action: "getAuthToken", "status":"SUCCESS", data : { token : wsToken.value } }))
}
const app_get_contacts = async function(t) {
  logMe('YEK Asked : ' + t)
  logMe('Wait for 1s'); await timeout(1000)
  logMe('Yek Answered : Contact List')
  logMe('WS Send : Contacts List'); ws.value.send(JSON.stringify(app_data_contacts_ref.value))
}
const app_get_sources = async function(t) {
  logMe('Yek Asked : ' + t)
  logMe('Wait for 1s'); await timeout(1000)
  logMe('Yek Answered : Deposits List')
  logMe('WS Send : Deposits List'); ws.value.send(JSON.stringify(app_data_deposits_ref.value))
}

const app_get_balance = async function(t) {
  logMe('Yek Asked : ' + t)
  logMe('Wait for 1s'); await timeout(1000)
  logMe('Yek Answered : Balance')
  logMe('WS Send : ‌Balance Result'); ws.value.send(JSON.stringify(app_result_balance_ref.value))
}

const app_show_balance = async function(t) {
  logMe('Widget : ' + JSON.stringify(t))
  const balances = t.balances
  balances.forEach(element => {
    logMe('Widget Message: ' + element.message)
    logMe('Widget Title: ' + element.title)
    logMe('Widget Number: ' + element.entityNumber)
    logMe('Widget Balance: ' + element.totalBalance)
  });
}

const data_modal_1 = ref(false)
const data_modal_2 = ref(false)
const data_modal_3 = ref(false)
const data_modal_4 = ref(false)
const data_modal_1_value = ref(JSON.stringify(app_data_contacts_ref.value, undefined, 4))
const data_modal_2_value = ref(JSON.stringify(app_data_deposits_ref.value, undefined, 4))
const data_modal_3_value = ref(JSON.stringify(app_action_balance_ref.value, undefined, 4))
const data_modal_4_value = ref(JSON.stringify(app_result_balance_ref.value, undefined, 4))
const data_modal_1_open = function() { data_modal_1.value = true }
const data_modal_2_open = function() { data_modal_2.value = true }
const data_modal_3_open = function() { data_modal_3.value = true }
const data_modal_4_open = function() { data_modal_4.value = true }
const data_modal_1_close = function() { data_modal_1.value = false; app_data_contacts_ref.value = JSON.parse(data_modal_1_value.value) }
const data_modal_2_close = function() { data_modal_2.value = false; app_data_deposits_ref.value = JSON.parse(data_modal_2_value.value) }
const data_modal_3_close = function() { data_modal_3.value = false; app_action_balance_ref.value = JSON.parse(data_modal_3_value.value) }
const data_modal_4_close = function() { data_modal_4.value = false; app_result_balance_ref.value = JSON.parse(data_modal_4_value.value) }
</script>

<template>
  <main class="flex flex-col gap-2 h-screen w-full p-2 text-sm relative">
    <div class="border rounded p-2 flex gap-2 items-center bg-white">
      <div>WS</div>
      <input type="text" class="input_1" v-model="wsAddress">
      <div>ConversationId</div>
      <input type="text" class="input_1" v-model="wsConversationId">
      <div>Token</div>
      <input type="text" class="input_1" v-model="wsToken">
      <div class="action_1" @click="wsConnect">Connect</div>
      <div class="action_1"  @click="wsDisconnect">Disconnect</div>
      <div class="action_1"  @click="clear">Clear</div>
      <div class="ml-auto">{{ ws === null ? 'Disconnect' : 'Connected' }}</div>
    </div>
    <div class="border rounded p-2 flex gap-2 items-center bg-white">
      <div class="action_1" @click="sendGetContacts">Call API Get Contacts</div>
      <div class="action_1" @click="sendGetDeposits">Call API Get Deposits</div>
      <div class="action_1" @click="sendPostCommandBalance">Call API POST Command Balance</div>
      <div class="action_1 ml-auto" @click="data_modal_1_open">Edit : Contacts List</div>
      <div class="action_1" @click="data_modal_2_open">Edit : Deposits List</div>
      <div class="action_1" @click="data_modal_3_open">Edit : Balance Request</div>
      <div class="action_1" @click="data_modal_4_open">Edit : Balance Response</div>
    </div>
    <div class="border rounded p-2 grow flex flex-col gap-1 overflow-y-auto text-xs bg-white">
      <div class="text-wrap" v-for="(item, index) in logs" :key="index">{{logs.length - index}} - {{item}}</div>
    </div>

    <div class="absolute top-0 left-0 w-full h-full backdrop-blur bg-white/60 z-10" v-if="data_modal_1 || data_modal_2 || data_modal_3 || data_modal_4"></div>

    <div class="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center" v-if="data_modal_1">
      <div class="bg-gray-200 p-4 border rounded w-1/2 flex flex-col gap-4">
        <textarea name="" id="" cols="30" rows="20" v-model="data_modal_1_value"></textarea>
        <div class="flex">
          <div class="bg-gray-700 text-white rounded p-1 px-4 cursor-pointer" @click="data_modal_1_close">save & close</div>
        </div>
      </div>
    </div>

    <div class="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center" v-if="data_modal_2">
      <div class="bg-gray-200 p-4 border rounded w-1/2 flex flex-col gap-4">
        <textarea name="" id="" cols="30" rows="20" v-model="data_modal_2_value"></textarea>
        <div class="flex">
          <div class="bg-gray-700 text-white rounded p-1 px-4 cursor-pointer" @click="data_modal_2_close">save & close</div>
        </div>
      </div>
    </div>

    <div class="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center" v-if="data_modal_3">
      <div class="bg-gray-200 p-4 border rounded w-1/2 flex flex-col gap-4">
        <textarea name="" id="" cols="30" rows="20" v-model="data_modal_3_value"></textarea>
        <div class="flex">
          <div class="bg-gray-700 text-white rounded p-1 px-4 cursor-pointer" @click="data_modal_3_close">save & close</div>
        </div>
      </div>
    </div>

    <div class="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center" v-if="data_modal_4">
      <div class="bg-gray-200 p-4 border rounded w-1/2 flex flex-col gap-4">
        <textarea name="" id="" cols="30" rows="20" v-model="data_modal_4_value"></textarea>
        <div class="flex">
          <div class="bg-gray-700 text-white rounded p-1 px-4 cursor-pointer" @click="data_modal_4_close">save & close</div>
        </div>
      </div>
    </div>

  </main>
</template>