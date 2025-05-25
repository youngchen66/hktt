
const meanings = {
  1: "領導者，獨立、有企圖心，擅長開創。",
  2: "和平使者，重視和諧，適合合作。",
  3: "創意與表達，天生樂觀，善於社交。",
  4: "實幹家，穩重踏實，重紀律。",
  5: "冒險者，變動靈魂，喜歡自由。",
  6: "守護者，家庭導向，富責任感。",
  7: "智者型，內省深思，追求真理。",
  8: "成就者，財富與權力導向，具管理力。",
  9: "慈愛者，具奉獻精神，追求理想。",
  11: "靈性大師，直覺力強，啟發他人。",
  22: "實踐夢想的大師，靈性與行動兼具。",
  33: "愛與療癒的教師，靈魂導師。"
};

const personalYears = {
  1: "新開始之年，適合開創新事業或人生方向。",
  2: "等待與配合之年，建立人際關係與合作。",
  3: "創意發展之年，適合溝通、學習與表現。",
  4: "基礎建設之年，建立穩固基礎，踏實前行。",
  5: "變化與自由之年，可能會有搬遷、轉職或旅遊。",
  6: "責任與家庭之年，重視照顧、關係與承諾。",
  7: "內省與提升之年，適合修行、思考與學習。",
  8: "成就與豐收之年，工作與財務會有成果。",
  9: "收尾與放下之年，結束舊循環，準備新階段。",
  11: "靈感湧現的一年，適合創作、啟發與覺醒。",
  22: "築夢踏實的一年，可將理想轉化為現實。"
};

function calculate() {
  const date = document.getElementById("birthdate").value;
  if (!date) {
    alert("請先輸入生日！");
    return;
  }

  const parts = date.split("-");
  const numbers = parts.join("").split("").map(Number);
  let lifeTotal = numbers.reduce((a, b) => a + b, 0);
  while (![11, 22, 33].includes(lifeTotal) && lifeTotal > 9) {
    lifeTotal = lifeTotal.toString().split("").map(Number).reduce((a, b) => a + b);
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  const birthMonth = parseInt(parts[1]);
  const birthDay = parseInt(parts[2]);
  const flowNumbers = (currentYear.toString() + birthMonth + birthDay)
    .split("")
    .map(Number);
  let flowTotal = flowNumbers.reduce((a, b) => a + b, 0);
  while (![11, 22].includes(flowTotal) && flowTotal > 9) {
    flowTotal = flowTotal.toString().split("").map(Number).reduce((a, b) => a + b);
  }

  const result = document.getElementById("result");
  result.innerHTML = `
    <p>🌟 你的<strong>生命靈數</strong>是 <strong>${lifeTotal}</strong></p>
    <p>${meanings[lifeTotal]}</p>
    <hr/>
    <p>📅 <strong>${currentYear}</strong> 年的 <strong>流年數</strong>是 <strong>${flowTotal}</strong></p>
    <p>${personalYears[flowTotal]}</p>
  `;
}
