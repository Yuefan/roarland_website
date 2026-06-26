import Image from 'next/image'

const CN = { fontFamily: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif' }

const footerLinks = {
  '产品': [
    { label: '智能按摩坐垫', href: '#cases' },
    { label: 'AI割草机器人', href: '#cases' },
  ],
  '公司': [
    { label: '关于我们', href: '#about' },
    { label: '核心技术', href: '#tech' },
    { label: '新闻动态', href: '#news' },
    { label: '加入我们', href: '#' },
  ],
}

const contactItems = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    text: 'hi@roarland.net',
    href: 'mailto:hi@roarland.net',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l1.06-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    text: '+86 18918119160',
    href: 'tel:+8618918119160',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: '上海市祁连山路111弄18号楼109室',
    href: null,
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] border-t-[3px] border-brand-red">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-10">

        {/* Top grid */}
        <div className="grid md:grid-cols-5 gap-10 pb-12 border-b border-white/10 mb-8">

          {/* Brand column — 2 cols */}
          <div className="md:col-span-2">
            <Image
              src="/logos/ROARLAND-Logo5-transparent.png"
              alt="ROARLAND"
              width={240}
              height={56}
              className="h-10 w-auto mb-5"
              unoptimized
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-white/60 leading-relaxed" style={{ ...CN, fontSize: '0.9rem' }}>
              AI for the home.<br />
              让每一个家庭都能享受<br />
              智能科技带来的美好生活。
            </p>
          </div>

          {/* 产品 */}
          <div>
            <h4 className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-white/40 mb-5" style={CN}>
              产品
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {footerLinks['产品'].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/65 no-underline hover:text-white transition-colors"
                    style={{ ...CN, fontSize: '0.92rem' }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 公司 */}
          <div>
            <h4 className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-white/40 mb-5" style={CN}>
              公司
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {footerLinks['公司'].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/65 no-underline hover:text-white transition-colors"
                    style={{ ...CN, fontSize: '0.92rem' }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-white/40 mb-5" style={CN}>
              联系方式
            </h4>
            <div className="flex flex-col gap-4">
              {contactItems.map(({ icon, text, href }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-brand-red shrink-0 mt-0.5">{icon}</span>
                  {href ? (
                    <a href={href} className="text-white/65 no-underline hover:text-white transition-colors"
                      style={{ ...CN, fontSize: '0.92rem' }}>{text}</a>
                  ) : (
                    <span className="text-white/65" style={{ ...CN, fontSize: '0.92rem' }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-white/30" style={{ ...CN, fontSize: '0.8rem' }}>
            © 2025 ROARLAND 若尔岚德 · All Rights Reserved
          </span>
          <div className="flex gap-6">
            {['隐私政策', '服务条款'].map(t => (
              <a key={t} href="#" className="text-white/30 no-underline hover:text-white/60 transition-colors"
                style={{ ...CN, fontSize: '0.8rem' }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
