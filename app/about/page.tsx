import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 480, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 24 }}>このサイトについて</h1>

      <p style={{ marginTop: 16, lineHeight: 1.8 }}>
        Next.js の学習用に作っている練習プロジェクトです。
        App Router、テスト、CI の仕組みを少しずつ試しています。
      </p>

      <h2 style={{ fontSize: 18, marginTop: 24 }}>できること</h2>
      <ul style={{ marginTop: 8, lineHeight: 1.8 }}>
        <li>Todo リストの追加・完了・削除</li>
        <li>Vitest による自動テスト</li>
        <li>push すると GitHub Actions がテストを実行</li>
      </ul>

      <h2 style={{ fontSize: 18, marginTop: 24 }}>ページ</h2>
      <ul style={{ marginTop: 8, lineHeight: 1.8 }}>
        <li>
          <Link href="/">トップ</Link>
        </li>
        <li>
          <Link href="/todo">Todo リスト</Link>
        </li>
      </ul>
    </main>
  );
}
