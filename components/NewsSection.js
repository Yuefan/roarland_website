const CN = { fontFamily: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif' }

const news = [
  {
    date: '2026 · 06 · 18',
    category: '融资动态',
    title: '若尔岚德完成 天使轮融资',
    desc: '本轮融资由国内顶级消费科技基金领投，融资资金将用于 AI 算法研发、供应链扩建及海外市场拓展。',
    tag: '公司动态',
  },
  {
    date: '2026 · 06 · 10',
    category: '产品发布',
    title: '智能 AI 按摩坐垫第一代正式亮相，新增热疗与语音唤醒',
    desc: '第一代产品搭载升级版边缘 AI 芯片，支持多维压力感知与个性化按摩方案自动生成，续航提升 40%。',
    tag: '产品发布',
  },
  {
    date: '2025 · 05 · 20',
    category: '获奖荣誉',
    title: 'ROARLAND 荣获 2024 年度中国消费电子创新奖',
    desc: '由中国电子信息行业联合会评选，ROARLAND AI 割草机器人凭借 SLAM 导航精度与续航表现荣获年度大奖。',
    tag: '荣誉奖项',
  },
]

const tagColors = {
  '公司动态': 'bg-blue-500/15 text-blue-400',
  '产品发布': 'bg-brand-red/15 text-brand-red',
  '荣誉奖项': 'bg-amber-500/15 text-amber-400',
}

export default function NewsSection() {
  return (
    <section className="bg-white border-t border-black/8 py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-brand-red mb-4">
              // 新闻动态
            </p>
            <h2
              className="font-display font-black text-[#0A0A0A] leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              最新<span className="text-brand-red">资讯</span>
            </h2>
          </div>
          <a href="#"
            className="text-brand-red text-sm no-underline border-b border-brand-red pb-0.5 hidden md:block"
            style={CN}>
            查看全部 ›
          </a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {news.map(({ date, category, title, desc, tag }, i) => (
            <a key={i} href="#"
              className="group block no-underline border border-black/8 hover:border-brand-red/40 transition-all duration-300 overflow-hidden">

              {/* Top color bar */}
              <div className="h-[3px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="p-8">
                {/* Meta row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[0.65rem] text-[#bbb] tracking-widest">{date}</span>
                  <span className={`text-[0.6rem] px-2.5 py-1 font-mono tracking-widest uppercase ${tagColors[tag]}`}
                    style={CN}>
                    {tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-[#0A0A0A] font-bold leading-snug mb-4 group-hover:text-brand-red transition-colors"
                  style={{ ...CN, fontSize: '1rem' }}>
                  {title}
                </h3>

                {/* Divider */}
                <div className="h-px bg-black/6 mb-4" />

                {/* Desc */}
                <p className="text-[#888] leading-relaxed"
                  style={{ ...CN, fontSize: '0.83rem' }}>
                  {desc}
                </p>

                {/* Read more */}
                <div className="mt-6 flex items-center gap-2 text-brand-red text-xs font-mono tracking-wider">
                  阅读更多
                  <span className="transform group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
