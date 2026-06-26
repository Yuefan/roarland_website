const CN = { fontFamily: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif' }

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="2" stroke="#CC0000" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="4" fill="#CC0000"/>
        <line x1="14" y1="3" x2="14" y2="8" stroke="#CC0000" strokeWidth="1.5"/>
        <line x1="14" y1="20" x2="14" y2="25" stroke="#CC0000" strokeWidth="1.5"/>
        <line x1="3" y1="14" x2="8" y2="14" stroke="#CC0000" strokeWidth="1.5"/>
        <line x1="20" y1="14" x2="25" y2="14" stroke="#CC0000" strokeWidth="1.5"/>
      </svg>
    ),
    title: '边缘 AI 推理',
    desc: '设备本地运行轻量神经网络，无需云端依赖，毫秒级响应',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="11" r="5" stroke="#CC0000" strokeWidth="1.5"/>
        <path d="M7 24c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="square"/>
        <path d="M20 8c1.5 1 2.5 2.8 2.5 4.8" stroke="#CC0000" strokeWidth="1.2" strokeLinecap="square" opacity=".6"/>
        <path d="M8 8c-1.5 1-2.5 2.8-2.5 4.8" stroke="#CC0000" strokeWidth="1.2" strokeLinecap="square" opacity=".6"/>
      </svg>
    ),
    title: '多模态感知',
    desc: '压力感知 + 温度感知 + 视觉识别，构建对环境与用户的精准理解',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 20 Q14 6 23 20" stroke="#CC0000" strokeWidth="1.5" fill="none"/>
        <circle cx="14" cy="14" r="2.5" fill="#CC0000"/>
        <path d="M9 23 L14 17 L19 23" stroke="#CC0000" strokeWidth="1.2" fill="none" strokeLinecap="square"/>
      </svg>
    ),
    title: '自适应学习',
    desc: '持续学习用户行为偏好，随使用时间增长不断优化决策，越用越精准',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="11" y="11" width="6" height="6" stroke="#CC0000" strokeWidth="1.5"/>
        <line x1="14" y1="4" x2="14" y2="11" stroke="#CC0000" strokeWidth="1.2"/>
        <line x1="14" y1="17" x2="14" y2="24" stroke="#CC0000" strokeWidth="1.2"/>
        <line x1="4" y1="14" x2="11" y2="14" stroke="#CC0000" strokeWidth="1.2"/>
        <line x1="17" y1="14" x2="24" y2="14" stroke="#CC0000" strokeWidth="1.2"/>
        <circle cx="14" cy="4" r="2" stroke="#CC0000" strokeWidth="1.2"/>
        <circle cx="14" cy="24" r="2" stroke="#CC0000" strokeWidth="1.2"/>
        <circle cx="4" cy="14" r="2" stroke="#CC0000" strokeWidth="1.2"/>
        <circle cx="24" cy="14" r="2" stroke="#CC0000" strokeWidth="1.2"/>
      </svg>
    ),
    title: '智能家居互联',
    desc: '支持 Matter、Zigbee、Wi-Fi 6 等主流协议，与主流智能家居生态无缝接入',
  },
]

export default function FeatureBar() {
  return (
    <section className="bg-white border-b border-black/8">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group border border-black/10 bg-white p-6 transition-all duration-200 hover:border-brand-red hover:shadow-sm cursor-default"
            >
              {/* Icon */}
              <div className="mb-4">{icon}</div>

              {/* Title */}
              <h3
                className="text-[#0A0A0A] mb-2 font-semibold"
                style={{ ...CN, fontSize: '0.95rem' }}
              >
                {title}
              </h3>

              {/* Desc */}
              <p
                className="text-[#888] leading-relaxed"
                style={{ ...CN, fontSize: '0.78rem' }}
              >
                {desc}
              </p>

              {/* Bottom red bar on hover */}
              <div className="mt-4 h-[2px] w-0 bg-brand-red transition-all duration-300 group-hover:w-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
