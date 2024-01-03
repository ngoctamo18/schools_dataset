import fs from 'fs';
import path from 'path';
import { DistrictList, ProvinceList, SchoolList, schoolLevelName } from './schemas';


// Generate docs/PROVINCES.md, docs/DISTRICTS.md, docs/SCHOOLS.md
function generateDocs() {
    const provinces: ProvinceList = require(path.join(__dirname, '../data/provinces.json'));
    const districts: DistrictList = require(path.join(__dirname, '../data/districts.json'));
    const schools: SchoolList = require(path.join(__dirname, '../data/schools.json'));

    let provincesMd = `# Danh sách ${Object.keys(provinces).length} tỉnh / thành phố\n\n`;
    provincesMd += '| ID | Tỉnh |\n';
    provincesMd += '| -- | -------- |\n';
    provincesMd += Object.values(provinces).map(p => `| ${p.provinceId} | ${p.provinceName} |`).join('\n');

    let districtsMd = `# Danh sách ${Object.keys(districts).length} quận / huyện\n\n`;
    districtsMd += '| ID | Tỉnh | Quận / huyện |\n';
    districtsMd += '| -- | ---- | ------------- |\n';
    districtsMd += Object.values(districts).map(d => `| ${d.districtId} | ${d.provinceName} | ${d.districtName} |`).join('\n');
    
    let schoolsMd = `# Danh sách ${Object.keys(schools).length} trường\n\n`;
    schoolsMd += '| ID | Tỉnh | Quận / huyện | Cấp | Tên |\n';
    schoolsMd += '| -- | ---- | ------------- | --- | --- |\n';
    schoolsMd += Object.values(schools).map(s => `| ${s.schoolId} | ${s.provinceName} | ${s.districtName} | ${schoolLevelName[s.schoolLevel]} | ${s.schoolName} |`).join('\n');

    fs.writeFileSync('./docs/PROVINCES.md', provincesMd);
    fs.writeFileSync('./docs/DISTRICTS.md', districtsMd);
    fs.writeFileSync('./docs/SCHOOLS.md', schoolsMd);

    fs.writeFileSync('./data/provinces.json', JSON.stringify(provinces, null, 4));
    fs.writeFileSync('./data/districts.json', JSON.stringify(districts, null, 4));
    fs.writeFileSync('./data/schools.json', JSON.stringify(schools, null, 4));
}

generateDocs();
