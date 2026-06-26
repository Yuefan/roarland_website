const CN = { fontFamily: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif' }

const contactItems = [
  {
    label: 'EMAIL',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    value: 'hi@roarland.net',
    href: 'mailto:hi@roarland.net',
  },
  {
    label: 'PHONE',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l1.06-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    value: '+86 18918119160',
    href: 'tel:+8618918119160',
  },
  {
    label: 'ADDRESS',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    value: '海市祁连山路111弄18号楼109室',
    href: null,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0A0A0A] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-brand-red mb-5">
          // 联系方式
        </p>
        <h2
          className="font-display font-black text-white leading-tight mb-14"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
        >
          随时与我们<span className="text-brand-red">取得联系</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
          {contactItems.map(({ label, icon, value, href }) => (
            <div key={label} className="bg-[#0A0A0A] p-10 group hover:bg-[#111] transition-colors">
              <div className="w-12 h-12 border border-brand-red/30 flex items-center justify-center text-brand-red mb-6 group-hover:border-brand-red/60 transition-colors">
                {icon}
              </div>
              <p className="font-mono text-[0.65rem] tracking-[0.2em] text-white/30 mb-3 uppercase">
                {label}
              </p>
              {href ? (
                <a href={href}
                  className="text-white no-underline hover:text-brand-red transition-colors"
                  style={{ ...CN, fontSize: '1.05rem', fontWeight: 500 }}>
                  {value}
                </a>
              ) : (
                <p className="text-white" style={{ ...CN, fontSize: '1.05rem', fontWeight: 500 }}>
                  {value}
                </p>
              )}
              <div className="mt-6 h-[2px] w-0 bg-brand-red group-hover:w-10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
