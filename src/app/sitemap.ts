import { BASE_URL } from "@/lib/base-url";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${BASE_URL}/en-US`,
			lastModified: new Date(),
			alternates: {
				languages: {
					"en-US": `${BASE_URL}/en-US`,
					"pt-BR": `${BASE_URL}/pt-BR`,
				},
			},
		},
		{
			url: `${BASE_URL}/pt-BR`,
			lastModified: new Date(),
			alternates: {
				languages: {
					"en-US": `${BASE_URL}/en-US`,
					"pt-BR": `${BASE_URL}/pt-BR`,
				},
			},
		},
	];
}
