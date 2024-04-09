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
            currency: {
              currencyCode: "string",
              displayName: "string",
              symbol: "string",
              defaultFractionDigits: 0,
              numericCode: 0,
              numericCodeAsString: "string",
            },
            enabled: true,
            nickname: "خودم",
            depositGroupType: "JARI_ACCOUNT",
            iban: "IR420560611828005184718601",
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
    ],
  },
};

export const app_action_balance = {
  action: "bankInfoByBankId",
  bank: {
    bankId: 3,
    title: "شهر",
  },
};

export const app_result_balance = {
  action: "bankInfoByBankId",
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
              depositNumber: "0305374685009",
              expireDate: "2026-01-31T00:00:00+0330",
              firstname: "مريم",
              issueDate: "2023-02-01T13:30:05+0330",
              lastname: "رضايي",
              nickname: "onvane delkhah",
              pan: "5047061043681283",
              revivalExpireDateCount: 0,
              status: "OK",
              statusCause: "OK",
            },
            {
              depositNumber: "0305374685009",
              expireDate: "2025-01-31T00:00:00+0330",
              firstname: "مريم",
              issueDate: "2023-02-01T13:30:05+0330",
              lastname: "رضايي",
              nickname: "onvane delkhah",
              pan: "5047064031973718",
              revivalExpireDateCount: 0,
              status: "OK",
              statusCause: "OK",
            },
          ],
          currency: "IRR",
          depositGroupType: "PASANDAZ",
          depositNumber: "0305374685009",
          enabled: true,
          iban: "IR300660000000305374685009",
          id: 1037,
          nickname: "onvane delkhah",
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
