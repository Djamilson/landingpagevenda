interface IImage {
  id: string;
  url320x240: string;
  url60x50: string;
}

export default interface IProduct {
  data: {
    name: string;
    price: string;
    images: IImage[];
    description: string;
  };
  id: string;
}
