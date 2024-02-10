import { Language } from './types';

// prettier-ignore
const language: Language = {
  code:             'ja',
  schema:           (issue) => `無効な型: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
  specific: {
    bic:            (issue) => `無効なBIC: ${issue.received} を受け取りました`,
    bytes:          (issue) => `無効なバイト数: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    creditCard:     (issue) => `無効なクレジットカード: ${issue.received} を受け取りました`,
    cuid2:          (issue) => `無効なCuid2: ${issue.received} を受け取りました`,
    custom:         (issue) => `無効な入力: ${issue.received} を受け取りました`,
    customAsync:    (issue) => `無効な入力: ${issue.received} を受け取りました`,
    decimal:        (issue) => `無効な10進数: ${issue.received} を受け取りました`,
    email:          (issue) => `無効なメールアドレス: ${issue.received} を受け取りました`,
    emoji:          (issue) => `無効な絵文字: ${issue.received} を受け取りました`,
    endsWith:       (issue) => `無効な末尾: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    equal:          (issue) => `無効な値: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    excludes:       (issue) => `無効な内容: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    finite:         (issue) => `無効な有限数: ${issue.received} を受け取りました`,
    hash:           (issue) => `無効なハッシュ値: ${issue.received} を受け取りました`,
    hexColor:       (issue) => `無効な16進数カラーコード: ${issue.received} を受け取りました`,
    hexadecimal:    (issue) => `無効な16進数: ${issue.received} を受け取りました`,
    imei:           (issue) => `無効なIMEI: ${issue.received} を受け取りました`,
    includes:       (issue) => `無効な内容: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    integer:        (issue) => `無効な整数: ${issue.received} を受け取りました`,
    ip:             (issue) => `無効なIP: ${issue.received} を受け取りました`,
    ipv4:           (issue) => `無効なIPv4: ${issue.received} を受け取りました`,
    ipv6:           (issue) => `無効なIPv6: ${issue.received} を受け取りました`,
    isoDate:        (issue) => `無効な日付: ${issue.received} を受け取りました`,
    isoDateTime:    (issue) => `無効な日時: ${issue.received} を受け取りました`,
    isoTime:        (issue) => `無効な時刻: ${issue.received} を受け取りました`,
    isoTimeSecond:  (issue) => `無効な時刻: ${issue.received} を受け取りました`,
    isoTimestamp:   (issue) => `無効なタイムスタンプ: ${issue.received} を受け取りました`,
    isoWeek:        (issue) => `無効な週番号: ${issue.received} を受け取りました`,
    length:         (issue) => `無効な長さ: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    mac:            (issue) => `無効なMACアドレス: ${issue.received} を受け取りました`,
    mac48:          (issue) => `無効な48-bit MACアドレス: ${issue.received} を受け取りました`,
    mac64:          (issue) => `無効な64-bit MACアドレス: ${issue.received} を受け取りました`,
    maxBytes:       (issue) => `無効なバイト数: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    maxLength:      (issue) => `無効な長さ: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    maxSize:        (issue) => `無効なサイズ: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    maxValue:       (issue) => `無効な値: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    mimeType:       (issue) => `無効なMIME type: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    minBytes:       (issue) => `無効なバイト数: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    minLength:      (issue) => `無効な長さ: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    minSize:        (issue) => `無効なサイズ: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    minValue:       (issue) => `無効な値: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    multipleOf:     (issue) => `無効な倍数: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    notBytes:       (issue) => `無効なバイト数: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    notLength:      (issue) => `無効な長さ: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    notSize:        (issue) => `無効なサイズ: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    notValue:       (issue) => `無効な値: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    octal:          (issue) => `無効な8進数: ${issue.received} を受け取りました`,
    regex:          (issue) => `無効なフォーマット: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    safeInteger:    (issue) => `無効な安全な整数: ${issue.received} を受け取りました`,
    size:           (issue) => `無効なサイズ: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    startsWith:     (issue) => `無効な先頭: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
    ulid:           (issue) => `無効なULID: ${issue.received} を受け取りました`,
    url:            (issue) => `無効なURL: ${issue.received} を受け取りました`,
    uuid:           (issue) => `無効なUUID: ${issue.received} を受け取りました`,
    value:          (issue) => `無効な値: ${issue.expected} を期待したが、 ${issue.received} を受け取りました`,
  },
};

export default language;
