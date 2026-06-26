import Image from 'next/image'

const CN = { fontFamily: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif' }

const cases = [
  {
    num: '01',
    tag: '家居舒适AI',
    title: '智能 AI\n室内应用',
    sub: 'Smart AI Hardware for Indoor Use',
    desc: 'ROARLAND 按摩坐垫搭载多维压力传感阵列，实时感知用户身体状态，通过边缘 AI 模型动态调节按摩模式与强度。无需手动设置，坐上即享，越用越懂你。',
    tags: ['压力自适应', '5 档智能模式', '热疗 + 振动', 'APP 控制', '语音唤醒'],
    img: '/images/case01.jpg',
    imgPos: 'left',
    imgFocus: 'center',
  },
  {
    num: '02',
    tag: '家用室外AI',
    title: 'AI 室外\n终端设备',
    sub: 'AI Outoor Robot',
    desc: '搭载 ROARLAND 自研 LIDAR + 视觉融合导航系统，机器人可自主规划最优割草路径，实时识别障碍物。雨水感应自动返航，一键 APP 预约，庭院始终完美。',
    tags: ['LIDAR 自主导航', '障碍物识别', '雨水感应', '自动返航充电', 'APP 预约'],
    img: '/images/case02.jpg',
    imgPos: 'right',
    imgFocus: 'center',
  },
]

export default function Cases() {
  return (
    <section id="cases">

      {/* ── Section header ── */}
      <div className="bg-white py-16" style={{ paddingLeft: '12.5%', paddingRight: '12.5%' }}>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-brand-red text-xs tracking-widest mb-3 uppercase" style={CN}>
              // 产品案例
            </p>
            <h2
              className="font-display font-black text-[#0A0A0A] leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.02em' }}
            >
              AI 落地<br />
              <span className="text-brand-red">两大核心场景</span>
            </h2>
          </div>
          <a href="#contact"
            className="inline-flex items-center gap-1.5 text-brand-red text-sm no-underline border-b border-brand-red pb-0.5 mb-2"
            style={CN}>
            了解更多 &nbsp;›
          </a>
        </div>
      </div>

      {/* ── Cases ── */}
      <div className="bg-white py-10 flex flex-col gap-6" style={{ paddingLeft: '12.5%', paddingRight: '12.5%' }}>
      {cases.map((c, idx) => (
        <div
          key={c.num}
          className={`flex flex-col overflow-hidden ${c.imgPos === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          style={{ height: '560px' }}
        >
          {/* Image panel */}
          <div className="relative md:w-[58%] min-h-[360px] md:min-h-0 overflow-hidden">
            <Image
              src={c.img}
              alt={c.title}
              fill
              className="object-cover"
              style={{ objectPosition: c.imgFocus }}
              unoptimized
            />
            {/* Red tint gradient from text-side */}
            <div className="absolute inset-0" style={{
              background: c.imgPos === 'left'
                ? 'linear-gradient(to right, rgba(8,8,8,0.10) 0%, transparent 40%)'
                : 'linear-gradient(to left, rgba(8,8,8,0.10) 0%, transparent 40%)',
            }} />
            {/* Large number watermark */}
            <div
              className="absolute font-display font-black text-white/8 leading-none select-none pointer-events-none"
              style={{
                fontSize: 'clamp(8rem,18vw,16rem)',
                bottom: '-0.15em',
                ...(c.imgPos === 'left' ? { right: '0.1em' } : { left: '0.1em' }),
              }}
            >
              {c.num}
            </div>
            {/* Top-left tag */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="bg-brand-red text-white text-[0.65rem] font-mono tracking-widest px-3 py-1.5 uppercase">
                CASE {c.num}
              </span>
              <span className="bg-black/50 backdrop-blur-sm text-white/80 text-[0.65rem] font-mono tracking-widest px-3 py-1.5 uppercase" style={CN}>
                {c.tag}
              </span>
            </div>
          </div>

          {/* Text panel */}
          <div className="bg-[#0A0A0A] md:w-[42%] flex flex-col justify-center px-12 py-16">

            {/* Sub label */}
            <p className="font-mono text-[0.65rem] tracking-[0.22em] text-brand-red/70 mb-5 uppercase">
              {c.sub}
            </p>

            {/* Title */}
            <h3
              className="font-display font-black text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)', letterSpacing: '-0.02em', whiteSpace: 'pre-line' }}
            >
              {c.title}
            </h3>

            {/* Red accent bar */}
            <div className="h-[3px] w-12 bg-brand-red mb-7" />

            {/* Description */}
            <p className="text-white/55 leading-relaxed mb-8"
              style={{ ...CN, fontSize: '0.92rem' }}>
              {c.desc}
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {c.tags.map(t => (
                <span key={t}
                  className="text-[0.68rem] px-3 py-1.5 border border-white/12 text-white/50 hover:border-brand-red hover:text-brand-red transition-colors"
                  style={CN}>
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact"
              className="inline-flex items-center gap-3 group no-underline w-fit">
              <span className="w-10 h-10 border border-brand-red flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all text-lg">
                →
              </span>
              <span className="text-white/60 text-sm group-hover:text-white transition-colors" style={CN}>
                了解更多
              </span>
            </a>
          </div>
        </div>
      ))}
      </div>

      {/* ── Teaser bar ── */}
      {/* <div className="bg-white border-t border-black/8 py-8 flex items-center justify-between" style={{ paddingLeft: '12.5%', paddingRight: '12.5%' }}>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-brand-red/40 flex items-center justify-center">
            <span className="text-brand-red text-xl font-bold">+</span>
          </div>
          <div>
            <p className="text-white/70 text-sm font-semibold" style={CN}>更多产品持续研发中</p>
            <p className="text-white/30 text-xs mt-0.5" style={CN}>敬请期待 · Coming Soon</p>
          </div>
        </div>
        <a href="#contact"
          className="bg-brand-red text-white px-6 py-2.5 text-xs font-bold tracking-widest uppercase no-underline hover:bg-brand-dark transition-colors">
          联系我们
        </a>
      </div> */}
    </section>
  )
}
