export const app_data_contacts = {
  action: "contactList",
  status: "SUCCESS",
  data: [
    {
      contactsInfo: [
        {
          bankId: 3,
          id: 5008,
          title: "سامان",
          valueDto: {
            pan: "6219861063956550",
          },
        },
        {
          bankId: 18,
          id: 5004,
          title: "آينده",
          valueDto: {
            pan: "6362141807959003",
          },
        },
      ],
      id: 2503,
      name: "حسام بيات",
    },
    {
      contactsInfo: [
        {
          bankId: 3,
          id: 5006,
          title: "سامان",
          valueDto: {
            iban: "IR420560611828005184718601",
          },
        },
        {
          bankId: 1,
          id: 5005,
          title: "شهر",
          valueDto: {
            pan: "5047061043681283",
          },
        },
        {
          bankId: 3,
          id: 4501,
          title: "سامان",
          valueDto: {
            pan: "6219861902552578",
          },
        },
      ],
      id: 2001,
      name: "ستوده ابراهيمي",
    },
  ],
  status: "SUCCESS",
};

export const app_data_deposits = {
  action: "getDeposits",
  status: "SUCCESS",
  data: {
    bankDepositDtoList: [
      {
        bankId: 3,
        depositDtoList: [
          {
            id: 1,
            depositNumber: "16180063154051",
            currency: "IRR",
            enabled: true,
            nickname: "خودم",
            depositGroupType: "JARI_ACCOUNT",
            iban: "IR420560751828005184718601",
            cards: [
              {
                pan: "6274121189021264",
                firstname: "احمد",
                lastname: "محمدی",
                issueDate: "2024-03-16T08:17:16.904Z",
                expireDate: "2024-03-16T08:17:16.904Z",
                revivalExpireDate: "2024-03-16T08:17:16.904Z",
                revivalExpireDateCount: 0,
                status: "OK",
                statusCause: "OK",
              },
            ],
          },
        ],
      },
      {
        bankId: 4,
        depositDtoList: [
          {
            id: 2,
            depositNumber: "17180663254051",
            currency: "IRR",
            enabled: true,
            nickname: "خودم2",
            depositGroupType: "PASANDAZ",
            iban: "IR520560611828005184718602",
            cards: [
              {
                pan: "7274121189021265",
                firstname: "احمد",
                lastname: "محمدی",
                issueDate: "2024-02-16T08:17:16.904Z",
                expireDate: "2024-02-16T08:17:16.904Z",
                revivalExpireDate: "2024-02-16T08:17:16.904Z",
                revivalExpireDateCount: 0,
                status: "OK",
                statusCause: "OK",
              },
            ],
          },
        ],
      },
    ],
  },
};

export const app_action_balance = {
  action: "bankInfoById",
  bank: {
    bankId: 3,
    title: "شهر",
  },
};

export const app_result_balance = {
  action: "bankInfoById",
  status: "SUCCESS",
  data: {
    allBanksBalances: {
      blockedBalance: 0,
      totalBalance: 140500000,
      withdrawalBalance: 30040000,
    },
    bankDeposits: {
      addedDepositDtoList: [
        {
          balances: {
            blockedBalance: 0,
            totalBalance: 20000000,
            withdrawalBalance: 20000000,
          },
          cards: [
            {
              depositNumber: "16180063154051",
              expireDate: "2026-01-31T00:00:00+0330",
              firstname: "احمد",
              issueDate: "2023-02-01T13:30:05+0330",
              lastname: "محمدی",
              nickname: "خودم",
              pan: "6274121189021264",
              revivalExpireDateCount: 0,
              status: "OK",
              statusCause: "OK",
            },
          ],
          currency: "IRR",
          depositGroupType: "PASANDAZ",
          depositNumber: "16180063154051",
          enabled: true,
          iban: "IR420560611828005184718601",
          id: 1037,
          nickname: "خودم",
          referenceCif: "1",
          referenceCustomerName: "مصطفی/عبدالهی",
        },
      ],
      balances: {
        blockedBalance: 0,
        totalBalance: 20000000,
        withdrawalBalance: 20000000,
      },
    },
    bankId: 3,
    exceptionOccurred: false,
  },
};

export const app_data_favorite = {
  action: "getFavoriteTransfers",
  status: "SUCCESS",
  data: [
    {
      id: 1,
      transferType: "CARD_TO_CARD_TRANSFER",
      amount: 2000000,
      title: "پرداخت شارژ ساختمان",
      source: {
        type: "CARD",
        pan: "6274121189021264",
        bankId: 3,
      },
      destination: {
        type: "CARD",
        pan: "6274121189021263",
        bankId: 3,
      },
    },
    {
      id: 2,
      transferType: "INSTANT_INTERBANK_TRANSFER",
      amount: 10000000,
      title: "پرداخت قسط صنعت",
      source: {
        type: "DEPOSIT",
        depositNumber: "17180663254051",
        bankId: 4,
      },
      destination: {
        type: "IBAN",
        iban: "IR520560611828005184718602",
        bankId: 4,
      },
    },
  ],
};