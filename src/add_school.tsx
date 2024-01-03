import { DistrictList } from "./schemas";
import path from "path";
import fs from "fs";

function addSchool(schoolName: string, schoolLevelName: string, districtId: number) {
  const districts: DistrictList = require(path.join(
    __dirname,
    "../data/districts.json"
  ));
  const schools = require(path.join(__dirname, "../data/schools.json"));
  const schoolLevel = schoolLevelName === "THCS" ? 2 : 3;

  const maxSchoolId = Math.max(...Object.keys(schools).map((s) => parseInt(s)));
  const newSchoolId = maxSchoolId + 1;
  const newSchool = {
    schoolId: newSchoolId,
    schoolName: schoolName,
    schoolLevel: schoolLevel,
    districtId: districtId,
    districtName: districts[districtId].districtName,
    provinceId: districts[districtId].provinceId,
    provinceName: districts[districtId].provinceName,
  };
  schools[newSchoolId] = newSchool;
  fs.writeFileSync("./data/schools.json", JSON.stringify(schools, null, 4));
}

// read input params from command line and call addSchool
const args = process.argv.slice(2);
const schoolName = args[0];
const schoolLevelName = args[1];
const districtId = parseInt(args[2]);
addSchool(schoolName, schoolLevelName, districtId);