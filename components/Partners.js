import Image from 'next/image'

const CN = { fontFamily: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif' }

const partners = [
  {
    name: '上海交通大学',
    en: 'Shanghai Jiao Tong University',
    logo: '/images/partners/sjtu.png',
    isSvg: false,
  },
  {
    name: '上海尧乐科技',
    en: 'Shanghai Yaole Technology',
    logo: '/images/partners/yaole.png',
    isSvg: true,
  },
  {
    name: '上海离合科技',
    en: 'Shanghai Lihe Technology',
    logo: '/images/partners/lihe.png',
    isSvg: false,
  },
]

export default function Partners() {
  return (
    <section className="bg-[#F7F7F7] border-t border-black/8 py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-brand-red mb-4">
            // 合作单位
          </p>
          <h2
            className="font-display font-black text-[#0A0A0A] leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            合作<span className="text-brand-red">企业</span>
          </h2>
        </div>

        {/* Partner cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {partners.map(({ name, en, logo, isSvg }) => (
            <div key={name}
              className="bg-white border border-black/8 hover:border-brand-red/40 hover:shadow-sm transition-all duration-300 px-10 py-12 flex flex-col items-center text-center group">

              {/* Logo */}
              <div className="flex items-center justify-center mb-8" style={{ height: '80px' }}>
                {isSvg ? (
                  <img
                    src={logo}
                    alt={name}
                    style={{ maxHeight: '60px', width: 'auto', maxWidth: '200px' }}
                  />
                ) : (
                  <Image
                    src={logo}
                    alt={name}
                    width={200}
                    height={80}
                    className="object-contain"
                    style={{ maxHeight: '80px', width: 'auto' }}
                    unoptimized
                  />
                )}
              </div>

              {/* Divider */}
              <div className="h-px w-10 bg-brand-red/30 mb-6 group-hover:w-16 group-hover:bg-brand-red transition-all duration-300" />

              {/* Name */}
              <h3 className="text-[#0A0A0A] font-semibold mb-1" style={{ ...CN, fontSize: '1rem' }}>
                {name}
              </h3>
              <p className="font-mono text-[0.6rem] tracking-widest text-[#aaa] uppercase">
                {en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
