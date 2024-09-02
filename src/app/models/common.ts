export class Common {}

export interface DefaultResponse {
  total: number;
  data: any[];
}

export interface PureOption {
  id: string; //GUID
  name: string; //名稱
}

export interface FavoriteLoc extends PureOption {
  nickname: string;
  address: string;
  category: PureOption[];
}
