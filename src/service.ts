import { z } from "zod";

const BaseServiceSchema = z.object({
	id: z.string(),
	name: z.object({
		en: z.string(),
		fr: z.string(),
	}),
	description: z.object({
		en: z.string(),
		fr: z.string(),
	}),
	website: z.object({
		en: z.string(),
		fr: z.string(),
	}),
	email: z.string().email().or(z.literal("")),
	hours: z.string(),
	address: z.object({
		street1: z.string(),
		street2: z.string(),
		city: z.string(),
		postalCode: z.string(),
		province: z.string(),
		country: z.string(),
	}),
	phoneNumbers: z
		.object({
			phone: z.string(),
			name: z.string(),
			type: z.string(),
		})
		.array(),
	partner: z.string(),
});

export const ServiceSchema = z.object({
	...BaseServiceSchema.shape,
	recommendations: BaseServiceSchema.array().optional(),
});

export type Service = z.infer<typeof ServiceSchema>;
