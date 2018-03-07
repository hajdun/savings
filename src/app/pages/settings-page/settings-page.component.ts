import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Category } from '../../categoryInterface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  public languages: String[] = [
    'Mandarin (entire branch)',
    'Spanish',
    'English',
    'Hindi[a]',
    'Arabic',
    'Portuguese',
    'Bengali (Bangla)',
    'Russian',
    'Japanese',
    'Punjabi',
    'German',
    'Javanese',
    'Wu (e.g. Shanghainese)',
    'Malay (inc. Malaysian and Indonesian)',
    'Telugu',
    'Vietnamese',
    'Korean',
    'French',
    'Marathi',
    'Tamil',
    'Urdu',
    'Turkish',
    'Italian',
    'Yue (incl. Cantonese)',
    'Thai',
    'Gujarati',
    'Jin',
    'Southern Min (incl. Hokkien and Teochew)',
    'Persian',
    'Polish',
    'Pashto',
    'Kannada',
    'Xiang (Hunanese)',
    'Malayalam',
    'Sundanese',
    'Hausa',
    'Odia (Oriya)',
    'Burmese',
    'Hakka',
    'Ukrainian',
    'Bhojpuri',
    'Tagalog (Filipino)',
    'Yoruba',
    'Maithili',
    'Uzbek',
    'Sindhi',
    'Amharic',
    'Fula',
    'Romanian',
    'Oromo',
    'Igbo',
    'Azerbaijani',
    'Awadhi',
    'Gan Chinese',
    'Cebuano (Visayan)',
    'Dutch',
    'Kurdish',
    'Serbo-Croatian',
    'Malagasy',
    'Saraiki',
    'Nepali',
    'Sinhalese',
    'Chittagonian',
    'Zhuang',
    'Khmer',
    'Turkmen',
    'Assamese',
    'Madurese',
    'Somali',
    'Marwari',
    'Magahi',
    'Haryanvi',
    'Hungarian',
    'Chhattisgarhi',
    'Greek',
    'Chewa',
    'Deccan',
    'Akan',
    'Kazakh',
    'Northern Min[disputed – discuss]',
    'Sylheti',
    'Zulu',
    'Czech',
    'Kinyarwanda',
    'Dhundhari',
    'Haitian Creole',
    'Eastern Min (inc. Fuzhounese)',
    'Ilocano',
    'Quechua',
    'Kirundi',
    'Swedish',
    'Hmong',
    'Shona',
    'Uyghur',
    'Hiligaynon/Ilonggo (Visayan)',
    'Mossi',
    'Xhosa',
    'Belarusian',
    'Balochi',
    'Konkani'
  ];

  public currencies: Object[] = [
    { 'currencyName': 'Russian ruble', 'currencySymbol': '₽', 'currencyShort': 'RUB' },
    { 'currencyName': 'Afghan afghani', 'currencySymbol': '؋', 'currencyShort': 'AFN' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Albanian lek', 'currencySymbol': 'L', 'currencyShort': 'ALL' },
    { 'currencyName': 'Alderney pound[E]', 'currencySymbol': '£', 'currencyShort': '(none)' },
    { 'currencyName': 'British pound[F]', 'currencySymbol': '£', 'currencyShort': 'GBP' },
    { 'currencyName': 'Guernsey pound', 'currencySymbol': '£', 'currencyShort': 'GGP[G]' },
    { 'currencyName': 'Algerian dinar', 'currencySymbol': 'د.ج', 'currencyShort': 'DZD' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Angolan kwanza', 'currencySymbol': 'Kz', 'currencyShort': 'AOA' },
    { 'currencyName': 'Eastern Caribbean dollar', 'currencySymbol': '$', 'currencyShort': 'XCD' },
    { 'currencyName': 'Eastern Caribbean dollar', 'currencySymbol': '$', 'currencyShort': 'XCD' },
    { 'currencyName': 'Argentine peso', 'currencySymbol': '$', 'currencyShort': 'ARS' },
    { 'currencyName': 'Armenian dram', 'currencySymbol': '֏', 'currencyShort': 'AMD' },
    { 'currencyName': 'Armenian dram', 'currencySymbol': '֏', 'currencyShort': 'AMD' },
    { 'currencyName': 'Artsakh dram[E]', 'currencySymbol': 'դր.', 'currencyShort': '(none)' },
    { 'currencyName': 'Aruban florin', 'currencySymbol': 'ƒ', 'currencyShort': 'AWG' },
    { 'currencyName': 'Ascension pound[E]', 'currencySymbol': '£', 'currencyShort': '(none)' },
    { 'currencyName': 'Saint Helena pound', 'currencySymbol': '£', 'currencyShort': 'SHP' },
    { 'currencyName': 'Australian dollar', 'currencySymbol': '$', 'currencyShort': 'AUD' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Azerbaijani manat', 'currencySymbol': '₼', 'currencyShort': 'AZN' },
    { 'currencyName': 'Bahamian dollar', 'currencySymbol': '$', 'currencyShort': 'BSD' },
    { 'currencyName': 'Bahraini dinar', 'currencySymbol': '.د.ب', 'currencyShort': 'BHD' },
    { 'currencyName': 'Bangladeshi taka', 'currencySymbol': '৳', 'currencyShort': 'BDT' },
    { 'currencyName': 'Barbadian dollar', 'currencySymbol': '$', 'currencyShort': 'BBD' },
    { 'currencyName': 'Belarusian ruble', 'currencySymbol': 'Br', 'currencyShort': 'BYN' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Belize dollar', 'currencySymbol': '$', 'currencyShort': 'BZD' },
    { 'currencyName': 'West African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XOF' },
    { 'currencyName': 'Bermudian dollar', 'currencySymbol': '$', 'currencyShort': 'BMD' },
    { 'currencyName': 'Bhutanese ngultrum', 'currencySymbol': 'Nu.', 'currencyShort': 'BTN' },
    { 'currencyName': 'Indian rupee', 'currencySymbol': '₹', 'currencyShort': 'INR' },
    { 'currencyName': 'Bolivian boliviano', 'currencySymbol': 'Bs.', 'currencyShort': 'BOB' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'Bosnia and Herzegovina convertible mark', 'currencySymbol': 'KM or КМ[H]', 'currencyShort': 'BAM' },
    { 'currencyName': 'Botswana pula', 'currencySymbol': 'P', 'currencyShort': 'BWP' },
    { 'currencyName': 'Brazilian real', 'currencySymbol': 'R$', 'currencyShort': 'BRL' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'British Virgin Islands dollar[E]', 'currencySymbol': '$', 'currencyShort': '(none)' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'Brunei dollar', 'currencySymbol': '$', 'currencyShort': 'BND' },
    { 'currencyName': 'Singapore dollar', 'currencySymbol': '$', 'currencyShort': 'SGD' },
    { 'currencyName': 'Bulgarian lev', 'currencySymbol': 'лв', 'currencyShort': 'BGN' },
    { 'currencyName': 'West African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XOF' },
    { 'currencyName': 'Burundian franc', 'currencySymbol': 'Fr', 'currencyShort': 'BIF' },
    { 'currencyName': 'Cambodian riel', 'currencySymbol': '៛', 'currencyShort': 'KHR' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'Central African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XAF' },
    { 'currencyName': 'Canadian dollar', 'currencySymbol': '$', 'currencyShort': 'CAD' },
    { 'currencyName': 'Cape Verdean escudo', 'currencySymbol': 'Esc or $', 'currencyShort': 'CVE' },
    { 'currencyName': 'Cayman Islands dollar', 'currencySymbol': '$', 'currencyShort': 'KYD' },
    { 'currencyName': 'Central African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XAF' },
    { 'currencyName': 'Central African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XAF' },
    { 'currencyName': 'Chilean peso', 'currencySymbol': '$', 'currencyShort': 'CLP' },
    { 'currencyName': 'Chinese yuan', 'currencySymbol': '¥ or 元', 'currencyShort': 'CNY' },
    { 'currencyName': 'Australian dollar', 'currencySymbol': '$', 'currencyShort': 'AUD' },
    { 'currencyName': 'Colombian peso', 'currencySymbol': '$', 'currencyShort': 'COP' },
    { 'currencyName': 'Comorian franc', 'currencySymbol': 'Fr', 'currencyShort': 'KMF' },
    { 'currencyName': 'Congolese franc', 'currencySymbol': 'Fr', 'currencyShort': 'CDF' },
    { 'currencyName': 'Central African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XAF' },
    { 'currencyName': 'New Zealand dollar', 'currencySymbol': '$', 'currencyShort': 'NZD' },
    { 'currencyName': 'Cook Islands dollar', 'currencySymbol': '$', 'currencyShort': '(none)' },
    { 'currencyName': 'Costa Rican colón', 'currencySymbol': '₡', 'currencyShort': 'CRC' },
    { 'currencyName': 'West African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XOF' },
    { 'currencyName': 'Croatian kuna', 'currencySymbol': 'kn', 'currencyShort': 'HRK' },
    { 'currencyName': 'Cuban convertible peso', 'currencySymbol': '$', 'currencyShort': 'CUC' },
    { 'currencyName': 'Cuban peso', 'currencySymbol': '$', 'currencyShort': 'CUP' },
    { 'currencyName': 'Netherlands Antillean guilder', 'currencySymbol': 'ƒ', 'currencyShort': 'ANG' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Czech koruna', 'currencySymbol': 'Kč', 'currencyShort': 'CZK' },
    { 'currencyName': 'Danish krone', 'currencySymbol': 'kr', 'currencyShort': 'DKK' },
    { 'currencyName': 'Djiboutian franc', 'currencySymbol': 'Fr', 'currencyShort': 'DJF' },
    { 'currencyName': 'Eastern Caribbean dollar', 'currencySymbol': '$', 'currencyShort': 'XCD' },
    { 'currencyName': 'Dominican peso', 'currencySymbol': '$', 'currencyShort': 'DOP' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': '(none)', 'currencySymbol': '(none)', 'currencyShort': '(none)' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': '(none)', 'currencySymbol': '(none)', 'currencyShort': '(none)' },
    { 'currencyName': 'Egyptian pound', 'currencySymbol': '£ or ج.م', 'currencyShort': 'EGP' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'Central African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XAF' },
    { 'currencyName': 'Eritrean nakfa', 'currencySymbol': 'Nfk', 'currencyShort': 'ERN' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Ethiopian birr', 'currencySymbol': 'Br', 'currencyShort': 'ETB' },
    { 'currencyName': 'Falkland Islands pound', 'currencySymbol': '£', 'currencyShort': 'FKP' },
    { 'currencyName': 'Danish krone', 'currencySymbol': 'kr', 'currencyShort': 'DKK' },
    { 'currencyName': 'Faroese króna', 'currencySymbol': 'kr', 'currencyShort': '(none)' },
    { 'currencyName': 'Fijian dollar', 'currencySymbol': '$', 'currencyShort': 'FJD' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'CFP franc', 'currencySymbol': 'Fr', 'currencyShort': 'XPF' },
    { 'currencyName': 'Central African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XAF' },
    { 'currencyName': 'Gambian dalasi', 'currencySymbol': 'D', 'currencyShort': 'GMD' },
    { 'currencyName': 'Georgian lari', 'currencySymbol': '₾', 'currencyShort': 'GEL' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Ghanaian cedi', 'currencySymbol': '₵', 'currencyShort': 'GHS' },
    { 'currencyName': 'Gibraltar pound', 'currencySymbol': '£', 'currencyShort': 'GIP' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Eastern Caribbean dollar', 'currencySymbol': '$', 'currencyShort': 'XCD' },
    { 'currencyName': 'Guatemalan quetzal', 'currencySymbol': 'Q', 'currencyShort': 'GTQ' },
    { 'currencyName': 'British pound[F]', 'currencySymbol': '£', 'currencyShort': 'GBP' },
    { 'currencyName': 'Guernsey pound', 'currencySymbol': '£', 'currencyShort': '(none)' },
    { 'currencyName': 'Guinean franc', 'currencySymbol': 'Fr', 'currencyShort': 'GNF' },
    { 'currencyName': 'West African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XOF' },
    { 'currencyName': 'Guyanese dollar', 'currencySymbol': '$', 'currencyShort': 'GYD' },
    { 'currencyName': 'Haitian gourde', 'currencySymbol': 'G', 'currencyShort': 'HTG' },
    { 'currencyName': 'Honduran lempira', 'currencySymbol': 'L', 'currencyShort': 'HNL' },
    { 'currencyName': 'Hong Kong dollar', 'currencySymbol': '$', 'currencyShort': 'HKD' },
    { 'currencyName': 'Hungarian forint', 'currencySymbol': 'Ft', 'currencyShort': 'HUF' },
    { 'currencyName': 'Icelandic króna', 'currencySymbol': 'kr', 'currencyShort': 'ISK' },
    { 'currencyName': 'Indian rupee', 'currencySymbol': '₹', 'currencyShort': 'INR' },
    { 'currencyName': 'Indonesian rupiah', 'currencySymbol': 'Rp', 'currencyShort': 'IDR' },
    { 'currencyName': 'Iranian rial', 'currencySymbol': '﷼', 'currencyShort': 'IRR' },
    { 'currencyName': 'Iraqi dinar', 'currencySymbol': 'ع.د', 'currencyShort': 'IQD' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'British pound[F]', 'currencySymbol': '£', 'currencyShort': 'GBP' },
    { 'currencyName': 'Manx pound', 'currencySymbol': '£', 'currencyShort': 'IMP[G]' },
    { 'currencyName': 'Israeli new shekel', 'currencySymbol': '₪', 'currencyShort': 'ILS' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Jamaican dollar', 'currencySymbol': '$', 'currencyShort': 'JMD' },
    { 'currencyName': 'Japanese yen', 'currencySymbol': '¥', 'currencyShort': 'JPY' },
    { 'currencyName': 'British pound[F]', 'currencySymbol': '£', 'currencyShort': 'GBP' },
    { 'currencyName': 'Jersey pound', 'currencySymbol': '£', 'currencyShort': 'JEP[G]' },
    { 'currencyName': 'Jordanian dinar', 'currencySymbol': 'د.ا', 'currencyShort': 'JOD' },
    { 'currencyName': 'Kazakhstani tenge', 'currencySymbol': '₸', 'currencyShort': 'KZT' },
    { 'currencyName': 'Kenyan shilling', 'currencySymbol': 'Sh', 'currencyShort': 'KES' },
    { 'currencyName': 'Australian dollar', 'currencySymbol': '$', 'currencyShort': 'AUD' },
    { 'currencyName': 'Kiribati dollar[E]', 'currencySymbol': '$', 'currencyShort': '(none)' },
    { 'currencyName': 'North Korean won', 'currencySymbol': '₩', 'currencyShort': 'KPW' },
    { 'currencyName': 'South Korean won', 'currencySymbol': '₩', 'currencyShort': 'KRW' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Kuwaiti dinar', 'currencySymbol': 'د.ك', 'currencyShort': 'KWD' },
    { 'currencyName': 'Kyrgyzstani som', 'currencySymbol': 'с', 'currencyShort': 'KGS' },
    { 'currencyName': 'Lao kip', 'currencySymbol': '₭', 'currencyShort': 'LAK' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Lebanese pound', 'currencySymbol': 'ل.ل', 'currencyShort': 'LBP' },
    { 'currencyName': 'Lesotho loti', 'currencySymbol': 'L', 'currencyShort': 'LSL' },
    { 'currencyName': 'South African rand', 'currencySymbol': 'R', 'currencyShort': 'ZAR' },
    { 'currencyName': 'Liberian dollar', 'currencySymbol': '$', 'currencyShort': 'LRD' },
    { 'currencyName': 'Libyan dinar', 'currencySymbol': 'ل.د', 'currencyShort': 'LYD' },
    { 'currencyName': 'Swiss franc', 'currencySymbol': 'Fr', 'currencyShort': 'CHF' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Macanese pataca', 'currencySymbol': 'P', 'currencyShort': 'MOP' },
    { 'currencyName': 'Macedonian denar', 'currencySymbol': 'ден', 'currencyShort': 'MKD' },
    { 'currencyName': 'Malagasy ariary', 'currencySymbol': 'Ar', 'currencyShort': 'MGA' },
    { 'currencyName': 'Malawian kwacha', 'currencySymbol': 'MK', 'currencyShort': 'MWK' },
    { 'currencyName': 'Malaysian ringgit', 'currencySymbol': 'RM', 'currencyShort': 'MYR' },
    { 'currencyName': 'Maldivian rufiyaa', 'currencySymbol': '.ރ', 'currencyShort': 'MVR' },
    { 'currencyName': 'West African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XOF' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'Mauritanian ouguiya', 'currencySymbol': 'UM', 'currencyShort': 'MRU' },
    { 'currencyName': 'Mauritian rupee', 'currencySymbol': '₨', 'currencyShort': 'MUR' },
    { 'currencyName': 'Mexican peso', 'currencySymbol': '$', 'currencyShort': 'MXN' },
    { 'currencyName': 'Micronesian dollar[E]', 'currencySymbol': '$', 'currencyShort': '(none)' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'Moldovan leu', 'currencySymbol': 'L', 'currencyShort': 'MDL' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Mongolian tögrög', 'currencySymbol': '₮', 'currencyShort': 'MNT' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Eastern Caribbean dollar', 'currencySymbol': '$', 'currencyShort': 'XCD' },
    { 'currencyName': 'Moroccan dirham', 'currencySymbol': 'د.م.', 'currencyShort': 'MAD' },
    { 'currencyName': 'Mozambican metical', 'currencySymbol': 'MT', 'currencyShort': 'MZN' },
    { 'currencyName': 'Burmese kyat', 'currencySymbol': 'Ks', 'currencyShort': 'MMK' },
    { 'currencyName': 'Namibian dollar', 'currencySymbol': '$', 'currencyShort': 'NAD' },
    { 'currencyName': 'South African rand', 'currencySymbol': 'R', 'currencyShort': 'ZAR' },
    { 'currencyName': 'Australian dollar', 'currencySymbol': '$', 'currencyShort': 'AUD' },
    { 'currencyName': 'Nauruan dollar[E]', 'currencySymbol': '$', 'currencyShort': '(none)' },
    { 'currencyName': 'Nepalese rupee', 'currencySymbol': '₨', 'currencyShort': 'NPR' },
    { 'currencyName': 'Indian rupee', 'currencySymbol': '₹', 'currencyShort': 'INR' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'CFP franc', 'currencySymbol': 'Fr', 'currencyShort': 'XPF' },
    { 'currencyName': 'New Zealand dollar', 'currencySymbol': '$', 'currencyShort': 'NZD' },
    { 'currencyName': 'Nicaraguan córdoba', 'currencySymbol': 'C$', 'currencyShort': 'NIO' },
    { 'currencyName': 'West African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XOF' },
    { 'currencyName': 'Nigerian naira', 'currencySymbol': '₦', 'currencyShort': 'NGN' },
    { 'currencyName': 'New Zealand dollar', 'currencySymbol': '$', 'currencyShort': 'NZD' },
    { 'currencyName': 'Niue dollar[E]', 'currencySymbol': '$', 'currencyShort': '(none)' },
    { 'currencyName': 'Turkish lira', 'currencySymbol': '₺', 'currencyShort': 'TRY' },
    { 'currencyName': 'Norwegian krone', 'currencySymbol': 'kr', 'currencyShort': 'NOK' },
    { 'currencyName': 'Omani rial', 'currencySymbol': 'ر.ع.', 'currencyShort': 'OMR' },
    { 'currencyName': 'Pakistani rupee', 'currencySymbol': '₨', 'currencyShort': 'PKR' },
    { 'currencyName': 'Palauan dollar[E]', 'currencySymbol': '$', 'currencyShort': '(none)' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'Israeli new shekel', 'currencySymbol': '₪', 'currencyShort': 'ILS' },
    { 'currencyName': 'Jordanian dinar', 'currencySymbol': 'د.ا', 'currencyShort': 'JOD' },
    { 'currencyName': 'Panamanian balboa', 'currencySymbol': 'B/.', 'currencyShort': 'PAB' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'Papua New Guinean kina', 'currencySymbol': 'K', 'currencyShort': 'PGK' },
    { 'currencyName': 'Paraguayan guaraní', 'currencySymbol': '₲', 'currencyShort': 'PYG' },
    { 'currencyName': 'Peruvian sol', 'currencySymbol': 'S/.', 'currencyShort': 'PEN' },
    { 'currencyName': 'Philippine piso', 'currencySymbol': '₱', 'currencyShort': 'PHP' },
    { 'currencyName': 'New Zealand dollar', 'currencySymbol': '$', 'currencyShort': 'NZD' },
    { 'currencyName': 'Pitcairn Islands dollar[E]', 'currencySymbol': '$', 'currencyShort': '(none)' },
    { 'currencyName': 'Polish złoty', 'currencySymbol': 'zł', 'currencyShort': 'PLN' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Qatari riyal', 'currencySymbol': 'ر.ق', 'currencyShort': 'QAR' },
    { 'currencyName': 'Romanian leu', 'currencySymbol': 'lei', 'currencyShort': 'RON' },
    { 'currencyName': 'Russian ruble', 'currencySymbol': '₽', 'currencyShort': 'RUB' },
    { 'currencyName': 'Rwandan franc', 'currencySymbol': 'Fr', 'currencyShort': 'RWF' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'Algerian dinar', 'currencySymbol': 'د.ج', 'currencyShort': 'DZD' },
    { 'currencyName': 'Mauritanian ouguiya', 'currencySymbol': 'UM', 'currencyShort': 'MRO' },
    { 'currencyName': 'Moroccan dirham', 'currencySymbol': 'د. م.', 'currencyShort': 'MAD' },
    { 'currencyName': 'Sahrawi peseta', 'currencySymbol': '₧ or Ptas', 'currencyShort': '(none)' },
    { 'currencyName': 'Saint Helena pound', 'currencySymbol': '£', 'currencyShort': 'SHP' },
    { 'currencyName': 'Eastern Caribbean dollar', 'currencySymbol': '$', 'currencyShort': 'XCD' },
    { 'currencyName': 'Eastern Caribbean dollar', 'currencySymbol': '$', 'currencyShort': 'XCD' },
    { 'currencyName': 'Eastern Caribbean dollar', 'currencySymbol': '$', 'currencyShort': 'XCD' },
    { 'currencyName': 'Samoan tālā', 'currencySymbol': 'T', 'currencyShort': 'WST' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'São Tomé and Príncipe dobra', 'currencySymbol': 'Db', 'currencyShort': 'STD' },
    { 'currencyName': 'Saudi riyal', 'currencySymbol': 'ر.س', 'currencyShort': 'SAR' },
    { 'currencyName': 'West African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XOF' },
    { 'currencyName': 'Serbian dinar', 'currencySymbol': 'дин. or din.', 'currencyShort': 'RSD' },
    { 'currencyName': 'Seychellois rupee', 'currencySymbol': '₨', 'currencyShort': 'SCR' },
    { 'currencyName': 'Sierra Leonean leone', 'currencySymbol': 'Le', 'currencyShort': 'SLL' },
    { 'currencyName': 'Brunei dollar', 'currencySymbol': '$', 'currencyShort': 'BND' },
    { 'currencyName': 'Singapore dollar', 'currencySymbol': '$', 'currencyShort': 'SGD' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'Netherlands Antillean guilder', 'currencySymbol': 'ƒ', 'currencyShort': 'ANG' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Solomon Islands dollar', 'currencySymbol': '$', 'currencyShort': 'SBD' },
    { 'currencyName': 'Somali shilling', 'currencySymbol': 'Sh', 'currencyShort': 'SOS' },
    { 'currencyName': 'Somaliland shilling', 'currencySymbol': 'Sl', 'currencyShort': '(none)' },
    { 'currencyName': 'South African rand', 'currencySymbol': 'R', 'currencyShort': 'ZAR' },
    { 'currencyName': 'British pound', 'currencySymbol': '£', 'currencyShort': 'GBP' },
    { 'currencyName': 'South Georgia and the South Sandwich Islands pound[E]', 'currencySymbol': '£', 'currencyShort': '(none)' },
    { 'currencyName': 'Russian ruble', 'currencySymbol': '₽', 'currencyShort': 'RUB' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'South Sudanese pound', 'currencySymbol': '£', 'currencyShort': 'SSP' },
    { 'currencyName': 'Sri Lankan rupee', 'currencySymbol': 'Rs රු or ரூ', 'currencyShort': 'LKR' },
    { 'currencyName': 'Sudanese pound', 'currencySymbol': 'ج.س.', 'currencyShort': 'SDG' },
    { 'currencyName': 'Surinamese dollar', 'currencySymbol': '$', 'currencyShort': 'SRD' },
    { 'currencyName': 'Swazi lilangeni', 'currencySymbol': 'L', 'currencyShort': 'SZL' },
    { 'currencyName': 'Swedish krona', 'currencySymbol': 'kr', 'currencyShort': 'SEK' },
    { 'currencyName': 'Swiss franc', 'currencySymbol': 'Fr', 'currencyShort': 'CHF' },
    { 'currencyName': 'Syrian pound', 'currencySymbol': '£ or ل.س', 'currencyShort': 'SYP' },
    { 'currencyName': 'New Taiwan dollar', 'currencySymbol': '$', 'currencyShort': 'TWD' },
    { 'currencyName': 'Tajikistani somoni', 'currencySymbol': 'ЅМ', 'currencyShort': 'TJS' },
    { 'currencyName': 'Tanzanian shilling', 'currencySymbol': 'Sh', 'currencyShort': 'TZS' },
    { 'currencyName': 'Thai baht', 'currencySymbol': '฿', 'currencyShort': 'THB' },
    { 'currencyName': 'West African CFA franc', 'currencySymbol': 'Fr', 'currencyShort': 'XOF' },
    { 'currencyName': 'Tongan paʻanga[O]', 'currencySymbol': 'T$', 'currencyShort': 'TOP' },
    { 'currencyName': 'Transnistrian ruble', 'currencySymbol': 'р.', 'currencyShort': 'PRB[G]' },
    { 'currencyName': 'Trinidad and Tobago dollar', 'currencySymbol': '$', 'currencyShort': 'TTD' },
    { 'currencyName': 'Saint Helena pound', 'currencySymbol': '£', 'currencyShort': 'SHP' },
    { 'currencyName': 'Tristan da Cunha pound[E]', 'currencySymbol': '£', 'currencyShort': '(none)' },
    { 'currencyName': 'Tunisian dinar', 'currencySymbol': 'د.ت', 'currencyShort': 'TND' },
    { 'currencyName': 'Turkish lira', 'currencySymbol': '₺', 'currencyShort': 'TRY' },
    { 'currencyName': 'Turkmenistan manat', 'currencySymbol': 'm', 'currencyShort': 'TMT' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'Australian dollar', 'currencySymbol': '$', 'currencyShort': 'AUD' },
    { 'currencyName': 'Tuvaluan dollar', 'currencySymbol': '$', 'currencyShort': 'TVD[G]' },
    { 'currencyName': 'Ugandan shilling', 'currencySymbol': 'Sh', 'currencyShort': 'UGX' },
    { 'currencyName': 'Ukrainian hryvnia', 'currencySymbol': '₴', 'currencyShort': 'UAH' },
    { 'currencyName': 'Russian ruble[P][6]', 'currencySymbol': '₽', 'currencyShort': 'RUB' },
    { 'currencyName': 'United Arab Emirates dirham', 'currencySymbol': 'د.إ', 'currencyShort': 'AED' },
    { 'currencyName': 'British pound[F]', 'currencySymbol': '£', 'currencyShort': 'GBP' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' },
    { 'currencyName': 'Uruguayan peso', 'currencySymbol': '$', 'currencyShort': 'UYU' },
    { 'currencyName': 'Uzbekistani soʻm', 'currencySymbol': '', 'currencyShort': 'UZS' },
    { 'currencyName': 'Vanuatu vatu', 'currencySymbol': 'Vt', 'currencyShort': 'VUV' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Venezuelan bolívar', 'currencySymbol': 'Bs', 'currencyShort': 'VEF' },
    { 'currencyName': 'Vietnamese đồng', 'currencySymbol': '₫', 'currencyShort': 'VND' },
    { 'currencyName': 'CFP franc', 'currencySymbol': 'Fr', 'currencyShort': 'XPF' },
    { 'currencyName': 'Yemeni rial', 'currencySymbol': '﷼', 'currencyShort': 'YER' },
    { 'currencyName': 'Zambian kwacha', 'currencySymbol': 'ZK', 'currencyShort': 'ZMW' },
    { 'currencyName': 'Botswana pula', 'currencySymbol': 'P', 'currencyShort': 'BWP' },
    { 'currencyName': 'British pound[F]', 'currencySymbol': '£', 'currencyShort': 'GBP' },
    { 'currencyName': 'Chinese yuan', 'currencySymbol': '¥ or 元', 'currencyShort': 'CNY' },
    { 'currencyName': 'Euro', 'currencySymbol': '€', 'currencyShort': 'EUR' },
    { 'currencyName': 'Indian rupee', 'currencySymbol': '₹', 'currencyShort': 'INR' },
    { 'currencyName': 'Japanese yen', 'currencySymbol': '¥', 'currencyShort': 'JPY' },
    { 'currencyName': 'South African rand', 'currencySymbol': 'Rs', 'currencyShort': 'ZAR' },
    { 'currencyName': 'United States dollar', 'currencySymbol': '$', 'currencyShort': 'USD' }
  ];

  public categories: Array<Category>;

  constructor(private _categoryService: CategoryService, private router: Router, private aR: ActivatedRoute) { }


  ngOnInit() {
    this._categoryService.getCategories()
      .subscribe(res => { this.categories = res; });
  }

}

