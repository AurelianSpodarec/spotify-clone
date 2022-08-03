interface TypeArtistImages {
    height: number;
    width: number;
    url: string;
}

export interface TypeArtist {
    followers: { href: string, total: string | number };
    genres: [];
    href: string;
    id: number | string;
    images: Array<TypeArtistImages>;
    name: string;
    popularity: number;
    type: string;
    uri: string;
}