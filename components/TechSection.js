import Image from 'next/image'

const CN = { fontFamily: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif' }

const capabilities = [
  {
    img: '/images/tech/edge-ai.jpg',
    imgPos: 'center',
    name: '边缘 AI 推理',
    en: 'Edge AI Inference',
    desc: '设备本地运行轻量级神经网络，无需云端依赖，毫秒级响应。用户数据不离设备，隐私得到完整保护。',
  },
  {
    img: '/images/tech/multimodal.jpg',
    imgPos: 'center',
    name: '多模态感知融合',
    en: 'Multimodal Perception',
    desc: '压力传感 + 温度感知 + 视觉识别多维数据融合，构建对环境与用户状态的精准理解模型。',
  },
  {
    img: '/images/tech/adaptive.jpg',
    imgPos: 'center',
    name: '自适应学习算法',
    en: 'Adaptive Learning',
    desc: '持续学习用户行为偏好，随使用时间增长不断优化决策策略，体验越用越好，越用越精准。',
  },
  {
    img: '/images/tech/slam.jpg',
    imgPos: 'center top',
    name: 'SLAM 自主导航',
    en: 'SLAM Navigation',
    desc: '同步定位与地图构建技术，结合 LIDAR 点云，在动态家居环境中实现厘米级定位与路径规划。',
  },
  {
    img: '/images/tech/iot.jpg',
    imgPos: 'center',
    name: '智能家居互联',
    en: 'Smart Home IoT',
    desc: '支持 Matter、Zigbee、Wi-Fi 6 等主流协议，与主流智能家居生态无缝接入，统一 APP 管理。',
  },
  {
    img: '/images/tech/security.png',
    imgPos: 'center',
    name: '安全可信计算',
    en: 'Trusted Computing',
    desc: '硬件级安全芯片，端到端加密通信，通过 ISO 27001 安全认证，让每一台设备都值得信赖。',
  },
]

export default function TechSection() {
  return (
    <section id="tech" className="bg-[#0A0A0A]">

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-14">
        <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-brand-red mb-4">
          // 核心技术
        </p>
        <div className="flex items-end justify-between">
          <h2
            className="font-display font-black text-white leading-[0.93]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.02em' }}
          >
            AI智能引擎
          </h2>
          <p className="text-white/30 text-sm max-w-xs text-right hidden md:block" style={CN}>
            六大自研技术模块，构成 ROARLAND 智能产品的核心竞争力
          </p>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {capabilities.map(({ img, imgPos, name, en, desc }) => (
            <div
              key={name}
              className="group relative overflow-hidden"
              style={{ height: '380px' }}
            >
              {/* Photo */}
              <Image
                src={img}
                alt={name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: imgPos }}
                unoptimized
              />

              {/* Gradient overlay — always dark at bottom, reveal more on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.70) 40%, rgba(8,8,8,0.20) 70%, rgba(8,8,8,0.10) 100%)',
                }}
              />

              {/* Red top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Content pinned to bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">

                {/* EN label */}
                <p className="font-mono text-[0.6rem] tracking-[0.2em] text-brand-red/70 mb-2 uppercase">
                  {en}
                </p>

                {/* Title */}
                <h3
                  className="text-white font-bold mb-3"
                  style={{ ...CN, fontSize: '1.15rem', letterSpacing: '0.01em' }}
                >
                  {name}
                </h3>

                {/* Red accent */}
                <div className="h-[2px] w-8 bg-brand-red mb-4" />

                {/* Description — hidden until hover */}
                <p
                  className="text-white/55 text-[0.8rem] leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500"
                  style={CN}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
