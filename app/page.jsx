import mapImage from "../assets/map-ai.png";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=85",
    alt: "干净的小狗看向镜头",
    title: "基础洁净洗护",
    body: "温和沐浴、吹干梳毛、耳道清洁、指甲修剪和脚底毛护理。",
    price: "￥88 起",
  },
  {
    image:
      "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=900&q=85",
    alt: "宠物美容后的狗狗",
    title: "造型修剪",
    body: "犬种标准造型、日常清爽修剪、局部精修和毛结处理。",
    price: "￥168 起",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=900&q=85",
    alt: "猫咪安静地休息",
    title: "猫咪低压护理",
    body: "独立安静区域、低噪吹干、去浮毛、护爪和应激观察。",
    price: "￥128 起",
  },
];

const steps = [
  ["01", "皮毛与情绪评估", "记录毛结、皮肤泛红、耳道、指甲和宠物紧张程度。"],
  ["02", "定制洗护方案", "根据毛发和皮肤状态选择沐浴、护毛或局部护理产品。"],
  ["03", "可视化护理反馈", "关键节点拍照记录，接宠时说明护理结果和居家建议。"],
  ["04", "复查提醒", "对皮肤敏感、掉毛明显或毛结严重的宠物提供复护建议。"],
];

const plans = [
  {
    title: "轻洁套餐",
    desc: "适合短毛、日常清洁。",
    price: "￥88",
    items: ["基础沐浴吹干", "耳道与眼周清洁", "指甲与脚底毛护理"],
  },
  {
    title: "精护套餐",
    desc: "适合中长毛、换季掉毛。",
    price: "￥168",
    featured: true,
    items: ["深层洁净洗护", "开结梳毛与去浮毛", "护毛素护理", "护理报告反馈"],
  },
  {
    title: "造型套餐",
    desc: "适合需要修剪和造型。",
    price: "￥268",
    items: ["全套洗护", "犬种或日常造型", "局部精修", "拍照留档"],
  },
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#">
            <span className="brand-mark" aria-hidden="true">
              ♥
            </span>
            <span>绒爪宠物洗护</span>
          </a>
          <div className="nav-links">
            <a href="#services">洗护服务</a>
            <a href="#process">护理流程</a>
            <a href="#plans">套餐价格</a>
            <a href="#booking">预约到店</a>
          </div>
          <a className="nav-action" href="#booking">
            立即预约
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">专业洗护 · 皮毛护理 · 安心托付</p>
            <h1>给每一只毛孩子干净、舒服、被认真照顾的一天</h1>
            <p>
              从基础洗澡到造型修剪、SPA 护毛和敏感肌护理，绒爪用透明流程和温和产品，让宠物洗护更安心。
            </p>
            <div className="hero-actions">
              <a className="button" href="#booking">
                预约洗护
              </a>
              <a className="button secondary" href="#services">
                查看服务
              </a>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="门店数据">
          <div className="stat">
            <strong>8年</strong>
            <span>宠物洗护经验</span>
          </div>
          <div className="stat">
            <strong>12k+</strong>
            <span>累计服务宠物</span>
          </div>
          <div className="stat">
            <strong>1v1</strong>
            <span>专属美容师跟进</span>
          </div>
          <div className="stat">
            <strong>30min</strong>
            <span>到店可视化反馈</span>
          </div>
        </section>

        <section className="section" id="services">
          <div className="wrap">
            <div className="section-head">
              <h2>常用洗护服务</h2>
              <p>
                按体型、毛量、皮肤状态和性格安排服务节奏，减少宠物紧张，也让主人清楚每一步在做什么。
              </p>
            </div>
            <div className="services">
              {services.map((service) => (
                <article className="service" key={service.title}>
                  <img src={service.image} alt={service.alt} />
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.body}</p>
                    <div className="service-meta">
                      <span>{service.price}</span>
                      <a href="#booking">预约</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="process">
          <div className="wrap process">
            <div className="process-photo" role="img" aria-label="宠物洗护护理场景" />
            <div>
              <div className="section-head">
                <h2>从进店到接回都清楚</h2>
              </div>
              <div className="steps">
                {steps.map(([num, title, body]) => (
                  <div className="step" key={num}>
                    <div className="step-num">{num}</div>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="plans">
          <div className="wrap">
            <div className="section-head">
              <h2>套餐价格</h2>
              <p>价格会根据体型、毛量和实际毛结情况调整，到店评估后再确认。</p>
            </div>
            <div className="plans">
              {plans.map((plan) => (
                <article className={`plan${plan.featured ? " featured" : ""}`} key={plan.title}>
                  <h3>{plan.title}</h3>
                  <p>{plan.desc}</p>
                  <div className="price">
                    {plan.price} <small>起</small>
                  </div>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className={`button${plan.featured ? "" : " secondary"}`} href="#booking">
                    选择套餐
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="wrap">
            <div className="section-head">
              <h2>干净不是唯一标准</h2>
              <p>洗护后的状态、毛发蓬松度、皮肤舒适度和宠物情绪，都是我们关注的服务结果。</p>
            </div>
            <div className="gallery">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85"
                alt="宠物美容师照顾小狗"
              />
              <img
                src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=700&q=85"
                alt="狗狗洗护后坐着"
              />
              <img
                src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=900&q=85"
                alt="几只狗狗在一起"
              />
            </div>
          </div>
        </section>

        <section className="section" id="booking">
          <div className="wrap booking">
            <aside className="contact-panel">
              <h2>预约到店洗护</h2>
              <p>提交信息后，门店会根据宠物体型、毛量和当前排班确认具体时间。</p>
              <ul className="contact-list">
                <li>
                  <strong>电话</strong>
                  <span>400-888-6626</span>
                </li>
                <li>
                  <strong>营业</strong>
                  <span>周一至周日 10:00-21:00</span>
                </li>
                <li>
                  <strong>地址</strong>
                  <span>城市花园路 88 号 1F 绒爪宠物洗护</span>
                </li>
                <li>
                  <strong>提示</strong>
                  <span>首次到店请携带疫苗记录，敏感肌请提前备注。</span>
                </li>
              </ul>
              <div className="store-location">
                <div className="store-location-body">
                  <strong>城市花园路门店</strong>
                  <p>临街 1F 门店，门口可短暂停车，下车后从玻璃门进入接待区。</p>
                  <a
                    className="route-link"
                    href="https://map.baidu.com/search/%E5%9F%8E%E5%B8%82%E8%8A%B1%E5%9B%AD%E8%B7%AF%2088%20%E5%8F%B7%201F%20%E7%BB%92%E7%88%AA%E5%AE%A0%E7%89%A9%E6%B4%97%E6%8A%A4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    查看路线
                  </a>
                </div>
                <img src={mapImage.src} alt="绒爪宠物洗护城市花园路门店位置地图" />
              </div>
            </aside>

            <form className="form">
              <div className="field">
                <label htmlFor="name">联系人</label>
                <input id="name" name="name" type="text" placeholder="请输入姓名" />
              </div>
              <div className="field">
                <label htmlFor="phone">手机号</label>
                <input id="phone" name="phone" type="tel" placeholder="请输入手机号" />
              </div>
              <div className="field">
                <label htmlFor="pet">宠物类型</label>
                <select id="pet" name="pet">
                  <option>小型犬</option>
                  <option>中大型犬</option>
                  <option>猫咪</option>
                  <option>其他宠物</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="service">服务项目</label>
                <select id="service" name="service">
                  <option>基础洁净洗护</option>
                  <option>精护套餐</option>
                  <option>造型修剪</option>
                  <option>猫咪低压护理</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="date">期望日期</label>
                <input id="date" name="date" type="date" />
              </div>
              <div className="field">
                <label htmlFor="time">期望时间</label>
                <select id="time" name="time">
                  <option>10:00-12:00</option>
                  <option>12:00-15:00</option>
                  <option>15:00-18:00</option>
                  <option>18:00-21:00</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="note">宠物情况</label>
                <textarea
                  id="note"
                  name="note"
                  placeholder="例如：毛结、皮肤敏感、怕吹风、需要修剪造型等"
                />
              </div>
              <div className="field full">
                <button className="button" type="button">
                  提交预约
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <strong>绒爪宠物洗护</strong>
          <span>温和洗护，认真照顾每一次托付。</span>
        </div>
      </footer>
    </>
  );
}
