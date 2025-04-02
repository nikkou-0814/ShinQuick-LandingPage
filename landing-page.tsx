"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Bell, Settings, Monitor, Globe, Clock, ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { SiGithub } from "react-icons/si"

export default function LandingPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* ナビゲーションバー */}
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-800 border-b shadow-sm">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-slate-800 dark:text-white">ShinQuick</span>
            <span className="text-sm text-gray-500 dark:text-gray-300">震Quick</span>
          </div>
          <div className="flex gap-3">
            <Button
              variant="default"
              className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer transition-colors"
              onClick={() => window.open("https://shin-quick.vercel.app", "_blank")}
            >
              アプリを開く
            </Button>
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "ライトモード" : "ダークモード"}
            </Button>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-800 dark:to-indigo-900">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-slate-800 dark:text-slate-200 leading-tight">
                緊急地震速報を、
                <br />
                <span className="text-indigo-600 dark:text-indigo-400">見やすく、</span>
                <br />
                <span className="text-indigo-600 dark:text-indigo-400">リアルタイム</span>に
              </h1>
              <p className="max-w-[600px] text-slate-600 dark:text-slate-300 md:text-xl">
                ブラウザで動作する緊急地震速報受信アプリ
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                アクセスをすることで利用規約に同意したとみなされます。
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
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
                <Image
                  src={theme === "dark" ? "/screenshot/dark/top.png" : "/screenshot/light/top.png"}
                  alt="ShinQuick アプリのスクリーンショット"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transform -rotate-2 opacity-10"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
      </section>

      {/* 主な機能セクション */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-200">主な機能</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg transition-all duration-200 hover:shadow-xl hover:translate-y-[-5px] bg-white dark:bg-slate-700 overflow-hidden">
              <div className="h-2 bg-indigo-500"></div>
              <CardHeader>
                <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <Bell className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle className="text-xl">リアルタイム通知</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  緊急地震速報をリアルタイムで受信し、即座に表示します。大切な情報を見逃しません。
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg transition-all duration-200 hover:shadow-xl hover:translate-y-[-5px] bg-white dark:bg-slate-700 overflow-hidden">
              <div className="h-2 bg-indigo-500"></div>
              <CardHeader>
                <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <Monitor className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle className="text-xl">見やすいインターフェース</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  重要な情報を一目で把握できる、シンプルで見やすいデザイン。
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg transition-all duration-200 hover:shadow-xl hover:translate-y-[-5px] bg-white dark:bg-slate-700 overflow-hidden">
              <div className="h-2 bg-indigo-500"></div>
              <CardHeader>
                <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <Settings className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle className="text-xl">カスタマイズ機能</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  表示方法など、ユーザーのニーズに合わせた柔軟なカスタマイズが可能です。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
                <Image
                  src={theme === "dark" ? "/screenshot/dark/sc2.png" : "/screenshot/light/sc2.png"}
                  alt="ShinQuick アプリの機能画面"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transform rotate-2 opacity-10"></div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
                見やすい
                <br />
                レイアウト
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 rounded-full bg-indigo-100 dark:bg-indigo-900 shrink-0">
                    <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">インストール不要</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      専用アプリのインストールは不要。ブラウザがあればすぐに利用開始できます。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 rounded-full bg-indigo-100 dark:bg-indigo-900 shrink-0">
                    <Monitor className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">見やすいレイアウト</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      最適な情報配置と直感的なデザインで、重要な情報を瞬時に把握できます。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 rounded-full bg-indigo-100 dark:bg-indigo-900 shrink-0">
                    <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">常時アクセス可能</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      デスクトップで常時表示しておくことで、いつでも最新の地震情報を確認できます。
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
            <div className="overflow-hidden bg-white dark:bg-slate-700 rounded-lg shadow-xl border border-slate-200 dark:border-slate-600 transform transition-transform hover:scale-[1.01]">
              {/* カードヘッダー */}
              <div className="px-6 py-4 bg-yellow-200 dark:bg-yellow-800 border-b border-yellow-300 dark:border-yellow-900">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-yellow-600 dark:text-yellow-400" />
                  注意事項
                </h2>
              </div>

              {/* カードコンテンツ */}
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

      {/* よくある質問セクション */}
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
                  answer: "いいえ、ShinQuickはWebアプリなので、インストール不要でブラウザから直接利用できます。",
                },
                {
                  question: "モバイルでも利用できますか？",
                  answer:
                    "はい、利用可能です。ただし、現在はデスクトップ向けに最適化されているため、デスクトップでの利用をおすすめします。",
                },
                {
                  question: "利用料金はかかりますか？",
                  answer:
                    "はい、現状では情報源をProject DM-D.S.Sに頼っているため無料では緊急地震速報を受信できません。月額1650円をProject DM-D.S.Sにお支払いいただくことになります。",
                },
                {
                  question: "どのような情報が表示されますか？",
                  answer:
                    "震源地、マグニチュード、深さ、発生時間、推定最大震度、推定最大長周期地震動階級などが表示されます。",
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-md"
                >
                  <AccordionTrigger className="text-lg font-medium text-slate-800 dark:text-slate-200 px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-300 px-6 pb-4 pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container px-4 mx-auto text-center md:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">地震情報を、見やすく、リアルタイムに</h2>
            <p className="mb-8 text-indigo-100 text-lg">
              いつ起こるかわからない地震に備えて、今すぐShinQuickを利用開始しましょう。インストール不要で、すぐに利用できます。
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              onClick={() => window.open("https://shin-quick.vercel.app", "_blank")}
            >
              今すぐアプリを開く
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-10 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700">
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

