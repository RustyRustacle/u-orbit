"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { curriculum } from "@/data/curriculum";
import CodeEditor from "@/components/CodeEditor";
import WalletGate from "@/components/WalletGate";

export default function ModulePage() {
  const params = useParams();
  const moduleId = params.moduleId as string;
  const mod = curriculum.find((m) => m.id === moduleId);
  const [activeLesson, setActiveLesson] = useState(0);

  if (!mod) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4 not-italic normal-case tracking-normal">
            Module Not Found
          </h1>
          <Link href="/learn" className="text-orbit-cyan hover:underline">
            ← Back to Learning Path
          </Link>
        </div>
      </div>
    );
  }

  const currentLesson = mod.lessons[activeLesson];
  const modIndex = curriculum.findIndex((m) => m.id === moduleId);
  const prevModule = modIndex > 0 ? curriculum[modIndex - 1] : null;
  const nextModule = modIndex < curriculum.length - 1 ? curriculum[modIndex + 1] : null;

  return (
    <WalletGate>
      <div className="min-h-screen pt-28 pb-20 relative">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-orbit-purple/5 to-transparent pointer-events-none" />

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-sm text-text-secondary mb-8"
          >
            <Link href="/learn" className="hover:text-orbit-cyan transition-colors">
              Learning Path
            </Link>
            <span>/</span>
            <span className="text-text-primary">Module {mod.number}</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-80 shrink-0"
            >
              <div className="glass-panel p-6 lg:sticky lg:top-28">
                {/* Module header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{mod.icon}</span>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase" style={{ color: mod.color }}>
                      Module {mod.number}
                    </p>
                    <h2 className="font-serif text-lg font-bold text-text-primary not-italic normal-case tracking-normal leading-snug">
                      {mod.title}
                    </h2>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10 mb-4" />

                {/* Lesson list */}
                <nav className="space-y-1">
                  {mod.lessons.map((lesson, idx) => (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLesson(idx)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
                        activeLesson === idx
                          ? "bg-white/10 text-text-primary border border-white/10"
                          : "text-text-secondary hover:bg-white/5 hover:text-text-primary border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                            activeLesson === idx
                              ? "bg-orbit-cyan/20 text-orbit-cyan"
                              : "bg-white/5 text-text-secondary"
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="truncate">{lesson.title}</span>
                      </div>
                    </button>
                  ))}

                  {/* Challenge link */}
                  <button
                    onClick={() => setActiveLesson(-1)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
                      activeLesson === -1
                        ? "bg-orbit-purple/10 text-orbit-purple border border-orbit-purple/20"
                        : "text-text-secondary hover:bg-white/5 hover:text-text-primary border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full text-xs flex items-center justify-center shrink-0 bg-orbit-purple/10 text-orbit-purple">
                        🏆
                      </span>
                      <span className="truncate font-medium">Final Challenge</span>
                    </div>
                  </button>
                </nav>
              </div>
            </motion.aside>

            {/* Main content */}
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 min-w-0"
            >
              <AnimatePresence mode="wait">
                {activeLesson >= 0 ? (
                  <motion.div
                    key={currentLesson.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="glass-panel p-8 md:p-10">
                      <h1 className="font-serif text-3xl md:text-4xl font-bold text-text-primary not-italic normal-case tracking-normal mb-3">
                        {currentLesson.title}
                      </h1>
                      <p className="text-text-secondary mb-8">
                        {currentLesson.description}
                      </p>

                      {/* Content renderer */}
                      <div className="lesson-content">
                        <LessonRenderer content={currentLesson.content} />
                      </div>

                      {/* Navigation */}
                      <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
                        <button
                          onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))}
                          disabled={activeLesson === 0}
                          className="text-sm text-text-secondary hover:text-text-primary disabled:opacity-30 transition-colors cursor-pointer disabled:cursor-not-allowed"
                        >
                          ← Previous Lesson
                        </button>

                        {activeLesson < mod.lessons.length - 1 ? (
                          <button
                            onClick={() => setActiveLesson(activeLesson + 1)}
                            className="text-sm text-orbit-cyan hover:text-orbit-cyan/80 transition-colors cursor-pointer"
                          >
                            Next Lesson →
                          </button>
                        ) : (
                          <button
                            onClick={() => setActiveLesson(-1)}
                            className="px-4 py-2 rounded-lg text-sm bg-orbit-purple/10 text-orbit-purple border border-orbit-purple/20 hover:bg-orbit-purple/20 transition-colors cursor-pointer"
                          >
                            🏆 Take the Challenge →
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="challenge"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="glass-panel p-8 md:p-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-bold tracking-widest uppercase"
                          style={{ color: mod.color }}
                        >
                          Module {mod.number}
                        </span>
                        <span className="text-text-secondary/40 text-xs">•</span>
                        <span className="text-text-secondary/60 text-xs">Final Challenge</span>
                      </div>

                      <h1 className="font-serif text-3xl md:text-4xl font-bold text-text-primary not-italic normal-case tracking-normal mb-2">
                        {mod.challenge.title}
                      </h1>

                      <p className="text-text-secondary mb-4">
                        Complete this coding challenge to demonstrate your understanding of Module {mod.number}.
                      </p>

                      <CodeEditor
                        title={mod.challenge.title}
                        description={mod.challenge.description}
                        starterCode={mod.challenge.starterCode}
                        expectedPatterns={mod.challenge.expectedPatterns}
                        hints={mod.challenge.hints}
                        solution={mod.challenge.solution}
                      />

                      {/* Module navigation */}
                      <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
                        <button
                          onClick={() => setActiveLesson(mod.lessons.length - 1)}
                          className="text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                        >
                          ← Back to Lessons
                        </button>

                        <div className="flex gap-3">
                          {prevModule && (
                            <Link
                              href={`/learn/${prevModule.id}`}
                              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                            >
                              ← Module {prevModule.number}
                            </Link>
                          )}
                          {nextModule && (
                            <Link
                              href={`/learn/${nextModule.id}`}
                              className="px-4 py-2 rounded-lg text-sm bg-orbit-cyan/10 text-orbit-cyan border border-orbit-cyan/20 hover:bg-orbit-cyan/20 transition-colors"
                            >
                              Module {nextModule.number} →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.main>
          </div>
        </div>
      </div>
    </WalletGate>
  );
}

// Simple lesson content renderer that handles markdown-like syntax
function LessonRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code blocks
    if (line.trim().startsWith("```")) {
      const lang = line.trim().replace("```", "").trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre
          key={key++}
          className="my-4 p-4 rounded-xl bg-[#0d1117] border border-white/10 overflow-x-auto font-mono text-sm leading-6 text-text-primary"
        >
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="font-serif text-2xl font-bold text-text-primary mt-10 mb-4 not-italic normal-case tracking-normal"
        >
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="font-serif text-xl font-bold text-text-primary mt-8 mb-3 not-italic normal-case tracking-normal"
        >
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // H4
    if (line.startsWith("#### ")) {
      elements.push(
        <h4
          key={key++}
          className="font-serif text-lg font-semibold text-text-primary mt-6 mb-2 not-italic normal-case tracking-normal"
        >
          {line.slice(5)}
        </h4>
      );
      i++;
      continue;
    }

    // Horizontal rule
    if (line.trim() === "---") {
      elements.push(<hr key={key++} className="border-white/10 my-8" />);
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={key++}
          className="border-l-4 border-orbit-cyan/50 pl-4 my-4 text-text-secondary italic"
        >
          {renderInline(line.slice(2))}
        </blockquote>
      );
      i++;
      continue;
    }

    // Table
    if (line.includes("|") && line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].includes("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={key++} className="overflow-x-auto my-4">
          <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-white/5">
                {tableLines[0]
                  .split("|")
                  .filter(Boolean)
                  .map((cell, ci) => (
                    <th
                      key={ci}
                      className="px-4 py-2 text-left text-text-primary font-semibold border-b border-white/10"
                    >
                      {cell.trim()}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {tableLines.slice(2).map((row, ri) => (
                <tr key={ri} className="border-b border-white/5 hover:bg-white/[0.02]">
                  {row
                    .split("|")
                    .filter(Boolean)
                    .map((cell, ci) => (
                      <td key={ci} className="px-4 py-2 text-text-secondary">
                        {cell.trim()}
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="my-3 space-y-1.5">
          {listItems.map((li, idx) => (
            <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
              <span className="text-orbit-cyan mt-1.5 shrink-0">•</span>
              <span>{renderInline(li)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Bold paragraph
    if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="text-text-primary font-semibold my-3 text-sm">
          {line.slice(2, -2)}
        </p>
      );
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={key++} className="text-text-secondary my-3 text-sm leading-relaxed">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}

// Renders inline markdown (bold, code, links)
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let idx = 0;

  while (remaining.length > 0) {
    // Inline code
    const codeMatch = remaining.match(/`([^`]+)`/);
    // Bold
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
    // Link
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

    const matches: { index: number; length: number; node: React.ReactNode; raw: RegExpMatchArray }[] = [];

    if (codeMatch && codeMatch.index !== undefined) {
      matches.push({
        index: codeMatch.index,
        length: codeMatch[0].length,
        node: <code key={`c${idx++}`} className="px-1.5 py-0.5 rounded bg-white/10 text-orbit-cyan font-mono text-xs">{codeMatch[1]}</code>,
        raw: codeMatch,
      });
    }
    if (boldMatch && boldMatch.index !== undefined) {
      matches.push({
        index: boldMatch.index,
        length: boldMatch[0].length,
        node: <strong key={`b${idx++}`} className="text-text-primary font-semibold">{boldMatch[1]}</strong>,
        raw: boldMatch,
      });
    }
    if (linkMatch && linkMatch.index !== undefined) {
      matches.push({
        index: linkMatch.index,
        length: linkMatch[0].length,
        node: (
          <a key={`a${idx++}`} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-orbit-cyan hover:underline">
            {linkMatch[1]}
          </a>
        ),
        raw: linkMatch,
      });
    }

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    // Take the first occurring match
    matches.sort((a, b) => a.index - b.index);
    const first = matches[0];

    if (first.index > 0) {
      parts.push(remaining.slice(0, first.index));
    }
    parts.push(first.node);
    remaining = remaining.slice(first.index + first.length);
  }

  return <>{parts}</>;
}
