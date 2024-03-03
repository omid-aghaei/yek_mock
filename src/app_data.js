export const app_data_contacts = {
  "action": "contactList",
  "data": [
    {
      "contactsInfo": [
        {
          "bankId": 3,
          "id": 5008,
          "title": "سامان",
          "valueDto": {
            "pan": "6219861063956550"
          }
        },
        {
          "bankId": 18,
          "id": 5004,
          "title": "آينده",
          "valueDto": {
            "pan": "6362141807959003"
          }
        }
      ],
      "id": 2503,
      "name": "حسام بيات"
    },
    {
      "contactsInfo": [
        {
          "bankId": 3,
          "id": 5006,
          "title": "سامان",
          "valueDto": {
            "iban": "IR420560611828005184718601"
          }
        },
        {
          "bankId": 1,
          "id": 5005,
          "title": "شهر",
          "valueDto": {
            "pan": "5047061043681283"
          }
        },
        {
          "bankId": 3,
          "id": 4501,
          "title": "سامان",
          "valueDto": {
            "pan": "6219861902552578"
          }
        }
      ],
      "id": 2001,
      "name": "ستوده ابراهيمي"
    }
  ],
  status: "SUCCESS"
};


export const app_data_sources = {
  "action":"sources",
  "status":"SUCCESS",
  "data": [
    {
      "bankId": 3,
      "depositDtoList": [
        {
          "id": 21001,
          "depositNumber": "832-800-3906829-1",
          "currency": "IRR",
          "enabled": true,
          "iban": "IR690560083280003906829001",
          "cards": [
            {
              "pan": "6219861070080220",
              "firstname": "ستوده",
              "lastname": "ابراهيمي",
              "issueDate": "2023-08-20T08:19:19+0330",
              "expireDate": "2028-08-21T00:00:00+0330",
              "status": "OK",
              "statusCause": "OK"
            }
          ]
        }
      ]
    },
    {
      "bankId": 6,
      "depositDtoList": [
        {
          "id": 20515,
          "depositNumber": "114-800-6911930-1",
          "currency": "IRR",
          "enabled": true,
          "iban": "IR410550011480006911930001",
          "cards": [
            {
              "pan": "6274121202907416",
              "firstname": "ستوده",
              "lastname": "ابراهيمي",
              "issueDate": "2022-05-21T13:50:17+0430",
              "expireDate": "2027-05-21T00:00:00+0330",
              "status": "OK",
              "statusCause": "OK"
            }
          ]
        }
      ]
    }
  ]
};


export const app_action_balance_single = {
  "action": "balance",
  "params":{
	"type":"SINGLE",
  "source":{
        "bankId": 18,
        "id": 5004,
        "title": "آينده",
        "valueDto": {
          "pan": "6362141807959003"
        }
  }
}
}

export const app_action_balance_all = {
  "action": "balance",
  "params":{
	"type":"ALL",
  "source":{}
}
}
