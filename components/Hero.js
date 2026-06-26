const CN = { fontFamily: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif' }

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[80px]"
      style={{
        backgroundImage: `url('/images/banner.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      {/* Dark gradient — heavy left (text area) → fades right (image visible) */}
      <div className="absolute inset-0" style={{
        background: [
          'linear-gradient(100deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.97) 45%, rgba(8,8,8,0.70) 62%, rgba(8,8,8,0.22) 100%)',
          'radial-gradient(ellipse at 74% 52%, rgba(204,0,0,0.13) 0%, transparent 50%)',
        ].join(', '),
      }} />

      {/* Red brand stripe under navbar */}
      <div className="absolute left-0 right-0 top-[80px] h-[3px] bg-brand-red z-10" />

      {/* Left content */}
      <div className="max-w-7xl mx-auto px-8 py-20 w-full relative z-10">
        <div className="max-w-[580px]">

          {/* Badge */}
          <p className="font-mono text-[0.7rem] tracking-[0.22em] text-brand-red mb-7 uppercase">
            AI Home Intelligence
          </p>

          {/* Headline */}
          <h1
            className="font-display font-black text-white leading-[1.08] mb-7"
            style={{ fontSize: 'clamp(3rem, 6vw, 6.2rem)', letterSpacing: '-0.02em' }}
          >
            让<span className="text-brand-red">AI</span><br />
            走进每个<br />
            家庭
          </h1>

          {/* Description */}
          <p className="text-white/55 leading-relaxed mb-10 max-w-[440px]"
            style={{ ...CN, fontSize: '0.97rem' }}>
            若尔岚德，致力于将先进人工智能融入日常家居场景，
            打造更智慧、更舒适、更自由的现代生活方式。
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#cases"
              className="bg-brand-red text-white px-8 py-3.5 text-sm font-bold tracking-wider uppercase no-underline hover:bg-brand-dark transition-colors">
              探索产品案例
            </a>
            <a href="#about"
              className="border border-white/25 text-white/75 px-8 py-3.5 text-sm tracking-wider uppercase no-underline hover:border-white/55 hover:text-white transition-all"
              style={CN}>
              了解更多
            </a>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      {/* <div className="absolute bottom-0 left-0 right-0 border-t border-white/8 bg-black/45 backdrop-blur-sm py-3 overflow-hidden z-10">
        <div className="marquee-track flex whitespace-nowrap">
          {[...Array(2)].map((_, rep) => (
            <span key={rep} className="flex shrink-0">
              {['智能按摩坐垫','割草机器人','AI Home Intelligence','边缘AI推理','自适应学习','家居智能化','SLAM导航','压力感知'].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-3 px-7 font-mono text-[0.68rem] tracking-[0.14em] text-white/30 uppercase">
                  {t}
                  <span className="text-brand-red text-[0.5rem]">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div> */}
    </section>
  )
}
