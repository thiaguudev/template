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

export type SubscriptionPlan = {}

export type UserSubscriptionPlan = {}

export type MarketingConfig = {
  mainNav: {
    title: string;
    href: string;
    disabled?: boolean
  }[]
}