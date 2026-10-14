export interface TimeRange {
  open: string;
  close: string;
}

export type GenderKey = "mens" | "womens";

export type GenderScope = GenderKey | "unisex";

export interface GenderTiming {
  key: GenderKey;
  label: string;
  range: TimeRange;
}

export const shopTimings: Record<GenderKey, GenderTiming> = {
  mens: {
    key: "mens",
    label: "Men's",
    range: { open: "7:30 AM", close: "9:30 PM" },
  },
  womens: {
    key: "womens",
    label: "Women's",
    range: { open: "10:30 AM", close: "8:00 PM" },
  },
};

export const timingsDaysLabel = "Everyday";

const GENDER_ORDER: GenderKey[] = ["mens", "womens"];

export function formatRange(range: TimeRange): string {
  return `${range.open} – ${range.close}`;
}

export function getTimingsForScope(scope: GenderScope): GenderTiming[] {
  if (scope === "unisex") return GENDER_ORDER.map((k) => shopTimings[k]);
  return [shopTimings[scope]];
}

function to24h(time: string): string {
  const m = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return time;
  let hour = Number(m[1]);
  const meridiem = m[3].toUpperCase();
  if (meridiem === "AM" && hour === 12) hour = 0;
  if (meridiem === "PM" && hour !== 12) hour += 12;
  return `${String(hour).padStart(2, "0")}:${m[2]}`;
}

export function schemaOpeningHours(): string[] {
  return GENDER_ORDER.map(
    (k) => `Mo-Su ${to24h(shopTimings[k].range.open)}-${to24h(shopTimings[k].range.close)}`
  );
}
