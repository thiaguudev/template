export type Locale = "pt" | "en" | "es";

export type Address = {
  city: string;
  country: string;
  line1: string;
  postal_code: string;
  state: string;
};

export type ShippingInfo = {
  address: Address;
  name: string;
};

export type StripeCustomerType = {
  email: string;
  name: string;
  shipping: ShippingInfo;
  address: Address;
};

export type SubscriptionPlan = {
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    monthly: number,
    yearly: number
  }
  stripeIds: {
    monthly?: string | null,
    yearly?: string | null
  }
}

export type UserSubscriptionPlan = {
  stripePriceId: string
  interval: string;
}

export type MarketingConfig = {
  mainNav: {
    title: string;
    href: string;
    disabled?: boolean
  }[]
}

export type Survey = {
  id: string;
  name: string;
  type: "nps" | "ces" | "csat" | "custom";
  description?: string;
  status: "published" | "unpublished";
}