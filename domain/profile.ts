type ProfileType = {
  name: string
  twitter?: {
    name: string
    url: string
  }
  iconPath?: string
  introductions: string[]
  skills?: string[]
  certified?: string[]
}

const jakelizzi: ProfileType = {
  name: 'jakelizzi',
  twitter: {
    name: '@jakelizzI',
    url: 'https://twitter.com/jakelizzI',
  },
  iconPath: '/icons/jakelizzi.jpg',
  introductions: [
    'IoTをメインにAWSを使った開発をしている。',
    '主にjavaでSpringを使っていて、役割としてはScrumマスターをしている。',
    '体調崩しがち。',
    `Podcastは <a href="https://shiganai.org/" target="_brank">#しがないラジオ</a>, <a href="https://fortegp05.github.io/aozorafm/" target="_brank">#aozorafm</a> にも出てたりする。`,
  ],
  skills: [
    'java',
    'JavaScript',
    'TypeScript',
    'AWS',
    'Salesforce',
    'Golang(始めたばかり)',
  ],
  certified: [
    'Salesforce Certified Administrator',
    'Salesforce Certified Platform Developer I',
    'Salesforce Certified Service Cloud Consultant',
    'Salesforce Certified Platform App Builder',
    'AWS Certified Solutions Architect - Associate (SAA)',
    'Scrum Inc.認定スクラムマスター（LSM）',
  ],
}

const tonkotyu: ProfileType = {
  name: 'tonkotyu',
  introductions: [
    'PHPを使ったCRMの開発をしている。最近は業務でPythonを使い始めた。',
    '以前は通信キャリアのネットワーク構築・検証チームをしていた。',
    'お酒の飲みすぎで2年で15キロ太った。',
  ],
}

const tomayuri: ProfileType = {
  name: 'tomayuri',
  introductions: [
    '中小SIerにいる31歳。最近開発から離れがち。',
    'だいたいSpringでの開発。たまにVuejs。',
    'PS5ほしい',
  ],
}

export const profiles: ProfileType[] = [jakelizzi, tonkotyu, tomayuri]
