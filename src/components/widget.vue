<template>
  <div></div>
</template>

<script>
import { toRef } from 'vue';
export default {
  props: {
    id: { type: String },
  },
  setup(props) {
    const UniqID = toRef(props, 'id')

    // base functions
    function login(UniqID) { window.$chatwoot.setUser(UniqID, { name: UniqID }); console.log('chaata login by' + UniqID) }
    function logout() { window.$chatwoot.reset(); }
    function customAttr(attr, value) { window.$chatwoot.setCustomAttributes({ [attr]: value }); }
    function convCustomAttr(attr, value) { window.$chatwoot.setConversationCustomAttributes({ [attr]: value }); }
    function label(label) { window.$chatwoot.setLabel(label); }
    function isJson(str) { try { JSON.parse(str); } catch (e) { return false; } return true;  }

    // send custom message
    function customMessage(data) {
      window.$chatwoot.addCustomMessage({
        id: Math.floor(Math.random() * 100000), content: data, account_id: 0, inbox_id: 0, conversation_id: 0, message_type: 1,
        created_at: Date.now(), updated_at: new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString(),
        private: false, status: 'sent', source_id: null, content_type: 'text', content_attributes: {}, sender_type: 'Contact', sender_id: 0,
        external_source_ids: {}, additional_attributes: {}, processed_message_content: '', conversation: {},
        sender: { additional_attributes: {}, custom_attributes: {}, email: null, id: 0, identifier: null, name: 'چاتا', phone_number: null, thumbnail: '', type: 'contact' },
      })
    }

    // settings
    window.chatwootSettings = {
      customerName: "yekdemo",
      projectId: "629e43ef-aab6-478c-9529-24c7ee394e4a",
      apiGateway: "https://api.dolphinai.ir",
      copyRightText: "Powered By DolphinAI",
      bubbleImg: 'm'
    };

    // load widget
    (function(d,t) {
      var BASE_URL= "https://yekdemo-livechat1.dolphinai.ir";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: 'n2385eHBPFQWJt7eNRHLVCgF',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");

    window.addEventListener("chatwoot:ready", function () {
      window.$chatwoot.toggle("open");
      window.$chatwoot.setColorScheme('dark');
      if (UniqID.value !== '') { login(UniqID.value) }
    });
    return {}
  }
}
</script>