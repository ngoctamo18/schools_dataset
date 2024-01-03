export type Province = {
    provinceId: number;
    provinceName: string;
};

export type ProvinceList = {
    [provinceId: string]: Province;
}

export type District = {
    districtId: number;
    districtName: string;
    provinceId: number;
    provinceName: string;
};

export type DistrictList = {
    [districtId: string]: District;
}

export type School = {
    schoolId: number;
    schoolName: string;
    schoolLevel: string;
    districtId: number;
    districtName: string;
    provinceId: number;
    provinceName: string;
};

export type SchoolList = {
    [schoolId: string]: School;
}

export const schoolLevelName = {
    2: 'THCS',
    3: 'THPT',
};