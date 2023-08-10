export type Meteor = {
  name: string;
  id: string;
  nametype: string;
  recclass: string;
  mass: string;
  fall: string;
  year: string;
  reclat: string;
  reclong: string;
  geolocation: {
    type: number;
    coordinates: [number, number];
  };
};

export type InputType = {
  name: string;
  value: string;
  onChange: (e: string) => void;
};

export type TableMeteor = {
  name: string;
  class: string;
  mass: string;
  year: string;
  lat: string;
  lng: string;
};

export type TableType = {
  year: string;
  mass: string;
  excludedFields?: string[];
};

export type TextType = {
  text: string;
};

export type AutocompleteType = {
  filterOptions: string[];
  onChange: (e: string) => void;
};

export type ButtonType = {
  buttonText?: string | boolean;
  buttonAction: (val: string) => void;
  buttonActionValue?: string;
};
