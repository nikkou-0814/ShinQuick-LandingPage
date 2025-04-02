"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Globe, Palette, ChevronRight, Activity, Zap, PanelRightDashed, Omega } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { SiGithub } from "react-icons/si"

export default function Home() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-100 dark:from-slate-800 dark:to-indigo-950">
        <div className="container px-4 mx-auto md:px-6 h-full flex items-center">
          <div className="grid gap-12 md:grid-cols-2 md:items-center w-full">
            <div className="space-y-8">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-slate-800 dark:text-slate-200 leading-tight">
                緊急地震速報を
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">見やすく、</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">リアルタイム</span>に
              </h1>
              <p className="max-w-[600px] text-slate-600 dark:text-slate-300 md:text-xl">
                ブラウザで動作する緊急地震速報受信アプリ
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                アクセスをすることで<a href="https://github.com/nikkou-0814/ShinQuick/blob/main/TERMS.md" target="_blank" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 underline">利用規約</a>に同意したとみなされます。
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer transition-colors"
                  onClick={() => window.open("https://shin-quick.vercel.app", "_blank")}
                >
                  今すぐアプリを開く
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-indigo-700 dark:text-white cursor-pointer transition-colors"
                  onClick={() => window.open("https://github.com/nikkou-0814/ShinQuick", "_blank")}
                >
                  <SiGithub title="GitHub" className="mr-2" size={20} />
                  GitHub
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform transition-all hover:scale-[1.02] hover:shadow-2xs">
                <Image
                  src={resolvedTheme === "dark" ? "/screenshot/dark/top.png" : "/screenshot/light/top.png"}
                  alt="App Screenshot"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transform -rotate-2 opacity-10"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-slate-800 to-transparent"></div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-200">主な機能</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg transition-all duration-200 hover:shadow-xl hover:translate-y-[-5px] bg-white dark:bg-slate-700 overflow-hidden m-0 p-0">
              <div className="h-2 bg-indigo-500"></div>
              <CardHeader>
                <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <Activity className="w-7 h-7 text-indigo-600 dark:text-white" />
                </div>
                <CardTitle className="text-xl">強震モニタの表示</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 pb-6">
                  日本全国の地震計のデータから、揺れの広がり具合を即座に可視化することができます。<span className="text-xs">※1</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all duration-200 hover:shadow-xl hover:translate-y-[-5px] bg-white dark:bg-slate-700 overflow-hidden m-0 p-0">
              <div className="h-2 bg-indigo-500"></div>
              <CardHeader>
                <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <Palette className="w-7 h-7 text-indigo-600 dark:text-white" />
                </div>
                <CardTitle className="text-xl">地図の塗りつぶし</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 pb-6">
                  細分化地域ごとの予想震度を地図上で着色し、直感的に状況を把握できるようにしております。警報発表地域を優先的に表示する設定も可能です。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all duration-200 hover:shadow-xl hover:translate-y-[-5px] bg-white dark:bg-slate-700 overflow-hidden m-0 p-0">
              <div className="h-2 bg-indigo-500"></div>
              <CardHeader>
                <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <PanelRightDashed className="w-7 h-7 text-indigo-600 dark:text-white" />
                </div>
                <CardTitle className="text-xl">サイドパネルの要素</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 pb-6">
                  必要な情報を厳選したサイドパネルを実装しており、初めて使用される方でも直感的に状況を理解することができます。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all duration-200 hover:shadow-xl hover:translate-y-[-5px] bg-white dark:bg-slate-700 overflow-hidden m-0 p-0">
              <div className="h-2 bg-indigo-500"></div>
              <CardHeader>
                <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <Omega className="w-7 h-7 text-indigo-600 dark:text-white" />
                </div>
                <CardTitle className="text-xl">PLUM法・レベル法・IPF法（1点）への対応</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 pb-6">
                  PLUM法・レベル法など、Mや深さ、震源が推定されなかった場合にも対応しています。<span className="text-xs">※2</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all duration-200 hover:shadow-xl hover:translate-y-[-5px] bg-white dark:bg-slate-700 overflow-hidden m-0 p-0">
              <div className="h-2 bg-indigo-500"></div>
              <CardHeader>
                <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <Zap className="w-7 h-7 text-indigo-600 dark:text-white" />
                </div>
                <CardTitle className="text-xl">Project DM-D.S.Sへの対応</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 pb-6">
                  緊急地震速報（予報）をProject DM-D.S.Sと契約することで、リアルタイムで情報を受信可能です。<span className="text-xs">※3</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform transition-all hover:scale-[1.02] hover:shadow-2xs">
                <Image
                  src={resolvedTheme === "dark" ? "/screenshot/dark/sc2.png" : "/screenshot/light/sc2.png"}
                  alt="App Screenshot"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transform rotate-2 opacity-10"></div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 rounded-full bg-indigo-100 dark:bg-indigo-900 shrink-0">
                    <Zap className="w-5 h-5 text-indigo-600 dark:text-white" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">リアルタイム受信</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      緊急地震速報をリアルタイムに近い状態でお届けできるよう、システムの最適化に努めています。
                      ただし、遅延や欠損、描画の失敗などが発生する可能性があります。
                      その際は、<a href="https://github.com/nikkou-0814/ShinQuick/issues/new" target="_blank" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 underline">GitHubのIssue</a>にてご報告いただけると幸いです。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 rounded-full bg-indigo-100 dark:bg-indigo-900 shrink-0">
                    <Palette className="w-5 h-5 text-indigo-600 dark:text-white" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                      見やすいレイアウト
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      ダークモード・ライトモードに対応し、shadcn/ui
                      で情報が整理されたインターフェースを採用することで、直感的に操作ができます。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 rounded-full bg-indigo-100 dark:bg-indigo-900 shrink-0">
                    <Globe className="w-5 h-5 text-indigo-600 dark:text-white" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">オープンソース</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      このプロジェクトはMITライセンスでGitHubで公開されており、誰でも自由に閲覧、開発、改善提案などが可能です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="overflow-hidden bg-white dark:bg-slate-700 rounded-lg shadow-xl border border-slate-200 dark:border-slate-600">
              <div className="px-6 py-4 bg-yellow-200 dark:bg-yellow-800 border-b border-yellow-300 dark:border-yellow-900">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-yellow-600 dark:text-yellow-400" />
                  注意事項
                </h2>
              </div>

              <div className="p-8">
                <ul className="list-disc pl-5 space-y-4 text-slate-700 dark:text-slate-200">
                  <li>
                    本アプリケーションは気象庁・防災科学技術研究所とは一切関係のない、個人開発のソフトウェアです。
                  </li>
                  <li>
                    各関係機関への問い合わせは絶対にお控えください。サービスの継続に支障をきたす可能性があります。
                  </li>
                  <li>
                    情報に遅延や誤差が発生する可能性があるため、必ず気象庁や自治体が発表する正確な情報を確認してください。
                  </li>
                  <li>本アプリケーションの使用に起因するいかなる損害についても、開発者は一切の責任を負いかねます。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-200">よくある質問</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "アプリのインストールは必要ですか？",
                  answer: "いいえ、本アプリはWebで動作するアプリケーションなので、インストール不要でブラウザから直接利用できます。",
                },
                {
                  question: "モバイルでも利用できますか？",
                  answer: "はい、利用可能です。ただし、現在はデスクトップ向けに最適化されているため、デスクトップでの利用をおすすめします。",
                },
                {
                  question: "利用料金はかかりますか？",
                  answer: "いいえ、基本的には無料です。ただし、現状では情報源をDM-D.S.Sに頼っているため、DM-D.S.Sの緊急地震（予報）契約者のみ緊急地震速報を受信できます。今後、無料のサービスにも対応予定です。",
                },
                {
                  question: "どのような情報が表示されますか？",
                  answer: "震源地、マグニチュード、深さ、発生時間、推定最大震度、推定最大長周期地震動階級などが表示されます。",
                },
                {
                  question: "利用にはログインが必要ですか？",
                  answer: "いいえ、本アプリはログイン不要でご利用いただけます。個人情報の入力やアカウント作成も必要ありません。ただし、緊急地震速報の受信にDM-D.S.Sを利用する場合は、認証の際にDM-D.S.S側でログインしている必要があります（アプリ側ではログイン不要です）。",
                },
                {
                  question: "複数の端末で同時に利用できますか？",
                  answer: "はい、複数の端末で同時にご利用いただけます。DM-D.S.Sをご利用の場合は、契約されている最大同時接続数までとなります。",
                },
                {
                  question: "通知に対応していますか？",
                  answer: "いいえ、現在は通知には対応していませんが、将来的に実装を検討中です。"
                },
                {
                  question: "アップデートは自動ですか？",
                  answer: "いいえ、更新のために再読み込みが必要です。ホスティングにVercelを使用しているため、最新バージョンがデプロイされると、手動でページを再読み込みすることで反映されます。"
                },
                {
                  question: "利用データは保存されますか？",
                  answer: "いいえ、個人情報や利用ログなどを一切保存していません。設定はローカルストレージに保存されますが、外部に送信されることはありません。"
                }
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-md"
                >
                  <AccordionTrigger className="text-lg font-medium text-slate-800 dark:text-slate-200 px-6 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-300 px-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container px-4 mx-auto text-center md:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4 tracking-tight leading-tight">
              緊急地震速報を
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">見やすく、リアルタイムに</span>
            </h2>
            <p className="mb-8 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              防災・減災のための情報収集をスマートに。
              日常的な緊急地震速報の確認を、より見やすく、より使いやすく。
              インストール不要で、すぐにご利用いただけます。
            </p>
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer transition-colors"
              onClick={() => window.open("https://shin-quick.vercel.app", "_blank")}
            >
              今すぐアプリを開く
            </Button>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mx-auto space-y-2">
            <p className="text-xs text-slate-400 dark:text-slate-500 text-left">
              ※1: 取得元の利用条件更新によっては、使用できなくなる可能性があります。
            </p>

            <p className="text-xs text-slate-400 dark:text-slate-500 text-left">
              ※2: PLUM法、レベル法、IPF法（1点）は、デフォルトでは表示しません。利用者が性質を理解したうえで設定を変更し、利用することができます。
            </p>

            <p className="text-xs text-slate-400 dark:text-slate-500 text-left">
              ※3: 現状では情報源をProject DM-D.S.Sに頼っているため無料では緊急地震速報を受信できません。使用する場合は緊急地震（予報）を契約していただく形になります
            </p>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-slate-800 dark:text-white">ShinQuick</span>
              <span className="text-sm">震Quick</span>
            </div>
            <div className="text-sm">&copy; {new Date().getFullYear()} nikkou-0814 All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
