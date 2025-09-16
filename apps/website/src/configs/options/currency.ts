import type { SelectOption } from "@/components/ui";
import { SovereignCurrencyAsset } from "@/types/financial-assets";

export const currencyOptions: SelectOption<SovereignCurrencyAsset>[] = [
  { value: SovereignCurrencyAsset.USD, label: 'currency.usd' },
  { value: SovereignCurrencyAsset.CNY, label: 'currency.cny' },
  { value: SovereignCurrencyAsset.EUR, label: 'currency.eur' },
  { value: SovereignCurrencyAsset.JPY, label: 'currency.jpy' },
  { value: SovereignCurrencyAsset.GBP, label: 'currency.gbp' },
];