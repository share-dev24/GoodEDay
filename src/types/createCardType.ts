// user location interface
export interface ILocation {
  latitude: number;
  longitude: number;
}

// FromContainer props interface
export interface IContainerProps {
  children: React.ReactNode;
}

// CreateFormCheckbox props interface
export interface ICreateFormCheckboxProps {
  pathTheme: string;
  stateThemes: string[];
  handleOnChangeTheme: (value: string) => void;
}

// CreateFormSelect props interface
export interface ICreateFormSelectProps {
  stateRange: string;
  handleOnChangeRange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// CreateFormInput props interface
export interface ICreateFormInputProps {
  stateNumbers: string;
  handleOnChangeNumbers: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// KakaoPlace interface
export interface IUserLocation {
  latitude: number;
  longitude: number;
}

export interface IFormData {
  themes: string[];
  range: string;
  numbers?: string;
  selectPlace?: IPlaceInfo | null;
}

interface IUserPlace {
  selectPlace: IPlaceInfo | null;
  handleOnClickPlace: (placeInfo: IPlaceInfo | null) => void;
}

export interface ILocationProps {
  userLocation: IUserLocation | undefined;
  formData: IFormData;
  userPlace: IUserPlace | null;
}

export interface ILocationResult {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

export interface IPlaceInfo {
  id: string;
  x: string;
  y: string;
  category_group_code: string;
  place_name: string;
  place_url: string;
}

// CreateFormBtn props interface
export interface ICreateFormBtnProps {
  resetData: () => void;
  formData: IFormData;
}
