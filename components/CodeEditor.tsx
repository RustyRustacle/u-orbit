"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CodeEditorProps {
  title: string;
  description: string;
  starterCode: string;
  expectedPatterns: string[];
  hints: string[];
  solution: string;
}

const SOLIDITY_KEYWORDS = [
  "pragma", "solidity", "contract", "function", "returns", "return",
  "public", "private", "internal", "external", "view", "pure", "payable",
  "memory", "storage", "calldata", "uint256", "uint8", "int256", "string",
  "address", "bool", "bytes", "bytes32", "mapping", "struct", "enum",
  "event", "emit", "modifier", "require", "constructor", "import", "from",
  "is", "if", "else", "for", "while", "true", "false", "indexed",
];

function highlightSolidity(code: string): string {
  let html = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Comments
  html = html.replace(/(\/\/.*)/g, '<span class="code-comment">$1</span>');

  // Strings
  html = html.replace(/("(?:[^"\\]|\\.)*")/g, '<span class="code-string">$1</span>');

  // Numbers
  html = html.replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>');

  // Keywords
  const kwRegex = new RegExp(`\\b(${SOLIDITY_KEYWORDS.join("|")})\\b`, "g");
  html = html.replace(kwRegex, '<span class="code-keyword">$1</span>');

  // SPDX
  html = html.replace(/(SPDX-License-Identifier:\s*\S+)/g, '<span class="code-comment">$1</span>');

  return html;
}

export default function CodeEditor({
  title,
  description,
  starterCode,
  expectedPatterns,
  hints,
  solution,
}: CodeEditorProps) {
  const [code, setCode] = useState(starterCode);
  const [attempts, setAttempts] = useState(0);
  const [result, setResult] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  const syncScroll = useCallback(() => {
    if (textareaRef.current && preRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop;
      preRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  }, []);

  useEffect(() => {
    // Handle tab key in textarea
    const textarea = textareaRef.current;
    if (!textarea) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newValue = code.substring(0, start) + "    " + code.substring(end);
        setCode(newValue);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 4;
        }, 0);
      }
    };
    textarea.addEventListener("keydown", handleKeyDown);
    return () => textarea.removeEventListener("keydown", handleKeyDown);
  }, [code]);

  const runCode = () => {
    const failedPatterns: string[] = [];

    for (const pattern of expectedPatterns) {
      const regex = new RegExp(pattern, "i");
      if (!regex.test(code)) {
        failedPatterns.push(pattern);
      }
    }

    if (failedPatterns.length === 0) {
      setResult("success");
      setErrorMessage("");
    } else {
      setResult("error");
      setAttempts((prev) => prev + 1);
      const missing = Math.min(failedPatterns.length, expectedPatterns.length);
      const total = expectedPatterns.length;
      const passed = total - missing;
      setErrorMessage(
        `Compilation failed: ${passed}/${total} checks passed. Review your code and try again.`
      );
    }
  };

  const resetCode = () => {
    setCode(starterCode);
    setResult("idle");
    setErrorMessage("");
  };

  const revealHint = () => {
    setShowHint(true);
  };

  const nextHint = () => {
    if (currentHintIndex < hints.length - 1) {
      setCurrentHintIndex((prev) => prev + 1);
    }
  };

  const lines = code.split("\n");

  return (
    <div className="mt-12 border-t border-white/10 pt-12">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🏆</span>
          <h3 className="font-serif text-2xl font-bold text-text-primary not-italic normal-case tracking-normal">
            {title}
          </h3>
        </div>
        <p className="text-text-secondary">{description}</p>
      </div>

      {/* Editor */}
      <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1117]">
        {/* Editor toolbar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="text-text-secondary text-xs ml-3 font-mono">challenge.sol</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={resetCode}
              className="text-xs px-3 py-1 rounded-md bg-white/5 text-text-secondary hover:bg-white/10 transition-colors cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Code area */}
        <div className="relative overflow-auto max-h-[500px]" style={{ minHeight: "300px" }}>
          {/* Line numbers */}
          <div className="absolute left-0 top-0 w-12 bg-[#0d1117] border-r border-white/5 text-right select-none z-10 font-mono text-xs text-text-secondary/40 pt-4 pb-4">
            {lines.map((_, i) => (
              <div key={i} className="px-2 leading-6" style={{ height: "24px" }}>
                {i + 1}
              </div>
            ))}
          </div>

          {/* Syntax highlighted overlay */}
          <pre
            ref={preRef}
            className="absolute top-0 left-12 right-0 p-4 font-mono text-sm leading-6 pointer-events-none whitespace-pre overflow-hidden text-text-primary"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: highlightSolidity(code) }}
          />

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setResult("idle");
            }}
            onScroll={syncScroll}
            className="relative w-full p-4 pl-16 font-mono text-sm leading-6 bg-transparent text-transparent caret-white resize-none outline-none z-[1]"
            style={{ minHeight: `${Math.max(lines.length * 24 + 32, 300)}px` }}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
          />
        </div>
      </div>

      {/* Action bar */}
      <div className="flex flex-wrap items-center gap-4 mt-4">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={runCode}
          className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-shadow cursor-pointer"
        >
          ▶ Run Code
        </motion.button>

        {attempts >= 2 && !showHint && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={revealHint}
            className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-white cursor-pointer"
          >
            💡 Reveal Clue
          </motion.button>
        )}

        {attempts >= 4 && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowSolution(!showSolution)}
            className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-red-500 to-pink-500 text-white cursor-pointer"
          >
            {showSolution ? "Hide Solution" : "👁️ Show Solution"}
          </motion.button>
        )}

        {result !== "idle" && (
          <span className={`text-sm font-medium ${result === "success" ? "text-green-400" : "text-red-400"}`}>
            {result === "success" ? "✅ All checks passed!" : `❌ Attempt ${attempts}`}
          </span>
        )}
      </div>

      {/* Result messages */}
      <AnimatePresence>
        {result === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30"
          >
            <p className="text-green-400 font-semibold">
              🎉 Congratulations! Your code passed all validation checks!
            </p>
            <p className="text-green-400/70 text-sm mt-1">
              You can now proceed to the next module.
            </p>
          </motion.div>
        )}

        {result === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
          >
            <p className="text-red-400 font-mono text-sm">{errorMessage}</p>
            {attempts < 2 && (
              <p className="text-red-400/60 text-xs mt-2">
                After 2 failed attempts, you can reveal a clue.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint panel */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 overflow-hidden"
          >
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-amber-400 font-semibold text-sm">
                  💡 Clue {currentHintIndex + 1} of {hints.length}
                </span>
                {currentHintIndex < hints.length - 1 && (
                  <button
                    onClick={nextHint}
                    className="text-xs px-3 py-1 rounded bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition-colors cursor-pointer"
                  >
                    Next Clue →
                  </button>
                )}
              </div>
              <p className="text-amber-200/80 text-sm font-mono">
                {hints[currentHintIndex]}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Solution panel */}
      <AnimatePresence>
        {showSolution && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 overflow-hidden"
          >
            <div className="rounded-xl overflow-hidden border border-purple-500/30 bg-[#0d1117]">
              <div className="px-4 py-2 bg-purple-500/10 border-b border-purple-500/20">
                <span className="text-purple-400 font-semibold text-sm">📖 Solution</span>
              </div>
              <pre className="p-4 font-mono text-sm leading-6 text-text-primary overflow-x-auto">
                <code dangerouslySetInnerHTML={{ __html: highlightSolidity(solution) }} />
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
