export type AdMenuMngResDto = {
    id: string;
    name: string;
    parent: string;
    module: string;
    useYnCd: string;
    useYn: string;
    url: string;
}

export type AdMenuMngReqDto = {
    id: string;
    url: string;
    icon: string;
    name: string;
    parentId: string;
    useYn: string;
    module: string;
    keyLang: string;
}