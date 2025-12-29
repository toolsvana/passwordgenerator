import type { Metadata } from 'next';
import PasswordGeneratorTool from './components/PasswordGeneratorTool';

export const metadata: Metadata = {
  title: 'Password Generator — Create Strong, Secure Passwords',
  description: 'Generate strong, random passwords with customizable options. Cryptographically secure, browser-based password creation.',
  keywords: 'password generator, strong password, secure password, random password, password maker',
};

const featurePillars = [
  { title: 'Cryptographically secure', description: 'Uses Web Crypto API for truly random password generation with maximum security.' },
  { title: 'Fully customizable', description: 'Control length, character types, and complexity to match any password requirements.' },
  { title: 'Privacy-first', description: 'All generation happens in your browser. Passwords never leave your device.' },
];

const seoContent = [
  {
    title: 'Why use strong passwords',
    body: [
      'Weak passwords are the leading cause of account breaches. Simple passwords like "password123" or "qwerty" can be cracked in seconds using automated tools. Strong passwords with mixed character types and sufficient length resist brute-force attacks and keep your accounts secure.',
      'Password reuse across multiple accounts creates a domino effect when one account is compromised. If hackers obtain your password from a data breach, they try it on other popular services. Using unique passwords for each account limits damage to a single compromised service.',
      'Modern computing power makes short passwords vulnerable. A 6-character password can be cracked in minutes. An 8-character password takes hours. A 16-character password with mixed types takes centuries with current technology. Length is the most important factor in password strength.',
      'Credential stuffing attacks use stolen username-password combinations from data breaches to access other accounts. These automated attacks succeed because people reuse passwords. Strong, unique passwords for each account eliminate this vulnerability.',
      'Two-factor authentication adds security but does not eliminate the need for strong passwords. Some 2FA methods can be bypassed. Strong passwords remain your first line of defense against unauthorized access.',
    ],
  },
  {
    title: 'Understanding password security',
    body: [
      'Password entropy measures randomness and unpredictability. Higher entropy means more possible combinations and greater security. A random 16-character password with uppercase, lowercase, numbers, and symbols has enormous entropy, making it practically unbreakable.',
      'Dictionary attacks try common words and phrases from dictionaries and leaked password databases. Passwords like "sunshine" or "football" fail immediately against these attacks. Random character combinations resist dictionary attacks completely.',
      'Brute-force attacks try every possible combination systematically. Attack speed depends on password length and character set size. Each additional character exponentially increases the time required to crack the password.',
      'Rainbow tables are precomputed hash databases that speed up password cracking. Salted hashes (used by modern systems) defeat rainbow tables, but weak passwords remain vulnerable. Strong passwords resist all attack methods.',
      'Password managers solve the problem of remembering multiple strong passwords. They generate, store, and auto-fill unique passwords for each account. Using a password manager with one strong master password is more secure than reusing weak passwords.',
    ],
  },
  {
    title: 'Common password generation scenarios',
    body: [
      'New account creation requires strong passwords from the start. Using a [Password Generator] ensures your account begins with maximum security. Many people start with weak passwords intending to change them later but never do.',
      'Password reset situations provide opportunities to upgrade security. When forced to change a password, use a generator to create a strong replacement. This is especially important after security breaches or suspicious activity.',
      'Work accounts often have specific password requirements: minimum length, character type requirements, and expiration policies. Password generators can be configured to meet these requirements while maintaining randomness.',
      'Shared accounts in teams need strong passwords that multiple people can access. Generate a strong password, store it in a password manager, and share it securely with team members. Never share passwords via email or messaging apps.',
      'Temporary passwords for guests or contractors should be strong but easily revocable. Generate a unique password, share it securely, and change it immediately after the temporary access period ends.',
    ],
  },
  {
    title: 'Best practices for password management',
    body: [
      'Never write passwords on paper or store them in plain text files. Paper can be lost or stolen. Text files can be accessed by malware. Use a password manager with encryption to store passwords securely.',
      'Change passwords immediately after suspected breaches. If a service announces a data breach or you notice suspicious activity, generate a new password right away. Do not wait for forced password resets.',
      'Avoid password patterns and keyboard sequences. Passwords like "qwerty123" or "asdfgh" are common and easily guessed. Random generation eliminates these predictable patterns.',
      'Use different password lengths for different security levels. Critical accounts (email, banking) deserve 20+ character passwords. Less critical accounts can use 16 characters. Never use less than 12 characters.',
      'Enable password breach monitoring in your password manager. These services alert you when your passwords appear in data breaches, allowing you to change them before attackers exploit them.',
    ],
  },
];

const faqs = [
  { question: 'How long should my password be?', answer: 'Minimum 16 characters for good security. 20+ characters for critical accounts like email and banking. Longer is always better.' },
  { question: 'Should I include symbols in my password?', answer: 'Yes. Symbols increase the character set size, making passwords harder to crack. Most services accept symbols in passwords.' },
  { question: 'How often should I change my passwords?', answer: 'Change passwords immediately after breaches or suspicious activity. Otherwise, strong unique passwords do not need regular changes.' },
  { question: 'Are generated passwords safe?', answer: 'Yes. This tool uses the Web Crypto API, which provides cryptographically secure random numbers. Generated passwords are completely unpredictable.' },
];

export default function Home() {
  return (
    <div className="bg-grid-slate min-h-screen">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex flex-col gap-1">
            <a className="text-2xl font-semibold tracking-tight text-white" href="/">Password Generator</a>
            <p className="text-sm text-slate-400">Create strong, secure passwords</p>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <a className="transition hover:text-white" href="/">Home</a>
            <a className="transition hover:text-white" href="mailto:support@lightning.studio">Support</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <PasswordGeneratorTool />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featurePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 space-y-12">
          <h2 className="text-3xl font-semibold text-white">In-depth guide</h2>
          {seoContent.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-xl font-semibold text-white">{section.title}</h3>
              <div className="space-y-4">
                {section.body.map((paragraph, idx) => {
                  const linkMatch = paragraph.match(/\[Password Generator\]/);
                  if (linkMatch) {
                    const parts = paragraph.split('[Password Generator]');
                    return (
                      <p key={idx} className="leading-relaxed text-slate-300">
                        {parts[0]}
                        <a href="https://toolsvana.com/tool/password-generator" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-300">Password Generator</a>
                        {parts[1]}
                      </p>
                    );
                  }
                  return <p key={idx} className="leading-relaxed text-slate-300">{paragraph}</p>;
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="mt-16 border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        <p>All processing happens locally in your browser. Powered by Lightning Studio.</p>
      </footer>
    </div>
  );
}
