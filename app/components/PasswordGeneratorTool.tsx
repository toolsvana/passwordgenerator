'use client';
import { useState } from 'react';

export default function PasswordGeneratorTool() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let chars = '';
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;
    
    if (chars === '') chars = lowercase;
    
    let result = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
      result += chars[array[i] % chars.length];
    }
    setPassword(result);
    setCopied(false);
  };

  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="glass-panel p-6 sm:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>Browser based
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Password Generator</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">Generate strong, secure passwords with customizable options. Everything happens in your browser—instant and private.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          <div className="flex flex-col gap-4">
            {password && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center justify-between gap-4">
                  <code className="flex-1 break-all text-lg font-mono text-white">{password}</code>
                  <button onClick={copyPassword} className="rounded-full border border-white/15 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-cyan-400/70 hover:bg-cyan-400/10">
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            )}
            <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <div>
                <label className="mb-2 flex items-center justify-between text-sm font-medium text-slate-300">
                  <span>Length: {length}</span>
                </label>
                <input type="range" min="8" max="64" value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full"/>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-slate-300">
                  <input type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} className="rounded"/>
                  Uppercase (A-Z)
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-300">
                  <input type="checkbox" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} className="rounded"/>
                  Lowercase (a-z)
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-300">
                  <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="rounded"/>
                  Numbers (0-9)
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-300">
                  <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} className="rounded"/>
                  Symbols (!@#$...)
                </label>
              </div>
              <button onClick={generatePassword} className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold uppercase tracking-wide text-white transition hover:opacity-90">
                Generate Password
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-5">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Security tips</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Use 16+ characters</li>
                <li>• Mix character types</li>
                <li>• Unique per account</li>
                <li>• Use password manager</li>
                <li>• Enable 2FA when possible</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-xs text-slate-400">
              <strong className="text-slate-300">Privacy first:</strong> Passwords are generated locally using cryptographically secure random numbers. Nothing is sent to any server.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
