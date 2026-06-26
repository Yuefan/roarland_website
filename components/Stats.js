const CN = { fontFamily: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif' }

const stats = [
  { label: '技术积累（年）', num: '15', suffix: '+' },
  { label: '用户满意度',     num: '99', suffix: '%' },
  { label: '生产基地（m²）', num: '2300', suffix: '+' },
]

export default function Stats() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="max-w-4xl mx-auto px-8 text-center">

        {/* Label */}
        {/* <p className="text-brand-red text-sm tracking-widest mb-4" style={CN}>
          若尔岚德（ROARLAND）
        </p> */}

        {/* Heading */}
        <h2
          className="font-display font-black text-[#0A0A0A] leading-tight mb-5"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', letterSpacing: '-0.01em' }}
        >
          专注家居 AI 落地场景<br />
        </h2>

        {/* Description */}
        <p className="text-[#888] max-w-xl mx-auto mb-9 leading-relaxed"
          style={{ ...CN, fontSize: '0.95rem' }}>
          ROARLAND 是专注于家居 AI 落地的科技品牌。我们相信，真正好的科技不应停留在实验室，
          而应该出现在每一个普通人的生活空间里。
        </p>

        {/* CTA link */}
        <a href="#cases"
          className="inline-flex items-center gap-1.5 text-brand-red text-sm no-underline border-b border-brand-red pb-0.5 hover:gap-3 transition-all"
          style={CN}>
          了解更多 &nbsp;›
        </a>

        {/* Stats row — yotlive style, floating numbers */}
        <div className="mt-10 grid grid-cols-3 gap-0 border-t border-black/8 pt-8">
          {stats.map(({ label, num, suffix }, i) => (
            <div key={label} className={`px-8 ${i < stats.length - 1 ? 'border-r border-black/8' : ''}`}>
              <p className="text-[#bbb] text-sm mb-3" style={CN}>{label}</p>
              <p className="font-display font-black leading-none text-brand-red"
                style={{ fontSize: '4.2rem' }}>
                {num}
                <span style={{ fontSize: '2.4rem' }}>{suffix}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
