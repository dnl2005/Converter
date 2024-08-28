import axios from "axios";

export const temperatures = [
  { abbr: "CEL", name: "Шкала Цельсия" },
  { abbr: "FAR", name: "Шкала Фаренгейта" },
  { abbr: "KEL", name: "Шкала Кельвина" },
];

export const currencies = [{ abbr: "RUB", name: "Российский рубль", value: 1 }];

export const distances = [
  { abbr: "NM", name: "Нанометры", value: 1_000_000_000 },
  { abbr: "MIC", name: "Микрометры", value: 1_000_000 },
  { abbr: "MM", name: "Миллиметры", value: 1_000 },
  { abbr: "CM", name: "Сантиметры", value: 100 },
  { abbr: "M", name: "Метры", value: 1 },
  { abbr: "KM", name: "Километры", value: 0.001 },
  { abbr: "INCH", name: "Дюймы", value: 39.37008 },
  { abbr: "FOOT", name: "Футы", value: 3.28084 },
  { abbr: "YARD", name: "Ярды", value: 1.093613 },
  { abbr: "MIL", name: "Мили", value: 0.000621 },
  { abbr: "SMIL", name: "Морские мили", value: 0.00054 },
];

axios
  .get("https://www.cbr-xml-daily.ru/latest.js")
  .then((response) => {
    const rates = response.data.rates;
    for (let key in rates) {
      const rateObj = {
        abbr: key,
        name: "",
        value: rates[key],
      };

      switch (rateObj.abbr) {
        case "AUD":
          rateObj.name = "Австралийский доллар";
          break;
        case "AZN":
          rateObj.name = "Азербайджанский манат";
          break;
        case "AMD":
          rateObj.name = "Армянский драм";
          break;
        case "BYN":
          rateObj.name = "Белорусский рубль";
          break;
        case "BGN":
          rateObj.name = "Болгарский лев";
          break;
        case "BRL":
          rateObj.name = "Бразильский реал";
          break;
        case "HUF":
          rateObj.name = "Венгерский форинт";
          break;
        case "VND":
          rateObj.name = "Вьетнамский донг";
          break;
        case "HKD":
          rateObj.name = "Гонконгский доллар";
          break;
        case "GEL":
          rateObj.name = "Грузинский лари";
          break;
        case "DKK":
          rateObj.name = "Датская крона";
          break;
        case "AED":
          rateObj.name = "Дирхам ОАЭ";
          break;
        case "USD":
          rateObj.name = "Доллар США";
          break;
        case "EUR":
          rateObj.name = "Евро";
          break;
        case "EGP":
          rateObj.name = "Египетский фунт";
          break;
        case "INR":
          rateObj.name = "Индийская рупия";
          break;
        case "IDR":
          rateObj.name = "Индонезийская рупия";
          break;
        case "KZT":
          rateObj.name = "Казахстанский тенге";
          break;
        case "CAD":
          rateObj.name = "Канадский доллар";
          break;
        case "QAR":
          rateObj.name = "Катарский реал";
          break;
        case "KGS":
          rateObj.name = "Киргизский сом";
          break;
        case "CNY":
          rateObj.name = "Китайский юань";
          break;
        case "MDL":
          rateObj.name = "Молдавский лей";
          break;
        case "NZD":
          rateObj.name = "Новозеландский доллар";
          break;
        case "NOK":
          rateObj.name = "Норвежская крона";
          break;
        case "PLN":
          rateObj.name = "Польский злотый";
          break;
        case "RON":
          rateObj.name = "Румынский лей";
          break;
        case "XDR":
          rateObj.name = "Сомалийсий шиллинг";
          break;
        case "SGD":
          rateObj.name = "Сингапурский доллар";
          break;
        case "TJS":
          rateObj.name = "Таджикский сомони";
          break;
        case "THB":
          rateObj.name = "Таиландский бат";
          break;
        case "TRY":
          rateObj.name = "Турецкая лира";
          break;
        case "TMT":
          rateObj.name = "Новый туркменский манат";
          break;
        case "UZS":
          rateObj.name = "Узбекский сум";
          break;
        case "UAH":
          rateObj.name = "Украинская гривна";
          break;
        case "GBP":
          rateObj.name = "Фунт Стерлинга";
          break;
        case "CZK":
          rateObj.name = "Чешская крона";
          break;
        case "SEK":
          rateObj.name = "Шведская крона";
          break;
        case "CHF":
          rateObj.name = "Швейцарский франк";
          break;
        case "RSD":
          rateObj.name = "Сербский динар";
          break;
        case "ZAR":
          rateObj.name = "Южноафриканский рэнд";
          break;
        case "KRW":
          rateObj.name = "Южнокорейская вона";
          break;
        case "JPY":
          rateObj.name = "Японская йена";
          break;
        default:
          break;
      }
      currencies.push(rateObj);
    }
  })
  .catch((error) => {
    console.error(error);
  });
