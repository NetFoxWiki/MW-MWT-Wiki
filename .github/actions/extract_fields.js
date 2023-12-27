const fs = require('fs');
const path = require('path');

async function extractFields() {
  try {
    const body = process.env.ISSUE_BODY;

    const issueLabels = JSON.parse(process.env.ISSUE_LABELS);

    const nameRegex = /###\s*名称\s*([\s\S]*?)\s*###/;
    const nameMatch = body.match(nameRegex);
    const name = nameMatch ? nameMatch[1].trim() : '';

    const whyRegex = /###\s*原因\s*([\s\S]*?)\s*###/;
    const whyMatch = body.match(whyRegex);
    const why = whyMatch ? whyMatch[1].trim() : '';

    const styleRegex = /###\s*QQ/VX/...\s*([\s\S]*?)\s*###/;
    const styleMatch = body.match(styleRegex);
    const style = styleMatch ? styleMatch[1].trim() : '';


    let jsonFilePath;
    for (const label of issueLabels) {
      const labelName = label.name;
      if (labelName === 'MWPZ') {
        jsonFilePath = path.join(__dirname, '../../docs/.vuepress/works_json/mw_pz.json');
        break;
      } else {
        console.log('Labels not need');
        process.exit(0);
      }
    }

    // 格式化作品json文件
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

    // 创建新的元素
    const newElement = {
      id: jsonData.length + 1,
      name,
      why,
      style,
    };

    // 追加新元素到列表
    jsonData.push(newElement);

    // 将更新后的数据写入 JSON 文件
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

    console.log('Data appended successfully to JSON file!');
  } catch (error) {
    console.error('Error appending data to JSON file:', error);
    process.exit(1);
  }
}

extractFields();
