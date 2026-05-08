export default function ZynuoviLandingPage() {
  const brandPoints = [
    {
      title: '品牌定位',
      desc: 'ZYNUOVI 以婚纱礼服为核心，强调浪漫、优雅与现代质感，塑造更具辨识度的轻奢礼服品牌形象。',
    },
    {
      title: '视觉气质',
      desc: '整体风格偏高级、柔和、时尚，适合用于品牌官网首页、系列展示页、招商介绍与品牌名片页。',
    },
    {
      title: '应用方向',
      desc: '可覆盖主婚纱、轻婚纱、敬酒服、晚礼服、宴会礼服与定制礼服等多种女性仪式穿搭场景。',
    },
  ];

  const keywords = ['婚纱礼服', '轻奢优雅', '仪式感穿搭', '高级定制', '品牌官网'];

  const categories = [
    '主婚纱系列',
    '轻婚纱系列',
    '敬酒服系列',
    '晚礼服系列',
    '宴会礼服',
    '定制服务',
  ];

  return (
    <div className="min-h-screen bg-[#faf6f2] text-neutral-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.98),rgba(250,246,242,0.72),rgba(233,220,212,0.82))]" />
        <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-white/60 blur-3xl" />
        <div className="absolute top-16 right-0 h-80 w-80 rounded-full bg-[#e7d3ca]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm tracking-[0.18em] text-neutral-700 backdrop-blur">
                ZYNUOVI · BRIDAL & EVENING DRESS LANDING PAGE
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                为 <span className="italic">ZYNUOVI</span>
                <br />
                打造更有高级感的
                <span className="block text-neutral-600">婚纱礼服品牌介绍页</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-700 md:text-lg">
                面向婚纱礼服与女性仪式感穿搭场景，建立一个兼顾品牌气质、基础信息展示与后续系列扩展的落地页框架。
                适合作为品牌首页初版、婚纱礼服介绍页或对外展示入口。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {keywords.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white/85 px-4 py-2 text-sm text-neutral-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5">
                  了解品牌
                </button>
                <button className="rounded-full border border-black/10 bg-white/85 px-6 py-3 text-sm font-medium text-neutral-900 backdrop-blur transition hover:-translate-y-0.5">
                  查看系列
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/60 bg-white/70 p-4 shadow-2xl backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[#f1e6de] via-[#fbf7f4] to-[#e5d2c8] p-7 md:p-8">
                  <div className="rounded-[1.5rem] border border-white/60 bg-white/65 p-6 shadow-inner backdrop-blur">
                    <div className="text-xs uppercase tracking-[0.35em] text-neutral-500">Brand Snapshot</div>
                    <div className="mt-5 text-3xl font-semibold tracking-[0.18em] md:text-4xl">ZYNUOVI</div>
                    <div className="mt-3 h-px w-full bg-black/10" />
                    <dl className="mt-6 space-y-4 text-sm text-neutral-700">
                      <div className="flex justify-between gap-4 border-b border-black/5 pb-3">
                        <dt>品牌方向</dt>
                        <dd className="text-right font-medium text-neutral-900">婚纱礼服 / 晚宴礼服</dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-black/5 pb-3">
                        <dt>展示用途</dt>
                        <dd className="text-right font-medium text-neutral-900">品牌首页 / 系列介绍页</dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-black/5 pb-3">
                        <dt>页面风格</dt>
                        <dd className="text-right font-medium text-neutral-900">浪漫轻奢 / 现代优雅</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>适配模板</dt>
                        <dd className="text-right font-medium text-neutral-900">Vite React Template</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {brandPoints.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[1.8rem] border border-black/5 bg-white/85 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur"
            >
              <div className="mb-4 text-sm tracking-[0.2em] text-neutral-500">0{index + 1}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">About The Brand</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              一个适合婚纱礼服品牌持续延展的
              <span className="block text-neutral-600">基础介绍型首页</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600">
              当前页面以“婚纱礼服品牌展示”为目标，优先建立品牌名称、风格定位、核心品类与视觉调性的清晰表达。
              后续可继续扩展系列展示、Lookbook、门店信息、预约试纱、联系表单与品牌故事模块。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((item) => (
              <div
                key={item}
                className="group rounded-[1.6rem] border border-black/5 bg-white/90 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-sm tracking-[0.22em] text-neutral-400">CATEGORY</div>
                <div className="mt-8 flex items-end justify-between gap-4">
                  <h3 className="text-xl font-medium">{item}</h3>
                  <div className="rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-600">Z</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-neutral-900 p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-white/60">Brand Footer</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">ZYNUOVI</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                ZYNUOVI 婚纱礼服基础品牌介绍页示意。
                可作为品牌官网首页雏形，也可进一步升级为带系列展示、预约试纱与联系表单的完整官网页面。
              </p>
            </div>

            <div className="space-y-2 text-sm text-white/70">
              <div>品牌关键词：婚纱礼服 / 晚礼服 / 仪式感穿搭</div>
              <div>页面用途：品牌展示 / 系列介绍 / 初版官网</div>
              <div>推荐部署：Vite React Template + Cloudflare</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
