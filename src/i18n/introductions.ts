// Short introductions authorized for publication on 2026-10-20. These are not
// reviewed translations of the full English pages; that workflow stays separate.
export const introductions = {
  is: {
    title: 'Um Whaling Watch',
    description: 'Sjálfstæður upplýsingavefur um sögu, efnahag, framkvæmd og stjórnun hvalveiða um allan heim.',
    sections: [
      { heading: 'Tilgangur vefsins', paragraphs: [
        'Whaling Watch safnar saman og miðlar heimildum og samhengi til að auðvelda skilning á hvalveiðum. Við tökum hvorki afstöðu með áframhaldandi hvalveiðum né því að þeim verði hætt. Markmiðið er að varðveita þekkingu og gera áreiðanlegar upplýsingar aðgengilegar.',
        'Hvort sem hvalveiðar halda áfram, breytast eða leggjast af er saga þeirra áfram þess virði að skilja.',
      ] },
      { heading: 'Fleiri tungumál, betra aðgengi', paragraphs: [
        'Þetta er stutt kynning á íslensku. Mestallt efni vefsins er enn á ensku. Langtímamarkmið okkar er að hver síða verði aðgengileg á þeim tungumálum sem lesendur okkar og þau samfélög sem við fjöllum um þurfa á að halda, þar á meðal íslensku og japönsku.',
        'Við munum bæta við þýðingum eftir yfirferð á máli og efni. Við tökum vel á móti aðstoð við þýðingar og yfirferð þeirra.',
      ] },
      { heading: 'Hafðu samband', paragraphs: [
        'Ertu með spurningu, athugasemd eða leiðréttingu? Viltu benda okkur á heimild eða sjónarhorn sem vantar? Sendu okkur tölvupóst. Við tökum vel á móti ábendingum frá öllum sem vilja stuðla að betri skilningi á efninu.',
      ] },
    ],
    contactLabel: 'Senda tölvupóst',
    contactSubject: 'Fyrirspurn eða athugasemd — Whaling.Watch',
    ui: {
      primary: 'Aðalvalmynd', home: 'Heim', about: 'Um verkefnið', languages: 'Tungumál',
      skip: 'Fara beint í efnið', original: 'Lesa enska frumtextann',
      statement: 'Sjálfstæður. Alþjóðlegur. Byggður á heimildum.',
      resources: 'Heimildir og ítarefni á ensku', contact: 'Samskiptasíða á ensku',
      reviewed: 'Þýðing yfirfarin', footer: 'Síðufótur',
    },
    footer: {
      note: 'Stutt kynning á íslensku. Mestallt efni vefsins er enn á ensku.',
      about: 'Um verkefnið á ensku', home: 'Fara á íslensku kynningarsíðuna', sitemap: 'Vefkort',
    },
  },
  ja: {
    title: '捕鯨を理解するために',
    description: '世界の捕鯨の歴史、経済、実態、制度を記録する、独立した情報サイトです。',
    sections: [
      { heading: 'このサイトの目的', paragraphs: [
        'Whaling Watchは、捕鯨を理解するための資料と背景情報を集め、わかりやすく伝えます。捕鯨の継続や廃止を訴えることを目的とはしていません。知識を保存し、信頼できる情報を誰もが利用できるようにすることを目指しています。',
        '捕鯨が今後も続くとしても、形を変えるとしても、完全になくなるとしても、その歴史を理解する価値は変わりません。',
      ] },
      { heading: 'より多くの言語で読めるサイトへ', paragraphs: [
        'このページは、日本語による簡単な紹介です。現在、サイトの大部分は英語で提供しています。長期的には、日本語やアイスランド語をはじめ、読者の皆さまや取り上げる地域の人々が必要とする言語で、すべてのページを読めるようにすることを目指しています。',
        '今後、表現と内容を確認したうえで、翻訳したページを順次追加していきます。翻訳や訳文の確認にご協力いただける方からのご連絡も歓迎します。',
      ] },
      { heading: 'お問い合わせ・ご意見', paragraphs: [
        'ご質問、ご意見、訂正のご指摘がありましたら、メールでお知らせください。参考資料や、このサイトで取り上げていない視点のご紹介も歓迎します。捕鯨への立場にかかわらず、理解を深めるための情報をお寄せください。',
      ] },
    ],
    contactLabel: 'メールで問い合わせる',
    contactSubject: 'Whaling.Watchへのお問い合わせ・ご意見',
    ui: {
      primary: 'メインナビゲーション', home: 'ホーム', about: 'このサイトについて', languages: '言語',
      skip: '本文へ移動', original: '英語の原文を読む',
      statement: '独立した立場から。国境を越えて。資料に基づいて。',
      resources: '参考資料（英語）', contact: 'お問い合わせページ（英語）',
      reviewed: '翻訳確認日', footer: 'フッター',
    },
    footer: {
      note: '日本語による簡単な紹介です。サイトの大部分は現在、英語で提供しています。',
      about: 'このサイトについて（英語）', home: '日本語の紹介ページへ', sitemap: 'サイトマップ',
    },
  },
};
export type IntroductionLocale = keyof typeof introductions;
export function contactHref(locale: IntroductionLocale) {
  return `mailto:hello@whaling.watch?subject=${encodeURIComponent(introductions[locale].contactSubject)}`;
}
