import { describe, expect, it } from "vitest";
import { greet } from "./greeting";

describe("greet", () => {
  it("名前を渡すとその名前で挨拶を返す", () => {
    expect(greet("Rise")).toBe("Hello, Rise!");
  });

  it("空文字を渡すと World で挨拶を返す", () => {
    expect(greet("")).toBe("Hello, World!");
  });

  it("空白だけを渡しても World で挨拶を返す", () => {
    expect(greet("   ")).toBe("Hello, World!");
  });

  it("前後の空白を取り除いて挨拶を返す", () => {
    expect(greet("  Rise  ")).toBe("Hello, Rise!");
  });
});
