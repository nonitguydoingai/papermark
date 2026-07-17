export type ResolvedPublicLinkMeta = {
  enableCustomMetatag: boolean;
  metaTitle: string | null;
  metaDescription: string | null;
  metaImage: string | null;
  metaFavicon: string;
};

type LinkMetaInput = {
  enableCustomMetatag: boolean;
  metaTitle: string | null;
  metaDescription: string | null;
  metaImage: string | null;
  metaFavicon: string | null;
};

type BrandLike = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaImage?: string | null;
  metaFavicon?: string | null;
} | null;

export function resolvePublicLinkMeta({
  link,
  teamBrand,
  dataroomBrand,
  defaultTitle,
}: {
  link: LinkMetaInput;
  teamBrand?: BrandLike;
  dataroomBrand?: BrandLike;
  defaultTitle?: string;
}): ResolvedPublicLinkMeta {
  if (link.enableCustomMetatag) {
    return {
      enableCustomMetatag: true,
      metaTitle: link.metaTitle ?? defaultTitle ?? null,
      metaDescription: link.metaDescription ?? null,
      metaImage: link.metaImage ?? null,
      metaFavicon: link.metaFavicon ?? "/favicon.ico",
    };
  }

  const brand = dataroomBrand ?? teamBrand ?? null;

  return {
    enableCustomMetatag: false,
    metaTitle: brand?.metaTitle ?? defaultTitle ?? null,
    metaDescription: brand?.metaDescription ?? null,
    metaImage: brand?.metaImage ?? null,
    metaFavicon: brand?.metaFavicon ?? "/favicon.ico",
  };
}
