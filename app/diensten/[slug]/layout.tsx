import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

const siteUrl = "https://www.autosleutelrivierenland.nl";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    alternates: {
      canonical: `${siteUrl}/diensten/${slug}`,
    },
    openGraph: {
      url: `${siteUrl}/diensten/${slug}`,
      siteName: "Autosleutel Rivierenland",
      locale: "nl_NL",
      type: "website",
    },
  };
}

export default function ServiceSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
