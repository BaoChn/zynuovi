import React from "react";

function App() {
	const brandPoints = [
		{
			title: "品牌定位",
			desc: "ZYNUOVI 以婚纱礼服为核心，强调浪漫、优雅与现代质感，塑造更具辨识度的轻奢礼服品牌形象。",
		},
		{
			title: "视觉气质",
			desc: "整体风格偏高级、柔和、时尚，适合用于品牌官网首页、系列展示页、招商介绍与品牌名片页。",
		},
		{
			title: "应用方向",
			desc: "可覆盖主婚纱、轻婚纱、敬酒服、晚礼服、宴会礼服与定制礼服等多种女性仪式穿搭场景。",
		},
	];

	const keywords = ["婚纱礼服", "轻奢优雅", "仪式感穿搭", "高级定制", "品牌官网"];

	const categories = [
		"主婚纱系列",
		"轻婚纱系列",
		"敬酒服系列",
		"晚礼服系列",
		"宴会礼服",
		"定制服务",
	];

	return (
		<div style={styles.page}>
			<div style={styles.bgGlowTopLeft} />
			<div style={styles.bgGlowRight} />

			<section style={styles.heroSection}>
				<div style={styles.heroGrid}>
					<div>
						<div style={styles.badge}>ZYNUOVI · BRIDAL & EVENING DRESS</div>
						<h1 style={styles.heroTitle}>
							为 <span style={styles.italic}>ZYNUOVI</span>
							<br />
							打造更有高级感的
							<span style={styles.subTitleBlock}>婚纱礼服品牌介绍页</span>
						</h1>
						<p style={styles.heroDesc}>
							面向婚纱礼服与女性仪式感穿搭场景，建立一个兼顾品牌气质、基础信息展示与后续系列扩展的落地页框架。
							适合作为品牌首页初版、婚纱礼服介绍页或对外展示入口。
						</p>

						<div style={styles.tagWrap}>
							{keywords.map((item) => (
								<span key={item} style={styles.tag}>
									{item}
								</span>
							))}
						</div>

						<div style={styles.buttonRow}>
							<a href="#about" style={{ ...styles.button, ...styles.primaryButton }}>
								了解品牌
							</a>
							<a href="#series" style={{ ...styles.button, ...styles.secondaryButton }}>
								查看系列
							</a>
						</div>
					</div>

					<div style={styles.cardShell}>
						<div style={styles.cardGradient}>
							<div style={styles.cardInner}>
								<div style={styles.cardLabel}>Brand Snapshot</div>
								<div style={styles.cardBrand}>ZYNUOVI</div>
								<div style={styles.cardLine} />
								<div style={styles.infoList}>
									<div style={styles.infoRow}>
										<span>品牌方向</span>
										<strong>婚纱礼服 / 晚宴礼服</strong>
									</div>
									<div style={styles.infoRow}>
										<span>展示用途</span>
										<strong>品牌首页 / 系列介绍页</strong>
									</div>
									<div style={styles.infoRow}>
										<span>页面风格</span>
										<strong>浪漫轻奢 / 现代优雅</strong>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section style={styles.section}>
				<div style={styles.threeColGrid}>
					{brandPoints.map((item, index) => (
						<div key={item.title} style={styles.featureCard}>
							<div style={styles.featureIndex}>0{index + 1}</div>
							<h3 style={styles.featureTitle}>{item.title}</h3>
							<p style={styles.featureDesc}>{item.desc}</p>
						</div>
					))}
				</div>
			</section>

			<section id="about" style={styles.sectionLarge}>
				<div style={styles.aboutGrid}>
					<div>
						<div style={styles.sectionLabel}>About The Brand</div>
						<h2 style={styles.sectionTitle}>
							一个适合婚纱礼服品牌持续延展的
							<span style={styles.subTitleBlock}>基础介绍型首页</span>
						</h2>
						<p style={styles.sectionDesc}>
							当前页面以“婚纱礼服品牌展示”为目标，优先建立品牌名称、风格定位、核心品类与视觉调性的清晰表达。
							后续可继续扩展系列展示、Lookbook、门店信息、预约试纱、联系表单与品牌故事模块。
						</p>
					</div>

					<div id="series" style={styles.categoryGrid}>
						{categories.map((item) => (
							<div key={item} style={styles.categoryCard}>
								<div style={styles.categoryLabel}>CATEGORY</div>
								<div style={styles.categoryBottom}>
									<h3 style={styles.categoryTitle}>{item}</h3>
									<div style={styles.categoryBadge}>Z</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section style={styles.footerSection}>
				<div style={styles.footerCard}>
					<div>
						<div style={styles.footerLabel}>Brand Footer</div>
						<h2 style={styles.footerTitle}>ZYNUOVI</h2>
						<p style={styles.footerDesc}>
							ZYNUOVI 婚纱礼服基础品牌介绍页示意。可作为品牌官网首页雏形，也可进一步升级为带系列展示、预约试纱与联系表单的完整官网页面。
						</p>
					</div>
					<div style={styles.footerMeta}>
						<div>品牌关键词：婚纱礼服 / 晚礼服 / 仪式感穿搭</div>
						<div>页面用途：品牌展示 / 系列介绍 / 初版官网</div>
					</div>
				</div>
			</section>
		</div>
	);
}

const styles: Record<string, React.CSSProperties> = {
	page: {
		minHeight: "100vh",
		background: "linear-gradient(180deg, #fcf8f5 0%, #f8f1eb 100%)",
		color: "#1f1f1f",
		fontFamily:
			'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
		position: "relative",
		overflow: "hidden",
	},
	bgGlowTopLeft: {
		position: "absolute",
		top: "-80px",
		left: "-80px",
		width: "280px",
		height: "280px",
		borderRadius: "999px",
		background: "rgba(255,255,255,0.9)",
		filter: "blur(60px)",
	},
	bgGlowRight: {
		position: "absolute",
		top: "80px",
		right: "-40px",
		width: "320px",
		height: "320px",
		borderRadius: "999px",
		background: "rgba(231,211,202,0.7)",
		filter: "blur(80px)",
	},
	heroSection: {
		maxWidth: "1200px",
		margin: "0 auto",
		padding: "80px 24px 40px",
		position: "relative",
		zIndex: 1,
	},
	heroGrid: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
		gap: "48px",
		alignItems: "center",
	},
	badge: {
		display: "inline-flex",
		alignItems: "center",
		padding: "10px 16px",
		borderRadius: "999px",
		border: "1px solid rgba(0,0,0,0.08)",
		background: "rgba(255,255,255,0.72)",
		fontSize: "13px",
		letterSpacing: "0.18em",
		color: "#555",
		backdropFilter: "blur(12px)",
	},
	heroTitle: {
		fontSize: "clamp(42px, 8vw, 72px)",
		lineHeight: 1.08,
		fontWeight: 600,
		letterSpacing: "-0.03em",
		margin: "24px 0 0",
	},
	italic: {
		fontStyle: "italic",
	},
	subTitleBlock: {
		display: "block",
		color: "#6b6b6b",
	},
	heroDesc: {
		marginTop: "24px",
		maxWidth: "720px",
		fontSize: "18px",
		lineHeight: 1.9,
		color: "#626262",
	},
	tagWrap: {
		display: "flex",
		flexWrap: "wrap",
		gap: "12px",
		marginTop: "28px",
	},
	tag: {
		padding: "10px 16px",
		borderRadius: "999px",
		border: "1px solid rgba(0,0,0,0.08)",
		background: "rgba(255,255,255,0.85)",
		fontSize: "14px",
		color: "#555",
		boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
	},
	buttonRow: {
		display: "flex",
		flexWrap: "wrap",
		gap: "16px",
		marginTop: "36px",
	},
	button: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "14px 24px",
		borderRadius: "999px",
		fontSize: "14px",
		fontWeight: 600,
		textDecoration: "none",
		transition: "all 0.2s ease",
	},
	primaryButton: {
		background: "#1f1f1f",
		color: "#fff",
		boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
	},
	secondaryButton: {
		background: "rgba(255,255,255,0.85)",
		color: "#1f1f1f",
		border: "1px solid rgba(0,0,0,0.08)",
	},
	cardShell: {
		borderRadius: "32px",
		padding: "16px",
		background: "rgba(255,255,255,0.65)",
		border: "1px solid rgba(255,255,255,0.7)",
		boxShadow: "0 24px 60px rgba(0,0,0,0.08)",
		backdropFilter: "blur(16px)",
	},
	cardGradient: {
		borderRadius: "26px",
		padding: "28px",
		background: "linear-gradient(135deg, #f1e6de 0%, #fbf7f4 55%, #e5d2c8 100%)",
	},
	cardInner: {
		borderRadius: "24px",
		padding: "28px",
		background: "rgba(255,255,255,0.68)",
		border: "1px solid rgba(255,255,255,0.72)",
		boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
		backdropFilter: "blur(8px)",
	},
	cardLabel: {
		fontSize: "12px",
		letterSpacing: "0.35em",
		textTransform: "uppercase",
		color: "#888",
	},
	cardBrand: {
		fontSize: "40px",
		fontWeight: 600,
		letterSpacing: "0.16em",
		marginTop: "16px",
	},
	cardLine: {
		height: "1px",
		width: "100%",
		background: "rgba(0,0,0,0.08)",
		marginTop: "12px",
	},
	infoList: {
		marginTop: "24px",
		display: "flex",
		flexDirection: "column",
		gap: "16px",
	},
	infoRow: {
		display: "flex",
		justifyContent: "space-between",
		gap: "16px",
		paddingBottom: "12px",
		borderBottom: "1px solid rgba(0,0,0,0.05)",
		fontSize: "14px",
		color: "#5f5f5f",
	},
	section: {
		maxWidth: "1200px",
		margin: "0 auto",
		padding: "12px 24px 0",
		position: "relative",
		zIndex: 1,
	},
	sectionLarge: {
		maxWidth: "1200px",
		margin: "0 auto",
		padding: "64px 24px 0",
		position: "relative",
		zIndex: 1,
	},
	threeColGrid: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
		gap: "24px",
	},
	featureCard: {
		borderRadius: "28px",
		padding: "28px",
		background: "rgba(255,255,255,0.82)",
		border: "1px solid rgba(0,0,0,0.04)",
		boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
	},
	featureIndex: {
		fontSize: "13px",
		letterSpacing: "0.2em",
		color: "#8b8b8b",
		marginBottom: "16px",
	},
	featureTitle: {
		fontSize: "24px",
		fontWeight: 600,
		margin: 0,
	},
	featureDesc: {
		marginTop: "12px",
		fontSize: "14px",
		lineHeight: 1.9,
		color: "#666",
	},
	aboutGrid: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
		gap: "40px",
		alignItems: "center",
	},
	sectionLabel: {
		fontSize: "12px",
		letterSpacing: "0.3em",
		textTransform: "uppercase",
		color: "#888",
	},
	sectionTitle: {
		fontSize: "clamp(30px, 5vw, 52px)",
		fontWeight: 600,
		lineHeight: 1.15,
		margin: "16px 0 0",
	},
	sectionDesc: {
		marginTop: "24px",
		fontSize: "17px",
		lineHeight: 1.9,
		color: "#666",
		maxWidth: "640px",
	},
	categoryGrid: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
		gap: "16px",
	},
	categoryCard: {
		borderRadius: "24px",
		padding: "24px",
		background: "rgba(255,255,255,0.9)",
		border: "1px solid rgba(0,0,0,0.05)",
		boxShadow: "0 10px 32px rgba(0,0,0,0.05)",
		minHeight: "150px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	categoryLabel: {
		fontSize: "12px",
		letterSpacing: "0.22em",
		color: "#aaa",
	},
	categoryBottom: {
		display: "flex",
		alignItems: "end",
		justifyContent: "space-between",
		gap: "12px",
		marginTop: "24px",
	},
	categoryTitle: {
		fontSize: "22px",
		fontWeight: 500,
		margin: 0,
	},
	categoryBadge: {
		width: "32px",
		height: "32px",
		borderRadius: "999px",
		border: "1px solid rgba(0,0,0,0.1)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "12px",
		color: "#666",
	},
	footerSection: {
		maxWidth: "1200px",
		margin: "0 auto",
		padding: "24px 24px 80px",
		position: "relative",
		zIndex: 1,
	},
	footerCard: {
		borderRadius: "32px",
		padding: "40px",
		background: "#1d1d1d",
		color: "#fff",
		boxShadow: "0 24px 60px rgba(0,0,0,0.16)",
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
		gap: "32px",
		alignItems: "end",
	},
	footerLabel: {
		fontSize: "12px",
		letterSpacing: "0.3em",
		textTransform: "uppercase",
		color: "rgba(255,255,255,0.6)",
	},
	footerTitle: {
		fontSize: "clamp(34px, 5vw, 52px)",
		fontWeight: 600,
		margin: "16px 0 0",
	},
	footerDesc: {
		marginTop: "18px",
		fontSize: "16px",
		lineHeight: 1.9,
		color: "rgba(255,255,255,0.75)",
		maxWidth: "720px",
	},
	footerMeta: {
		fontSize: "14px",
		lineHeight: 2,
		color: "rgba(255,255,255,0.72)",
	},
};

export default App;
